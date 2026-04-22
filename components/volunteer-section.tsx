import Link from "next/link";

export default function VolunteerSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 rounded-3xl border bg-white p-8 shadow-soft md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Volunteers
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Help Make Events Successful
            </h2>

            <p className="mt-4 text-gray-600">
              Join registration desks, player support teams, logistics, and
              community outreach for upcoming charity tournaments.
            </p>
          </div>

          <div className="md:text-right">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
