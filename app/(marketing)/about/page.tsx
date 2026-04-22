import PageHeader from "@/components/page-header";

export default function AboutPage() {
  return (
    <main className="container py-16 space-y-10">
      <PageHeader
        eyebrow="About"
        title="Why GolfGives Exists"
        text="We help golf communities turn tournaments into measurable social impact."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Mission</h3>
          <p className="mt-3 text-sm text-gray-600">
            Make charity fundraising easier for clubs and organizers.
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Vision</h3>
          <p className="mt-3 text-sm text-gray-600">
            Every golf event should create community impact.
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          <h3 className="font-semibold">Values</h3>
          <p className="mt-3 text-sm text-gray-600">
            Transparency, trust, simplicity, and generosity.
          </p>
        </div>
      </div>
    </main>
  );
}
