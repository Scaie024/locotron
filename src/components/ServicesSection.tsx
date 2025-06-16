
import React from 'react';
import { Settings, BarChart3, Code, Lightbulb, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Optimización de Procesos",
      description: "Rediseñamos flujos operativos críticos y aplicamos automatización inteligente para maximizar la eficiencia y reducir errores."
    },
    {
      icon: BarChart3,
      title: "Análisis & Datos Accionables",
      description: "Transformamos tus datos en visualizaciones claras y dashboards interactivos, proporcionando insights clave para la toma de decisiones ejecutivas."
    },
    {
      icon: Code,
      title: "Implementación Tecnológica",
      description: "Ejecutamos la estrategia técnica definida, integrando frameworks, buenas prácticas y nuestro modelo OPT para soluciones robustas."
    },
    {
      icon: Lightbulb,
      title: "Desarrollo de MVPs & Soluciones a Medida",
      description: "Creamos productos mínimos viables funcionales con desarrollo asistido por IA, enfocados en la eficiencia, validación rápida y escalabilidad."
    },
    {
      icon: Users,
      title: "Asesoría & Capacitación Continua",
      description: "Acompañamos a tus equipos para adoptar una mentalidad operativa potenciada con IA, herramientas prácticas y automatización ligera."
    },
    {
      icon: MapPin,
      title: "Evaluación Tecnológica & Roadmap",
      description: "Diagnosticamos oportunidades de mejora, madurez digital y procesos desalineados para crear un roadmap tecnológico realista y estratégico."
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-primary-text mb-6">
            ¿Qué Hacemos por Ti?
          </h2>
          <p className="text-body text-secondary-text max-w-3xl mx-auto">
            Nuestros servicios están diseñados para transformar tu empresa desde dentro, 
            optimizando cada proceso y maximizando el impacto tecnológico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none shadow-lg bg-gradient-to-br from-white to-orange-50/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-orange to-accent-orange-hover rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-h3 text-primary-text mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-body text-secondary-text leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-8 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicita un Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
