
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
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-h1 md:text-display lg:text-[88px] text-primary-text mb-8 font-black leading-none text-balance">
            ¿Qué Hacemos por Ti?
          </h2>
          <p className="text-body-xl md:text-subtitle lg:text-[22px] text-secondary-text max-w-4xl mx-auto leading-relaxed text-balance">
            Nuestros servicios están diseñados para transformar tu empresa desde dentro, 
            optimizando cada proceso y maximizando el impacto tecnológico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-none shadow-lg bg-gradient-to-br from-white to-orange-50/30 rounded-3xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-orange to-accent-orange-hover rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-h4 md:text-h3 lg:text-[28px] text-primary-text mb-4 font-bold leading-tight text-balance">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <CardDescription className="text-body md:text-body-lg lg:text-[17px] text-secondary-text leading-relaxed text-balance">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button-lg md:text-button-xl px-12 py-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 font-bold"
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
