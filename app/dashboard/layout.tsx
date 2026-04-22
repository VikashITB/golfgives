import type { ReactNode } from "react";
import DashboardNav from "@/components/dashboard-nav";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children
}: DashboardLayoutProps) {
  return (
    <div className="container grid gap-8 py-10 md:grid-cols-[260px_1fr]">
      <aside>
        <DashboardNav />
      </aside>

      <section>{children}</section>
    </div>
  );
}
