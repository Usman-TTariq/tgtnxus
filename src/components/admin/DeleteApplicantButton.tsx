"use client";

import { useState } from "react";

type Props = {
  applicationId: string;
  applicantName: string;
  onDeleted?: (id: string) => void;
};

export default function DeleteApplicantButton({
  applicationId,
  applicantName,
  onDeleted,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    if (loading) return;

    const confirmed = window.confirm(
      `Delete application for "${applicantName}"?\n\nThis cannot be undone.`
    );
    if (!confirmed) return;

    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "DELETE",
        credentials: "same-origin",
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(
          data.error ||
            (res.status === 401
              ? "Session expired — log in again."
              : "Could not delete applicant.")
        );
        return;
      }

      onDeleted?.(applicationId);
    } catch {
      setError("Network error — try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        type="button"
        onClick={handleDelete}
        disabled={loading}
        aria-label={`Delete ${applicantName}`}
        title="Delete applicant"
        className="inline-flex size-9 items-center justify-center rounded-lg border border-[#e8e0da] bg-white text-[#6b7280] transition hover:border-[#b91c1c] hover:bg-[#fef2f2] hover:text-[#b91c1c] disabled:opacity-50"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M3 6H5H21"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11V17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <path
            d="M14 11V17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
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
