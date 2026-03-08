
CREATE TABLE public.document_generations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  document_type TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_details TEXT,
  additional_info TEXT,
  language TEXT DEFAULT 'en',
  generated_content TEXT NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  sent_at TIMESTAMP WITH TIME ZONE,
  admin_notes TEXT
);

ALTER TABLE public.document_generations ENABLE ROW LEVEL SECURITY;

-- Admins can view and manage all documents
CREATE POLICY "Admins can manage document generations"
  ON public.document_generations
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Anyone can insert (public form)
CREATE POLICY "Anyone can insert document generations"
  ON public.document_generations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
