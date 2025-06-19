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
    <section id="servicios" className="py-16 lg:py-24 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
            <span className="block">Servicios OPT</span>
            <span className="block" style={{ color: '#D2AA52' }}>que transforman</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-secondary-gray mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Organización, Procesos y Tecnología</span> aplicados a cada servicio.
          </p>
        </div>

        {/* OPT Methodology Overview */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-black mb-10">
            Nuestros Servicios por Metodología OPT
          </h3>
          
          {/* Organización */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-opt-organizacion flex items-center justify-center mr-4">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-primary-black">Organización</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {optServices.organizacion.map((service, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${service.color}`}>
                      <service.icon className="h-6 w-6" style={{ color: service.textColor === 'text-white' ? 'white' : '#374151' }} />
                    </div>
                    <CardTitle className="text-lg text-primary-black font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-secondary-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Procesos */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-opt-procesos flex items-center justify-center mr-4">
                <Workflow className="h-6 w-6 text-gray-800" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-primary-black">Procesos</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {optServices.procesos.map((service, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${service.color}`}>
                      <service.icon className="h-6 w-6" style={{ color: '#374151' }} />
                    </div>
                    <CardTitle className="text-lg text-primary-black font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-secondary-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-opt-tecnologias flex items-center justify-center mr-4">
                <Cpu className="h-6 w-6 text-gray-800" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-primary-black">Tecnologías</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {optServices.tecnologias.map((service, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${service.color}`}>
                      <service.icon className="h-6 w-6" style={{ color: '#374151' }} />
                    </div>
                    <CardTitle className="text-lg text-primary-black font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-secondary-gray leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-black mb-8">
            ¿Por qué elegir nuestros servicios OPT?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ borderLeft: `4px solid #D2AA52` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-opt-organizacion flex items-center justify-center mr-3">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg text-primary-black font-bold">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-secondary-gray leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-6">
            ¿Listo para aplicar OPT en tu empresa?
          </h3>
          <p className="text-base md:text-lg text-secondary-gray mb-8 max-w-2xl mx-auto">
            Descubre cómo nuestra metodología OPT puede transformar tu empresa y llevarte al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ background: '#D2AA52', border: 'none' }}
            >
              Solicita tu diagnóstico OPT gratuito
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/metodologia"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-xl border-2 transition-all duration-300"
              style={{ borderColor: '#D2AA52', color: '#D2AA52' }}
            >
              Conoce nuestra metodología OPT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
