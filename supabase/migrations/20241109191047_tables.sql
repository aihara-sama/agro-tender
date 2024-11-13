CREATE TABLE public.users (
  id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  middle_name TEXT NOT NULL,
  avatar TEXT NOT NULL,
  background TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  date_of_birth TIMESTAMP NOT NULL,
  field_of_study TEXT NOT NULL,
  specialization TEXT NOT NULL,
  position TEXT, -- Job position
  academy TEXT,
  degree TEXT NOT NULL,
  study_mode public.Study_Mode,
  education_mode public.Education_Mode,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.jobs (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users ON DELETE CASCADE NOT NULL,
  position TEXT NOT NULL,
  company TEXT NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP,
  duties TEXT,
  achievments TEXT
);

CREATE TABLE public.resumes (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  ext TEXT NOT NULL,
  path TEXT NOT NULL,
  size int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.certificates (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.users ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  ext TEXT NOT NULL,
  path TEXT NOT NULL,
  size int NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.orgs (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  status public.Org_Status,
  title TEXT NOT NULL,
  tin TEXT NOT NULL, -- ИНН
  registration_date TIMESTAMP NOT NULL,
  psrn TEXT NOT NULL, -- ОГРН
  rrc TEXT NOT NULL,
  arcea TEXT NOT NULL, -- ОКВЭД
  terminated_date TIMESTAMP
);

CREATE TABLE public.activities (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  location TEXT NOT NULL,
  image TEXT NOT NULL,
  is_important BOOLEAN NOT NULL,
  starts_date TIMESTAMP NOT NULL,
  ends_date TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE public.news (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  text TEXT not NULL,
  image TEXT NOT NULL
);

CREATE TABLE public.reels (
  id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  image TEXT NOT NULL
);

