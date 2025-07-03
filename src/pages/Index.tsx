import React from 'react';
import { Navigation, Footer } from '@/components/layout';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MethodologySection from '@/components/MethodologySection';

export default function IndexPage() {
  return (
    <div className="ai-platform">
      <Navigation />
      
      {/* Nueva estructura con enfoque en consultoría y metodología OPT */}
      <HeroSection 
        title="Consultoría Tecnológica con Metodología OPT" 
        description="Transformamos tu empresa mediante la optimización de la Organización, Procesos y Tecnología para lograr resultados extraordinarios."
        ctaText="Descubre cómo"
        ctaLink="/metodologia"
        secondaryText="Ver servicios"
        secondaryLink="/servicios"
      />
      
      <MethodologySection />
      
      <ServicesSection />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
}
