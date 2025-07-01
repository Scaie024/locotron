import React from 'react';
import { Navigation, Footer } from '@/components/layout';
import HeroSection from '@/components/HeroSection';
import WorkflowShowcase from '@/components/ai/WorkflowShowcase';
import TechComparison from '@/components/ai/TechComparison';
import CaseStudies from '@/components/sections/CaseStudies';
import AiTestimonials from '@/components/sections/AiTestimonials';
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
      
      <WorkflowShowcase 
        tools={['n8n', 'Make', 'Zapier']}
        llms={['GPT-4', 'Claude', 'Llama3']}
      />
      
      <TechComparison />
      
      <CaseStudies 
        cases={[
          {
            title: "E-commerce de Moda",
            result: "+40% conversiones",
            tools: ["n8n", "Claude", "Vercel"]
          },
          {
            title: "Soporte Automatizado",
            result: "-70% tiempo respuesta",
            tools: ["Make", "GPT-4", "Airtable"]
          }
        ]}
      />
      
      <AiTestimonials />
      
      <Footer />
    </div>
  );
}
