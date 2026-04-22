import Link from "next/link";

const links = [
  { label: "Overview", href: "/dashboard" },
  { label: "Events", href: "/dashboard/events" },
  { label: "Create Event", href: "/dashboard/create-event" }
];

export default function DashboardNav() {
  return (
    <div className="rounded-3xl border bg-white p-4 shadow-soft">
      <div className="flex flex-col gap-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href as any}
            className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
