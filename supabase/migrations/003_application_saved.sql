-- Bookmark applicants for recruiter review
-- Run in Supabase SQL Editor

alter table public.applications
  add column if not exists is_saved boolean not null default false;

create index if not exists applications_is_saved_idx
  on public.applications (is_saved)
  where is_saved = true;
