import React from 'react';
import { ArrowRight, Users, BarChart3, Zap, CheckCircle2, Target, TrendingUp, Award, Clock, Building2, Workflow, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const optBenefits = [
    {
      icon: <Building2 className="h-8 w-8" />, 
      title: 'Organización',
      desc: 'Estructuras claras y roles definidos para maximizar la eficiencia de tu equipo.',
      color: 'bg-opt-organizacion',
      textColor: 'text-white'
    },
    {
      icon: <Workflow className="h-8 w-8" />, 
      title: 'Procesos',
      desc: 'Flujos optimizados y automatizados que eliminan cuellos de botella.',
      color: 'bg-opt-procesos',
      textColor: 'text-gray-800'
    },
    {
      icon: <Cpu className="h-8 w-8" />, 
      title: 'Tecnología',
      desc: 'Herramientas inteligentes que potencian el crecimiento de tu empresa.',
      color: 'bg-opt-tecnologias',
      textColor: 'text-gray-800'
    },
  ];

  const processSteps = [
    {
      icon: <Target className="h-12 w-12" style={{ color: '#D2AA52' }} />,
      title: 'Diagnóstico OPT',
      desc: 'Analizamos tu Organización, Procesos y Tecnología actual para identificar oportunidades.'
    },
    {
      icon: <TrendingUp className="h-12 w-12" style={{ color: '#D2DFC3' }} />,
      title: 'Implementación OPT',
      desc: 'Desarrollamos e integramos soluciones siguiendo nuestra metodología probada.'
    },
    {
      icon: <Award className="h-12 w-12" style={{ color: '#C4D8DF' }} />,
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
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary-neutral via-white to-gray-200 pt-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-[60px] md:text-[90px] lg:text-[110px] text-primary-black mb-8 leading-[0.9] font-black tracking-tight text-balance drop-shadow-xl">
            <span className="block">Transforma tu empresa</span>
            <span className="block" style={{ color: '#D2AA52' }}>con metodología OPT</span>
          </h1>
          {/* Subtitle */}
          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] text-secondary-gray mb-10 max-w-3xl mx-auto leading-tight font-bold text-balance">
            <span className="font-bold text-primary-black">Organización, Procesos y Tecnología</span> para resultados extraordinarios.
          </h2>
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button 
              className="btn-primary text-[22px] px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black"
              asChild
              style={{ background: '#D2AA52', color: '#fff', border: 'none' }}
            >
              <Link to="/contacto">
                Solicita tu diagnóstico OPT gratuito
                <ArrowRight className="ml-3 h-6 w-6 inline" />
              </Link>
            </Button>
          </div>
          
          {/* OPT Methodology Highlight */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-8">
              Nuestra Metodología OPT
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {optBenefits.map((benefit, i) => (
                <div key={i} className={`${benefit.color} ${benefit.textColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                  <p className="text-sm font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
            <div className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#D2AA52' }}>
              <Zap className="h-8 w-8 mb-4" style={{ color: '#D2AA52' }} />
              <h3 className="text-xl font-bold mb-2 text-primary-black">Automatización Inteligente</h3>
              <p className="text-base text-secondary-gray font-medium">Optimiza procesos con IA aplicada a tu negocio.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#D2DFC3' }}>
              <BarChart3 className="h-8 w-8 mb-4" style={{ color: '#D2DFC3' }} />
              <h3 className="text-xl font-bold mb-2 text-primary-black">Resultados Medibles</h3>
              <p className="text-base text-secondary-gray font-medium">Enfocados en impacto real: eficiencia, ventas y satisfacción.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#C4D8DF' }}>
              <Users className="h-8 w-8 mb-4" style={{ color: '#C4D8DF' }} />
              <h3 className="text-xl font-bold mb-2 text-primary-black">Acompañamiento Experto</h3>
              <p className="text-base text-secondary-gray font-medium">Más de 10 años aplicando OPT para innovar y crecer.</p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: '#D2AA52' }}>
              <CheckCircle2 className="h-8 w-8 mb-4" style={{ color: '#D2AA52' }} />
              <h3 className="text-xl font-bold mb-2 text-primary-black">Soluciones OPT</h3>
              <p className="text-base text-secondary-gray font-medium">Desarrollamos tecnología que se adapta a tu metodología.</p>
            </div>
          </div>
          
          {/* Inspirational Quote */}
          <blockquote className="italic text-2xl md:text-3xl font-semibold border-l-4 pl-4 max-w-2xl mx-auto mb-0" style={{ color: '#D2AA52', borderColor: '#D2AA52' }}>
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
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
              <span className="block">Cómo aplicamos OPT</span>
              <span className="block" style={{ color: '#D2AA52' }}>en tu empresa</span>
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-secondary-gray max-w-3xl mx-auto">
              Proceso simple y transparente siguiendo nuestra metodología OPT para resultados extraordinarios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border mb-6" style={{ borderColor: step.icon.props.style?.color }}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-black mb-4">{step.title}</h3>
                <p className="text-lg text-secondary-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Resultados con Metodología OPT
            </h3>
            <p className="text-xl text-secondary-gray">
              Números que hablan por sí solos
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: '#D2AA52' }}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-primary-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-neutral">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">¿Listo para transformar</span>
            <span className="block" style={{ color: '#D2AA52' }}>tu empresa con OPT?</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-gray mb-12 max-w-2xl mx-auto">
            Únete a las empresas que ya están creciendo con nuestra metodología OPT.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black"
              asChild
              style={{ background: '#D2AA52', color: '#fff', border: 'none' }}
            >
              <Link to="/contacto">
                Solicita tu diagnóstico OPT gratuito
                <ArrowRight className="ml-3 h-6 w-6 inline" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="text-xl px-12 py-6 rounded-2xl border-2 font-semibold"
              style={{ borderColor: '#D2AA52', color: '#D2AA52' }}
              asChild
            >
              <Link to="/metodologia">
                Conoce nuestra metodología OPT
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
