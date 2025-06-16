
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-orange-50/30 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center animate-fade-in">
          {/* Main Title - Ajustado según línea gráfica */}
          <h1 className="text-display text-primary-text mb-8 leading-none font-black tracking-tight">
            Organiza. Automatiza. Escala.
            <br />
            <span className="text-accent-orange">Tu negocio al siguiente nivel.</span>
          </h1>

          {/* Subtitle - Más grande y prominente */}
          <h2 className="text-h1 text-secondary-text mb-8 max-w-5xl mx-auto leading-tight font-bold">
            Consultoría tecnológica estratégica para transformar empresas, optimizar operaciones e impulsar el crecimiento real.
          </h2>

          {/* Description - Ajustado */}
          <p className="text-body-lg text-secondary-text mb-12 max-w-4xl mx-auto leading-relaxed">
            En scAIe, nos especializamos en <span className="font-semibold text-primary-text">simplificar lo complejo</span>. 
            Ayudamos a empresas a estructurar sus procesos, automatizar tareas repetitivas y escalar su impacto con 
            soluciones tecnológicas a medida. Nuestra metodología propia integra 
            <span className="font-semibold text-primary-text"> inteligencia artificial</span> y 
            <span className="font-semibold text-primary-text"> herramientas de código abierto</span> para 
            lograr eficiencia sin complejidad.
          </p>

          {/* CTA Buttons - Mejorados */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button-lg px-10 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-0"
              onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce Nuestra Metodología
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white text-button-lg px-10 py-4 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda una Consultoría Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern - Más sutil */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="12" height="12" patternUnits="userSpaceOnUse">
              <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#FF6A00" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
