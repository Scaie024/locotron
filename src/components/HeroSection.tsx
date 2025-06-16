import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-primary-neutral pt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-[80px] md:text-[100px] lg:text-[120px] text-primary-black mb-8 leading-[0.9] font-black tracking-tight text-balance">
            Transforma. 
            <br />
            <span className="font-semibold text-accent-mainBlue">Automatiza.</span>
            <br />
            <span className="text-[60px] md:text-[80px] lg:text-[90px] font-bold text-secondary-gray">
              Impulsa tu negocio.
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-[32px] md:text-[42px] lg:text-[52px] text-secondary-gray mb-10 max-w-5xl mx-auto leading-tight font-bold text-balance">
            Consultoría tecnológica que transforma empresas, 
            optimiza procesos y genera resultados medibles.
          </h2>

          {/* Description */}
          <div className="text-[20px] md:text-[22px] lg:text-[24px] text-secondary-gray mb-12 max-w-4xl mx-auto leading-relaxed space-y-4">
            <p className="text-balance">
              En <span className="font-bold text-primary-black text-[28px]">scAIe</span>, convertimos la complejidad en 
              <span className="font-semibold text-primary-black"> soluciones simples</span>. 
            </p>
            <p className="text-[24px] md:text-[28px] lg:text-[32px] text-secondary-gray leading-relaxed mb-10 max-w-3xl mx-auto">
              Transformamos tu negocio con <span className="font-semibold text-accent-mainBlue"> IA</span> y
              <span className="font-semibold text-accent-mainBlue"> tecnología de código abierto</span> para
              optimizar procesos y potenciar el crecimiento.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              className="btn-primary text-[20px] px-10 py-5 rounded-2xl w-full sm:w-auto"
              onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Nuestra Metodología
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="btn-secondary text-[20px] px-10 py-5 rounded-2xl w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
            >
              Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000000" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
