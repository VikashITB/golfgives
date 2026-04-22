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
        <div className="rounded-3xl bg-gray-900 px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Stay Updated
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Get New Events and Impact Stories
              </h2>
            </div>

            {subscribed ? (
              <div className="rounded-full bg-green-500 px-6 py-3 text-center font-semibold">
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
                  className="h-12 flex-1 rounded-full px-5 text-gray-900 outline-none"
                />

                <button className="h-12 rounded-full bg-brand px-6 font-semibold text-white transition hover:opacity-90">
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
