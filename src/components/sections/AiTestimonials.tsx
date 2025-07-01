import React from 'react';

export default function AiTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="block">Lo que dicen</span>
          <span className="block text-amber-500">nuestros clientes</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "La integración de n8n con GPT-4 revolucionó nuestro CRM",
              author: "Juan Pérez, CTO TechCorp"
            },
            {
              quote: "Automatizamos el 80% de nuestro soporte con Make y Claude",
              author: "Ana Gómez, Directora de Operaciones"
            },
            {
              quote: "Vercel + nuestros agentes IA mejoró nuestro tiempo de carga en 3x",
              author: "Carlos Ruiz, Líder de Producto"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
              <p className="font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
