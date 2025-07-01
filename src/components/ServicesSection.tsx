import React from 'react';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios de Consultoría</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Diagnóstico OPT</h3>
            <p className="text-gray-700 mb-4">
              Evaluación completa de tu Organización, Procesos y Tecnología para identificar oportunidades de mejora.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Transformación Organizacional</h3>
            <p className="text-gray-700 mb-4">
              Reestructuración de equipos y roles para alinearlos con tus objetivos estratégicos.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Optimización de Procesos</h3>
            <p className="text-gray-700 mb-4">
              Rediseño de flujos de trabajo para mejorar eficiencia, reducir costos y aumentar calidad.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Implementación Tecnológica</h3>
            <p className="text-gray-700 mb-4">
              Soluciones a medida que potencian tu organización y procesos.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Seguimiento y Mejora Continua</h3>
            <p className="text-gray-700 mb-4">
              Monitoreo de resultados y ajustes para garantizar el éxito a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
