import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Lightbulb, 
  Zap, 
  Award, 
  CheckCircle2, 
  Clock, 
  Users, 
  BarChart3,
  Building2,
  Workflow,
  Cpu
} from 'lucide-react';

const OPTTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const timelinePhases = [
    {
      phase: 1,
      title: 'Diagnóstico OPT',
      subtitle: 'Evaluación Integral',
      duration: '2-3 semanas',
      icon: Target,
      color: '#D2AA52',
      description: 'Analizamos tu empresa en las tres dimensiones OPT para identificar oportunidades de mejora.',
      activities: [
        'Auditoría organizacional completa',
        'Mapeo de procesos actuales',
        'Evaluación tecnológica',
        'Entrevistas con stakeholders',
        'Análisis de métricas clave'
      ],
      deliverables: [
        'Reporte de diagnóstico detallado',
        'Identificación de oportunidades',
        'Roadmap de implementación',
        'Estimación de ROI'
      ],
      optFocus: {
        organizacion: 'Estructura y roles',
        procesos: 'Flujos de trabajo',
        tecnologias: 'Infraestructura actual'
      }
    },
    {
      phase: 2,
      title: 'Estrategia OPT',
      subtitle: 'Planificación Personalizada',
      duration: '1-2 semanas',
      icon: Lightbulb,
      color: '#D2DFC3',
      description: 'Desarrollamos una estrategia personalizada que aborda tus necesidades específicas.',
      activities: [
        'Definición de objetivos SMART',
        'Priorización de iniciativas',
        'Planificación de recursos',
        'Cronograma detallado',
        'Gestión de riesgos'
      ],
      deliverables: [
        'Plan estratégico OPT',
        'Cronograma de implementación',
        'Asignación de recursos',
        'Métricas de éxito'
      ],
      optFocus: {
        organizacion: 'Rediseño estructural',
        procesos: 'Optimización prioritaria',
        tecnologias: 'Selección de herramientas'
      }
    },
    {
      phase: 3,
      title: 'Implementación OPT',
      subtitle: 'Ejecución Ágil',
      duration: '3-6 meses',
      icon: Zap,
      color: '#C4D8DF',
      description: 'Implementamos las mejoras de forma iterativa, asegurando resultados desde el primer sprint.',
      activities: [
        'Implementación por fases',
        'Capacitación del equipo',
        'Configuración de sistemas',
        'Pruebas y validación',
        'Ajustes iterativos'
      ],
      deliverables: [
        'Sistemas implementados',
        'Procesos optimizados',
        'Equipo capacitado',
        'Resultados iniciales'
      ],
      optFocus: {
        organizacion: 'Nueva estructura activa',
        procesos: 'Flujos automatizados',
        tecnologias: 'Sistemas integrados'
      }
    },
    {
      phase: 4,
      title: 'Optimización Continua',
      subtitle: 'Mejora Sostenible',
      duration: 'Ongoing',
      icon: Award,
      color: '#D2AA52',
      description: 'Monitoreamos resultados y refinamos continuamente para maximizar el impacto.',
      activities: [
        'Monitoreo de métricas',
        'Análisis de rendimiento',
        'Identificación de mejoras',
        'Implementación de refinamientos',
        'Capacitación continua'
      ],
      deliverables: [
        'Reportes de rendimiento',
        'Mejoras continuas',
        'Soporte técnico',
        'Optimizaciones adicionales'
      ],
      optFocus: {
        organizacion: 'Cultura de mejora',
        procesos: 'Eficiencia máxima',
        tecnologias: 'Innovación continua'
      }
    }
  ];

  const currentPhase = timelinePhases[activePhase];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Timeline de</span>
            <span className="block" style={{ color: '#D2AA52' }}>Implementación OPT</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-gray max-w-3xl mx-auto">
            Proceso estructurado y transparente para transformar tu empresa con metodología OPT.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {timelinePhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activePhase === index
                    ? 'shadow-lg transform scale-105'
                    : 'hover:shadow-md hover:scale-102'
                }`}
                style={{
                  backgroundColor: activePhase === index ? phase.color : 'white',
                  color: activePhase === index ? 'white' : '#374151',
                  border: activePhase === index ? 'none' : `2px solid ${phase.color}`
                }}
              >
                <phase.icon className="h-6 w-6" />
                <span>Fase {phase.phase}</span>
                <span className="text-sm opacity-80">{phase.duration}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: currentPhase.color }}
                  >
                    <currentPhase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary-black">
                      {currentPhase.title}
                    </CardTitle>
                    <p className="text-lg text-secondary-gray">{currentPhase.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-secondary-gray leading-relaxed">
                  {currentPhase.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Activities */}
                <div>
                  <h4 className="text-xl font-bold text-primary-black mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2" style={{ color: currentPhase.color }} />
                    Actividades Principales
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentPhase.activities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: currentPhase.color }} />
                        <span className="text-secondary-gray">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xl font-bold text-primary-black mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2" style={{ color: currentPhase.color }} />
                    Entregables
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentPhase.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: currentPhase.color }} />
                        <span className="text-secondary-gray">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* OPT Focus Sidebar */}
          <div className="space-y-6">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary-black">
                  Enfoque OPT en esta Fase
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-opt-organizacion-light">
                  <Building2 className="h-5 w-5" style={{ color: '#D2AA52' }} />
                  <div>
                    <p className="font-semibold text-primary-black">Organización</p>
                    <p className="text-sm text-secondary-gray">{currentPhase.optFocus.organizacion}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-opt-procesos-light">
                  <Workflow className="h-5 w-5" style={{ color: '#D2DFC3' }} />
                  <div>
                    <p className="font-semibold text-primary-black">Procesos</p>
                    <p className="text-sm text-secondary-gray">{currentPhase.optFocus.procesos}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-opt-tecnologias-light">
                  <Cpu className="h-5 w-5" style={{ color: '#C4D8DF' }} />
                  <div>
                    <p className="font-semibold text-primary-black">Tecnología</p>
                    <p className="text-sm text-secondary-gray">{currentPhase.optFocus.tecnologias}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress Indicator */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary-black">
                  Progreso del Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timelinePhases.map((phase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            index <= activePhase ? 'text-white' : 'text-gray-400'
                          }`}
                          style={{ 
                            backgroundColor: index <= activePhase ? phase.color : '#e5e7eb'
                          }}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-primary-black">{phase.title}</span>
                          <span className="text-secondary-gray">{phase.duration}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="h-2 rounded-full transition-all duration-500"
                            style={{ 
                              width: index < activePhase ? '100%' : index === activePhase ? '50%' : '0%',
                              backgroundColor: phase.color
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-4">
            ¿Listo para comenzar tu transformación OPT?
          </h3>
          <p className="text-lg text-secondary-gray mb-8 max-w-2xl mx-auto">
            Agenda tu diagnóstico gratuito y descubre cómo podemos implementar OPT en tu empresa.
          </p>
          <Button 
            className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black"
            style={{ background: '#D2AA52', color: '#fff', border: 'none' }}
          >
            Inicia tu diagnóstico OPT gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OPTTimeline; 