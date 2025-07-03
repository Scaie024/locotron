import React from 'react';
import { ArrowRight, Users, BarChart3, Zap, CheckCircle2, Target, TrendingUp, Award, Clock, Building2, Workflow, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryText: string;
  secondaryLink: string;
}

const HeroSection = ({ 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  secondaryText, 
  secondaryLink 
}: HeroSectionProps) => {
  const optBenefits = [
    {
      icon: <Building2 className="h-6 w-6" />, 
      title: 'Organización',
      desc: 'Estructuras claras y roles definidos para maximizar la eficiencia de tu equipo.',
      color: 'bg-opt-organizacion',
      textColor: 'text-white'
    },
    {
      icon: <Workflow className="h-6 w-6" />, 
      title: 'Procesos',
      desc: 'Flujos optimizados y automatizados que eliminan cuellos de botella.',
      color: 'bg-opt-procesos',
      textColor: 'text-gray-800'
    },
    {
      icon: <Cpu className="h-6 w-6" />, 
      title: 'Tecnología',
      desc: 'Herramientas inteligentes que potencian el crecimiento de tu empresa.',
      color: 'bg-opt-tecnologias',
      textColor: 'text-gray-800'
    },
  ];

  const processSteps = [
    {
      icon: <Target className="h-10 w-10" style={{ color: '#D2AA52' }} />,
      title: 'Diagnóstico OPT',
      desc: 'Analizamos tu Organización, Procesos y Tecnología actual para identificar oportunidades.'
    },
    {
      icon: <TrendingUp className="h-10 w-10" style={{ color: '#D2DFC3' }} />,
      title: 'Implementación OPT',
      desc: 'Desarrollamos e integramos soluciones siguiendo nuestra metodología probada.'
    },
    {
      icon: <Award className="h-10 w-10" style={{ color: '#C4D8DF' }} />,
      title: 'Optimización Continua',
      desc: 'Medimos resultados y refinamos cada fase OPT para máximo impacto.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Proyectos OPT Exitosos' },
    { number: '40%', label: 'Mejora en Eficiencia' },
    { number: '10+', label: 'Años Aplicando OPT' },
    { number: '95%', label: 'Clientes Satisfechos' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary-neutral via-white to-gray-200 pt-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl text-primary-black mb-6 leading-tight font-black tracking-tight text-balance drop-shadow-xl">
            <span className="block">Transforma tu empresa</span>
            <span className="block" style={{ color: '#D2AA52' }}>con la metodología OPT</span>
          </h1>
          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-secondary-gray mb-8 max-w-3xl mx-auto leading-tight font-bold text-balance">
            Alineamos <span className="font-bold text-primary-black">Organización, Procesos y Tecnología</span> para potenciar tus resultados.
          </h2>
          {/* CTA Button */}
          <div className="flex justify-center mb-10">
            <Button 
              className="bg-gray-500 hover:bg-gray-600 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
              asChild
            >
              <Link to="/contacto">
                Solicita tu diagnóstico OPT gratuito
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </Link>
            </Button>
          </div>
          
          {/* OPT Methodology Highlight */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-primary-black mb-6">
              Los 3 Pilares de Nuestra Metodología
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {optBenefits.map((benefit, i) => (
                <div key={i} className={`${benefit.color} ${benefit.textColor} rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-xs font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
            <div className="bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#D2AA52' }}>
              <Zap className="h-6 w-6 mb-3" style={{ color: '#D2AA52' }} />
              <h3 className="text-lg font-bold mb-2 text-primary-black">Automatización Inteligente</h3>
              <p className="text-sm text-secondary-gray font-medium">Optimiza procesos con IA aplicada a tu negocio.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#D2DFC3' }}>
              <BarChart3 className="h-6 w-6 mb-3" style={{ color: '#D2DFC3' }} />
              <h3 className="text-lg font-bold mb-2 text-primary-black">Resultados Medibles</h3>
              <p className="text-sm text-secondary-gray font-medium">Enfocados en impacto real: eficiencia, ventas y satisfacción.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#C4D8DF' }}>
              <Users className="h-6 w-6 mb-3" style={{ color: '#C4D8DF' }} />
              <h3 className="text-lg font-bold mb-2 text-primary-black">Acompañamiento Experto</h3>
              <p className="text-sm text-secondary-gray font-medium">Más de 10 años aplicando OPT para innovar y crecer.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#D2AA52' }}>
              <CheckCircle2 className="h-6 w-6 mb-3" style={{ color: '#D2AA52' }} />
              <h3 className="text-lg font-bold mb-2 text-primary-black">Soluciones OPT</h3>
              <p className="text-sm text-secondary-gray font-medium">Desarrollamos tecnología que se adapta a tu metodología.</p>
            </div>
          </div>
          
          {/* Inspirational Quote */}
          <blockquote className="italic text-lg md:text-xl font-semibold border-l-4 pl-4 max-w-2xl mx-auto mb-0" style={{ color: '#D2AA52', borderColor: '#D2AA52' }}>
            "La transformación digital con OPT no es solo tecnología, es <span className='font-bold'>estrategia</span>, <span className='font-bold'>personas</span> y <span className='font-bold'>resultados</span>."
          </blockquote>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none animate-pulse-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D2AA52" strokeWidth="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
              <span className="block">Nuestro Proceso</span>
              <span className="block" style={{ color: '#D2AA52' }}>Simple y Transparente</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-secondary-gray max-w-3xl mx-auto">
              Te guiamos en cada paso de la transformación para asegurar el éxito.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg border mb-4" style={{ borderColor: step.icon.props.style?.color }}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-black mb-3">{step.title}</h3>
                <p className="text-sm text-secondary-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-3">
              Resultados con Metodología OPT
            </h3>
            <p className="text-base md:text-lg text-secondary-gray">
              Números que hablan por sí solos
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: '#D2AA52' }}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-primary-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary-neutral">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
            <span className="block">¿Listo para potenciar</span>
            <span className="block" style={{ color: '#D2AA52' }}>el futuro de tu empresa?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-secondary-gray mb-8 max-w-3xl mx-auto">
            Descubre cómo nuestra metodología puede llevar tu negocio al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gray-500 hover:bg-gray-600 text-white text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
              asChild
            >
              <Link to="/contacto">
                Solicita tu diagnóstico OPT gratuito
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="text-base px-6 py-3 rounded-xl border-2 font-semibold"
              style={{ borderColor: '#D2AA52', color: '#D2AA52' }}
              asChild
            >
              <Link to="/metodologia">
                Conoce más sobre OPT
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
