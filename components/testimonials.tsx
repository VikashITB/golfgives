const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Event Organizer",
    text: "GolfGives helped us raise more in one weekend than we expected all season."
  },
  {
    name: "James Carter",
    role: "Donor",
    text: "Clean interface, real causes, and complete transparency on donations."
  },
  {
    name: "Daniel Brooks",
    role: "Player",
    text: "I joined for golf, but stayed because the impact feels real."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold">What People Say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <p className="text-gray-600">{item.text}</p>
              <div className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
