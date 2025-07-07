import React from 'react';
import { Building2, Workflow, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const accentGray = '#6B7280'; // Gris destacado

const MethodologySection = () => {
  const implementationSteps = [
    { number: 1, title: 'Diagnóstico', description: 'Análisis completo' },
    { number: 2, title: 'Estrategia', description: 'Plan de acción' },
    { number: 3, title: 'Implementación', description: 'Desarrollo ágil' },
    { number: 4, title: 'Optimización', description: 'Mejora continua' },
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 leading-tight">
            Nuestra Metodología <span className="text-gray-500">OPT</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Alineamos <span className="font-semibold text-gray-700">Organización, Procesos y Tecnología</span> para obtener resultados extraordinarios.
          </p>
        </div>

        {/* OPT Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-white/80 border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-600 shadow-lg">
                <span className="text-white font-black text-3xl">O</span>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-gray-700">Organización</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Reestructuramos tu organización para alinear talentos, roles y responsabilidades con tus objetivos estratégicos.
            </CardContent>
          </Card>
          <Card className="bg-white/80 border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-600 shadow-lg">
                <span className="text-white font-black text-3xl">P</span>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-gray-700">Procesos</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Optimizamos tus procesos para mejorar eficiencia, reducir costos y aumentar la calidad de tus entregables.
            </CardContent>
          </Card>
          <Card className="bg-white/80 border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-600 shadow-lg">
                <span className="text-white font-black text-3xl">T</span>
              </div>
              <CardTitle className="text-2xl font-bold text-center text-gray-700">Tecnología</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Implementamos soluciones tecnológicas a medida que potencian tu organización y tus procesos.
            </CardContent>
          </Card>
        </div>

        {/* Implementation Flow Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-gray-800 font-bold">
              Nuestro Flujo de Implementación
            </h3>
            <p className="mt-3 text-md md:text-lg text-gray-600">
              Un proceso iterativo y adaptativo para el éxito de tu empresa.
            </p>
          </div>

          {/* Responsive Implementation Flow */}
          <div className="relative pt-8 md:pt-0">
            {/* Desktop: Horizontal line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300" style={{transform: 'translateY(-50%)'}} />
            
            {/* Mobile: Vertical line */}
            <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gray-300" />

            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
              {implementationSteps.map((step, index) => (
                <div key={index} className="flex items-start md:items-center md:flex-col w-full md:w-auto mb-10 md:mb-0 pl-16 md:pl-0">
                  {/* Node */}
                  <div className="z-10 flex flex-col items-center text-center md:transform md:-translate-y-4">
                    <div className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center font-bold text-xl shadow-lg mb-3">
                      {step.number}
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl md:text-3xl text-gray-800 font-bold mb-4">
            ¿Listo para transformar tu empresa?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo nuestra metodología OPT puede llevar tu negocio al siguiente nivel.
          </p>
          <Button size="lg" className="bg-gray-700 hover:bg-gray-800 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            Solicita tu Diagnóstico Gratuito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
