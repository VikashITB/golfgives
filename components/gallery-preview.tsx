const cards = ["Tournament Day", "Award Ceremony", "Community Donation"];

export default function GalleryPreview() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-bold">Moments That Matter</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((item) => (
            <div
              key={item}
              className="flex min-h-[220px] items-end rounded-3xl bg-gray-200 p-6 font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
