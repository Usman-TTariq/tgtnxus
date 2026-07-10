import { createAdminClient, type ApplicationRow } from "@/lib/supabase/admin";

export async function getApplications(): Promise<ApplicationRow[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("applications")
    .select("*")
    .order("serial_no", { ascending: true });

  if (error) {
    throw error;
  }

  return data ?? [];
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

  return {
    total: applications.length,
    today: todayCount,
    byPosition: Object.entries(byPosition)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6),
  };
}
