-- Users' policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated user select on their own users"
ON public.users
FOR SELECT
TO authenticated
USING (
  auth.uid() = public.users.id
);

CREATE POLICY "Allow user to update their own record"
ON public.users
FOR UPDATE
TO authenticated
USING (
  auth.uid() = public.users.id
);

CREATE POLICY "Allow user to delete their own record"
ON public.users
FOR DELETE
TO authenticated
USING (
  auth.uid() = public.users.id
);


-- Jobs' policies
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to insert their jobs"
ON public.jobs
FOR INSERT
TO authenticated;

CREATE POLICY "Allow users to select their jobs"
ON public.jobs
FOR SELECT
TO authenticated
USING (
  auth.uid() = public.jobs.user_id
);

CREATE POLICY "Allow users to update their own jobs"
ON public.jobs
FOR UPDATE
TO authenticated
USING (
  auth.uid() = public.jobs.user_id
);

CREATE POLICY "Allow users to delete their own jobs"
ON public.jobs
FOR DELETE
TO authenticated
USING (
  auth.uid() = public.jobs.user_id
);


-- Resumes' policies
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to insert their resumes"
ON public.resumes
FOR INSERT
TO authenticated;

CREATE POLICY "Allow users to select their resumes"
ON public.resumes
FOR SELECT
TO authenticated
USING (
  auth.uid() = public.resumes.user_id
);

CREATE POLICY "Allow users to update their own resumes"
ON public.resumes
FOR UPDATE
TO authenticated
USING (
  auth.uid() = public.resumes.user_id
);

CREATE POLICY "Allow users to delete their own resumes"
ON public.resumes
FOR DELETE
TO authenticated
USING (
  auth.uid() = public.resumes.user_id
);


-- Certificates' policies
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow users to insert their certificates"
ON public.certificates
FOR INSERT
TO authenticated;

CREATE POLICY "Allow users to select their certificates"
ON public.certificates
FOR SELECT
TO authenticated
USING (
  auth.uid() = public.certificates.user_id
);

CREATE POLICY "Allow users to update their own certificates"
ON public.certificates
FOR UPDATE
TO authenticated
USING (
  auth.uid() = public.certificates.user_id
);

CREATE POLICY "Allow users to delete their own certificates"
ON public.certificates
FOR DELETE
TO authenticated
USING (
  auth.uid() = public.certificates.user_id
);


-- Orgs' policies
ALTER TABLE public.orgs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon to select orgs"
ON public.jobs
FOR SELECT
TO anon;


-- Activities' policies
ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon to select activities"
ON public.activities
FOR SELECT
TO anon;


-- News' policies
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon to select news"
ON public.news
FOR SELECT
TO anon;


-- Reels' policies
ALTER TABLE public.reels ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon to select reels"
ON public.reels
FOR SELECT
TO anon;