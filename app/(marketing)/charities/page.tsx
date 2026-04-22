import Link from "next/link";
import PageHeader from "@/components/page-header";

const charities = [
  {
    name: "Children Health Foundation",
    category: "Healthcare",
    raised: "$1.2M",
    events: 45,
    description: "Providing medical care and health education to underserved children worldwide."
  },
  {
    name: "Clean Water Trust",
    category: "Environment",
    raised: "$890K",
    events: 32,
    description: "Building sustainable water infrastructure in communities without access to clean water."
  },
  {
    name: "Junior Sports Fund",
    category: "Youth Development",
    raised: "$650K",
    events: 28,
    description: "Creating sports programs and scholarships for underprivileged youth."
  },
  {
    name: "Community Relief Network",
    category: "Humanitarian",
    raised: "$1.5M",
    events: 52,
    description: "Emergency relief and long-term recovery support for disaster-affected communities."
  },
  {
    name: "Education First Initiative",
    category: "Education",
    raised: "$420K",
    events: 18,
    description: "Building schools and providing educational resources in developing regions."
  },
  {
    name: "Veterans Support Alliance",
    category: "Military",
    raised: "$780K",
    events: 35,
    description: "Supporting veterans with healthcare, housing, and career transition services."
  }
];

const categories = ["All", "Healthcare", "Environment", "Youth Development", "Humanitarian", "Education", "Military"];

export default function CharitiesPage() {
  return (
    <main className="container py-16 space-y-16">
      <PageHeader
        eyebrow="Charities"
        title="Trusted Causes"
        text="GolfGives connects organizers with verified nonprofit initiatives making real impact."
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Browse by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:bg-gray-50"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Charities</h2>
          <p className="text-sm text-gray-500">
            Total Impact: <span className="font-semibold text-brand">$5.44M raised</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {charities.map((charity) => (
            <div key={charity.name} className="rounded-3xl border bg-white p-6 shadow-soft">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {charity.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold">{charity.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{charity.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>{charity.events} events</span>
                <span>•</span>
                <span className="font-semibold text-brand">{charity.raised} raised</span>
              </div>
              <Link
                href="/events"
                className="mt-6 inline-block w-full rounded-full border px-6 py-3 text-center font-semibold transition hover:bg-gray-50"
              >
                View Events
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-brand p-12 text-center text-white">
        <h2 className="text-3xl font-bold">Represent a Charity?</h2>
        <p className="mt-4 text-lg text-white/80">
          Partner with GolfGives to connect with golf communities and amplify your impact.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href={"/contact" as any}
            className="rounded-full bg-white px-8 py-3 font-semibold text-brand transition hover:opacity-90"
          >
            Apply to Partner
          </Link>
          <Link
            href={"/about" as any}
            className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
