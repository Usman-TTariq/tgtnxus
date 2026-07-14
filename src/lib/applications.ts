import { unstable_noStore as noStore } from "next/cache";
import { createAdminClient, type ApplicationRow } from "@/lib/supabase/admin";

/** Contiguous 1…n display serials (gaps from deletes ignored). */
function withDisplaySerials(rows: ApplicationRow[]): ApplicationRow[] {
  return rows.map((row, index) => ({
    ...row,
    serial_no: index + 1,
  }));
}

export async function getApplications(): Promise<ApplicationRow[]> {
  noStore();
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .neq("position", "Contact Inquiry")
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return withDisplaySerials(data ?? []);
}

export async function getSavedApplications(): Promise<ApplicationRow[]> {
  noStore();
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .eq("is_saved", true)
    .neq("position", "Contact Inquiry")
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return withDisplaySerials(data ?? []);
}

/**
 * Re-write DB serial_no to contiguous 1…n after deletes.
 * Requires migration 005 (serial_no not GENERATED ALWAYS).
 * Safe no-op if the column is still identity-only.
 */
export async function resequenceApplicationSerials() {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("applications")
    .select("id")
    .neq("position", "Contact Inquiry")
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  const rows = data ?? [];
  if (!rows.length) return;

  for (let i = 0; i < rows.length; i++) {
    const { error: pass1Error } = await supabase
      .from("applications")
      .update({ serial_no: -(i + 1) })
      .eq("id", rows[i].id);
    if (pass1Error) {
      // GENERATED ALWAYS — display remap in ApplicationsTable is enough
      console.warn(
        "[applications] serial_no is not updatable; run supabase/migrations/005_reset_serial_no.sql",
        pass1Error.message
      );
      return;
    }
  }

  for (let i = 0; i < rows.length; i++) {
    const { error: pass2Error } = await supabase
      .from("applications")
      .update({ serial_no: i + 1 })
      .eq("id", rows[i].id);
    if (pass2Error) throw pass2Error;
  }
}

export function getApplicationStats(applications: ApplicationRow[]) {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const todayCount = applications.filter(
    (row) => new Date(row.created_at) >= todayStart
  ).length;

  const byPosition = applications.reduce<Record<string, number>>((acc, row) => {
    acc[row.position] = (acc[row.position] ?? 0) + 1;
    return acc;
  }, {});

  const savedCount = applications.filter((row) => row.is_saved).length;

  return {
    total: applications.length,
    today: todayCount,
    saved: savedCount,
    byPosition: Object.entries(byPosition)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6),
  };
}
