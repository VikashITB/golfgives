"use client";

import { useState } from "react";
import PricingPlans from "@/components/pricing-plans";
import PageHeader from "@/components/page-header";
import Link from "next/link";

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "Is there a free trial?",
    answer: "The Starter plan is free forever. Growth plan includes a 14-day free trial with no credit card required."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees."
  }
];

const features = [
  { name: "Active Events", starter: "1", growth: "Unlimited", enterprise: "Unlimited" },
  { name: "Custom Branding", starter: "✗", growth: "✓", enterprise: "✓" },
  { name: "Sponsor Management", starter: "✗", growth: "✓", enterprise: "✓" },
  { name: "Priority Support", starter: "✗", growth: "✓", enterprise: "✓" },
  { name: "Advanced Analytics", starter: "✗", growth: "✓", enterprise: "✓" },
  { name: "API Access", starter: "✗", growth: "✓", enterprise: "✓" },
  { name: "Dedicated Account Manager", starter: "✗", growth: "✗", enterprise: "✓" },
  { name: "White-label Solution", starter: "✗", growth: "✗", enterprise: "✓" }
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="container py-16 space-y-16">
      <PageHeader
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        text="Choose the plan that matches your fundraising goals."
      />

      <div className="flex items-center justify-center gap-4">
        <span className={!annual ? "font-semibold text-brand" : "text-gray-600"}>Monthly</span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`h-8 w-16 rounded-full p-1 transition ${
            annual ? "bg-brand" : "bg-gray-300"
          }`}
        >
          <div
            className={`h-6 w-6 rounded-full bg-white transition ${
              annual ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
        <span className={annual ? "font-semibold text-brand" : "text-gray-600"}>
          Annual <span className="text-sm text-green-600">(Save 20%)</span>
        </span>
      </div>

      <PricingPlans annual={annual} />

      <section className="rounded-3xl border bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold">Feature Comparison</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-center font-semibold">Starter</th>
                <th className="px-4 py-3 text-center font-semibold">Growth</th>
                <th className="px-4 py-3 text-center font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.name} className="border-b">
                  <td className="px-4 py-3 font-medium">{feature.name}</td>
                  <td className="px-4 py-3 text-center">{feature.starter}</td>
                  <td className="px-4 py-3 text-center font-semibold text-brand">{feature.growth}</td>
                  <td className="px-4 py-3 text-center font-semibold text-brand">{feature.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-3xl border bg-white p-6 shadow-soft">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between text-left font-semibold"
              >
                {faq.question}
                <span className="text-2xl text-brand">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>
              {openFaq === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-brand p-12 text-center text-white">
        <h2 className="text-3xl font-bold">Not sure which plan?</h2>
        <p className="mt-4 text-lg text-white/80">
          Our team can help you find the right solution for your organization.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand transition hover:opacity-90"
        >
          Talk to Us
        </Link>
      </section>
    </main>
  );
}
