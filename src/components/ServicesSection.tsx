import React from 'react';
import { Settings, BarChart3, Code, Lightbulb, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Automatización Inteligente",
      description: "Automatizamos tus procesos más importantes para eliminar tareas repetitivas, reducir errores y aumentar la productividad de tu equipo."
    },
    {
      icon: BarChart3,
      title: "Análisis de Datos",
      description: "Convertimos tus datos en información valiosa con dashboards interactivos que te ayudan a tomar mejores decisiones de negocio."
    },
    {
      icon: Code,
      title: "Soluciones Tecnológicas",
      description: "Desarrollamos e implementamos sistemas personalizados que se adaptan a tus necesidades específicas y crecen con tu negocio."
    },
    {
      icon: Lightbulb,
      title: "Productos Digitales",
      description: "Creamos prototipos y productos mínimos viables que te permiten validar ideas rápidamente y lanzar al mercado con confianza."
    },
    {
      icon: Users,
      title: "Capacitación & Soporte",
      description: "Entrenamos a tu equipo en el uso de nuevas tecnologías y brindamos soporte continuo para asegurar el éxito de la implementación."
    },
    {
      icon: MapPin,
      title: "Planificación Estratégica",
      description: "Desarrollamos un plan tecnológico personalizado que identifica oportunidades de mejora y establece objetivos claros para tu empresa."
    }
  ];

  return (
    <section id="servicios" className="py-20 lg:py-32 bg-primary-neutral">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] text-primary-black mb-6 font-black">
            Servicios que Transforman
          </h2>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-secondary-gray max-w-4xl mx-auto">
            Soluciones tecnológicas personalizadas que impulsan la eficiencia y el crecimiento de tu empresa.
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
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-mainBlue/10 to-accent-mainBlue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <service.icon className="h-10 w-10 text-accent-mainBlue" />
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

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-primary text-[20px] px-10 py-5 rounded-2xl"
            onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
          >
            Agenda tu Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
