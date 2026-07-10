-- Sample applications for testing admin dashboard
-- Run in Supabase SQL Editor after schema.sql

insert into public.applications (
  application_id,
  full_name,
  email,
  phone,
  position,
  resume_url,
  resume_filename,
  created_at
) values
  (
    'TGT-MK1A2B3C-X7K9',
    'Abdul Sami',
    'abdul.sami@gmail.com',
    '+92 300 1122334',
    'Sales Development Representative',
    null,
    'abdul-sami-resume.pdf',
    now() - interval '6 days'
  ),
  (
    'TGT-MK1A2B3D-P2M4',
    'Abdullah Rashid',
    'abdullah.rashid@outlook.com',
    '+92 321 4455667',
    'International Sales Executive',
    null,
    'abdullah-rashid-cv.pdf',
    now() - interval '5 days'
  ),
  (
    'TGT-MK1A2B3E-Q8N1',
    'Fatima Khan',
    'fatima.khan@yahoo.com',
    '+92 333 7788990',
    'Ebook Front Sales',
    null,
    'fatima-khan-resume.docx',
    now() - interval '4 days'
  ),
  (
    'TGT-MK1A2B3F-R3T6',
    'Hassan Ali',
    'hassan.ali@proton.me',
    '+92 345 2233445',
    'POS Sales Closer',
    null,
    'hassan-ali-cv.pdf',
    now() - interval '3 days'
  ),
  (
    'TGT-MK1A2B3G-S9W2',
    'Ayesha Malik',
    'ayesha.malik@gmail.com',
    '+92 312 6677889',
    'Quality Assurance Executive',
    null,
    'ayesha-malik-resume.pdf',
    now() - interval '2 days'
  ),
  (
    'TGT-MK1A2B3H-T4Y7',
    'Usman Tariq',
    'usman.tariq@icloud.com',
    '+92 334 9900112',
    'AI Video Editor',
    null,
    'usman-tariq-portfolio.pdf',
    now() - interval '1 day'
  ),
  (
    'TGT-MK1A2B3J-U5Z3',
    'Sara Ahmed',
    'sara.ahmed@hotmail.com',
    '+92 322 5544332',
    'Sales Team Lead',
    null,
    'sara-ahmed-resume.pdf',
    now() - interval '8 hours'
  ),
  (
    'TGT-MK1A2B3K-V6A8',
    'Imran Sheikh',
    'imran.sheikh@gmail.com',
    '+92 301 8877665',
    'Other',
    null,
    'imran-sheikh-cv.docx',
    now() - interval '2 hours'
  )
on conflict (application_id) do nothing;
