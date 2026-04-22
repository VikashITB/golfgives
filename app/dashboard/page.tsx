import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import Link from "next/link";
import DashboardStats from "@/components/dashboard-stats";
import RecentDonations from "@/components/recent-donations";
import DashboardNav from "@/components/dashboard-nav";

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in" as any);
  }

  const events = await prisma.event.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  }).catch(() => []);

  const activeCampaigns = events.filter((e: any) => e.raised < e.goal).length;

  return (
    <div className="flex min-h-screen">
      <DashboardNav />

      <main className="flex-1 space-y-8 p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Dashboard
            </p>
            <h1 className="mt-2 text-4xl font-bold">
              Welcome back
            </h1>
          </div>

          <Link
            href="/dashboard/create-event"
            className="rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Create New Event
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <p className="text-sm text-gray-500">Events Created</p>
            <p className="mt-2 text-3xl font-bold">{events.length}</p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <p className="text-sm text-gray-500">Total Raised</p>
            <p className="mt-2 text-3xl font-bold">
              ${events.reduce((sum: number, e: any) => sum + (e.raised || 0), 0).toLocaleString()}
            </p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <p className="text-sm text-gray-500">Active Campaigns</p>
            <p className="mt-2 text-3xl font-bold">{activeCampaigns}</p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <p className="text-sm text-gray-500">Donations Received</p>
            <p className="mt-2 text-3xl font-bold">
              {events.reduce((sum: number, e: any) => sum + (e.donationCount || 0), 0)}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold">Your Events</h2>

          {events.length === 0 ? (
            <div className="mt-8 text-center">
              <p className="text-gray-500">No events created yet.</p>
              <Link
                href="/dashboard/create-event"
                className="mt-4 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Create Your First Event
              </Link>
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Event Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Raised</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Goal</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event: any) => (
                    <tr key={event.id} className="border-b">
                      <td className="px-4 py-3 font-medium">{event.title}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                            event.raised >= event.goalAmount
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {event.raised >= event.goalAmount ? "Completed" : "Active"}
                        </span>
                      </td>
                      <td className="px-4 py-3">${event.raised?.toLocaleString() || 0}</td>
                      <td className="px-4 py-3">${event.goalAmount?.toLocaleString() || 0}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <Link
                            href={`/dashboard/events/${event.id}/edit` as any}
                            className="rounded-full border px-3 py-1 text-sm font-semibold hover:bg-gray-50"
                          >
                            Edit
                          </Link>
                          <Link
                            href={`/events/${event.id}`}
                            className="rounded-full bg-brand px-3 py-1 text-sm font-semibold text-white hover:opacity-90"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <RecentDonations userId={userId} />
      </main>
    </div>
  );
}
