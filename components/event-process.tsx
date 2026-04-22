const steps = [
  {
    title: "Create Event",
    text: "Set your date, course details, fundraising goal, and registration flow.",
    icon: "📋"
  },
  {
    title: "Invite Players",
    text: "Share your event page with golfers, sponsors, and supporters.",
    icon: "👥"
  },
  {
    title: "Raise Funds",
    text: "Track donations, ticket sales, and sponsorships in one place.",
    icon: "💰"
  },
  {
    title: "Show Impact",
    text: "Publish results and keep donors updated after the event.",
    icon: "📊"
  }
];

export default function EventProcess() {
  return (
    <section className="py-20">
      <div className="container space-y-16">
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[12px] font-mono font-semibold text-[#e8c97a] tracking-[0.15em] uppercase">
              How It Works
            </p>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#f0ede6]">
            Run a Charity Event Easily
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-1/8 right-1/8 h-px border-t border-dashed border-gold/20" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
            >
              {/* Large step number */}
              <div className="absolute -top-4 -left-2 text-[56px] font-mono font-bold text-[#c9a84c] pointer-events-none" style={{ opacity: 0.2 }}>
                0{index + 1}
              </div>

              {/* Icon card */}
              <div className="relative z-10 rounded-2xl border border-white/7 bg-surface p-6 text-center hover:border-gold/30 transition-all">
                <div className="w-12 h-12 mx-auto rounded-xl bg-elevated border border-gold/20 flex items-center justify-center text-2xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-[18px] font-display font-semibold text-[#f0ede6]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-sans leading-relaxed" style={{ color: 'rgba(240,237,230,0.65)' }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
