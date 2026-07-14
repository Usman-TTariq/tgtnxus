"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LOGO_MARK, LOGO_TYPE } from "@/lib/brand";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊", exact: true },
  { href: "/admin/applications", label: "Applications", icon: "📋", exact: false },
  { href: "/admin/saved", label: "Saved", icon: "🔖", exact: false },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.href = "/admin/login";
  }

  const nav = (
    <>
      <Link
        href="/"
        className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3"
        onClick={() => setOpen(false)}
      >
        <img
          className="shrink-0"
          src={LOGO_MARK}
          alt="TGT Nexus"
          width={28}
          height={28}
        />
        <img
          className="shrink-0"
          src={LOGO_TYPE}
          alt=""
          aria-hidden
          width={108}
          height={18}
        />
      </Link>

      <p className="mt-8 font-primary text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
        Site Admin
      </p>

      <nav className="mt-6 flex flex-col gap-1">
        <p className="mb-2 px-2 font-primary text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
          Overview
        </p>
        {navItems.map((item) => {
          const active = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-secondary text-sm font-medium transition ${
                active
                  ? "bg-white/15 text-white"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/15 pt-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="block px-2 font-secondary text-sm text-white/70 hover:text-white"
        >
          ← Back to site
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-3 w-full rounded-lg border border-white/20 px-3 py-2 font-secondary text-sm text-white/80 transition hover:bg-white/10"
        >
          Log out
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-[#e8e0da] bg-[#f3f0eb] px-4 py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-[#e8e0da] bg-white text-[#5c1218]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <Link href="/admin" className="flex items-center gap-2">
          <img src={LOGO_MARK} alt="TGT Nexus" width={24} height={24} />
          <img src={LOGO_TYPE} alt="" aria-hidden width={96} height={16} />
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-[#e8e0da] bg-white px-2.5 py-2 font-secondary text-xs font-medium text-[#5c1218]"
        >
          Log out
        </button>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/45 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(280px,86vw)] flex-col bg-[#5c1218] px-5 py-6 text-white shadow-xl transition-transform duration-200 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="mb-4 ml-auto inline-flex size-9 items-center justify-center rounded-lg border border-white/20 text-white/90"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {nav}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden min-h-screen w-[240px] shrink-0 flex-col bg-[#5c1218] px-5 py-6 text-white lg:flex">
        {nav}
      </aside>
    </>
  );
}
