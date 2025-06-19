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
  Target,
  Building2,
  Workflow,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // Servicios organizados por metodología OPT
  const optServices = {
    organizacion: [
      {
        icon: Users,
        title: 'Análisis Organizacional',
        description: 'Evaluamos la estructura actual de tu empresa, roles y responsabilidades para optimizar la eficiencia del equipo.',
        color: 'bg-opt-organizacion',
        textColor: 'text-white'
      },
      {
        icon: Building2,
        title: 'Rediseño de Estructuras',
        description: 'Creamos organigramas optimizados y definimos roles claros para maximizar la productividad.',
        color: 'bg-opt-organizacion-light',
        textColor: 'text-gray-800'
      },
      {
        icon: Shield,
        title: 'Gestión del Cambio',
        description: 'Implementamos estrategias para facilitar la adopción de nuevas tecnologías y procesos.',
        color: 'bg-opt-organizacion-dark',
        textColor: 'text-white'
      }
    ],
    procesos: [
      {
        icon: Workflow,
        title: 'Mapeo de Procesos',
        description: 'Documentamos y analizamos tus flujos de trabajo actuales para identificar oportunidades de mejora.',
        color: 'bg-opt-procesos',
        textColor: 'text-gray-800'
      },
      {
        icon: Zap,
        title: 'Automatización Inteligente',
        description: 'Implementamos soluciones de IA para automatizar tareas repetitivas y optimizar procesos.',
        color: 'bg-opt-procesos-light',
        textColor: 'text-gray-800'
      },
      {
        icon: TrendingUp,
        title: 'Optimización de Flujos',
        description: 'Rediseñamos procesos para eliminar cuellos de botella y mejorar la eficiencia operativa.',
        color: 'bg-opt-procesos-dark',
        textColor: 'text-gray-800'
      }
    ],
    tecnologias: [
      {
        icon: Cpu,
        title: 'Implementación Tecnológica',
        description: 'Seleccionamos e integramos las mejores herramientas tecnológicas adaptadas a tu negocio.',
        color: 'bg-opt-tecnologias',
        textColor: 'text-gray-800'
      },
      {
        icon: Database,
        title: 'Desarrollo de MVPs',
        description: 'Creamos prototipos rápidos y funcionales para validar ideas antes del desarrollo completo.',
        color: 'bg-opt-tecnologias-light',
        textColor: 'text-gray-800'
      },
      {
        icon: Settings,
        title: 'Integración de Sistemas',
        description: 'Conectamos todas tus herramientas tecnológicas para crear un ecosistema unificado.',
        color: 'bg-opt-tecnologias-dark',
        textColor: 'text-gray-800'
      }
    ]
  };

  const benefits = [
    {
      icon: Target,
      title: 'Resultados Medibles con OPT',
      description: 'Cada implementación sigue nuestra metodología OPT para garantizar resultados cuantificables y sostenibles.'
    },
    {
      icon: BarChart3,
      title: 'Enfoque Metodológico',
      description: 'No solo implementamos tecnología, aplicamos una metodología probada que transforma tu empresa.'
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Servicios OPT</span>
            <span className="block" style={{ color: '#D2AA52' }}>que transforman</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary-gray mb-10 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Organización, Procesos y Tecnología</span> aplicados a cada servicio.
          </p>
        </div>

        {/* OPT Methodology Overview */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-primary-black mb-12">
            Nuestros Servicios por Metodología OPT
          </h3>
          
          {/* Organización */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-opt-organizacion flex items-center justify-center mr-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-primary-black">Organización</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {optServices.organizacion.map((service, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="pb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.color}`}>
                      <service.icon className="h-8 w-8" style={{ color: service.textColor === 'text-white' ? 'white' : '#374151' }} />
                    </div>
                    <CardTitle className="text-xl text-primary-black font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-secondary-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procesos */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-opt-procesos flex items-center justify-center mr-6">
                <Workflow className="h-8 w-8 text-gray-800" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-primary-black">Procesos</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {optServices.procesos.map((service, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="pb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.color}`}>
                      <service.icon className="h-8 w-8" style={{ color: '#374151' }} />
                    </div>
                    <CardTitle className="text-xl text-primary-black font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-secondary-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-full bg-opt-tecnologias flex items-center justify-center mr-6">
                <Cpu className="h-8 w-8 text-gray-800" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-primary-black">Tecnologías</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {optServices.tecnologias.map((service, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="pb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${service.color}`}>
                      <service.icon className="h-8 w-8" style={{ color: '#374151' }} />
                    </div>
                    <CardTitle className="text-xl text-primary-black font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-secondary-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-16 mb-20 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-[40px] md:text-[48px] text-primary-black mb-6 font-black tracking-tight">
              ¿Por qué elegir scAIe con OPT?
            </h3>
            <p className="text-[20px] text-secondary-gray max-w-3xl mx-auto leading-relaxed">
              Nuestro enfoque único combina experiencia técnica con metodología OPT probada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm text-center p-8 flex flex-col items-center justify-center"
              >
                <CardHeader className="pb-6 flex flex-col items-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 bg-opt-organizacion">
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
            ¿Necesitas servicios con metodología OPT?
          </h3>
          <p className="text-[18px] text-secondary-gray mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos transformar tu empresa con OPT.
          </p>
          <Link to="/contacto">
            <button className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black" style={{ background: '#D2AA52', color: '#fff', border: 'none' }}>
              Solicita tu diagnóstico OPT gratuito
              <ArrowRight className="ml-3 h-6 w-6 inline" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
