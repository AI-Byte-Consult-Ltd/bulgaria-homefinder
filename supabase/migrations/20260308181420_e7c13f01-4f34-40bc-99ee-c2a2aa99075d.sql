
ALTER TABLE public.properties
ADD COLUMN IF NOT EXISTS virtual_tour_url text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS virtual_tour_type text DEFAULT NULL;
