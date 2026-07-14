-- Allow serial_no to be rewritten after deletes (was GENERATED ALWAYS).
-- Run in Supabase SQL Editor, then serials become contiguous 1…n.

alter table public.applications
  alter column serial_no drop identity if exists;

alter table public.applications
  alter column serial_no set default null;

-- Contiguous renumber (oldest → newest). Skip contact-inquiry rows.
with ordered as (
  select
    id,
    row_number() over (order by created_at asc, id asc) as new_serial
  from public.applications
  where position is distinct from 'Contact Inquiry'
)
update public.applications a
set serial_no = ordered.new_serial
from ordered
where a.id = ordered.id;

-- Optional: keep auto-increment for NEW rows without blocking updates
create sequence if not exists public.applications_serial_no_seq;

select setval(
  'public.applications_serial_no_seq',
  coalesce((select max(serial_no) from public.applications), 0) + 1,
  false
);

alter table public.applications
  alter column serial_no set default nextval('public.applications_serial_no_seq');

alter sequence public.applications_serial_no_seq owned by public.applications.serial_no;
