import type { ApplicationRow } from "@/lib/supabase/admin";
import SaveApplicantButton from "@/components/admin/SaveApplicantButton";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

type Props = {
  applications: ApplicationRow[];
  compact?: boolean;
  refreshOnSaveToggle?: boolean;
};

export default function ApplicationsTable({
  applications,
  compact,
  refreshOnSaveToggle = false,
}: Props) {
  const rows = compact ? applications.slice(-8) : applications;

  if (!rows.length) {
    return (
      <div className="rounded-xl border border-[#e8e0da] bg-white px-6 py-12 text-center">
        <p className="font-secondary text-sm text-[#6b7280]">
          No applications yet. Submissions from the home contact form will appear
          here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#e8e0da] bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#ece7e2] bg-[#faf8f6]">
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Save
              </th>
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Serial No
              </th>
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Application ID
              </th>
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Full Name
              </th>
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Email
              </th>
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Phone
              </th>
              <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                Position
              </th>
              {!compact ? (
                <>
                  <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    Resume
                  </th>
                  <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                    Submitted
                  </th>
                </>
              ) : (
                <th className="px-4 py-3 font-primary text-[11px] font-semibold uppercase tracking-wider text-[#6b7280]">
                  Resume
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#f0ebe6] last:border-b-0 hover:bg-[#fdfcfb]"
              >
                <td className="px-4 py-3">
                  <SaveApplicantButton
                    applicationId={row.id}
                    initialSaved={row.is_saved ?? false}
                    refreshOnToggle={refreshOnSaveToggle}
                  />
                </td>
                <td className="px-4 py-3 font-secondary text-sm font-semibold text-[#111]">
                  {row.serial_no}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-[#374151]">
                  {row.application_id}
                </td>
                <td className="px-4 py-3 font-secondary text-sm font-medium text-[#111]">
                  {row.full_name}
                </td>
                <td className="px-4 py-3 font-secondary text-sm text-[#374151]">
                  {row.email}
                </td>
                <td className="px-4 py-3 font-secondary text-sm text-[#374151]">
                  {row.phone}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-block rounded-full bg-[#eef4ff] px-2.5 py-1 font-secondary text-xs font-medium text-[#1e40af]">
                    {row.position}
                  </span>
                </td>
                {!compact ? (
                  <>
                    <td className="px-4 py-3">
                      {row.resume_url ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <a
                            href={row.resume_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-secondary text-sm font-medium text-[#5c1218] underline-offset-2 hover:underline"
                          >
                            View
                          </a>
                          <a
                            href={`/api/admin/applications/${row.id}/resume`}
                            download={row.resume_filename ?? "resume.pdf"}
                            className="inline-flex items-center rounded-md border border-[#e8e0da] bg-[#faf8f6] px-2.5 py-1 font-secondary text-xs font-medium text-[#374151] transition hover:border-[#5c1218] hover:text-[#5c1218]"
                          >
                            Download
                          </a>
                        </div>
                      ) : (
                        <span className="text-sm text-[#9ca3af]">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-secondary text-sm text-[#6b7280]">
                      {formatDate(row.created_at)}
                    </td>
                  </>
                ) : (
                  <td className="px-4 py-3">
                    {row.resume_url ? (
                      <a
                        href={`/api/admin/applications/${row.id}/resume`}
                        download={row.resume_filename ?? "resume.pdf"}
                        className="inline-flex items-center rounded-md border border-[#e8e0da] bg-[#faf8f6] px-2.5 py-1 font-secondary text-xs font-medium text-[#374151] transition hover:border-[#5c1218] hover:text-[#5c1218]"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-sm text-[#9ca3af]">—</span>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
