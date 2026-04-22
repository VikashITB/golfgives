"use client";

import { useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  location: string;
  date: string;
  charity: string;
  raised: number;
  goal: number;
  status: "upcoming" | "open" | "completed";
};

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Spring Charity Classic",
    location: "Pebble Beach, California",
    date: "April 15, 2026",
    charity: "Youth Education Foundation",
    raised: 24000,
    goal: 50000,
    status: "open"
  },
  {
    id: "2",
    title: "Hope Invitational",
    location: "Augusta National, Georgia",
    date: "May 20, 2026",
    charity: "Medical Support Network",
    raised: 18500,
    goal: 35000,
    status: "upcoming"
  },
  {
    id: "3",
    title: "Birdies for Change",
    location: "TPC Sawgrass, Florida",
    date: "June 10, 2026",
    charity: "Clean Water Initiative",
    raised: 31200,
    goal: 40000,
    status: "open"
  },
  {
    id: "4",
    title: "Community Cup",
    location: "Pinehurst, North Carolina",
    date: "March 25, 2026",
    charity: "Local Sports Foundation",
    raised: 45000,
    goal: 45000,
    status: "completed"
  }
];

export default function EventsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "upcoming" | "open" | "completed">("all");
  const [events] = useState<Event[]>(mockEvents);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || event.status === filter;
    return matchesSearch && matchesFilter;
  });

  const progressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <main className="container py-16 space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Public Events
        </p>
        <h1 className="mt-2 text-4xl font-bold">
          Charity Golf Tournaments
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {["all", "upcoming", "open", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === f
                  ? "bg-brand text-white"
                  : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-full rounded-2xl border px-4 outline-none md:w-64"
        />
      </div>

      {filteredEvents.length === 0 ? (
        <div className="rounded-3xl border bg-white p-12 text-center shadow-soft">
          <p className="text-gray-500">No events match your search.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl border bg-white p-6 shadow-soft"
            >
              <div className="mb-4">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    event.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : event.status === "open"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </span>
              </div>

              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{event.location}</p>
              <p className="mt-1 text-sm text-gray-500">{event.date}</p>

              <div className="mt-4">
                <p className="text-sm text-gray-600">{event.charity}</p>
                <div className="mt-2 h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-brand transition-all"
                    style={{
                      width: `${progressPercentage(event.raised, event.goal)}%`
                    }}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700">
                  ${event.raised.toLocaleString()} raised of ${event.goal.toLocaleString()}
                </p>
              </div>

              <Link
                href={`/events/${event.id}`}
                className="mt-6 inline-block w-full rounded-full bg-brand px-6 py-3 text-center font-semibold text-white transition hover:opacity-90"
              >
                View Event
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
