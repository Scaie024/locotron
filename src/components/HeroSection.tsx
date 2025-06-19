import React from 'react';
import { ArrowRight, Users, BarChart3, Zap, CheckCircle2, Target, TrendingUp, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const accentGray = '#6B7280'; // Gris destacado

const benefits = [
  {
    icon: <Zap className="h-8 w-8" style={{ color: accentGray }} />, 
    title: 'Automatización Inteligente',
    desc: 'Optimiza procesos y ahorra tiempo con IA aplicada a tu negocio.'
  },
  {
    icon: <BarChart3 className="h-8 w-8" style={{ color: accentGray }} />, 
    title: 'Resultados Medibles',
    desc: 'Enfocados en impacto real: eficiencia, ventas y satisfacción.'
  },
  {
    icon: <Users className="h-8 w-8" style={{ color: accentGray }} />, 
    title: 'Acompañamiento Experto',
    desc: 'Más de 10 años ayudando empresas a innovar y crecer.'
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" style={{ color: accentGray }} />, 
    title: 'Soluciones a Medida',
    desc: 'Desarrollamos tecnología que se adapta a ti.'
  },
];

const processSteps = [
  {
    icon: <Target className="h-12 w-12" style={{ color: accentGray }} />,
    title: 'Diagnóstico Gratuito',
    desc: 'Analizamos tu situación y detectamos oportunidades de mejora.'
  },
  {
    icon: <TrendingUp className="h-12 w-12" style={{ color: accentGray }} />,
    title: 'Implementación Ágil',
    desc: 'Desarrollamos e integramos soluciones rápidamente.'
  },
  {
    icon: <Award className="h-12 w-12" style={{ color: accentGray }} />,
    title: 'Resultados y Acompañamiento',
    desc: 'Medimos el impacto y te acompañamos en la mejora continua.'
  }
];

const stats = [
  { number: '150+', label: 'Proyectos Exitosos' },
  { number: '40%', label: 'Mejora en Eficiencia' },
  { number: '10+', label: 'Años de Experiencia' },
  { number: '95%', label: 'Clientes Satisfechos' }
];

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-primary-neutral via-white to-gray-200 pt-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-[60px] md:text-[90px] lg:text-[110px] text-primary-black mb-8 leading-[0.9] font-black tracking-tight text-balance drop-shadow-xl">
            <span className="block">Lleva tu empresa</span>
            <span className="block" style={{ color: accentGray }}>al futuro digital</span>
          </h1>
          {/* Subtitle */}
          <h2 className="text-[28px] md:text-[38px] lg:text-[48px] text-secondary-gray mb-10 max-w-3xl mx-auto leading-tight font-bold text-balance">
            Soluciones de IA y tecnología para crecer, automatizar y destacar en tu sector.
          </h2>
          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button 
              className="btn-primary text-[22px] px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black"
              asChild
              style={{ background: accentGray, color: '#fff', border: 'none' }}
            >
              <Link to="/contacto">
                Solicita tu diagnóstico gratuito
                <ArrowRight className="ml-3 h-6 w-6 inline" />
              </Link>
            </Button>
          </div>
          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border" style={{ borderColor: accentGray }}>
                {b.icon}
                <h3 className="text-xl font-bold mb-2 text-primary-black">{b.title}</h3>
                <p className="text-base text-secondary-gray font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
          {/* Inspirational Quote */}
          <blockquote className="italic text-2xl md:text-3xl font-semibold border-l-4 pl-4 max-w-2xl mx-auto mb-0" style={{ color: accentGray, borderColor: accentGray }}>
            "La transformación digital no es solo tecnología, es <span className='font-bold'>estrategia</span>, <span className='font-bold'>personas</span> y <span className='font-bold'>resultados</span>."
          </blockquote>
        </div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none animate-pulse-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={accentGray} strokeWidth="0.2"/>
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
              <span className="block">Cómo trabajamos</span>
              <span className="block" style={{ color: accentGray }}>juntos</span>
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-secondary-gray max-w-3xl mx-auto">
              Proceso simple y transparente para resultados extraordinarios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border mb-6" style={{ borderColor: accentGray }}>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: accentGray }}>
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
            <span className="block">¿Listo para</span>
            <span className="block" style={{ color: accentGray }}>transformar tu empresa?</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-gray mb-12 max-w-2xl mx-auto">
            Únete a las empresas que ya están creciendo con scAIe.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black"
              asChild
              style={{ background: accentGray, color: '#fff', border: 'none' }}
            >
              <Link to="/contacto">
                Solicita tu diagnóstico gratuito
                <ArrowRight className="ml-3 h-6 w-6 inline" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              className="text-xl px-12 py-6 rounded-2xl border-2 font-semibold"
              style={{ borderColor: accentGray, color: accentGray }}
              asChild
            >
              <Link to="/metodologia">
                Conoce nuestra metodología
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
