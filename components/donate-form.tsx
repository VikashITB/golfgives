"use client";

import { useState } from "react";
import Toast from "@/components/toast";

type DonateFormProps = {
  eventId: string;
};

export default function DonateForm({
  eventId
}: DonateFormProps) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);

    const response = await fetch("/api/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        eventId,
        amount: Number(amount)
      })
    });

    const data = await response.json();

    setToast(
      response.ok
        ? "Donation received."
        : data.message
    );

    if (response.ok) {
      setAmount("");
    }

    setLoading(false);

    setTimeout(() => setToast(""), 2500);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl border bg-white p-6 shadow-soft"
      >
        <input
          type="number"
          placeholder="Donation amount"
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value)
          }
          className="h-12 w-full rounded-2xl border px-4 outline-none"
        />

        <button className="rounded-full bg-brand px-6 py-3 font-semibold text-white">
          {loading ? "Processing..." : "Donate"}
        </button>
      </form>

      {toast && <Toast message={toast} />}
    </>
  );
}
