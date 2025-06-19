import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3,
  Globe,
  Smartphone
} from 'lucide-react';

const accentGray = '#6B7280'; // Gris destacado

const TechStackSection = () => {
  const techCategories = [
    {
      icon: Code,
      title: 'Desarrollo Frontend',
      description: 'Interfaces modernas y responsivas con las mejores tecnologías del mercado.',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Servidores robustos y APIs escalables para tu aplicación.',
      technologies: ['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Infraestructura en la nube y automatización de despliegues.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      icon: Zap,
      title: 'Automatización & IA',
      description: 'Soluciones inteligentes para optimizar procesos empresariales.',
      technologies: ['n8n', 'Zapier', 'OpenAI', 'TensorFlow', 'RPA', 'ChatGPT']
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Análisis de datos y business intelligence para decisiones informadas.',
      technologies: ['Power BI', 'Tableau', 'Google Analytics', 'Snowflake', 'Apache Kafka', 'ELK Stack']
    },
    {
      icon: Shield,
      title: 'Seguridad & Compliance',
      description: 'Protección de datos y cumplimiento normativo empresarial.',
      technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'GDPR', 'ISO 27001', 'Penetration Testing']
    }
  ];

  const additionalTech = [
    {
      icon: Globe,
      title: 'Integración de Sistemas',
      description: 'Conectamos todas tus herramientas y plataformas existentes.',
      technologies: ['REST APIs', 'Webhooks', 'SOAP', 'Message Queues', 'Event Streaming', 'Microservices']
    },
    {
      icon: Smartphone,
      title: 'Mobile & PWA',
      description: 'Aplicaciones móviles nativas y progresivas para máxima accesibilidad.',
      technologies: ['React Native', 'Flutter', 'PWA', 'iOS', 'Android', 'Capacitor']
    }
  ];

  return (
    <section id="stack" className="py-20 lg:py-32 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Stack</span>
            <span className="block" style={{ color: accentGray }}>Tecnológico</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary-gray mb-10 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Tecnologías modernas y probadas</span> para construir soluciones robustas.
          </p>
        </div>

        {/* Main Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `${accentGray}20` }}>
                  <category.icon className="h-8 w-8" style={{ color: accentGray }} />
                </div>
                <CardTitle className="text-[28px] text-primary-black font-bold mb-4">
                  {category.title}
                </CardTitle>
                <p className="text-[16px] text-secondary-gray leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="px-4 py-2 rounded-xl bg-white border border-gray-100 text-[15px] font-medium text-primary-black 
                               hover:bg-gray-600 hover:text-white hover:border-gray-600 
                               transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md
                               min-w-[120px] text-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-16 mb-20 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-[40px] md:text-[48px] text-primary-black mb-6 font-black tracking-tight">
              Tecnologías Especializadas
            </h3>
            <p className="text-[20px] text-secondary-gray max-w-3xl mx-auto leading-relaxed">
              Soluciones adicionales para casos de uso específicos y necesidades empresariales avanzadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {additionalTech.map((tech, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="pb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: `${accentGray}20` }}>
                    <tech.icon className="h-8 w-8" style={{ color: accentGray }} />
                  </div>
                  <CardTitle className="text-[24px] text-primary-black font-bold mb-4">
                    {tech.title}
                  </CardTitle>
                  <p className="text-[16px] text-secondary-gray leading-relaxed">
                    {tech.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {tech.technologies.map((technology, techIndex) => (
                      <div 
                        key={techIndex}
                        className="px-3 py-1 rounded-lg bg-white border border-gray-100 text-[14px] font-medium text-primary-black 
                                 hover:bg-gray-600 hover:text-white hover:border-gray-600 
                                 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md
                                 min-w-[100px] text-center"
                      >
                        {technology}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Philosophy */}
        <div className="bg-white/80 rounded-3xl p-16 mb-20 backdrop-blur-sm shadow-xl">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-[36px] text-primary-black mb-8 font-bold tracking-tight">
              Nuestra Filosofía Tecnológica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-[24px] font-bold text-primary-black mb-4">Tecnología Probada</h4>
                <p className="text-[16px] text-secondary-gray">
                  Utilizamos tecnologías maduras y estables que garantizan confiabilidad y mantenibilidad a largo plazo.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-[24px] font-bold text-primary-black mb-4">Escalabilidad</h4>
                <p className="text-[16px] text-secondary-gray">
                  Arquitecturas que crecen con tu negocio, desde startups hasta empresas establecidas.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-[24px] font-bold text-primary-black mb-4">Innovación Responsable</h4>
                <p className="text-[16px] text-secondary-gray">
                  Adoptamos nuevas tecnologías solo cuando aportan valor real y están listas para producción.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-[32px] text-primary-black mb-6 font-bold">
            ¿Necesitas una solución tecnológica específica?
          </h3>
          <p className="text-[18px] text-secondary-gray mb-8 max-w-2xl mx-auto">
            Nuestro equipo puede trabajar con cualquier tecnología. Agenda una consultoría y descubre las mejores opciones para tu proyecto.
          </p>
          <button className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black" style={{ background: accentGray, color: '#fff', border: 'none' }}>
            Solicita tu diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
