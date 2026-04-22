const steps = [
  {
    title: "Create Event",
    text: "Set your date, course details, fundraising goal, and registration flow."
  },
  {
    title: "Invite Players",
    text: "Share your event page with golfers, sponsors, and supporters."
  },
  {
    title: "Raise Funds",
    text: "Track donations, ticket sales, and sponsorships in one place."
  },
  {
    title: "Show Impact",
    text: "Publish results and keep donors updated after the event."
  }
];

export default function EventProcess() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl font-bold">Run a Charity Event Easily</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <p className="text-sm font-semibold text-brand">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
