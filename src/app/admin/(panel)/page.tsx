import Link from "next/link";
import ApplicationsTable from "@/components/admin/ApplicationsTable";
import { getApplicationStats, getApplications } from "@/lib/applications";

import type { ApplicationRow } from "@/lib/supabase/admin";

export default async function AdminDashboardPage() {
  let applications: ApplicationRow[] = [];
  let error: string | null = null;

  try {
    applications = await getApplications();
  } catch (e) {
    console.error(e);
    error =
      "Could not load applications. Check Supabase credentials and run supabase/schema.sql.";
  }

  const stats = getApplicationStats(applications);

  return (
    <div className="px-8 py-8">
      <header className="mb-8">
        <p className="font-primary text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
          Admin
        </p>
        <h1 className="mt-1 font-secondary text-3xl font-semibold text-[#111]">
          Dashboard
        </h1>
        <p className="mt-2 max-w-2xl font-secondary text-sm text-[#6b7280]">
          Overview of career applications submitted from the home contact form.
        </p>
      </header>

      {error ? (
        <div className="mb-6 rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 font-secondary text-sm text-[#b91c1c]">
          {error}
        </div>
      ) : null}

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total applications" value={stats.total} />
        <StatCard label="Submitted today" value={stats.today} />
        <StatCard
          label="Open positions"
          value={stats.byPosition.length}
          hint="Unique roles applied for"
        />
        <StatCard
          label="Latest serial no"
          value={applications.at(-1)?.serial_no ?? "—"}
        />
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <section className="rounded-xl border border-[#e8e0da] bg-white p-6 shadow-sm">
          <h2 className="font-secondary text-lg font-semibold text-[#111]">
            Applications by position
          </h2>
          <ul className="mt-4 space-y-3">
            {stats.byPosition.length ? (
              stats.byPosition.map(([position, count]) => (
                <li
                  key={position}
                  className="flex items-center justify-between border-b border-[#f0ebe6] pb-2 last:border-0"
                >
                  <span className="font-secondary text-sm text-[#374151]">
                    {position}
                  </span>
                  <span className="rounded-full bg-[#f3f4f6] px-2.5 py-0.5 font-secondary text-xs font-semibold text-[#111]">
                    {count}
                  </span>
                </li>
              ))
            ) : (
              <li className="font-secondary text-sm text-[#9ca3af]">
                No data yet
              </li>
            )}
          </ul>
        </section>

        <section className="rounded-xl border border-[#e8e0da] bg-white p-6 shadow-sm">
          <h2 className="font-secondary text-lg font-semibold text-[#111]">
            Quick actions
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/admin/applications"
              className="inline-flex items-center justify-center rounded-lg bg-[#5c1218] px-4 py-2.5 font-secondary text-sm font-semibold text-white transition hover:bg-[#4a0e13]"
            >
              View all applications
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg border border-[#e8e0da] px-4 py-2.5 font-secondary text-sm font-medium text-[#374151] transition hover:bg-[#faf8f6]"
            >
              Open contact form on site
            </Link>
          </div>
        </section>
      </div>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-secondary text-xl font-semibold text-[#111]">
              Recent applications
            </h2>
            <p className="mt-1 font-secondary text-sm text-[#6b7280]">
              Latest submissions — full details in Applications.
            </p>
          </div>
          <Link
            href="/admin/applications"
            className="font-secondary text-sm font-medium text-[#5c1218] hover:underline"
          >
            See all →
          </Link>
        </div>
        <ApplicationsTable applications={applications} compact />
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-[#e8e0da] bg-white p-5 shadow-sm">
      <p className="font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
        {label}
      </p>
      <p className="mt-2 font-secondary text-3xl font-semibold text-[#111]">
        {value}
      </p>
      {hint ? (
        <p className="mt-1 font-secondary text-xs text-[#9ca3af]">{hint}</p>
      ) : null}
    </div>
  );
}
