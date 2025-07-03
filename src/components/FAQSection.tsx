import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, HelpCircle, Building2, Workflow, Cpu, Clock, Users, Target, Zap } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      category: 'Metodología OPT',
      icon: Target,
      color: '#D2AA52',
      questions: [
        {
          question: '¿Qué significa OPT y por qué es diferente?',
          answer: 'OPT significa Organización, Procesos y Tecnología. Es diferente porque aborda la transformación empresarial de manera holística, considerando que estos tres elementos están interconectados y deben optimizarse juntos para lograr resultados sostenibles.'
        },
        {
          question: '¿Cuánto tiempo toma implementar OPT en mi empresa?',
          answer: 'El tiempo varía según el tamaño y complejidad de tu empresa. Proyectos pequeños pueden completarse en 3-4 meses, mientras que implementaciones más complejas pueden tomar 6-12 meses. Trabajamos en fases para que veas resultados desde el primer mes.'
        },
        {
          question: '¿OPT funciona para cualquier tipo de empresa?',
          answer: 'Sí, OPT es adaptable a cualquier industria y tamaño de empresa. Hemos aplicado la metodología exitosamente en tecnología, manufactura, retail, servicios profesionales y más. Cada implementación se personaliza según tus necesidades específicas.'
        }
      ]
    },
    {
      category: 'Organización',
      icon: Building2,
      color: '#D2AA52',
      questions: [
        {
          question: '¿Cómo OPT mejora la estructura organizacional?',
          answer: 'Analizamos tu estructura actual, identificamos cuellos de botella, definimos roles claros y responsabilidades, y creamos organigramas optimizados. También implementamos estrategias de gestión del cambio para facilitar la adopción.'
        },
        {
          question: '¿Qué pasa con la resistencia al cambio de mi equipo?',
          answer: 'La gestión del cambio es parte integral de OPT. Incluimos capacitación, comunicación transparente, y participación del equipo en el proceso. Esto reduce significativamente la resistencia y aumenta la adopción.'
        },
        {
          question: '¿Cómo medimos el éxito en la fase de Organización?',
          answer: 'Medimos la claridad de roles, eficiencia en la comunicación, reducción de conflictos organizacionales, y mejora en la toma de decisiones. También evaluamos la satisfacción del equipo y la preparación para el crecimiento.'
        }
      ]
    },
    {
      category: 'Procesos',
      icon: Workflow,
      color: '#D2DFC3',
      questions: [
        {
          question: '¿Cómo identifican qué procesos optimizar?',
          answer: 'Realizamos un mapeo completo de tus procesos actuales, identificamos cuellos de botella, redundancias y oportunidades de automatización. Priorizamos los procesos que tienen mayor impacto en eficiencia y satisfacción del cliente.'
        },
        {
          question: '¿Qué nivel de automatización es posible con OPT?',
          answer: 'La automatización se adapta a tus necesidades. Puede ir desde automatización básica de tareas repetitivas hasta implementación de IA avanzada. Siempre comenzamos con soluciones simples y escalamos gradualmente.'
        },
        {
          question: '¿Cómo garantizan que los procesos optimizados se mantengan?',
          answer: 'Implementamos sistemas de monitoreo continuo, documentación clara, capacitación del equipo, y revisiones periódicas. También establecemos métricas de rendimiento para asegurar que los beneficios se mantengan en el tiempo.'
        }
      ]
    },
    {
      category: 'Tecnología',
      icon: Cpu,
      color: '#C4D8DF',
      questions: [
        {
          question: '¿Qué tecnologías implementan con OPT?',
          answer: 'Seleccionamos tecnologías basadas en tus necesidades específicas. Incluimos herramientas de gestión, automatización, análisis de datos, integración de sistemas, y desarrollo de soluciones personalizadas. No hay una solución única para todos.'
        },
        {
          question: '¿Cómo manejan la integración con sistemas existentes?',
          answer: 'Evaluamos tu infraestructura actual y diseñamos una estrategia de integración que minimice interrupciones. Utilizamos APIs, middleware y técnicas de migración gradual para asegurar una transición suave.'
        },
        {
          question: '¿Qué tipo de soporte técnico incluye OPT?',
          answer: 'Incluimos capacitación completa del equipo, documentación técnica, soporte durante la implementación, y seguimiento post-implementación. También ofrecemos mantenimiento continuo y actualizaciones según sea necesario.'
        }
      ]
    },
    {
      category: 'Inversión y ROI',
      icon: Target,
      color: '#D2AA52',
      questions: [
        {
          question: '¿Cuál es el costo de implementar OPT?',
          answer: 'El costo varía según el alcance del proyecto. Ofrecemos un diagnóstico gratuito para evaluar tus necesidades y proporcionar una propuesta personalizada. La inversión típicamente se recupera en 6-18 meses.'
        },
        {
          question: '¿Qué ROI puedo esperar con OPT?',
          answer: 'Nuestros clientes reportan un ROI promedio de 3x en el primer año. Esto incluye ahorros en costos operativos, incrementos en productividad, mejor satisfacción del cliente, y preparación para el crecimiento.'
        },
        {
          question: '¿Ofrecen financiamiento o pagos flexibles?',
          answer: 'Sí, ofrecemos opciones de pago flexibles que incluyen pagos mensuales, por fases, o planes personalizados. Nuestro objetivo es hacer OPT accesible para empresas de todos los tamaños.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const itemKey = categoryIndex * 100 + questionIndex;
    setOpenItems(prev => 
      prev.includes(itemKey) 
        ? prev.filter(id => id !== itemKey)
        : [...prev, itemKey]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-primary-black leading-tight">
            <span className="block">Preguntas Frecuentes</span>
            <span className="block" style={{ color: '#D2AA52' }}>sobre OPT</span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-gray max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestra metodología OPT y cómo puede transformar tu empresa.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: category.color }}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-black">
                    {category.category}
                  </h3>
                  <p className="text-secondary-gray">
                    {category.questions.length} preguntas frecuentes
                  </p>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemKey = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(itemKey);
                  
                  return (
                    <Card 
                      key={questionIndex} 
                      className="group border-none shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ borderLeft: `4px solid ${category.color}` }}
                    >
                      <CardHeader 
                        className="cursor-pointer pb-4"
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg md:text-xl font-semibold text-primary-black pr-4">
                            {item.question}
                          </CardTitle>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-6 w-6 text-secondary-gray" />
                            ) : (
                              <ChevronDown className="h-6 w-6 text-secondary-gray" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      
                      {isOpen && (
                        <CardContent className="pt-0 pb-6">
                          <div className="pl-4 border-l-2 border-gray-200">
                            <p className="text-base md:text-lg text-secondary-gray leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12">
          <div className="flex justify-center mb-6">
            <HelpCircle className="h-16 w-16" style={{ color: '#D2AA52' }} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-black mb-4">
            ¿Tienes más preguntas sobre OPT?
          </h3>
          <p className="text-lg text-secondary-gray mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para responder todas tus dudas y ayudarte a entender cómo OPT puede transformar tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gray-500 hover:bg-gray-600 text-white text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              Agenda una consulta gratuita
            </Button>
            <Button 
              variant="outline"
              className="text-lg px-8 py-4 rounded-2xl border-2 font-semibold"
              style={{ borderColor: '#D2AA52', color: '#D2AA52' }}
            >
              Descarga guía OPT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 