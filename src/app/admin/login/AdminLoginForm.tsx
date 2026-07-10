"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { LOGO_MARK, LOGO_TYPE } from "@/lib/brand";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Login failed");

      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#5c1218] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3">
            <img
              className="shrink-0"
              src={LOGO_MARK}
              alt="TGT Nexus"
              width={24}
              height={24}
            />
            <img
              className="shrink-0"
              src={LOGO_TYPE}
              alt=""
              aria-hidden
              width={96}
              height={16}
            />
          </div>
          <h1 className="mt-4 font-secondary text-2xl font-semibold text-[#111]">
            Admin Login
          </h1>
          <p className="mt-2 font-secondary text-sm text-[#6b7280]">
            Sign in with your Supabase admin account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="admin-email"
              className="mb-2 block font-secondary text-sm font-medium text-[#374151]"
            >
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[#e5e7eb] px-4 py-2.5 font-secondary text-sm outline-none ring-[#5c1218] focus:ring-2"
              required
              autoComplete="email"
              placeholder="admin@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="mb-2 block font-secondary text-sm font-medium text-[#374151]"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#e5e7eb] px-4 py-2.5 font-secondary text-sm outline-none ring-[#5c1218] focus:ring-2"
              required
              autoComplete="current-password"
            />
          </div>

          {error ? (
            <p className="font-secondary text-sm text-[#b91c1c]">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#5c1218] py-2.5 font-secondary text-sm font-semibold text-white transition hover:bg-[#4a0e13] disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
