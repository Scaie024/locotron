import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Zap, 
  BarChart3, 
  Users, 
  Settings, 
  Database, 
  Shield,
  TrendingUp,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const accentGray = '#6B7280'; // Gris destacado

const services = [
  {
    icon: Zap,
    title: 'Automatización Inteligente',
    description: 'Optimiza procesos repetitivos con IA y automatización avanzada. Reduce costos operativos y aumenta la eficiencia de tu equipo.'
  },
  {
    icon: BarChart3,
    title: 'Análisis de Datos',
    description: 'Convierte datos en insights accionables. Dashboards en tiempo real y reportes automatizados para decisiones informadas.'
  },
  {
    icon: Users,
    title: 'Optimización de Procesos',
    description: 'Rediseña flujos de trabajo para máxima eficiencia. Elimina cuellos de botella y mejora la experiencia del cliente.'
  },
  {
    icon: Settings,
    title: 'Implementación Tecnológica',
    description: 'Integración de herramientas y sistemas. Migración sin interrupciones y capacitación de equipos.'
  },
  {
    icon: Database,
    title: 'Desarrollo de MVPs',
    description: 'Prototipos rápidos y funcionales. Valida ideas de negocio antes de invertir en desarrollo completo.'
  },
  {
    icon: Shield,
    title: 'Consultoría Estratégica',
    description: 'Asesoramiento experto en transformación digital. Roadmap personalizado para tu crecimiento.'
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Resultados Medibles',
    description: 'Métricas claras y reportes de progreso. Sabrás exactamente el impacto de cada implementación.'
  },
  {
    icon: Target,
    title: 'Enfoque Personalizado',
    description: 'Soluciones adaptadas a tu industria y necesidades específicas. No hay dos empresas iguales.'
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Servicios</span>
            <span className="block" style={{ color: accentGray }}>que transforman</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary-gray mb-10 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Automatización, análisis y tecnología</span> para tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card hover-lift border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm p-8 rounded-3xl"
            >
              <CardHeader className="pb-6 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md" style={{ background: `${accentGray}20` }}>
                  <service.icon className="h-10 w-10" style={{ color: accentGray }} />
                </div>
                <CardTitle className="text-[28px] text-primary-black font-bold mb-3 text-center">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-[16px] text-secondary-gray leading-relaxed text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-16 mb-20 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-[40px] md:text-[48px] text-primary-black mb-6 font-black tracking-tight">
              ¿Por qué elegir scAIe?
            </h3>
            <p className="text-[20px] text-secondary-gray max-w-3xl mx-auto leading-relaxed">
              Nuestro enfoque único combina experiencia técnica con comprensión profunda del negocio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm text-center p-8 flex flex-col items-center justify-center"
              >
                <CardHeader className="pb-6 flex flex-col items-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`} style={{ background: accentGray }}>
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-[26px] text-primary-black font-bold mb-3">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-start">
                  <p className="text-[16px] text-secondary-gray leading-relaxed text-justify">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-[32px] text-primary-black mb-6 font-bold">
            ¿Necesitas alguno de estos servicios?
          </h3>
          <p className="text-[18px] text-secondary-gray mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a transformar tu empresa.
          </p>
          <Link to="/contacto">
            <button className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black" style={{ background: accentGray, color: '#fff', border: 'none' }}>
              Solicita tu diagnóstico gratuito
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
