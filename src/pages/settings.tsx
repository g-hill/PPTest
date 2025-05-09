import { DashboardShell } from "../components/ui/layout/dashboard-shell";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-2 text-muted-foreground">Change your preferences here.</p>
    </DashboardShell>
  );
}
