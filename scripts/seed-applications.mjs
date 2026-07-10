/**
 * Seed sample applications into Supabase.
 * Usage: node scripts/seed-applications.mjs
 */
import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;

if (!url || !key) {
  console.error("Missing SUPABASE_URL or SUPABASE_SECRET_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const samples = [
  {
    application_id: "TGT-MK1A2B3C-X7K9",
    full_name: "Abdul Sami",
    email: "abdul.sami@gmail.com",
    phone: "+92 300 1122334",
    position: "Sales Development Representative",
    resume_filename: "abdul-sami-resume.pdf",
    created_at: new Date(Date.now() - 6 * 86400000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3D-P2M4",
    full_name: "Abdullah Rashid",
    email: "abdullah.rashid@outlook.com",
    phone: "+92 321 4455667",
    position: "International Sales Executive",
    resume_filename: "abdullah-rashid-cv.pdf",
    created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3E-Q8N1",
    full_name: "Fatima Khan",
    email: "fatima.khan@yahoo.com",
    phone: "+92 333 7788990",
    position: "Ebook Front Sales",
    resume_filename: "fatima-khan-resume.docx",
    created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3F-R3T6",
    full_name: "Hassan Ali",
    email: "hassan.ali@proton.me",
    phone: "+92 345 2233445",
    position: "POS Sales Closer",
    resume_filename: "hassan-ali-cv.pdf",
    created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3G-S9W2",
    full_name: "Ayesha Malik",
    email: "ayesha.malik@gmail.com",
    phone: "+92 312 6677889",
    position: "Quality Assurance Executive",
    resume_filename: "ayesha-malik-resume.pdf",
    created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3H-T4Y7",
    full_name: "Usman Tariq",
    email: "usman.tariq@icloud.com",
    phone: "+92 334 9900112",
    position: "AI Video Editor",
    resume_filename: "usman-tariq-portfolio.pdf",
    created_at: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3J-U5Z3",
    full_name: "Sara Ahmed",
    email: "sara.ahmed@hotmail.com",
    phone: "+92 322 5544332",
    position: "Sales Team Lead",
    resume_filename: "sara-ahmed-resume.pdf",
    created_at: new Date(Date.now() - 8 * 3600000).toISOString(),
  },
  {
    application_id: "TGT-MK1A2B3K-V6A8",
    full_name: "Imran Sheikh",
    email: "imran.sheikh@gmail.com",
    phone: "+92 301 8877665",
    position: "Other",
    resume_filename: "imran-sheikh-cv.docx",
    created_at: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
];

const { data, error } = await supabase
  .from("applications")
  .upsert(samples, { onConflict: "application_id", ignoreDuplicates: true })
  .select("serial_no, application_id, full_name");

if (error) {
  console.error("Seed failed:", error.message);
  process.exit(1);
}

console.log(`Seeded ${data?.length ?? 0} applications:`);
for (const row of data ?? []) {
  console.log(`  #${row.serial_no}  ${row.application_id}  ${row.full_name}`);
}
