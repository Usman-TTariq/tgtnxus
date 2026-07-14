/**
 * Reset applications.serial_no to contiguous 1…n (oldest first).
 * Usage: node scripts/resequence-serials.mjs
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

const { data, error } = await supabase
  .from("applications")
  .select("id, application_id, serial_no, full_name, position, created_at")
  .neq("position", "Contact Inquiry")
  .order("created_at", { ascending: true });

if (error) {
  console.error(error);
  process.exit(1);
}

const rows = data ?? [];
console.log(`Found ${rows.length} applications to renumber`);

for (let i = 0; i < rows.length; i++) {
  const { error: e1 } = await supabase
    .from("applications")
    .update({ serial_no: -(i + 1) })
    .eq("id", rows[i].id);
  if (e1) {
    console.error("pass1 failed", rows[i].id, e1);
    process.exit(1);
  }
}

for (let i = 0; i < rows.length; i++) {
  const next = i + 1;
  const { error: e2 } = await supabase
    .from("applications")
    .update({ serial_no: next })
    .eq("id", rows[i].id);
  if (e2) {
    console.error("pass2 failed", rows[i].id, e2);
    process.exit(1);
  }
  console.log(`  #${next}  ${rows[i].application_id}  ${rows[i].full_name}`);
}

console.log("Done — serial numbers reset to 1…n");
