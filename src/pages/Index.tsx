
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MethodologySection from '@/components/MethodologySection';
import TechStackSection from '@/components/TechStackSection';
import TeamSection from '@/components/TeamSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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
