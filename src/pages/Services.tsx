import { useEffect } from 'react';
import { Navigation, Footer } from '@/components/layout';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.substring(1);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const headerHeight = document.querySelector('nav')?.offsetHeight || 0;
            window.scrollTo({
              top: element.offsetTop - headerHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-neutral via-white to-gray-100 flex flex-col justify-between">
      <Navigation />
      <main className="pt-20 flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}