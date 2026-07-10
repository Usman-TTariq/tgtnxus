"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  applicationId: string;
  initialSaved: boolean;
  refreshOnToggle?: boolean;
};

export default function SaveApplicantButton({
  applicationId,
  initialSaved,
  refreshOnToggle = false,
}: Props) {
  const router = useRouter();
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  async function toggleSaved() {
    if (loading) return;

    const nextSaved = !saved;
    setLoading(true);
    setSaved(nextSaved);

    try {
      const res = await fetch(`/api/admin/applications/${applicationId}/saved`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ saved: nextSaved }),
      });

      if (!res.ok) {
        setSaved(saved);
        return;
      }

      if (refreshOnToggle) {
        router.refresh();
      }
    } catch {
      setSaved(saved);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleSaved}
      disabled={loading}
      aria-label={saved ? "Remove from saved" : "Save applicant"}
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
  );
}
