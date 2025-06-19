import React from 'react';
import { Clock, CheckCircle, Shield, Cloud, BarChart3, Users, Gauge, Workflow, Building2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const accentGray = '#6B7280'; // Gris destacado

const ProjectSection = () => {
  const deliverables = [
    {
      icon: Users,
      title: "Mapeo Organizacional Detallado",
      description: "Claridad en roles y estructuras"
    },
    {
      icon: FileText,
      title: "Diagramas de Procesos (Editables BPMN)",
      description: "Flujos optimizados para tu negocio"
    },
    {
      icon: BarChart3,
      title: "Mapa Tecnológico por Etapa",
      description: "Tu hoja de ruta tecnológica"
    },
    {
      icon: CheckCircle,
      title: "KPIs Definidos y Medibles",
      description: "Indicadores claros para el éxito"
    },
    {
      icon: FileText,
      title: "Informes de Rendimiento Regulares",
      description: "Transparencia y seguimiento"
    }
  ];

  const standards = [
    { name: "ISO 9001", focus: "Calidad" },
    { name: "ISO 20000", focus: "Servicios IT" },
    { name: "ISO 27001", focus: "Seguridad de la Información" },
    { name: "ITIL", focus: "Gestión de Servicios de TI" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Así funciona</span>
            <span className="block" style={{ color: accentGray }}>tu proyecto con scAIe</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary-gray mb-10 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Proceso claro y resultados tangibles.</span>
          </p>
        </div>

        {/* Project Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Timeline */} 
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b h-full hidden md:block" style={{ background: `linear-gradient(to bottom, ${accentGray}, ${accentGray}40)` }}></div>
            <div className="space-y-12">
              {/* Fase 1: Diagnóstico y Estrategia */}
              <div className="flex items-start md:justify-end md:pr-16 relative">
                <div className="absolute w-6 h-6 rounded-full top-0 left-1/2 transform -translate-x-1/2 border-4 border-primary-neutral z-10 hidden md:block" style={{ background: accentGray }}></div>
                <Card className="w-full md:w-11/12 p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardTitle className="text-[28px] text-primary-black font-bold mb-3">
                    Fase 1: Diagnóstico y Estrategia
                  </CardTitle>
                  <CardDescription className="text-[16px] text-secondary-gray leading-relaxed">
                    Realizamos un análisis exhaustivo de tu negocio, procesos y objetivos. Definimos una estrategia clara y un roadmap tecnológico.
                  </CardDescription>
                </Card>
              </div>

              {/* Fase 2: Diseño y Prototipado */}
              <div className="flex items-start md:justify-start md:pl-16 relative">
                <div className="absolute w-6 h-6 rounded-full top-0 left-1/2 transform -translate-x-1/2 border-4 border-primary-neutral z-10 hidden md:block" style={{ background: accentGray }}></div>
                <Card className="w-full md:w-11/12 p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardTitle className="text-[28px] text-primary-black font-bold mb-3">
                    Fase 2: Diseño y Prototipado
                  </CardTitle>
                  <CardDescription className="text-[16px] text-secondary-gray leading-relaxed">
                    Creamos prototipos y diseños detallados. Validamos la solución con tu equipo antes de la implementación completa.
                  </CardDescription>
                </Card>
              </div>

              {/* Fase 3: Implementación y Desarrollo */}
              <div className="flex items-start md:justify-end md:pr-16 relative">
                <div className="absolute w-6 h-6 rounded-full top-0 left-1/2 transform -translate-x-1/2 border-4 border-primary-neutral z-10 hidden md:block" style={{ background: accentGray }}></div>
                <Card className="w-full md:w-11/12 p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardTitle className="text-[28px] text-primary-black font-bold mb-3">
                    Fase 3: Implementación y Desarrollo
                  </CardTitle>
                  <CardDescription className="text-[16px] text-secondary-gray leading-relaxed">
                    Desarrollamos e integramos la solución de forma ágil. Mantenemos comunicación constante y entregas incrementales.
                  </CardDescription>
                </Card>
              </div>

              {/* Fase 4: Lanzamiento y Optimización */}
              <div className="flex items-start md:justify-start md:pl-16 relative">
                <div className="absolute w-6 h-6 rounded-full top-0 left-1/2 transform -translate-x-1/2 border-4 border-primary-neutral z-10 hidden md:block" style={{ background: accentGray }}></div>
                <Card className="w-full md:w-11/12 p-8 rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardTitle className="text-[28px] text-primary-black font-bold mb-3">
                    Fase 4: Lanzamiento y Optimización
                  </CardTitle>
                  <CardDescription className="text-[16px] text-secondary-gray leading-relaxed">
                    Lanzamos la solución y monitoreamos su rendimiento. Realizamos ajustes y optimizaciones continuas.
                  </CardDescription>
                </Card>
              </div>
            </div>
          </div>

          {/* Key Metrics / Visuals */}
          <div className="flex flex-col justify-center items-center p-8 rounded-3xl bg-gradient-to-br from-accent-mainBlue/5 to-accent-mainBlue/10 shadow-xl backdrop-blur-sm">
            <Clock className="h-16 w-16 text-accent-mainBlue mb-6" />
            <p className="text-[24px] text-primary-black mb-4 font-semibold text-center">
              Tiempo de Ejecución Típico:
            </p>
            <p className="text-[48px] font-bold text-accent-mainBlue mb-8 text-center">
              3 meses
            </p>
            <p className="text-[20px] text-primary-black mb-4 font-semibold text-center">
              Soporte Post-Lanzamiento:
            </p>
            <p className="text-[36px] font-bold text-accent-mainBlue text-center">
              1 mes
            </p>
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="mb-16">
          <h3 className="text-[40px] md:text-[48px] text-primary-black mb-10 font-black text-center tracking-tight">
            Resultados Tangibles para tu Negocio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { icon: CheckCircle, name: "Plataformas Optimizadas" },
              { icon: Shield, name: "Seguridad Robusta" },
              { icon: Cloud, name: "Infraestructura Escalable" },
              { icon: BarChart3, name: "Reportes y Analíticas" },
              { icon: Users, name: "Equipos Capacitados" },
              { icon: Gauge, name: "Eficiencia Operativa" },
            ].map((deliverable, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-full bg-accent-mainBlue/10 flex items-center justify-center flex-shrink-0">
                  <deliverable.icon className="h-6 w-6 text-accent-mainBlue" />
                </div>
                <span className="text-[18px] font-semibold text-primary-black">{deliverable.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology and Approach */}
        <div className="bg-gradient-to-r from-accent-mainBlue/5 to-accent-mainBlue/10 rounded-3xl p-16 mb-20 backdrop-blur-sm shadow-xl">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-[36px] text-primary-black mb-8 font-bold tracking-tight">
              Enfoque Metodológico Híbrido
            </h3>
            <p className="text-[18px] text-secondary-gray leading-relaxed">
              Combinamos la <span className="font-semibold" style={{ color: accentGray }}>metodología en cascada</span> para
              un diagnóstico exhaustivo y la <span className="font-semibold" style={{ color: accentGray }}>agilidad</span> para
              la implementación. Este enfoque híbrido nos permite ser precisos en la planificación y flexibles
              en la ejecución, garantizando que tu proyecto se adapte a tus necesidades cambiantes y se entregue
              con la máxima calidad y eficiencia.
            </p>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h3 className="text-[40px] md:text-[48px] text-primary-black mb-10 font-black text-center tracking-tight">
            Compromiso con Estándares de Calidad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { name: "ISO 27001", icon: Shield, description: "Seguridad de la información" },
              { name: "ITIL", icon: Workflow, description: "Gestión de servicios IT" },
              { name: "PMI (PMBOK)", icon: Building2, description: "Gestión de proyectos" },
            ].map((standard, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md border border-gray-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="w-16 h-16 rounded-full bg-accent-mainBlue/10 flex items-center justify-center mb-4">
                  <standard.icon className="h-8 w-8 text-accent-mainBlue" />
                </div>
                <h4 className="text-[22px] font-bold text-primary-black mb-2">{standard.name}</h4>
                <p className="text-[16px] text-secondary-gray">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-primary text-[20px] px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
          >
            Agenda una Consulta para tu Proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
