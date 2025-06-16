import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-primary-neutral">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[48px] md:text-[56px] lg:text-[64px] text-primary-black mb-6 font-black">
            Conectemos y Transformemos tu Negocio
          </h2>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] text-secondary-gray max-w-4xl mx-auto">
            Estamos listos para escuchar tus desafíos y diseñar la solución perfecta para tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-[32px] text-primary-black">
                Solicita tu Consultoría Gratuita
              </CardTitle>
              <CardDescription className="text-[18px] text-secondary-gray">
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[18px] text-primary-black font-medium">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 text-[18px] border-separator focus:border-accent-mainBlue focus:ring-accent-mainBlue/20"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[18px] text-primary-black font-medium">
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 text-[18px] border-separator focus:border-accent-mainBlue focus:ring-accent-mainBlue/20"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[18px] text-primary-black font-medium">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 text-[18px] border-separator focus:border-accent-mainBlue focus:ring-accent-mainBlue/20"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[18px] text-primary-black font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="text-[18px] border-separator focus:border-accent-mainBlue focus:ring-accent-mainBlue/20 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, desafíos actuales o qué te gustaría lograr..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="btn-primary w-full text-[20px] py-5 rounded-2xl"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Links */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-none shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-[32px] text-primary-black">
                  Otras Formas de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bluePale/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent-mainBlue" />
                  </div>
                  <a 
                    href="mailto:contacto@scaie.com"
                    className="text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors"
                  >
                    contacto@scaie.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bluePale/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent-mainBlue" />
                  </div>
                  <a 
                    href="https://wa.me/5215512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors"
                  >
                    WhatsApp: +52 (55) 1234-5678
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bluePale/10 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-accent-mainBlue" />
                  </div>
                  <a 
                    href="https://www.linkedin.com/company/scaie/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors"
                  >
                    LinkedIn de scAIe
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bluePale/10 flex items-center justify-center">
                    <CalendarDays className="h-6 w-6 text-accent-mainBlue" />
                  </div>
                  <a 
                    href="https://calendly.com/scaie-empresa/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors"
                  >
                    Agendar una Consulta Gratuita
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-bluePale/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent-mainBlue" />
                  </div>
                  <span className="text-[18px] text-secondary-gray">
                    Ciudad de México, México
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-none shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-[32px] text-primary-black">
                  Enlaces Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-[24px] font-semibold text-primary-black mb-4">scAIe</h4>
                    <div className="space-y-3">
                      <a href="#equipo" className="block text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors">
                        Quiénes Somos
                      </a>
                      <a href="#servicios" className="block text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors">
                        Servicios
                      </a>
                      <a href="#stack" className="block text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors">
                        Stack Tecnológico
                      </a>
                      <a href="#metodologia" className="block text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors">
                        Metodología OPT
                      </a>
                      <a href="#proyectos" className="block text-[18px] text-secondary-gray hover:text-accent-mainBlue transition-colors">
                        Proyectos
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
