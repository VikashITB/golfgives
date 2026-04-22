const courses = [
  "Pebble Ridge Club",
  "Oak Valley Greens",
  "Riverstone Golf",
  "Suncrest Links"
];

export default function CoursePartners() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Venue Partners
          </p>
          <h2 className="mt-2 text-3xl font-bold">Courses Hosting Events</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {courses.map((item) => (
            <div
              key={item}
              className="rounded-3xl border bg-white p-6 text-center shadow-soft"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
