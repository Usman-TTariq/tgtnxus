"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LOGO_MARK, LOGO_TYPE } from "@/lib/brand";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊", exact: true },
  { href: "/admin/applications", label: "Applications", icon: "📋", exact: false },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-[240px] shrink-0 flex-col bg-[#5c1218] px-5 py-6 text-white">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3"
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
          className="block px-2 font-secondary text-sm text-white/70 hover:text-white"
        >
          ← Back to site
        </Link>
        <button
          type="button"
          onClick={async () => {
            await fetch("/api/admin/login", { method: "DELETE" });
            window.location.href = "/admin/login";
          }}
          className="mt-3 w-full rounded-lg border border-white/20 px-3 py-2 font-secondary text-sm text-white/80 transition hover:bg-white/10"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}
