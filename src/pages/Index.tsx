import React from 'react';
import { Navigation, Footer } from '@/components/layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import OPTTimeline from '@/components/OPTTimeline';

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <OPTTimeline />
      <FAQSection />
      <Footer />
    </div>
  );
}
