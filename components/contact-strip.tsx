import Link from "next/link";

export default function ContactStrip() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="rounded-3xl border bg-white p-6 shadow-soft md:flex md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Need help planning an event?</p>
            <p className="text-sm text-gray-500">
              Our team can guide setup, sponsors, and registrations.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90 md:mt-0"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
