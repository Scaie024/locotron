import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arturo Pinzón",
      specialty: "Arquitecto de Soluciones en Conectividad y Software",
      bio: "Experto en diseñar infraestructuras robustas y escalables.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marypaz Santín",
      specialty: "Especialista en Estrategia de Comunicación y Prospección",
      bio: "Conectando negocios con soluciones efectivas.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b0ad2a21?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Leonardo Escobar",
      specialty: "Consultor Senior en Procesos y Analítica de Datos",
      bio: "Transformando datos en estrategias accionables.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
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
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
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
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Excelencia",
      description: "Comprometidos con la calidad superior en cada proyecto, superando expectativas y garantizando resultados excepcionales. Buscamos la perfección en cada detalle y proceso.",
      color: "from-accent-mainBlue to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Innovación",
      description: "Siempre a la vanguardia, buscando soluciones creativas y efectivas que impulsen el crecimiento y la transformación digital de nuestros clientes. Adaptación constante a nuevas tecnologías.",
      color: "from-accent-green to-green-600"
    },
    {
      icon: CheckCircle,
      title: "Transparencia",
      description: "Comunicación clara, honesta y abierta en todo momento. Creemos en construir relaciones de confianza basadas en la sinceridad y la integridad. Sin letra pequeña.",
      color: "from-accent-blue to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Compromiso",
      description: "Dedicación total a los objetivos de nuestros clientes. Nos involucramos activamente para asegurar el éxito y la satisfacción a largo plazo, viendo sus metas como nuestras.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Adaptabilidad",
      description: "Flexibilidad para ajustarnos a las necesidades cambiantes del mercado y de cada cliente, ofreciendo soluciones ágiles y personalizadas que se ajusten a su evolución. Capacidad de respuesta.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: CheckCircle,
      title: "Impacto",
      description: "Nos enfocamos en generar un valor medible y significativo para tu negocio, transformando desafíos en oportunidades de crecimiento y optimización. Resultados tangibles y duraderos.",
      color: "from-accent-mainBlue to-blue-500"
    }
  ];

  return (
    <section id="equipo" className="py-24 lg:py-36 bg-primary-neutral">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] text-primary-black mb-8 font-black tracking-tight">
            El Valor Humano Detrás de scAIe
          </h2>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-secondary-gray max-w-4xl mx-auto leading-relaxed">
            Nuestro equipo multidisciplinario combina experiencia técnica con visión estratégica 
            para transformar tu empresa desde múltiples perspectivas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="text-center pb-6">
                <div className="w-28 h-28 mx-auto mb-6 overflow-hidden rounded-full ring-4 ring-accent-bluePale/20 group-hover:ring-accent-mainBlue/40 transition-all duration-300 shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-[28px] text-primary-black font-bold mb-3">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-[18px] font-semibold text-accent-mainBlue leading-snug">
                  {member.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[16px] text-secondary-gray leading-relaxed text-center">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values Section */}
        <div className="rounded-3xl p-12 lg:p-16 mb-20 bg-gradient-to-br from-primary-black/5 to-primary-black/10 backdrop-blur-sm shadow-xl">
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
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
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
