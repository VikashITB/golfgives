import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import EditEventForm from "@/components/edit-event-form";

type EditPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = 'force-dynamic';

export default async function EditEventPage({
  params
}: EditPageProps) {
  const { id } = await params;
  const event = await prisma.event.findUnique({
    where: {
      id
    }
  });

  if (!event) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Edit Event
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {event.title}
        </h1>
      </div>

      <EditEventForm event={event} />
    </main>
  );
}
