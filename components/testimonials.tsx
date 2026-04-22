const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Event Organizer",
    text: "GolfGives helped us raise more in one weekend than we expected all season.",
    rating: 5
  },
  {
    name: "James Carter",
    role: "Donor",
    text: "Clean interface, real causes, and complete transparency on donations.",
    rating: 5
  },
  {
    name: "Daniel Brooks",
    role: "Player",
    text: "I joined for golf, but stayed because the impact feels real.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs font-mono text-gold tracking-[0.2em] uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
            What People Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-white/7 bg-surface p-8 relative"
            >
              {/* Quote mark */}
              <div className="text-6xl font-display text-gold/40 leading-none">
                "
              </div>

              {/* Stars */}
              <div className="mt-2 text-gold text-sm">
                {"★".repeat(item.rating)}
              </div>

              {/* Quote */}
              <p className="mt-4 text-base font-sans text-primary italic leading-relaxed">
                {item.text}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold/40" />
                <div>
                  <p className="font-display font-semibold text-primary">
                    {item.name}
                  </p>
                  <p className="text-sm text-secondary">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
