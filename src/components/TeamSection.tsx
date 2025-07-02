import React from 'react';
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Shield } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const accentGray = '#6B7280'; // Gris destacado

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arturo Pinzón",
      specialty: "Arquitecto de Soluciones en Conectividad y Software",
      bio: "Experto en diseñar infraestructuras robustas y escalables.",
      linkedin: "https://www.linkedin.com/in/arturo-pinzon-047b38185/"
    },
    {
      name: "Marypaz Santín",
      specialty: "Especialista en Estrategia de Comunicación y Prospección",
      bio: "Conectando negocios con soluciones efectivas.",
      linkedin: "#"
    },
    {
      name: "Leonardo Escobar",
      specialty: "Consultor Senior en Procesos y Analítica de Datos",
      bio: "Transformando datos en estrategias accionables.",
      linkedin: "https://www.linkedin.com/in/leonardo-escobar-/"
    },
    {
      name: "Ariel Martínez",
      specialty: "Experto en Normativas Fiscales y Optimización de ERP",
      bio: "Asegurando cumplimiento y eficiencia financiera.",
      linkedin: "#"
    },
    {
      name: "Octavio Alonso",
      specialty: "Abogado Corporativo para Softlanding Internacional",
      bio: "Facilitando la expansión global de tu empresa.",
      linkedin: "https://www.linkedin.com/in/octavio-alonso-alfonsin/"
    },
    {
      name: "Enrique Ayala",
      specialty: "Especialista en Marca, Marketing Digital y Funnels",
      bio: "Creando estrategias que impulsan el crecimiento.",
      linkedin: "#"
    },
    {
      name: "Samuel Chavarría",
      specialty: "Desarrollador Ágil con Enfoque ITIL",
      bio: "Construyendo soluciones eficientes sin comprometer la calidad.",
      linkedin: "https://www.linkedin.com/in/samuel-chavarr%C3%ADa-sanjuan-30b11179/"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Enfoque",
      description: "Nos centramos en entender profundamente tu negocio y objetivos específicos para diseñar soluciones que realmente funcionen. Cada proyecto es único y merece atención personalizada.",
      color: `from-${accentGray} to-gray-600`
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Nos enfocamos en generar un valor medible y significativo para tu negocio, transformando desafíos en oportunidades de crecimiento y optimización. Resultados tangibles y duraderos.",
      color: `from-${accentGray} to-gray-600`
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia, la comunicación clara y la entrega consistente de valor. Tu éxito es nuestro éxito.",
      color: `from-${accentGray} to-gray-600`
    }
  ];

  return (
    <section id="equipo" className="py-20 bg-gradient-to-b from-primary-neutral to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-black mb-4">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            Conoce al equipo detrás de nuestra metodología OPT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all h-full flex flex-col"
            >
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-xl font-semibold text-center mb-2">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-black hover:text-blue-700 transition-colors"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </CardTitle>
                
                <CardDescription className="text-sm text-gray-600 mt-1 text-center">
                  {member.specialty}
                </CardDescription>
                
                <p className="text-gray-700 mt-3 flex-grow">{member.bio}</p>
                
                {member.linkedin && (
                  <div className="mt-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values Section */}
        <div className="rounded-3xl p-12 lg:p-16 mb-20 bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-[40px] md:text-[48px] text-primary-black mb-6 font-black tracking-tight">
              Nuestros Pilares Fundamentales
            </h3>
            <p className="text-[20px] text-secondary-gray max-w-3xl mx-auto leading-relaxed">
              Guiados cada acción y decisión por un conjunto de principios sólidos 
              que definen nuestra identidad y nuestro compromiso con tu éxito.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm text-center p-8 flex flex-col items-center justify-center"
              >
                <CardHeader className="pb-6 flex flex-col items-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`} style={{ background: accentGray }}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-[26px] text-primary-black font-bold mb-3">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex items-start">
                  <p className="text-[16px] text-secondary-gray leading-relaxed text-justify">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-primary text-[20px] px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
          >
            Conoce a Todo el Equipo scAIe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
