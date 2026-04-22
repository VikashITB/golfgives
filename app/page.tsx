"use client";

import { useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Sponsors from "@/components/sponsors";
import ImpactStats from "@/components/impact-stats";
import MetricsBar from "@/components/metrics-bar";
import FeaturedEvents from "@/components/featured-events";
import EventProcess from "@/components/event-process";
import LiveImpact from "@/components/live-impact";
import DonationTracker from "@/components/donation-tracker";
import Causes from "@/components/causes";
import SupportOptions from "@/components/support-options";
import AboutSection from "@/components/about-section";
import CoursePartners from "@/components/course-partners";
import VolunteerSection from "@/components/volunteer-section";
import GalleryPreview from "@/components/gallery-preview";
import SuccessStory from "@/components/success-story";
import Testimonials from "@/components/testimonials";
import PricingPlans from "@/components/pricing-plans";
import Leaderboard from "@/components/leaderboard";
import TeamSection from "@/components/team-section";
import BlogPreview from "@/components/blog-preview";
import Faq from "@/components/faq";
import Newsletter from "@/components/newsletter";
import ContactStrip from "@/components/contact-strip";
import CtaBanner from "@/components/cta-banner";
import Footer from "@/components/footer";
import DonateModal from "@/components/DonateModal";

export default function HomePage() {
  const [donateModal, setDonateModal] = useState<{ open: boolean; charity: string }>({
    open: false,
    charity: ''
  });

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <Hero />
        <Sponsors />
        <ImpactStats />
        <MetricsBar />
        <FeaturedEvents />
        <EventProcess />
        <LiveImpact />
        <DonationTracker onDonate={(charity) => setDonateModal({ open: true, charity })} />
        <Causes />
        <SupportOptions onDonate={() => setDonateModal({ open: true, charity: 'GolfGives Charity Fund' })} />
        <AboutSection />
        <CoursePartners />
        <VolunteerSection />
        <GalleryPreview />
        <SuccessStory />
        <Testimonials />
        <PricingPlans />
        <Leaderboard />
        <TeamSection />
        <BlogPreview />
        <Faq />
        <Newsletter />
        <ContactStrip />
        <CtaBanner />
      </main>

      <Footer />

      {donateModal.open && (
        <DonateModal
          charityName={donateModal.charity}
          onClose={() => setDonateModal({ open: false, charity: '' })}
        />
      )}
    </>
  );
}
