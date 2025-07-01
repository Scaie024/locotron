import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Shield } from 'lucide-react';

const accentGray = '#6B7280'; // Gris destacado

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arturo Pinzón",
      specialty: "Arquitecto de Soluciones en Conectividad y Software",
      bio: "Experto en diseñar infraestructuras robustas y escalables.",
      image: "/Arturo Pinzon.jpg",
      linkedin: "https://www.linkedin.com/in/arturo-pinzon-047b38185/"
    },
    {
      name: "Marypaz Santín",
      specialty: "Especialista en Estrategia de Comunicación y Prospección",
      bio: "Conectando negocios con soluciones efectivas.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b0ad2a21?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/marypazsantin13/"
    },
    {
      name: "Leonardo Escobar",
      specialty: "Consultor Senior en Procesos y Analítica de Datos",
      bio: "Transformando datos en estrategias accionables.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/leonardo-escobar-/"
    },
    {
      name: "Ariel Martínez",
      specialty: "Experto en Normativas Fiscales y Optimización de ERP",
      bio: "Asegurando cumplimiento y eficiencia financiera.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Octavio Alonso",
      specialty: "Abogado Corporativo para Softlanding Internacional",
      bio: "Facilitando la expansión global de tu empresa.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/octavio-alonso-alfonsin/"
    },
    {
      name: "Enrique Ayala",
      specialty: "Especialista en Marca, Marketing Digital y Funnels",
      bio: "Creando estrategias que impulsan el crecimiento.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Samuel Chavarría",
      specialty: "Desarrollador Ágil con Enfoque ITIL",
      bio: "Construyendo soluciones eficientes sin comprometer la calidad.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
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
    <section id="equipo" className="py-24 lg:py-36 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">El valor humano</span>
            <span className="block" style={{ color: accentGray }}>detrás de scAIe</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary-gray mb-10 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Talento multidisciplinario</span> para transformar tu empresa.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  style={{ objectPosition: 'top' }}
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-black hover:text-blue-700 transition-colors underline"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">{member.specialty}</CardDescription>
                <p className="text-gray-500 mt-2">{member.bio}</p>
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
              Guiamos cada acción y decisión por un conjunto de principios sólidos 
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
