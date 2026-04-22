import prisma from "@/lib/db";
import EventList from "@/components/event-list";

export const dynamic = 'force-dynamic';

export default async function DashboardEventsPage() {
  const events = await prisma.event.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <main className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Events
        </p>

        <h1 className="mt-2 text-4xl font-bold">Your Events</h1>
      </div>

      <EventList events={events} />
    </main>
  );
}
