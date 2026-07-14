import type { ApplicationRow } from "@/lib/supabase/admin";
import ApplicationsTable from "@/components/admin/ApplicationsTable";
import { getApplications } from "@/lib/applications";

export default async function AdminApplicationsPage() {
  let applications: ApplicationRow[] = [];
  let error: string | null = null;

  try {
    applications = await getApplications();
  } catch (e) {
    console.error(e);
    error =
      "Could not load applications. Check Supabase credentials and run supabase/schema.sql.";
  }

  return (
    <div className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8 sm:gap-4">
        <div className="min-w-0 flex-1">
          <p className="font-primary text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
            Admin
          </p>
          <h1 className="mt-1 font-secondary text-2xl font-semibold text-[#111] sm:text-3xl">
            Applications
          </h1>
          <p className="mt-2 max-w-2xl font-secondary text-sm leading-relaxed text-[#6b7280]">
            All career form submissions — full name, email, phone, position,
            resume, serial no &amp; application ID.
          </p>
        </div>
        <p className="rounded-full bg-white px-4 py-2 font-secondary text-sm font-medium text-[#374151] shadow-sm ring-1 ring-[#e8e0da]">
          {applications.length} total
        </p>
      </header>

      {error ? (
        <div className="mb-6 rounded-xl border border-[#fecaca] bg-[#fef2f2] px-4 py-3 font-secondary text-sm text-[#b91c1c]">
          {error}
        </div>
      ) : null}

      <ApplicationsTable applications={applications} />
    </div>
  );
}
