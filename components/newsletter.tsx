"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="rounded-3xl px-6 py-10 md:px-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-col items-start gap-2">
                <p className="text-[12px] font-mono font-semibold text-[#e8c97a] tracking-[0.15em] uppercase">
                  Stay Updated
                </p>
                <div className="w-10 h-px bg-[#c9a84c]" />
              </div>
              <h2 className="mt-4 text-3xl font-display font-bold text-[#f0ede6]">
                Get New Events and Impact Stories
              </h2>
            </div>

            {subscribed ? (
              <div className="rounded-full px-6 py-3 text-center font-semibold" style={{ background: 'rgba(201,168,76,0.2)', color: '#e8c97a' }}>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 rounded-full px-5 outline-none transition-all focus:border-[rgba(201,168,76,0.5)] [&::placeholder]:text-[rgba(240,237,230,0.3)]"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', color: '#f0ede6' }}
                />

                <button className="h-12 rounded-full px-6 font-semibold text-deep transition hover:brightness-110 hover:shadow-glow" style={{ background: 'linear-gradient(to right, #c9a84c, #b8923e)' }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
