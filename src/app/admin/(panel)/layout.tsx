import AdminSidebar from "@/components/admin/AdminSidebar";

export const dynamic = "force-dynamic";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f3f0eb] lg:flex-row">
      <AdminSidebar />
      <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
    </div>
  );
}
