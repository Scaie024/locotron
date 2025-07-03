import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo de Expertos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Conoce al equipo de profesionales que impulsará el crecimiento de tu empresa</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <Linkedin className="h-5 w-5 mr-1" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white">
            Conoce más sobre nuestro equipo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
