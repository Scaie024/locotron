
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    <section id="contacto" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 text-primary-text mb-6">
            Conectemos y Transformemos tu Negocio
          </h2>
          <p className="text-body text-secondary-text max-w-3xl mx-auto">
            Estamos listos para escuchar tus desafíos y diseñar la solución perfecta para tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-h3 text-primary-text">
                Solicita tu Consultoría Gratuita
              </CardTitle>
              <CardDescription className="text-body text-secondary-text">
                Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary-text font-medium">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-separator focus:border-accent-orange focus:ring-accent-orange/20"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-primary-text font-medium">
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="border-separator focus:border-accent-orange focus:ring-accent-orange/20"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary-text font-medium">
                    Correo Electrónico *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-separator focus:border-accent-orange focus:ring-accent-orange/20"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary-text font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-separator focus:border-accent-orange focus:ring-accent-orange/20 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, desafíos actuales o qué te gustaría lograr..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-accent-orange hover:bg-accent-orange-hover text-white text-button py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Links */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-h3 text-primary-text">
                  Otras Formas de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-orange" />
                  <a 
                    href="mailto:contacto@scaie.com"
                    className="text-body text-secondary-text hover:text-accent-orange transition-colors"
                  >
                    contacto@scaie.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-orange" />
                  <a 
                    href="https://wa.me/5215512345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-secondary-text hover:text-accent-orange transition-colors"
                  >
                    WhatsApp: +52 (55) 1234-5678
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent-orange" />
                  <span className="text-body text-secondary-text">
                    Ciudad de México, México
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-h3 text-primary-text">
                  Enlaces Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-text mb-3">scAIe</h4>
                    <div className="space-y-2">
                      <a href="#equipo" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Quiénes Somos
                      </a>
                      <a href="#servicios" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Servicios
                      </a>
                      <a href="#stack" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Stack Tecnológico
                      </a>
                      <a href="#metodologia" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Metodología OPT
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-text mb-3">Recursos</h4>
                    <div className="space-y-2">
                      <a href="#" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Casos de Éxito
                      </a>
                      <a href="#" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Blog
                      </a>
                      <a href="#" className="block text-secondary-text hover:text-accent-orange transition-colors">
                        Preguntas Frecuentes
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
