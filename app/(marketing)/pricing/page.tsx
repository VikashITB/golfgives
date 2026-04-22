import PricingPlans from "@/components/pricing-plans";
import PageHeader from "@/components/page-header";

export default function PricingPage() {
  return (
    <main className="container py-16 space-y-10">
      <PageHeader
        eyebrow="Pricing"
        title="Simple Plans for Organizers"
        text="Choose the plan that matches your fundraising goals."
      />

      <PricingPlans />
    </main>
  );
}
