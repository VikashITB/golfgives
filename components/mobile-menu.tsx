"use client";

import { useState } from "react";
import Link from "next/link";

const items = [
  { label: "Events", href: "/events" },
  { label: "Causes", href: "/charities" },
  { label: "About", href: "/about" }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold hover:bg-gold/10 transition-all"
      >
        Menu
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-deep/95 backdrop-blur-xl">
          <div className="container flex h-full flex-col justify-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-gold text-2xl"
            >
              ✕
            </button>
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href as any}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-display font-semibold text-primary hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href={"/sign-in" as any}
                  onClick={() => setOpen(false)}
                  className="text-center px-6 py-3 text-sm font-sans font-medium text-gold border border-gold/30 rounded-full hover:bg-gold/10 transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href={"/sign-up" as any}
                  onClick={() => setOpen(false)}
                  className="text-center px-6 py-3 text-sm font-sans font-semibold text-deep bg-gradient-to-r from-gold to-gold-dark rounded-full hover:brightness-110 transition-all"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
