"use client";

import { useState } from "react";
import PageHeader from "@/components/page-header";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="container py-16 space-y-16">
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        text="Have questions about GolfGives? We're here to help organizers and charities succeed."
      />

      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="mt-4 text-gray-600">
              Reach out to our team for support, partnerships, or general inquiries.
            </p>
          </section>

          <section className="space-y-4">
            <div className="rounded-3xl border bg-white p-6 shadow-soft">
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:hello@golfgives.com"
                className="mt-2 block text-brand hover:underline"
              >
                hello@golfgives.com
              </a>
              <p className="mt-1 text-sm text-gray-500">Response within 24 hours</p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-soft">
              <h3 className="font-semibold">Phone</h3>
              <a
                href="tel:+18005550199"
                className="mt-2 block text-brand hover:underline"
              >
                +1 (800) 555-0199
              </a>
              <p className="mt-1 text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-soft">
              <h3 className="font-semibold">Office</h3>
              <p className="mt-2 text-gray-600">
                123 Golf Drive<br />
                Suite 400<br />
                Orlando, FL 32801
              </p>
            </div>
          </section>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-3xl border bg-green-50 p-12 text-center shadow-soft">
              <div className="text-5xl">✓</div>
              <h3 className="mt-4 text-2xl font-bold text-green-700">Message Sent!</h3>
              <p className="mt-2 text-gray-600">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border bg-white p-8 shadow-soft space-y-6">
              <h2 className="text-2xl font-bold">Send us a message</h2>

              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 w-full rounded-2xl border px-4 outline-none focus:border-brand"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 w-full rounded-2xl border px-4 outline-none focus:border-brand"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-12 w-full rounded-2xl border px-4 outline-none focus:border-brand"
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="charity">Charity Application</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-2xl border px-4 py-3 outline-none focus:border-brand"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
