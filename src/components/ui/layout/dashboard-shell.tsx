import { type ReactNode } from "react";
import { Sidebar } from "../layout/sidebar";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
