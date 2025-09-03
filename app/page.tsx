'use client';
import AboutSection from '@/components/AboutSection/AboutSection';
import BannerSection from '@/components/BannerSection/BannerSection';
import ChallengeSection from '@/components/ChallengeSection/ChallengeSection';
import ContactSection from '@/components/ContactSection/ContactSection';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import ServiceSection from '@/components/ServiceSection/ServiceSection';
import SetupSection from '@/components/SetupSection/SetupSection';
import SponsorSection from '@/components/SponsorSection/SponsorSection';
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection';
import { useEffect, useState } from 'react';

export default function Page() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!showMain) {
    return <div className="preloader"></div>;
  }

  return (
    <main className="homenest-main">
      <BannerSection />
      <SponsorSection />
      <AboutSection />
      <SetupSection />
      <FeatureSection />
      <ServiceSection />
      <TestimonialSection />
      <ChallengeSection />
      <ContactSection />
    </main>
  );
}
