"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  applicationId: string;
  initialSaved: boolean;
};

export default function SaveApplicantButton({
  applicationId,
  initialSaved,
}: Props) {
  const router = useRouter();
  const [saved, setSaved] = useState(Boolean(initialSaved));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function toggleSaved() {
    if (loading) return;

    const previousSaved = saved;
    const nextSaved = !saved;
    setError(null);
    setLoading(true);
    setSaved(nextSaved);

    try {
      const res = await fetch(`/api/admin/applications/${applicationId}/saved`, {
        method: "PATCH",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ saved: nextSaved }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        saved?: boolean;
      };

      if (!res.ok) {
        setSaved(previousSaved);
        setError(
          data.error ||
            (res.status === 401
              ? "Session expired — log in again."
              : "Could not update saved status.")
        );
        return;
      }

      if (typeof data.saved === "boolean") {
        setSaved(data.saved);
      }

      router.refresh();
    } catch {
      setSaved(previousSaved);
      setError("Network error — try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        onClick={toggleSaved}
        disabled={loading}
        aria-label={saved ? "Remove from saved" : "Save applicant"}
        aria-pressed={saved}
        title={saved ? "Remove from saved" : "Save for later"}
        className={`inline-flex size-9 items-center justify-center rounded-lg border transition disabled:opacity-50 ${
          saved
            ? "border-[#5c1218] bg-[#5c1218] text-white hover:bg-[#4a0e13]"
            : "border-[#e8e0da] bg-white text-[#6b7280] hover:border-[#5c1218] hover:text-[#5c1218]"
        }`}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={saved ? "currentColor" : "none"}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V22L12 18L6 22V4Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {error ? (
        <span className="max-w-[88px] text-center font-secondary text-[10px] leading-tight text-[#b91c1c]">
          {error}
        </span>
      ) : null}
    </div>
  );
}
