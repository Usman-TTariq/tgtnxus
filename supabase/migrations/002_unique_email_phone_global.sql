-- Global uniqueness: one email / one phone = one application total
-- Run in Supabase SQL Editor (after 001 if already applied)

drop index if exists public.applications_email_position_unique;
drop index if exists public.applications_phone_position_unique;

create unique index if not exists applications_email_unique
  on public.applications (lower(trim(email)));

create unique index if not exists applications_phone_unique
  on public.applications (regexp_replace(phone, '\D', '', 'g'));
