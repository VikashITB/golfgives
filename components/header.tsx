"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";
import AuthButtons from "@/components/auth-buttons";

const navItems = [
  { label: "Events", href: "/events" },
  { label: "Causes", href: "/charities" },
  { label: "About", href: "/about" },
  { label: "Dashboard", href: "/dashboard" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10,15,13,0.95)] backdrop-blur-xl border-b border-gold/15 shadow-lg"
          : "bg-[rgba(10,15,13,0.85)] backdrop-blur-md border-b border-gold/10"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gold">⛳</span>
          <span className="text-2xl font-display font-bold text-primary">GolfGives</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href as any}
              className="text-sm font-sans text-secondary hover:text-gold-light transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={"/sign-in" as any}
            className="px-5 py-2.5 text-sm font-sans font-medium text-gold border border-gold/30 rounded-full hover:bg-gold/10 transition-all"
          >
            Sign In
          </Link>
          <Link
            href={"/sign-up" as any}
            className="px-5 py-2.5 text-sm font-sans font-semibold text-deep bg-gradient-to-r from-gold to-gold-dark rounded-full hover:brightness-110 hover:shadow-glow transition-all"
          >
            Get Started
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
