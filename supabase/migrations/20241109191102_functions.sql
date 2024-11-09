CREATE FUNCTION public.handle_new_user()
RETURNS TRIGGER as $$
BEGIN
  INSERT INTO public.users (
    id,
    email,
    first_name,
    last_name,
    middle_name,
    avatar,
    phone,
    country,
    city,
    date_of_birth,
    field_of_study,
    specialization,
    position,
    academy,
    degree,
    study_mode,
    education_mode
  )
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name',
    NEW.raw_user_meta_data->>'middle_name',
    NEW.raw_user_meta_data->>'avatar',
    NEW.raw_user_meta_data->>'phone',
    NEW.raw_user_meta_data->>'country',
    NEW.raw_user_meta_data->>'city',
    NEW.raw_user_meta_data->>'date_of_birth',
    NEW.raw_user_meta_data->>'field_of_study',
    NEW.raw_user_meta_data->>'specialization',
    NEW.raw_user_meta_data->>'position',
    NEW.raw_user_meta_data->>'academy',
    NEW.raw_user_meta_data->>'degree',
    (NEW.raw_user_meta_data->>'study_mode')::public.Study_Mode,
    (NEW.raw_user_meta_data->>'education_mode')::public.Education_Mode
  );

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;