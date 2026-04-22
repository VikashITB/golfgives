"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Charities Supported", value: 58 },
  { label: "Golfers Joined", value: 12000 },
  { label: "Cities Reached", value: 26 },
  { label: "Volunteer Hours", value: 18400 }
];

export default function ImpactStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          const increment = stat.value / steps;
          newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          return newCounts;
        });
      }, interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [visible]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K+";
    }
    return Math.floor(num).toString();
  };

  return (
    <section ref={ref} className="py-16 bg-surface border-y border-gold/12">
      <div className="container">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/7">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="px-8 py-8 text-center"
            >
              <p className="text-4xl md:text-5xl font-mono font-bold text-[#e8c97a]">
                {item.label === "Golfers Joined" || item.label === "Volunteer Hours"
                  ? formatNumber(counts[index]) + "+"
                  : formatNumber(counts[index]) + "+"}
              </p>
              <p className="mt-2 text-xs font-sans uppercase tracking-[0.1em]" style={{ color: 'rgba(240,237,230,0.6)' }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
