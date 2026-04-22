"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Toast from "@/components/toast";

type EditEventFormProps = {
  event: {
    id: string;
    title: string;
    location: string;
    goalAmount: number;
    startsAt: Date;
  };
};

export default function EditEventForm({
  event
}: EditEventFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  async function handleSubmit(
    formEvent: React.FormEvent<HTMLFormElement>
  ) {
    formEvent.preventDefault();

    const form = new FormData(formEvent.currentTarget);

    setLoading(true);

    const response = await fetch(
      `/api/events/${event.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: form.get("title"),
          location: form.get("location"),
          goalAmount: Number(form.get("goalAmount")),
          startsAt: form.get("startsAt")
        })
      }
    );

    const data = await response.json();

    setToast(
      response.ok
        ? "Event updated successfully."
        : data.message
    );

    setLoading(false);

    if (response.ok) {
      router.refresh();
    }

    setTimeout(() => setToast(""), 2500);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border bg-white p-6 shadow-soft"
      >
        <input
          name="title"
          defaultValue={event.title}
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          name="location"
          defaultValue={event.location}
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          name="goalAmount"
          type="number"
          defaultValue={event.goalAmount}
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <input
          name="startsAt"
          type="date"
          defaultValue={new Date(event.startsAt)
            .toISOString()
            .split("T")[0]}
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          {loading ? "Saving..." : "Update Event"}
        </button>
      </form>

      {toast && <Toast message={toast} />}
    </>
  );
}
