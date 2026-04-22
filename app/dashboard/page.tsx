import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import DashboardStats from "@/components/dashboard-stats";
import RecentDonations from "@/components/recent-donations";

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in" as any);
  }

  return (
    <main className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Dashboard
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Welcome back
        </h1>
      </div>

      <DashboardStats userId={userId} />

      <RecentDonations userId={userId} />
    </main>
  );
}
