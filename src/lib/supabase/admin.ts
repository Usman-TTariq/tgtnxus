import { createClient } from "@supabase/supabase-js";

export type ApplicationRow = {
  id: string;
  application_id: string;
  serial_no: number;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  resume_url: string | null;
  resume_filename: string | null;
  is_saved: boolean;
  created_at: string;
};

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SECRET_KEY");
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export function createAdminClient() {
  return getSupabaseAdmin();
}

export function generateApplicationId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `TGT-${stamp}-${rand}`;
}
