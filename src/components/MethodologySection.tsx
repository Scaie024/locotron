
import React from 'react';
import { Building2, Workflow, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MethodologySection = () => {
  const methodologySteps = [
    {
      icon: Building2,
      title: "Organización",
      description: "Establecer una estructura organizacional clara y bien definida es el punto de partida para garantizar el éxito de cualquier iniciativa, desde proyectos operativos hasta transformaciones tecnológicas profundas.",
      extendedDescription: "Este proceso asegura que todos los participantes comprendan sus roles, responsabilidades y su contribución al propósito global de la organización, alineándose con la misión y visión empresarial.",
      color: "bg-gold",
      textColor: "text-primary-text"
    },
    {
      icon: Workflow,
      title: "Procesos",
      description: "Un mapeo preciso de procesos refleja la realidad operativa, clave para implementar tecnología eficazmente, optimizando recursos y operaciones.",
      extendedDescription: "Además, permite prever el impacto de futuras innovaciones, asegurando una adopción exitosa.",
      color: "bg-sage",
      textColor: "text-primary-text"
    },
    {
      icon: Cpu,
      title: "Tecnologías",
      description: "Se analizan las tecnologías acordes al nivel de madurez de la organización, evaluando su complejidad y requisitos.",
      extendedDescription: "Se decide si es necesario un desarrollo a medida o si existen soluciones gratuitas u open source (IoT, edge computing, software, no-code, low-code), siempre potenciadas con IA.",
      color: "bg-light-blue",
      textColor: "text-primary-text"
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-black text-white px-8 py-4 rounded-full mb-8">
            <h2 className="text-h3 font-bold tracking-wide">Framework - OPT</h2>
          </div>
          <h2 className="text-h1 text-primary-text mb-8 font-black">
            Nuestra Metodología OPT
            <br />
            <span className="text-accent-orange">Organización, Procesos, Tecnología</span>
          </h2>
          <p className="text-body-lg text-secondary-text max-w-3xl mx-auto">
            Tu ventaja competitiva radica en nuestro enfoque sistemático y probado para la transformación empresarial.
          </p>
        </div>

        {/* Methodology Steps - Diseño inspirado en la imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {methodologySteps.map((step, index) => (
            <div key={index} className="relative animate-slide-in-right" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Etiqueta lateral */}
              <div className={`${step.color} ${step.textColor} p-6 rounded-l-3xl shadow-lg mb-4`}>
                <div className="flex items-center space-x-4">
                  <step.icon className="h-8 w-8" />
                  <h3 className="text-h3 font-bold">{step.title}</h3>
                  <ArrowRight className="h-6 w-6 ml-auto" />
                </div>
              </div>

              {/* Contenido expandido */}
              <div className="bg-gray-200 p-8 rounded-r-3xl shadow-lg">
                <p className="text-body text-primary-text leading-relaxed mb-4 font-medium">
                  {step.description}
                </p>
                <p className="text-body-sm text-secondary-text leading-relaxed">
                  {step.extendedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12 border-l-8 border-accent-orange">
          <div className="flex items-start space-x-6 mb-6">
            <CheckCircle className="h-10 w-10 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-h2 text-primary-text mb-6 font-bold">
                Caso de Éxito: Transformación en "Empresa A"
              </h3>
              <p className="text-body-lg text-secondary-text leading-relaxed mb-6">
                Logramos optimizar drásticamente el proceso de atención al cliente implementando una 
                solución robusta con <span className="font-semibold text-accent-orange">osTicket</span>, 
                <span className="font-semibold text-accent-orange"> NocodeDB</span> y 
                <span className="font-semibold text-accent-orange"> n8n</span>. 
                Esto resultó en una <span className="font-bold text-primary-text text-h4">reducción del 35%</span> en 
                el tiempo promedio de respuesta sin aumentar presupuesto ni equipo operativo.
              </p>
              <p className="text-body-lg font-bold text-accent-orange">
                ¡Un caso real de eficiencia y escalabilidad!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button-lg px-10 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explora Más Casos de Aplicación de OPT
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>

        {/* scAIe branding */}
        <div className="text-right mt-12">
          <span className="text-h2 font-black text-primary-text">scAIe</span>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
