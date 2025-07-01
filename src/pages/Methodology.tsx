import React, { useEffect } from 'react';
import {
  Building2,
  Workflow,
  Cpu,
  Target,
  TrendingUp,
  Award,
  Users,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Clock,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Methodology = () => {
  const optPhases = [
    {
      phase: 'Organización',
      color: '#D2AA52',
      icon: Building2,
      description: 'Estructuramos tu empresa para maximizar la eficiencia y claridad de roles.',
      steps: [
        'Análisis de la estructura actual',
        'Definición de roles y responsabilidades',
        'Creación de organigramas optimizados',
        'Implementación de gestión del cambio'
      ],
      benefits: [
        'Roles claros y definidos',
        'Mejor comunicación interna',
        'Mayor eficiencia operativa',
        'Preparación para el crecimiento'
      ]
    },
    {
      phase: 'Procesos',
      color: '#D2DFC3',
      icon: Workflow,
      description: 'Optimizamos y automatizamos tus flujos de trabajo para eliminar cuellos de botella.',
      steps: [
        'Mapeo de procesos actuales',
        'Identificación de oportunidades',
        'Rediseño de flujos optimizados',
        'Implementación de automatización'
      ],
      benefits: [
        'Procesos más eficientes',
        'Reducción de errores',
        'Ahorro de tiempo y recursos',
        'Escalabilidad mejorada'
      ]
    },
    {
      phase: 'Tecnología',
      color: '#C4D8DF',
      icon: Cpu,
      description: 'Implementamos las herramientas tecnológicas adecuadas para potenciar tu crecimiento.',
      steps: [
        'Evaluación de necesidades tecnológicas',
        'Selección de herramientas apropiadas',
        'Desarrollo e integración de soluciones',
        'Capacitación y adopción'
      ],
      benefits: [
        'Herramientas alineadas con objetivos',
        'Integración perfecta de sistemas',
        'Automatización inteligente',
        'Ventaja competitiva tecnológica'
      ]
    }
  ];

  const methodologyPrinciples = [
    {
      icon: Target,
      title: 'Enfoque Holístico',
      description: 'Consideramos todos los aspectos de tu empresa como un sistema integrado.',
      color: '#D2AA52'
    },
    {
      icon: TrendingUp,
      title: 'Resultados Medibles',
      description: 'Cada implementación incluye métricas claras para medir el impacto.',
      color: '#D2DFC3'
    },
    {
      icon: Users,
      title: 'Centrado en Personas',
      description: 'La tecnología debe servir a las personas, no al revés.',
      color: '#C4D8DF'
    },
    {
      icon: Zap,
      title: 'Implementación Ágil',
      description: 'Proceso iterativo que permite ajustes rápidos y resultados inmediatos.',
      color: '#D2AA52'
    }
  ];

  const successMetrics = [
    { metric: '40%', label: 'Mejora en Eficiencia', color: '#D2AA52' },
    { metric: '60%', label: 'Reducción de Tiempo', color: '#D2DFC3' },
    { metric: '85%', label: 'Satisfacción del Cliente', color: '#C4D8DF' },
    { metric: '3x', label: 'ROI Promedio', color: '#D2AA52' }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Tecnología',
      challenge: 'Procesos manuales y desorganización',
      solution: 'Implementación completa OPT',
      results: '50% mejora en eficiencia, 30% reducción de costos',
      color: '#D2AA52'
    },
    {
      company: 'Green Manufacturing',
      industry: 'Manufactura',
      challenge: 'Falta de automatización y control',
      solution: 'Enfoque en Procesos y Tecnología',
      results: '40% incremento en productividad',
      color: '#D2DFC3'
    },
    {
      company: 'Digital Retail',
      industry: 'Comercio Electrónico',
      challenge: 'Sistemas desintegrados',
      solution: 'Optimización Tecnológica OPT',
      results: '70% mejora en experiencia del cliente',
      color: '#C4D8DF'
    }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const headerHeight = document.querySelector('nav')?.clientHeight || 0;
          window.scrollTo({
            top: element.offsetTop - headerHeight - 20,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div id="methodology-content" className="min-h-screen bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <Navigation />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-primary-black leading-tight">
                <span className="block">Metodología OPT</span>
                <span className="block" style={{ color: '#D2AA52' }}>que transforma</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-secondary-gray mb-8 max-w-4xl mx-auto">
                <span className="font-bold text-primary-black">Organización, Procesos y Tecnología</span> - Nuestro framework probado para el éxito empresarial.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                  style={{ background: '#D2AA52', color: '#fff', border: 'none' }}
                  asChild
                >
                  <Link to="/contacto">
                    Solicita tu diagnóstico OPT gratuito
                    <ArrowRight className="ml-2 h-5 w-5 inline" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* OPT Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {optPhases.map((phase, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderTop: `4px solid ${phase.color}` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: phase.color }}
                    >
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary-black mb-2">
                      {phase.phase}
                    </CardTitle>
                    <CardDescription className="text-sm text-secondary-gray leading-relaxed">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-primary-black mb-2 text-sm">Pasos:</h4>
                        <ul className="space-y-2 mb-4">
                          {phase.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start text-xs text-secondary-gray">
                              <CheckCircle2 className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" style={{ color: phase.color }} />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-black mb-2 text-sm">Beneficios:</h4>
                        <ul className="space-y-2 mb-4">
                          {phase.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-xs text-secondary-gray">
                              <Star className="h-3 w-3 mr-2 mt-0.5 flex-shrink-0" style={{ color: phase.color }} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
                <span className="block">Principios de la</span>
                <span className="block" style={{ color: '#D2AA52' }}>Metodología OPT</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-secondary-gray max-w-3xl mx-auto">
                Fundamentos que guían cada implementación para garantizar resultados extraordinarios.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologyPrinciples.map((principle, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardHeader className="pb-4">
                    <div 
                      className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: principle.color }}
                    >
                      <principle.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-primary-black">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-secondary-gray leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Flow Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
                <span className="block">Proceso de</span>
                <span className="block" style={{ color: '#D2AA52' }}>Implementación OPT</span>
              </h2>
            </div>
            <div className="relative">
              {/* Process Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-opt-organizacion">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-black mb-2">1. Diagnóstico</h3>
                  <p className="text-sm text-secondary-gray">Evaluamos tu situación actual en las tres áreas OPT</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-opt-procesos">
                    <Lightbulb className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-black mb-2">2. Estrategia</h3>
                  <p className="text-sm text-secondary-gray">Desarrollamos un plan personalizado de implementación</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-opt-tecnologias">
                    <Zap className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-black mb-2">3. Implementación</h3>
                  <p className="text-sm text-secondary-gray">Ejecutamos las mejoras de forma ágil y controlada</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg bg-opt-organizacion">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-black mb-2">4. Optimización</h3>
                  <p className="text-sm text-secondary-gray">Medimos resultados y refinamos continuamente</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
                <span className="block">Resultados</span>
                <span className="block" style={{ color: '#D2AA52' }}>Comprobados</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-3xl md:text-4xl font-black mb-2"
                    style={{ color: metric.color }}
                  >
                    {metric.metric}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-primary-black">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
                <span className="block">Casos de Éxito</span>
                <span className="block" style={{ color: '#D2AA52' }}>con OPT</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ borderLeft: `4px solid ${study.color}` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-primary-black">
                      {study.company}
                    </CardTitle>
                    <CardDescription className="text-xs font-semibold" style={{ color: study.color }}>
                      {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-primary-black mb-1 text-sm">Desafío:</h4>
                      <p className="text-xs text-secondary-gray">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-black mb-1 text-sm">Solución:</h4>
                      <p className="text-xs text-secondary-gray">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-black mb-1 text-sm">Resultados:</h4>
                      <p className="text-xs text-secondary-gray font-semibold">{study.results}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-neutral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-primary-black leading-tight">
              <span className="block">¿Listo para aplicar</span>
              <span className="block" style={{ color: '#D2AA52' }}>OPT en tu empresa?</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-secondary-gray mb-8 max-w-3xl mx-auto">
              Únete a las empresas que ya están transformando sus operaciones con nuestra metodología OPT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                style={{ background: '#D2AA52', color: '#fff', border: 'none' }}
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
                <Link to="/servicios">
                  Conoce nuestros servicios OPT
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Methodology;