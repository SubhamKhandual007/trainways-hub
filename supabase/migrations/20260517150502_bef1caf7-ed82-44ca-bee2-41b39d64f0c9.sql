
-- Roles enum + table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

-- Profiles
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Auto-create profile + default role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, phone)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone', '')
  );
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trains
CREATE TABLE public.trains (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  train_number TEXT NOT NULL UNIQUE,
  train_name TEXT NOT NULL,
  source TEXT NOT NULL,
  destination TEXT NOT NULL,
  departure_time TEXT NOT NULL,
  arrival_time TEXT NOT NULL,
  duration TEXT NOT NULL,
  price_sleeper INT NOT NULL DEFAULT 0,
  price_ac3 INT NOT NULL DEFAULT 0,
  price_ac2 INT NOT NULL DEFAULT 0,
  available_seats INT NOT NULL DEFAULT 0,
  coach_types TEXT[] NOT NULL DEFAULT ARRAY['SL','3A','2A'],
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.trains ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view trains" ON public.trains
  FOR SELECT USING (true);
CREATE POLICY "Admins manage trains" ON public.trains
  FOR ALL USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Seed sample trains
INSERT INTO public.trains (train_number, train_name, source, destination, departure_time, arrival_time, duration, price_sleeper, price_ac3, price_ac2, available_seats) VALUES
('12951', 'Mumbai Rajdhani Express', 'Mumbai Central', 'New Delhi', '17:00', '08:35', '15h 35m', 755, 2050, 2940, 124),
('12259', 'Sealdah Duronto Express', 'Sealdah', 'New Delhi', '20:05', '12:55', '16h 50m', 720, 1955, 2810, 86),
('12002', 'Bhopal Shatabdi', 'New Delhi', 'Bhopal Junction', '06:00', '14:00', '8h 00m', 0, 1320, 2540, 210),
('12649', 'Karnataka Sampark Kranti', 'Yesvantpur Jn', 'H Nizamuddin', '19:20', '06:50', '35h 30m', 845, 2245, 3265, 56),
('12723', 'Telangana Express', 'Hyderabad Decan', 'New Delhi', '06:25', '12:40', '30h 15m', 810, 2150, 3140, 142),
('22691', 'Rajdhani Express', 'KSR Bengaluru', 'H Nizamuddin', '20:00', '05:55', '33h 55m', 0, 2960, 4280, 38),
('12309', 'Rajendra Nagar Rajdhani', 'Rajendra Nagar', 'New Delhi', '19:15', '07:40', '12h 25m', 0, 1995, 2885, 92),
('12626', 'Kerala Express', 'Thiruvananthapuram', 'New Delhi', '11:15', '21:00', '57h 45m', 925, 2475, 3625, 168);
