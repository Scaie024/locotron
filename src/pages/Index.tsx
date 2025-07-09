import React from 'react';
import { Navigation, Footer } from '@/components/layout';
import ServicesSection from '@/components/ServicesSection';
import MethodologySection from '@/components/MethodologySection';
import WorkshopSection from '@/components/WorkshopSection'; // Import the new section

export default function IndexPage() {
  return (
    <div className="ai-platform">
      <Navigation />
      
      {/* New structure focused on Workshop, Services, and Methodology */}
      <WorkshopSection />
      <ServicesSection />
      <MethodologySection />
      
      <Footer />
    </div>
  );
}
