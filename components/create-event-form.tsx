"use client";

import { useState } from "react";
import Toast from "@/components/toast";

export default function CreateEventForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    setLoading(true);

    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: form.get("title"),
        location: form.get("location"),
        goalAmount: Number(form.get("goalAmount")),
        startsAt: form.get("startsAt")
      })
    });

    const data = await response.json();

    if (response.ok) {
      setToast("Event created successfully.");
      event.currentTarget.reset();
    } else {
      setToast(data.message || "Something went wrong.");
    }

    setLoading(false);

    setTimeout(() => {
      setToast("");
    }, 2500);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border bg-white p-6 shadow-soft"
      >
        <input
          name="title"
          placeholder="Event title"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          name="location"
          placeholder="Location"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          name="goalAmount"
          type="number"
          placeholder="Fundraising goal"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          name="startsAt"
          type="date"
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          {loading ? "Saving..." : "Save Event"}
        </button>
      </form>

      {toast && <Toast message={toast} />}
    </>
  );
}
