import Link from "next/link";

type EventItem = {
  id: string;
  title?: string | null;
  location?: string | null;
};

type EventListProps = {
  events: EventItem[];
};

export default function EventList({ events }: EventListProps) {
  if (!events.length) {
    return (
      <div className="rounded-3xl border bg-white p-6 shadow-soft">
        <p className="text-gray-500">No events available right now.</p>
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
          <Link
            href={`/events/${event.id}`}
            className="font-semibold text-lg hover:text-brand"
          >
            {event.title ?? "Untitled Event"}
          </Link>

          <p className="mt-1 text-sm text-gray-500">
            {event.location ?? "Location TBD"}
          </p>
        </div>
      ))}
    </div>
  );
}
