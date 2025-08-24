-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access
CREATE POLICY "Admin users can manage admin accounts"
ON public.admin_users
FOR ALL
USING (auth.uid() IS NOT NULL);

-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  category TEXT NOT NULL,
  subcategory TEXT,
  image_urls TEXT[] DEFAULT '{}',
  is_popular BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Products are viewable by everyone"
ON public.products
FOR SELECT
USING (true);

CREATE POLICY "Admin users can manage products"
ON public.products
FOR ALL
USING (auth.uid() IS NOT NULL);

-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Create policies for categories
CREATE POLICY "Categories are viewable by everyone"
ON public.categories
FOR SELECT
USING (true);

CREATE POLICY "Admin users can manage categories"
ON public.categories
FOR ALL
USING (auth.uid() IS NOT NULL);

-- Insert default categories
INSERT INTO public.categories (name, slug, description) VALUES
('Cotton Sarees', 'cotton', 'Pure cotton handloom sarees'),
('Silk Blend', 'silk-blend', 'Premium silk blend sarees'),
('Chanderi', 'chanderi', 'Traditional Chanderi sarees'),
('Limited Edition', 'limited-edition', 'Exclusive limited edition collection');

-- Insert sample products
INSERT INTO public.products (name, description, price, original_price, category, image_urls, is_popular, is_featured) VALUES
('Golden Chanderi Silk Saree', 'Exquisite handloom patterns with traditional motifs', 3499.00, 4999.00, 'Chanderi', ARRAY['/src/assets/product-1.jpg'], true, true),
('Coral Pink Cotton Handloom', 'Elegant border design with premium cotton', 2299.00, 3299.00, 'Cotton Sarees', ARRAY['/src/assets/product-2.jpg'], true, false),
('Royal Blue Chanderi Cotton', 'Gold zari work with contemporary styling', 2899.00, 3999.00, 'Chanderi', ARRAY['/src/assets/product-1.jpg'], true, true),
('Mint Green Pure Cotton', 'Block print design with traditional appeal', 1999.00, 2799.00, 'Cotton Sarees', ARRAY['/src/assets/product-2.jpg'], false, false),
('Burgundy Silk Cotton Blend', 'Traditional motifs with modern elegance', 3199.00, 4499.00, 'Silk Blend', ARRAY['/src/assets/product-1.jpg'], true, false),
('Ivory Chanderi Delicate Gold', 'Premium thread work with luxury finish', 2799.00, 3899.00, 'Chanderi', ARRAY['/src/assets/product-2.jpg'], false, true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
  BEFORE UPDATE ON public.admin_users
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();