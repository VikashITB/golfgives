import type { ReactNode } from "react";
import Link from "next/link";

type AdminLayoutProps = {
  children: ReactNode;
};

const links = [
  { label: "Overview", href: "/admin" },
  { label: "Users", href: "/admin/users" },
  { label: "Reports", href: "/admin/reports" }
];

export default function AdminLayout({
  children
}: AdminLayoutProps) {
  return (
    <div className="container grid gap-8 py-10 md:grid-cols-[240px_1fr]">
      <aside className="rounded-3xl border bg-white p-4 shadow-soft">
        <p className="px-4 py-2 font-semibold">
          Admin Panel
        </p>

        <div className="mt-2 flex flex-col gap-2">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href as any}
              className="rounded-2xl px-4 py-3 text-sm font-medium hover:bg-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>

      <section>{children}</section>
    </div>
  );
}
