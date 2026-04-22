import CreateEventForm from "@/components/create-event-form";

export default function CreateEventPage() {
  return (
    <main className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          New Event
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Create Charity Tournament
        </h1>
      </div>

      <CreateEventForm />
    </main>
  );
}
