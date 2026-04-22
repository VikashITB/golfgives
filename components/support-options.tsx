import Link from "next/link";

const options = [
  { label: "Sponsor an Event", href: "/events" },
  { label: "Donate Directly", href: "/events" },
  { label: "Register as Player", href: "/events" },
  { label: "Partner as Nonprofit", href: "/charities" }
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
              <Link
                key={item.label}
                href={item.href as any}
                className="rounded-2xl bg-white px-5 py-4 font-medium shadow-soft transition hover:shadow-md"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
