
import React from 'react';
import { Building2, Workflow, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MethodologySection = () => {
  const methodologySteps = [
    {
      icon: Building2,
      title: "Organización",
      description: "Definimos roles, jerarquías, estructura de comunicación y flujos funcionales, alineando a las personas con los objetivos estratégicos de tu empresa.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Workflow,
      title: "Procesos",
      description: "Mapeamos flujos reales (AS-IS), rediseñamos el ideal (TO-BE) y documentamos con BPMN para una automatización precisa y efectiva.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Cpu,
      title: "Tecnología",
      description: "Evaluamos el grado de madurez digital y seleccionamos soluciones específicas: no-code, open source, IA, edge computing o nube híbrida.",
      color: "from-accent-orange to-red-500"
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-primary-text mb-6">
            Nuestra Metodología OPT: 
            <br />
            <span className="text-accent-orange">Organización, Procesos, Tecnología</span>
          </h2>
          <p className="text-body text-secondary-text max-w-3xl mx-auto">
            Tu ventaja competitiva radica en nuestro enfoque sistemático y probado para la transformación empresarial.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {methodologySteps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-h3 text-primary-text mb-2">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-body text-secondary-text leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < methodologySteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-accent-orange" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12 border-l-4 border-accent-orange">
          <div className="flex items-start space-x-4 mb-6">
            <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-h3 text-primary-text mb-4">
                Caso de Éxito: Transformación en "Empresa A"
              </h3>
              <p className="text-body text-secondary-text leading-relaxed mb-6">
                Logramos optimizar drásticamente el proceso de atención al cliente implementando una 
                solución robusta con <span className="font-semibold text-accent-orange">osTicket</span>, 
                <span className="font-semibold text-accent-orange"> NocodeDB</span> y 
                <span className="font-semibold text-accent-orange"> n8n</span>. 
                Esto resultó en una <span className="font-bold text-primary-text">reducción del 35%</span> en 
                el tiempo promedio de respuesta sin aumentar presupuesto ni equipo operativo.
              </p>
              <p className="text-body font-semibold text-accent-orange">
                ¡Un caso real de eficiencia y escalabilidad!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-8 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explora Más Casos de Aplicación de OPT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
