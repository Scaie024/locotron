import { Navigation, Footer } from '@/components/layout';
import TechStackSection from '@/components/TechStackSection';

export default function StackPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <TechStackSection />
      <Footer />
    </div>
  );
} 