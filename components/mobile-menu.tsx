"use client";

import { useState } from "react";
import Link from "next/link";

const items = [
  { label: "Events", href: "#events" },
  { label: "Causes", href: "#causes" },
  { label: "About", href: "#about" }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border px-4 py-2 text-sm font-semibold"
      >
        Menu
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-20 rounded-3xl border bg-white p-5 shadow-soft">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href as any}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
