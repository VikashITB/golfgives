import Link from "next/link";
import PageHeader from "@/components/page-header";

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", bio: "Former PGA Tour operations lead with 10+ years in sports philanthropy." },
  { name: "Marcus Johnson", role: "CTO", bio: "Built fundraising platforms used by 500+ nonprofits globally." },
  { name: "Emily Rodriguez", role: "Head of Partnerships", bio: "Connected 200+ charities with corporate sponsors through sports." }
];

const stats = [
  { label: "Events Hosted", value: "1,200+" },
  { label: "Funds Raised", value: "$4.2M" },
  { label: "Charities Supported", value: "350+" },
  { label: "Countries", value: "12" }
];

export default function AboutPage() {
  return (
    <main className="container py-16 space-y-16">
      <PageHeader
        eyebrow="About"
        title="Why GolfGives Exists"
        text="We help golf communities turn tournaments into measurable social impact."
      />

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="max-w-2xl text-lg text-gray-600">
          GolfGives exists to democratize charity fundraising. We believe every golf club, 
          from local munis to championship courses, should have the tools to host impactful 
          fundraising tournaments without technical barriers or excessive fees.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="max-w-2xl text-lg text-gray-600">
          Founded in 2024 by a team of sports technology veterans and nonprofit leaders, 
          GolfGives was born from a simple observation: while golf raises billions for charity 
          annually, the tools available to organizers were outdated, expensive, or both. 
          We set out to change that.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-brand">Transparency</h3>
            <p className="mt-2 text-sm text-gray-600">
              Every dollar tracked, every donor acknowledged, full visibility into impact.
            </p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-brand">Trust</h3>
            <p className="mt-2 text-sm text-gray-600">
              Built for organizers who care about their reputation and donor relationships.
            </p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-brand">Simplicity</h3>
            <p className="mt-2 text-sm text-gray-600">
              Setup in minutes, not days. Focus on your event, not your software.
            </p>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-soft">
            <h3 className="font-semibold text-brand">Generosity</h3>
            <p className="mt-2 text-sm text-gray-600">
              We're mission-driven. Free for small events, fair pricing for growth.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border bg-white p-6 shadow-soft text-center">
              <p className="text-3xl font-bold text-brand">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border bg-white p-6 shadow-soft">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-brand">{member.role}</p>
              <p className="mt-3 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-brand p-12 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Make an Impact?</h2>
        <p className="mt-4 text-lg text-white/80">
          Join thousands of organizers using GolfGives to power their charity events.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/dashboard/create-event"
            className="rounded-full bg-white px-8 py-3 font-semibold text-brand transition hover:opacity-90"
          >
            Start Your Event
          </Link>
          <Link
            href={"/contact" as any}
            className="rounded-full border border-white px-8 py-3 font-semibold transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
