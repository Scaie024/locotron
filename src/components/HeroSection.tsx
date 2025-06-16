
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg via-white to-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-h1 text-primary-text mb-6 leading-tight">
            Organiza. Automatiza. Escala.
            <br />
            <span className="text-accent-orange">Tu negocio al siguiente nivel.</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-h2 text-secondary-text mb-8 max-w-4xl mx-auto leading-relaxed">
            Consultoría tecnológica estratégica para transformar empresas, optimizar operaciones e impulsar el crecimiento real.
          </h2>

          {/* Description */}
          <p className="text-body text-secondary-text mb-12 max-w-4xl mx-auto leading-relaxed">
            En scAIe, nos especializamos en <span className="font-semibold text-primary-text">simplificar lo complejo</span>. 
            Ayudamos a empresas a estructurar sus procesos, automatizar tareas repetitivas y escalar su impacto con 
            soluciones tecnológicas a medida. Nuestra metodología propia integra 
            <span className="font-semibold text-primary-text"> inteligencia artificial</span> y 
            <span className="font-semibold text-primary-text"> herramientas de código abierto</span> para 
            lograr eficiencia sin complejidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-9 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce Nuestra Metodología
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white text-button px-9 py-6 rounded-xl transition-all duration-200"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agenda una Consultoría Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FF6A00" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
