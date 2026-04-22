import Link from "next/link";

const events = [
  {
    title: "Spring Charity Classic",
    location: "California",
    raised: 24000,
    goalAmount: 30000,
    status: "UPCOMING"
  },
  {
    title: "Hope Invitational",
    location: "Texas",
    raised: 18500,
    goalAmount: 22000,
    status: "OPEN"
  },
  {
    title: "Birdies for Change",
    location: "Florida",
    raised: 31200,
    goalAmount: 40000,
    status: "UPCOMING"
  }
];

export default function FeaturedEvents() {
  return (
    <section id="events" className="py-20">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs font-mono text-gold tracking-[0.2em] uppercase">
            Featured Events
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            Upcoming Fundraisers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <Link
              key={event.title}
              href="/events"
              className="group relative rounded-2xl border border-white/7 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 card-glow"
            >
              {/* Image placeholder */}
              <div className="h-40 rounded-xl bg-gradient-to-br from-elevated to-surface flex items-center justify-center mb-5">
                <span className="text-4xl">⛳</span>
              </div>

              {/* Status badge */}
              <div className="absolute top-7 left-7">
                <span className="px-3 py-1 text-xs font-mono font-medium text-gold border border-gold/30 rounded-full">
                  {event.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-primary">
                {event.title}
              </h3>
              
              <div className="mt-2 flex items-center gap-2 text-sm text-secondary">
                <span>📍</span>
                <span>{event.location}</span>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="h-1 rounded-full bg-white/8 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                    style={{ width: `${(event.raised / event.goalAmount) * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gold font-medium">${event.raised.toLocaleString()}</span>
                  <span className="text-secondary">of ${event.goalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* View button */}
              <div className="mt-5">
                <button className="w-full py-3 text-sm font-sans font-medium text-gold border border-gold/30 rounded-full group-hover:bg-gold group-hover:text-deep transition-all">
                  View Event →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
