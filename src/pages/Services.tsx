import { Navigation, Footer } from '@/components/layout';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="services-page">
      <Navigation />
      <ServicesSection />
      <Footer />
    </div>
  );
}