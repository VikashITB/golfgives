export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            About Us
          </p>

          <h2 className="text-3xl font-bold">
            Building Community Through Charity Golf
          </h2>

          <p className="text-gray-600">
            GolfGives connects organizers, sponsors, players, and nonprofits in
            one place. We make fundraising events easier to launch, manage, and
            grow.
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-soft">
          <p className="text-sm text-gray-500">Our Mission</p>
          <p className="mt-3 text-lg font-medium">
            Turn every tournament into measurable impact.
          </p>
        </div>
      </div>
    </section>
  );
}
