import React from 'react';
import { Building2, Workflow, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const accentGray = '#6B7280'; // Gris destacado

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
    <section id="metodologia" className="py-20 lg:py-32 bg-gradient-to-br from-primary-neutral via-white to-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Nuestra</span>
            <span className="block" style={{ color: accentGray }}>Metodología OPT</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-secondary-gray mb-10 max-w-3xl mx-auto">
            <span className="font-bold text-primary-black">Organización, Procesos y Tecnología</span> para resultados reales.
          </p>
        </div>

        {/* OPT Methodology Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Organización</h3>
            <p className="text-gray-700">
              Reestructuramos tu organización para alinear talentos, roles y responsabilidades con tus objetivos estratégicos.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Procesos</h3>
            <p className="text-gray-700">
              Optimizamos tus procesos operativos y de negocio para mejorar eficiencia, reducir costos y aumentar calidad.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Tecnología</h3>
            <p className="text-gray-700">
              Implementamos soluciones tecnológicas a medida que potencian tu organización y procesos.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Organización */}
          <div className="card p-6 rounded-2xl text-center bg-white/80 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: accentGray }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{ background: accentGray }}>
              <span className="text-white font-black text-3xl">O</span>
            </div>
            <h4 className="text-2xl font-bold text-primary-black mb-2">Organización</h4>
            <p className="text-lg text-secondary-gray leading-relaxed mb-2 font-semibold">
              Estructuras y roles claros.
            </p>
            <p className="text-base text-secondary-gray">
              <span className="font-bold">Ejemplo:</span> Comunicación interna 40% más efectiva.
            </p>
          </div>
          {/* Procesos */}
          <div className="card p-6 rounded-2xl text-center bg-white/80 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: accentGray }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{ background: accentGray }}>
              <span className="text-white font-black text-3xl">P</span>
            </div>
            <h4 className="text-2xl font-bold text-primary-black mb-2">Procesos</h4>
            <p className="text-lg text-secondary-gray leading-relaxed mb-2 font-semibold">
              Flujos optimizados y automatizados.
            </p>
            <p className="text-base text-secondary-gray">
              <span className="font-bold">Ejemplo:</span> Reducción de tiempo 60% en tareas repetitivas.
            </p>
          </div>
          {/* Tecnología */}
          <div className="card p-6 rounded-2xl text-center bg-white/80 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: accentGray }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md" style={{ background: accentGray }}>
              <span className="text-white font-black text-3xl">T</span>
            </div>
            <h4 className="text-2xl font-bold text-primary-black mb-2">Tecnología</h4>
            <p className="text-lg text-secondary-gray leading-relaxed mb-2 font-semibold">
              Herramientas y soluciones digitales.
            </p>
            <p className="text-base text-secondary-gray">
              <span className="font-bold">Ejemplo:</span> ROI positivo en 6 meses.
            </p>
          </div>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4" style={{ borderColor: accentGray }}>
            <h5 className="text-xl font-bold mb-2" style={{ color: accentGray }}>Resultados Medibles</h5>
            <p className="text-lg text-secondary-gray font-semibold">Eficiencia, reducción de costos, crecimiento sostenible.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4" style={{ borderColor: '#00a86b' }}>
            <h5 className="text-xl font-bold mb-2" style={{ color: '#00a86b' }}>Acompañamiento</h5>
            <p className="text-lg text-secondary-gray font-semibold">Te guiamos en cada paso, transición fluida y exitosa.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border-l-4" style={{ borderColor: '#0066cc' }}>
            <h5 className="text-xl font-bold mb-2" style={{ color: '#0066cc' }}>Transformación Real</h5>
            <p className="text-lg text-secondary-gray font-semibold">Llevamos la transformación digital a la práctica.</p>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-16 mb-20 backdrop-blur-sm shadow-xl">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-[36px] text-primary-black mb-8 font-bold tracking-tight">
              Caso de Éxito: Empresa de Logística
            </h3>
            <p className="text-[18px] text-secondary-gray leading-relaxed">
              Implementamos nuestra metodología OPT en una empresa de logística con <span className="font-semibold" style={{ color: accentGray }}>200 empleados</span>. 
              Los resultados: <span className="font-semibold" style={{ color: accentGray }}>40% reducción en costos operativos</span>, 
              <span className="font-semibold" style={{ color: accentGray }}> 60% mejora en tiempos de entrega</span> y 
              <span className="font-semibold" style={{ color: accentGray }}> ROI del 300% en 12 meses</span>.
            </p>
          </div>
        </div>

        {/* Methodology Diagram */}
        <div className="diagram-container mb-20">
          <div className="text-center mb-12">
            <h3 className="text-[32px] text-primary-black mb-4 font-bold">
              Flujo de Implementación
            </h3>
            <p className="text-[18px] text-secondary-gray">
              Proceso iterativo y adaptativo para tu empresa
            </p>
          </div>
          
          <div className="relative">
            {/* Horizontal Line */}
            <div className="diagram-line diagram-line-horizontal absolute top-1/2 left-0 transform -translate-y-1/2"></div>
            
            {/* Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="diagram-node top-0 left-0 transform -translate-y-1/2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: accentGray }}>
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-bold text-primary-black mb-2">Diagnóstico</h4>
                <p className="text-sm text-secondary-gray">Análisis completo</p>
              </div>
              
              <div className="diagram-node top-0 left-1/3 transform -translate-y-1/2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: accentGray }}>
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-bold text-primary-black mb-2">Estrategia</h4>
                <p className="text-sm text-secondary-gray">Plan de acción</p>
              </div>
              
              <div className="diagram-node top-0 left-2/3 transform -translate-y-1/2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: accentGray }}>
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-bold text-primary-black mb-2">Implementación</h4>
                <p className="text-sm text-secondary-gray">Desarrollo ágil</p>
              </div>
              
              <div className="diagram-node top-0 right-0 transform -translate-y-1/2 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ background: accentGray }}>
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h4 className="font-bold text-primary-black mb-2">Optimización</h4>
                <p className="text-sm text-secondary-gray">Mejora continua</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-[32px] text-primary-black mb-6 font-bold">
            ¿Quieres implementar nuestra metodología?
          </h3>
          <p className="text-[18px] text-secondary-gray mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos transformar tu empresa.
          </p>
          <button className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black" style={{ background: accentGray, color: '#fff', border: 'none' }}>
            Solicita tu diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
