-- One applicant total (by email OR phone) — not per position
-- Superseded by 002_unique_email_phone_global.sql for existing installs
-- Run in Supabase SQL Editor

create unique index if not exists applications_email_unique
  on public.applications (lower(trim(email)));

create unique index if not exists applications_phone_unique
  on public.applications (regexp_replace(phone, '\D', '', 'g'));
