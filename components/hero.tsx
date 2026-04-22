import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Charity Golf Platform
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Every Round Can Change Someone&apos;s Life
          </h1>

          <p className="max-w-xl text-lg text-gray-600">
            Discover fundraising tournaments, support verified causes, and bring
            communities together through golf.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Explore Events
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <div className="space-y-4">
            <div className="rounded-2xl bg-green-50 p-5">
              <p className="text-sm text-gray-500">Funds Raised</p>
              <p className="mt-2 text-3xl font-bold">$128,400</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border p-5">
                <p className="text-sm text-gray-500">Events Hosted</p>
                <p className="mt-2 text-2xl font-bold">42</p>
              </div>

              <div className="rounded-2xl border p-5">
                <p className="text-sm text-gray-500">Lives Impacted</p>
                <p className="mt-2 text-2xl font-bold">9,300+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
