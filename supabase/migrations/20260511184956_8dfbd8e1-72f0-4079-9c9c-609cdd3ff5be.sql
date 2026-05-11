
-- Add referral fields to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS referral_code TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS referred_by TEXT,
  ADD COLUMN IF NOT EXISTS payout_method TEXT,
  ADD COLUMN IF NOT EXISTS payout_details JSONB;

-- Generator: 8 chars, base32 without confusing chars
CREATE OR REPLACE FUNCTION public.generate_referral_code()
RETURNS TEXT
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  alphabet TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  code TEXT;
  exists_count INT;
  i INT;
BEGIN
  LOOP
    code := '';
    FOR i IN 1..8 LOOP
      code := code || substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1);
    END LOOP;
    code := 'NICS-' || code;
    SELECT count(*) INTO exists_count FROM public.profiles WHERE referral_code = code;
    EXIT WHEN exists_count = 0;
  END LOOP;
  RETURN code;
END;
$$;

-- Trigger to auto-assign code on profile insert
CREATE OR REPLACE FUNCTION public.assign_referral_code_trigger()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.referral_code IS NULL THEN
    NEW.referral_code := public.generate_referral_code();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS assign_referral_code ON public.profiles;
CREATE TRIGGER assign_referral_code
  BEFORE INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.assign_referral_code_trigger();

-- Backfill existing profiles
UPDATE public.profiles
SET referral_code = public.generate_referral_code()
WHERE referral_code IS NULL;

-- Funnel events
CREATE TABLE IF NOT EXISTS public.referral_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_user_id UUID NOT NULL,
  referrer_code TEXT NOT NULL,
  referred_user_id UUID,
  property_id TEXT,
  event_type TEXT NOT NULL CHECK (event_type IN ('click','signup','visit_requested','contact','deal_closed')),
  session_id TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referral_events_referrer ON public.referral_events(referrer_user_id);
CREATE INDEX IF NOT EXISTS idx_referral_events_type ON public.referral_events(event_type);
CREATE UNIQUE INDEX IF NOT EXISTS idx_referral_events_click_dedup
  ON public.referral_events(referrer_user_id, property_id, session_id, event_type)
  WHERE event_type = 'click' AND session_id IS NOT NULL;

ALTER TABLE public.referral_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert referral events"
  ON public.referral_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Owners can view own referral events"
  ON public.referral_events FOR SELECT
  TO authenticated
  USING (auth.uid() = referrer_user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update referral events"
  ON public.referral_events FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Rewards / payouts
CREATE TABLE IF NOT EXISTS public.referral_rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_user_id UUID NOT NULL,
  event_id UUID REFERENCES public.referral_events(id) ON DELETE SET NULL,
  property_id TEXT,
  amount_eur NUMERIC NOT NULL,
  reward_type TEXT NOT NULL CHECK (reward_type IN ('lead','commission','cashback')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','paid','rejected')),
  notes TEXT,
  approved_by UUID,
  approved_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,
  payout_reference TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referral_rewards_referrer ON public.referral_rewards(referrer_user_id);
CREATE INDEX IF NOT EXISTS idx_referral_rewards_status ON public.referral_rewards(status);

ALTER TABLE public.referral_rewards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can view own rewards"
  ON public.referral_rewards FOR SELECT
  TO authenticated
  USING (auth.uid() = referrer_user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert rewards"
  ON public.referral_rewards FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update rewards"
  ON public.referral_rewards FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_referral_rewards_updated_at
  BEFORE UPDATE ON public.referral_rewards
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Tier function based on closed deals
CREATE OR REPLACE FUNCTION public.get_referral_tier(_user_id UUID)
RETURNS TEXT
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT CASE
    WHEN cnt >= 6 THEN 'gold'
    WHEN cnt >= 3 THEN 'silver'
    ELSE 'bronze'
  END
  FROM (
    SELECT count(*) AS cnt
    FROM public.referral_events
    WHERE referrer_user_id = _user_id
      AND event_type = 'deal_closed'
  ) t;
$$;

-- Update handle_new_user to capture referred_by from auth metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, referred_by)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NULLIF(NEW.raw_user_meta_data->>'referred_by', '')
  );

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');

  RETURN NEW;
END;
$$;
