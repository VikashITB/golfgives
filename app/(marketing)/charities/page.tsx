import PageHeader from "@/components/page-header";

const charities = [
  "Children Health Foundation",
  "Clean Water Trust",
  "Junior Sports Fund",
  "Community Relief Network"
];

export default function CharitiesPage() {
  return (
    <main className="container py-16 space-y-8">
      <PageHeader
        eyebrow="Charities"
        title="Trusted Causes"
        text="GolfGives connects organizers with verified nonprofit initiatives."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {charities.map((item) => (
          <div
            key={item}
            className="rounded-3xl border bg-white p-6 shadow-soft"
          >
            <h3 className="font-semibold">{item}</h3>
            <p className="mt-2 text-sm text-gray-500">
              Accepting donations through upcoming events.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
