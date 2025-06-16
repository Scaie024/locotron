
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="equipo" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-primary-text mb-6">
            El Valor Humano Detrás de scAIe
          </h2>
          <p className="text-body text-secondary-text max-w-3xl mx-auto">
            Nuestro equipo multidisciplinario combina experiencia técnica con visión estratégica 
            para transformar tu empresa desde múltiples perspectivas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-accent-orange/20 group-hover:ring-accent-orange/40 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-h3 text-primary-text mb-2">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-accent-orange mb-2">
                  {member.specialty}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-body text-secondary-text leading-relaxed text-center">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-h3 text-primary-text mb-4">
              Nuestros Valores
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <h4 className="text-lg font-semibold text-primary-text mb-2">Excelencia</h4>
              <p className="text-secondary-text">Comprometidos con la calidad en cada proyecto</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-xl">I</span>
              </div>
              <h4 className="text-lg font-semibold text-primary-text mb-2">Innovación</h4>
              <p className="text-secondary-text">Siempre buscando soluciones creativas y efectivas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-orange to-red-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <h4 className="text-lg font-semibold text-primary-text mb-2">Transparencia</h4>
              <p className="text-secondary-text">Comunicación clara y honesta en todo momento</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-8 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conoce a Todo el Equipo scAIe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
