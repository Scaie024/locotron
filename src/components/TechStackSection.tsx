
import React from 'react';
import { Code, Cloud, BarChart3, Shield, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechStackSection = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Automatización & Plataformas",
      technologies: ["n8n", "osTicket", "NocodeDB", "Supabase", "Herramientas IA (LLMs)"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Infraestructura & Nube",
      technologies: ["AWS", "Azure", "GCP", "Proxmox", "Nutanix"],
      subtitle: "Nubes públicas, privadas e híbridas",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Analítica & BI",
      technologies: ["Tableau", "Superset", "Metabase"],
      subtitle: "Visualización y KPI operativos",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Ciberseguridad & Protección",
      technologies: ["Operación NOC/SOC", "Detección de Amenazas", "Hardening", "Control de Accesos"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Wifi,
      title: "IoT & Conectividad",
      technologies: ["Sensores LoRa/NB-IoT/Zigbee", "Integración con Telmex", "Axtel", "Marcatel", "Totalplay"],
      color: "from-accent-orange to-yellow-500"
    }
  ];

  return (
    <section id="stack" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-primary-text mb-6">
            Tecnologías que Impulsan tu Negocio
          </h2>
          <p className="text-body text-secondary-text max-w-3xl mx-auto">
            Nuestro stack tecnológico combina las mejores herramientas del mercado con 
            soluciones open source para maximizar el valor y minimizar los costos.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none shadow-lg h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-h3 text-primary-text mb-2">
                  {category.title}
                </CardTitle>
                {category.subtitle && (
                  <p className="text-sm text-secondary-text font-medium">
                    {category.subtitle}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="bg-gray-50 px-3 py-2 rounded-lg text-sm font-medium text-primary-text hover:bg-gradient-to-r hover:from-accent-orange/10 hover:to-accent-orange/20 transition-all duration-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-accent-orange/10 to-accent-orange/20 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-h3 text-primary-text mb-4">
              Soluciones Flexibles y Escalables
            </h3>
            <p className="text-body text-secondary-text max-w-4xl mx-auto">
              No nos limitamos a una sola tecnología. Evaluamos tu contexto específico y seleccionamos 
              las herramientas que mejor se adapten a tus necesidades, presupuesto y objetivos de crecimiento.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-8 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Diseñemos un Stack Adaptado a Ti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
