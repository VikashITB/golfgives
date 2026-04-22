const options = [
  "Sponsor an Event",
  "Donate Directly",
  "Register as Player",
  "Partner as Nonprofit"
];

export default function SupportOptions() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl bg-green-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Ways to Support
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {options.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white px-5 py-4 font-medium shadow-soft"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
