import Link from "next/link";
import DeleteEventButton from "@/components/delete-event-button";

type EventItem = {
  id: string;
  title: string;
  location: string;
};

type EventListProps = {
  events: EventItem[];
};

export default function EventList({
  events
}: EventListProps) {
  if (!events.length) {
    return (
      <div className="rounded-3xl border bg-white p-6 shadow-soft">
        <p className="text-gray-500">No events created yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="rounded-3xl border bg-white p-6 shadow-soft"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                href={`/events/${event.id}` as any}
                className="font-semibold hover:text-brand"
              >
                {event.title}
              </Link>

              <p className="mt-1 text-sm text-gray-500">
                {event.location}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/dashboard/events/${event.id}/edit` as any}
                className="rounded-full border px-4 py-2 text-sm font-semibold"
              >
                Edit
              </Link>

              <DeleteEventButton id={event.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
