import React from 'react';
import { Navigation, Footer } from '@/components/layout';
import { HeroSection, ServicesSection, TeamSection, ProjectSection, TechStackSection, MethodologySection, ContactSection } from '@/components/sections';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <TechStackSection />
      <TeamSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
