import { DashboardShell } from "../components/ui/layout/dashboard-shell";

export default function ProfilePage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-semibold">Profile</h1>
      <p className="mt-2 text-muted-foreground">Manage your profile info.</p>
    </DashboardShell>
  );
}
