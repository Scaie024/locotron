
import React from 'react';
import { CheckCircle, Clock, FileText, BarChart3, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-primary-text mb-6">
            Transparencia y Resultados: 
            <br />
            <span className="text-accent-orange">Así Funciona tu Proyecto con scAIe</span>
          </h2>
          <p className="text-body text-secondary-text max-w-3xl mx-auto">
            Clarificamos cada etapa del proceso, duración y beneficios tangibles que recibirás.
          </p>
        </div>

        {/* Project Timeline */}
        <div className="mb-16">
          <Card className="border-none shadow-xl bg-gradient-to-br from-white to-orange-50/30">
            <CardHeader className="text-center">
              <CardTitle className="text-h3 text-primary-text flex items-center justify-center gap-3">
                <Clock className="h-8 w-8 text-accent-orange" />
                Duración del Proyecto
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                <p className="text-body text-primary-text leading-relaxed">
                  <span className="font-bold text-accent-orange text-2xl">3 meses</span> de ejecución intensiva 
                  <br />
                  <span className="text-secondary-text">+</span>
                  <br />
                  <span className="font-bold text-accent-orange text-2xl">1 mes</span> de soporte post-venta
                  <br />
                  <span className="text-sm text-secondary-text mt-2 block">para asegurar tu éxito continuo</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h3 className="text-h3 text-primary-text text-center mb-8">
            Nuestros Entregables Clave (Visibles y Tangibles)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-accent-orange"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <deliverable.icon className="h-6 w-6 text-accent-orange" />
                    <CardTitle className="text-lg text-primary-text">
                      {deliverable.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-secondary-text">
                    {deliverable.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-h3 text-primary-text">
                Metodología Híbrida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-secondary-text leading-relaxed">
                Combinamos la <span className="font-semibold text-accent-orange">metodología en cascada</span> para 
                un diagnóstico exhaustivo y la <span className="font-semibold text-accent-orange">agilidad</span> para 
                una implementación eficiente y adaptativa.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-h3 text-primary-text flex items-center gap-3">
                <Shield className="h-7 w-7 text-accent-orange" />
                Normativas Integradas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-secondary-text leading-relaxed mb-4">
                Nuestros proyectos incorporan naturalmente estándares robustos y seguros:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {standards.map((standard, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <div className="font-semibold text-accent-orange text-sm">{standard.name}</div>
                    <div className="text-xs text-secondary-text">{standard.focus}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-8 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicita una Propuesta Detallada y Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
