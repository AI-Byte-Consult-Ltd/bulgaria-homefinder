
-- Add multilingual columns to properties table for future user-submitted properties
ALTER TABLE public.properties
  ADD COLUMN IF NOT EXISTS title_bg TEXT,
  ADD COLUMN IF NOT EXISTS title_ru TEXT,
  ADD COLUMN IF NOT EXISTS title_de TEXT,
  ADD COLUMN IF NOT EXISTS title_it TEXT,
  ADD COLUMN IF NOT EXISTS location_bg TEXT,
  ADD COLUMN IF NOT EXISTS location_ru TEXT,
  ADD COLUMN IF NOT EXISTS location_de TEXT,
  ADD COLUMN IF NOT EXISTS location_it TEXT,
  ADD COLUMN IF NOT EXISTS description_bg TEXT,
  ADD COLUMN IF NOT EXISTS description_ru TEXT,
  ADD COLUMN IF NOT EXISTS description_de TEXT,
  ADD COLUMN IF NOT EXISTS description_it TEXT;

-- Create sell_submissions table for property owner submissions
CREATE TABLE public.sell_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT NOT NULL,
  price_expectation NUMERIC,
  property_type TEXT NOT NULL,
  area_sqm INTEGER,
  bedrooms INTEGER,
  description TEXT,
  images TEXT[],
  status TEXT NOT NULL DEFAULT 'pending'
);

ALTER TABLE public.sell_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit (public form)
CREATE POLICY "Anyone can submit sell request"
  ON public.sell_submissions
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view submissions
CREATE POLICY "Admins can view sell submissions"
  ON public.sell_submissions
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));
