import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star, Building2, Workflow, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      position: 'CEO',
      company: 'TechCorp Solutions',
      industry: 'Tecnología',
      avatar: '👩‍💼',
      quote: 'La metodología OPT transformó completamente nuestra empresa. En solo 6 meses, logramos una mejora del 50% en eficiencia operativa y reducimos costos en un 30%.',
      results: [
        { metric: '50%', label: 'Mejora en Eficiencia', color: '#D2AA52' },
        { metric: '30%', label: 'Reducción de Costos', color: '#D2DFC3' },
        { metric: '6', label: 'Meses de Implementación', color: '#C4D8DF' }
      ],
      optFocus: 'Organización y Procesos',
      optIcon: Building2,
      optColor: '#D2AA52'
    },
    {
      name: 'Carlos Rodríguez',
      position: 'Director de Operaciones',
      company: 'Green Manufacturing',
      industry: 'Manufactura',
      avatar: '👨‍🏭',
      quote: 'scAIe aplicó OPT de manera magistral. Los procesos automatizados y la nueva estructura organizacional nos permitieron incrementar la productividad en un 40%.',
      results: [
        { metric: '40%', label: 'Incremento Productividad', color: '#D2AA52' },
        { metric: '60%', label: 'Reducción de Errores', color: '#D2DFC3' },
        { metric: '85%', label: 'Satisfacción Equipo', color: '#C4D8DF' }
      ],
      optFocus: 'Procesos y Tecnología',
      optIcon: Workflow,
      optColor: '#D2DFC3'
    },
    {
      name: 'Ana Martínez',
      position: 'CTO',
      company: 'Digital Retail',
      industry: 'Comercio Electrónico',
      avatar: '👩‍💻',
      quote: 'La implementación tecnológica con OPT fue revolucionaria. Nuestros sistemas ahora están perfectamente integrados y la experiencia del cliente mejoró un 70%.',
      results: [
        { metric: '70%', label: 'Mejora Experiencia Cliente', color: '#D2AA52' },
        { metric: '3x', label: 'ROI en Tecnología', color: '#D2DFC3' },
        { metric: '90%', label: 'Uptime Sistemas', color: '#C4D8DF' }
      ],
      optFocus: 'Tecnología',
      optIcon: Cpu,
      optColor: '#C4D8DF'
    }
  ];

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Resultados que Inspiran</span>
            <span className="block" style={{ color: '#D2AA52' }}>Historias de Éxito</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-gray max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus metas.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="space-y-8">
              <div className="relative">
                <Quote className="h-12 w-12 mb-6" style={{ color: '#D2AA52' }} />
                <blockquote className="text-2xl md:text-3xl font-semibold text-primary-black leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{currentTestimonial.avatar}</div>
                <div>
                  <h4 className="text-xl font-bold text-primary-black">{currentTestimonial.name}</h4>
                  <p className="text-secondary-gray">{currentTestimonial.position}</p>
                  <p className="text-lg font-semibold" style={{ color: currentTestimonial.optColor }}>
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* OPT Focus */}
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-white shadow-md">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: currentTestimonial.optColor }}
                >
                  <currentTestimonial.optIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-secondary-gray">Enfoque OPT:</p>
                  <p className="font-semibold text-primary-black">{currentTestimonial.optFocus}</p>
                </div>
              </div>
            </div>

            {/* Results Visualization */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-black mb-6">Resultados Alcanzados</h3>
              {currentTestimonial.results.map((result, index) => (
                <Card 
                  key={index} 
                  className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderLeft: `4px solid ${result.color}` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div 
                          className="text-3xl md:text-4xl font-black mb-2"
                          style={{ color: result.color }}
                        >
                          {result.metric}
                        </div>
                        <div className="text-lg font-semibold text-primary-black">
                          {result.label}
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5" 
                            style={{ 
                              color: i < 4 ? result.color : '#e5e7eb',
                              fill: i < 4 ? result.color : 'none'
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-2 hover:bg-opt-organizacion hover:text-white transition-all duration-300"
              style={{ borderColor: '#D2AA52', color: '#D2AA52' }}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-opt-organizacion scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-2 hover:bg-opt-organizacion hover:text-white transition-all duration-300"
              style={{ borderColor: '#D2AA52', color: '#D2AA52' }}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-xl text-secondary-gray mb-8">
            ¿Quieres obtener resultados similares?
          </p>
          <Button 
            asChild
            className="btn-primary text-xl px-12 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-black"
            style={{ background: '#D2AA52', color: '#fff', border: 'none' }}
          >
            <Link to="/contacto">Agenda una consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 