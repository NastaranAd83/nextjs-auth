import { auth } from "@/auth";
import AuthPanel from "@/components/auth-panel";
import DashboardLink from "@/components/dashboard-link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="relative mx-auto mt-8 min-h-96 max-w-4xl space-y-4 p-6">
      <AuthPanel session={session} />
      <div className="flex gap-6">
        <aside className="flex w-48 flex-col gap-1">
          <DashboardLink href="/dashboard" name="Overview" />
          <DashboardLink href="/dashboard/profile" name="Profile" />
          <DashboardLink href="/dashboard/settings" name="Settings" />
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
