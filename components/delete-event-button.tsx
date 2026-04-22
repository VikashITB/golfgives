"use client";

import { useRouter } from "next/navigation";

type DeleteEventButtonProps = {
  id: string;
};

export default function DeleteEventButton({
  id
}: DeleteEventButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Delete this event?"
    );

    if (!confirmed) {
      return;
    }

    await fetch(`/api/events/${id}`, {
      method: "DELETE"
    });

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
      className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-600"
    >
      Delete
    </button>
  );
}
