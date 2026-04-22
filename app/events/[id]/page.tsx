import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import DonateForm from "@/components/donate-form";

type EventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = 'force-dynamic';

export default async function EventPage({
  params
}: EventPageProps) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: {
      id
    }
  }).catch(() => null);

  if (!event) {
    notFound();
  }

  return (
    <main className="container py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Event Details
          </p>

          <h1 className="text-4xl font-bold">
            {event?.title ?? "Untitled Event"}
          </h1>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-5 shadow-soft">
              <p className="text-sm text-gray-500">Location</p>
              <p className="mt-2 font-semibold">
                {event?.location ?? "TBD"}
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-5 shadow-soft">
              <p className="text-sm text-gray-500">Goal</p>
              <p className="mt-2 font-semibold">
                ${(event?.goal ?? 0).toLocaleString()}
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-5 shadow-soft">
              <p className="text-sm text-gray-500">Raised</p>
              <p className="mt-2 font-semibold">
                ${(event?.raised ?? 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <DonateForm eventId={event.id} />
      </div>
    </main>
  );
}
