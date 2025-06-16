
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-orange-50/40 pt-16">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-40">
        <div className="text-center animate-fade-in">
          {/* Main Title - Más grande e impactante */}
          <h1 className="text-hero md:text-hero lg:text-[120px] text-primary-text mb-12 leading-none font-black tracking-tight text-balance">
            Organiza. Automatiza. 
            <br />
            <span className="text-accent-orange">Escala.</span>
            <br />
            <span className="text-display md:text-h1 lg:text-[80px] font-bold text-secondary-text">
              Tu negocio al siguiente nivel.
            </span>
          </h1>

          {/* Subtitle - Más prominente */}
          <h2 className="text-h3 md:text-h2 lg:text-[52px] text-secondary-text mb-12 max-w-6xl mx-auto leading-tight font-bold text-balance">
            Consultoría tecnológica estratégica para transformar empresas, 
            optimizar operaciones e impulsar el crecimiento real.
          </h2>

          {/* Description - Mejor jerarquía */}
          <div className="text-body-xl md:text-subtitle lg:text-[24px] text-secondary-text mb-16 max-w-5xl mx-auto leading-relaxed space-y-4">
            <p className="text-balance">
              En <span className="font-bold text-primary-text text-h4">scAIe</span>, nos especializamos en 
              <span className="font-semibold text-primary-text"> simplificar lo complejo</span>. 
            </p>
            <p className="text-balance">
              Ayudamos a empresas a estructurar sus procesos, automatizar tareas repetitivas y escalar su impacto con 
              soluciones tecnológicas a medida. Nuestra metodología propia integra 
              <span className="font-semibold text-accent-orange"> inteligencia artificial</span> y 
              <span className="font-semibold text-accent-orange"> herramientas de código abierto</span> para 
              lograr eficiencia sin complejidad.
            </p>
          </div>

          {/* CTA Buttons - Más grandes y prominentes */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center animate-scale-in">
            <Button 
              className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button-xl px-12 py-6 rounded-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-0 font-bold"
              onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce Nuestra Metodología
              <ArrowRight className="ml-4 h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-3 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white text-button-lg px-12 py-6 rounded-3xl transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl font-semibold"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda una Consultoría Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern - Más elegante */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FF6A00" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
