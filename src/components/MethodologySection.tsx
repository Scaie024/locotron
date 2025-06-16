import React from 'react';
import { Building2, Workflow, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MethodologySection = () => {
  const methodologySteps = [
    {
      icon: Building2,
      title: "Organización",
      description: "Creamos una estructura clara que define roles, responsabilidades y objetivos para asegurar el éxito de tu transformación digital.",
      extendedDescription: "Cada miembro del equipo entiende su función y cómo contribuye al éxito general de la empresa.",
      color: "bg-accent-mainBlue",
      textColor: "text-white"
    },
    {
      icon: Workflow,
      title: "Procesos",
      description: "Mapeamos y optimizamos tus procesos actuales para identificar dónde la tecnología puede generar mayor impacto.",
      extendedDescription: "Identificamos oportunidades de mejora y automatización que aumentan la eficiencia y reducen costos.",
      color: "bg-accent-green",
      textColor: "text-white"
    },
    {
      icon: Cpu,
      title: "Tecnología",
      description: "Seleccionamos e implementamos las mejores herramientas tecnológicas adaptadas a tu nivel de madurez digital.",
      extendedDescription: "Utilizamos una combinación de soluciones open source, low-code y desarrollo personalizado, potenciadas con IA.",
      color: "bg-accent-blue",
      textColor: "text-white"
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-primary-neutral">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] text-primary-black mb-6 font-black">
            Metodología OPT
          </h2>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-secondary-gray max-w-4xl mx-auto">
            Un enfoque estructurado que garantiza resultados medibles y transformación real.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organización */}
          <div className="card p-6 rounded-2xl text-center bg-accent-bluePale/10 border-accent-blue/20 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-blue rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-black text-2xl">O</span>
            </div>
            <h4 className="text-h4 text-primary-black font-semibold mb-2">Organización</h4>
            <p className="text-body text-secondary-gray leading-relaxed">
              Definimos estructuras y roles claros para una operación eficiente.
            </p>
          </div>
          {/* Procesos */}
          <div className="card p-6 rounded-2xl text-center bg-accent-greenLight/10 border-accent-green/20 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-green rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-black text-2xl">P</span>
            </div>
            <h4 className="text-h4 text-primary-black font-semibold mb-2">Procesos</h4>
            <p className="text-body text-secondary-gray leading-relaxed">
              Diseñamos flujos de trabajo optimizados para maximizar la productividad.
            </p>
          </div>
          {/* Tecnología */}
          <div className="card p-6 rounded-2xl text-center bg-accent-bluePale/10 border-accent-mainBlue/20 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-mainBlue rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-black text-2xl">T</span>
            </div>
            <h4 className="text-h4 text-primary-black font-semibold mb-2">Tecnología</h4>
            <p className="text-body text-secondary-gray leading-relaxed">
              Implementamos soluciones tecnológicas que impulsan la innovación.
            </p>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white rounded-3xl p-8 mb-16 shadow-xl border-l-8 border-accent-mainBlue">
          <div className="flex items-start space-x-6">
            <div className="w-12 h-12 rounded-full bg-accent-mainBlue/10 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-6 w-6 text-accent-mainBlue" />
            </div>
            <div>
              <h3 className="text-[32px] text-primary-black mb-4 font-bold">
                Caso de Éxito: Optimización de Atención al Cliente
              </h3>
              <p className="text-[18px] text-secondary-gray leading-relaxed mb-4">
                Implementamos una solución integral que combina 
                <span className="font-semibold text-accent-mainBlue"> osTicket</span>, 
                <span className="font-semibold text-accent-mainBlue"> NocodeDB</span> y 
                <span className="font-semibold text-accent-mainBlue"> n8n</span>. 
                Los resultados: <span className="font-bold text-primary-black text-[24px]">35% más rápido</span> en 
                tiempos de respuesta, sin aumentar costos ni personal.
              </p>
              <p className="text-[20px] font-bold text-accent-mainBlue">
                Eficiencia real, resultados medibles
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-primary text-[20px] px-10 py-5 rounded-2xl"
            onClick={() => document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Más Casos de Éxito
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
