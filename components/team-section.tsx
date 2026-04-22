const team = ["Operations", "Partnerships", "Support", "Community"];

export default function TeamSection() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Our Team
          </p>
          <h2 className="mt-2 text-3xl font-bold">People Behind GolfGives</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((item) => (
            <div
              key={item}
              className="rounded-3xl border bg-white p-6 text-center shadow-soft"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-gray-200" />
              <p className="mt-4 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
