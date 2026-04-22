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
          <div className="flex flex-col items-center gap-2">
            <p className="text-[12px] font-mono font-semibold text-[#e8c97a] tracking-[0.15em] uppercase">
              Testimonials
            </p>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#f0ede6]">
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

              {/* Quote text */}
              <p className="mt-4 text-base font-sans italic leading-relaxed" style={{ color: '#f0ede6', opacity: 0.85 }}>
                {item.text}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold/40" />
                <div>
                  <p className="font-display font-semibold text-[#f0ede6]">
                    {item.name}
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(240,237,230,0.45)' }}>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
