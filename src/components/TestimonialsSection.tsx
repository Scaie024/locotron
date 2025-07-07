import React from 'react';

import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Su enfoque en Organización, Procesos y Tecnología transformó nuestra operativa. Vimos una mejora del 40% en la eficiencia en solo seis meses. Impresionante.",
    name: "Ana García",
    title: "Directora de Operaciones",
    company: "Logística Express",
    image: `https://i.pravatar.cc/150?u=ana-garcia`
  },
  {
    quote: "El equipo no solo implementó una solución tecnológica, sino que nos enseñó a pensar de manera diferente. Su metodología es un cambio de juego para cualquier empresa.",
    name: "Carlos Rodríguez",
    title: "CEO",
    company: "InnovaTech Solutions",
    image: `https://i.pravatar.cc/150?u=carlos-rodriguez`
  },
  {
    quote: "Estábamos estancados con sistemas heredados. Su consultoría nos dio una hoja de ruta clara y la ejecutaron a la perfección. Ahora somos más ágiles y competitivos.",
    name: "Laura Martínez",
    title: "Gerente de TI",
    company: "Manufactura Global",
    image: `https://i.pravatar.cc/150?u=laura-martinez`
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-800">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Historias de éxito de empresas que transformaron su futuro con nosotros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300">
              <Quote className="w-10 h-10 text-gray-300 mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">\"{testimonial.quote}\"</p>
              <div className="flex items-center mt-auto">
                <img className="w-14 h-14 rounded-full mr-4 object-cover" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
