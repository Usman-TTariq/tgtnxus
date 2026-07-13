-- Contact form message (resume optional / no longer required)
alter table public.applications
  add column if not exists message text;

comment on column public.applications.message is
  'Optional/required applicant message from the contact form';
