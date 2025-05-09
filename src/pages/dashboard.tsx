import { DashboardShell } from "../components/ui/layout/dashboard-shell"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Welcome to the dashboard.</p>
    </DashboardShell>
  );
}
