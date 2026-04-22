import Link from "next/link";

const events = [
  {
    title: "Spring Charity Classic",
    location: "California",
    raised: "$24,000"
  },
  {
    title: "Hope Invitational",
    location: "Texas",
    raised: "$18,500"
  },
  {
    title: "Birdies for Change",
    location: "Florida",
    raised: "$31,200"
  }
];

export default function FeaturedEvents() {
  return (
    <section id="events" className="py-16">
      <div className="container space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Featured Events
          </p>
          <h2 className="text-3xl font-bold">Upcoming Fundraisers</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <Link
              key={event.title}
              href="/events"
              className="rounded-3xl border bg-white p-6 shadow-soft transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{event.location}</p>
              <p className="mt-6 text-sm font-medium text-brand">
                Raised: {event.raised}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
