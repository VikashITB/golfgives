"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-elevated via-deep to-deep" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container text-center space-y-8 py-20">
        {/* Gold horizontal rule */}
        <div className={`w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0ms' }} />

        {/* Eyebrow */}
        <p className={`text-xs font-mono text-gold tracking-[0.2em] uppercase ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          Charity Golf Platform
        </p>

        {/* Main headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <span className="text-primary">Every Round</span>
          <br />
          <span className="text-gold">Changes Lives.</span>
        </h1>

        {/* Sub-headline */}
        <p className={`max-w-lg mx-auto text-base md:text-lg text-secondary ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
          Discover fundraising tournaments, support verified causes, and bring communities together through golf.
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <Link
            href="/events"
            className="px-8 py-4 text-sm font-sans font-semibold text-deep bg-gradient-to-r from-gold to-gold-dark rounded-full hover:brightness-110 hover:shadow-glow transition-all"
          >
            Explore Events →
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 text-sm font-sans font-semibold text-primary border border-white/20 rounded-full hover:bg-white/5 transition-all"
          >
            How It Works
          </Link>
        </div>

        {/* Trust line */}
        <div className={`flex items-center justify-center gap-3 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gold/20 border-2 border-gold/40" />
            <div className="w-8 h-8 rounded-full bg-gold/30 border-2 border-gold/40" />
            <div className="w-8 h-8 rounded-full bg-gold/40 border-2 border-gold/40" />
          </div>
          <span className="text-sm text-secondary">Joined by 12,000+ golfers</span>
        </div>

        {/* Animated chevron */}
        <div className={`mt-12 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full mx-auto flex justify-center pt-2 animate-bounce">
            <div className="w-1 h-2 bg-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
