import React from 'react';
import { Briefcase, BarChart, Users, Settings, TrendingUp } from 'lucide-react';
import ConsultingProcess from './ConsultingProcess';

const ServicesSection = () => {
  const processSteps = [
    {
      step: 1,
      title: "Diagnóstico Integral",
      description: "Evaluación detallada de su organización, procesos y tecnología para identificar oportunidades de mejora y establecer métricas base."
    },
    {
      step: 2,
      title: "Plan Estratégico",
      description: "Desarrollo de una hoja de ruta personalizada con objetivos SMART, plazos claros y asignación de responsabilidades."
    },
    {
      step: 3,
      title: "Implementación",
      description: "Ejecución del plan con ajustes continuos basados en datos, asegurando la adopción organizacional y alineación estratégica."
    },
    {
      step: 4,
      title: "Seguimiento y Optimización",
      description: "Monitoreo continuo de KPIs, sesiones de retroalimentación y ajustes proactivos para garantizar resultados sostenibles."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nuestros Servicios de Consultoría
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Soluciones personalizadas para transformar su organización mediante nuestra metodología OPT
        </p>

        {/* Service Tiers */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Nuestros Servicios</h3>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nuestra metodología OPT (Organización, Procesos y Tecnología) es el marco que utilizamos para gestionar el éxito de nuestros servicios:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m6-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Evaluación</h4>
              <p className="text-gray-600">Para identificar oportunidades de negocio y la madurez tecnológica de la organización.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Análisis de Datos</h4>
              <p className="text-gray-600">Procesamiento y transformación de datos en información accionable para la toma de decisiones.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Optimización de Procesos</h4>
              <p className="text-gray-600">Identificación de oportunidades de negocio y mejora de la eficiencia operativa.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Implementación</h4>
              <p className="text-gray-600">Despliegue de soluciones tecnológicas, incluyendo la ideología de IA para potenciar la eficiencia personal.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Desarrollo</h4>
              <p className="text-gray-600">Creación de Productos Mínimos Viables (MVPs) funcionales, con código asistido por IA para eficiencia y escalabilidad.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Mantenimiento</h4>
              <p className="text-gray-600">Planes de mantenimiento preventivo para maximizar la disponibilidad y eficiencia de las soluciones.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Asesoría y Capacitación</h4>
              <p className="text-gray-600">Orientación y formación para la adopción de nuevas tecnologías y el desarrollo de una mentalidad operativa potenciada por IA.</p>
            </div>
          </div>
        </div>

        {/* Consulting Process */}
        <ConsultingProcess steps={processSteps} />

        {/* Results Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-3xl font-bold text-center mb-8">Resultados Medibles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600">30-70%</div>
              <p className="text-md mt-2 text-gray-600">Aumento en eficiencia operacional</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600">40%</div>
              <p className="text-md mt-2 text-gray-600">Reducción en costos operativos</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600">9/10</div>
              <p className="text-md mt-2 text-gray-600">Clientes nos recomiendan</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600">$10k+</div>
              <p className="text-md mt-2 text-gray-600">Proyectos (MXN)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
