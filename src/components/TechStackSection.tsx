import React from 'react';
import { Code, Database, Cloud, Cpu, Server, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TechStackSection = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Desarrollo",
      description: "Frameworks y lenguajes modernos para crear soluciones robustas y escalables.",
      technologies: [
        "React", "Next.js", "TypeScript", "Python", "Node.js", "Django",
        "FastAPI", "Flutter", "React Native", "Vue.js", "Angular"
      ]
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "Sistemas de almacenamiento y gestión de datos optimizados para cualquier escala.",
      technologies: [
        "PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch",
        "Supabase", "Firebase", "DynamoDB", "Cassandra", "Neo4j"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestructura y herramientas para despliegue y operación eficiente en la nube.",
      technologies: [
        "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
        "Terraform", "Jenkins", "GitHub Actions", "Ansible", "Prometheus"
      ]
    },
    {
      icon: Cpu,
      title: "Inteligencia Artificial",
      description: "Frameworks y herramientas avanzadas para implementar soluciones inteligentes.",
      technologies: [
        "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face",
        "LangChain", "Pandas", "NumPy", "SpaCy", "NLTK"
      ]
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description: "Herramientas para construir APIs y servicios backend que garantizan escalabilidad y seguridad.",
      technologies: [
        "REST", "GraphQL", "gRPC", "WebSocket", "RabbitMQ",
        "Kafka", "Redis", "Nginx", "Apache", "Express"
      ]
    },
    {
      icon: Workflow,
      title: "Automatización",
      description: "Plataformas para automatizar procesos y flujos de trabajo, maximizando la eficiencia operativa.",
      technologies: [
        "n8n", "Zapier", "Make", "Airflow", "Prefect",
        "Power Automate", "IFTTT", "Automate.io", "Integromat", "Pipedream"
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 lg:py-36 bg-primary-neutral">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] text-primary-black mb-8 font-black tracking-tight">
            Tecnologías que Impulsan tu Negocio
          </h2>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-secondary-gray max-w-4xl mx-auto leading-relaxed">
            Combinamos las mejores herramientas tecnológicas para crear soluciones personalizadas 
            y eficientes que transforman tu visión en realidad.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-mainBlue/10 to-accent-mainBlue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-8 w-8 text-accent-mainBlue" />
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
                               hover:bg-accent-mainBlue hover:text-white hover:border-accent-mainBlue 
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

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-accent-mainBlue/5 to-accent-mainBlue/10 rounded-3xl p-16 mb-20 backdrop-blur-sm">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-[36px] text-primary-black mb-8 font-bold tracking-tight">
              Soluciones Flexibles y Escalables
            </h3>
            <p className="text-[18px] text-secondary-gray leading-relaxed">
              No nos limitamos a una sola tecnología. Evaluamos tu contexto específico y seleccionamos 
              las herramientas que mejor se adapten a tus necesidades, presupuesto y objetivos de crecimiento.
              Nuestro enfoque es siempre práctico y orientado a resultados, garantizando la máxima eficiencia
              y el mejor retorno de inversión para tu proyecto.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-primary text-[20px] px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
          >
            Diseñemos un Stack Adaptado a Ti
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
