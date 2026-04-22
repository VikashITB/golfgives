export default function SuccessStory() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-soft md:grid-cols-2 md:items-center">
          <div className="min-h-[260px] rounded-3xl bg-gray-200" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Success Story
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              One Weekend Raised $120,000
            </h2>

            <p className="mt-4 text-gray-600">
              A regional golf community united sponsors, players, and donors to
              fully fund a children&apos;s health initiative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
