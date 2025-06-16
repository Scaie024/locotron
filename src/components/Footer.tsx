import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-primary-neutral text-primary-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-black text-primary-black">scAIe</span>
            </div>
            <p className="text-secondary-gray leading-relaxed">
              Consultoría tecnológica estratégica para transformar empresas y optimizar operaciones.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-black mb-4">Servicios</h4>
            <div className="space-y-2">
              <p className="text-secondary-gray hover:text-accent-mainBlue transition-colors cursor-pointer">
                Optimización de Procesos
              </p>
              <p className="text-secondary-gray hover:text-accent-mainBlue transition-colors cursor-pointer">
                Análisis & Datos
              </p>
              <p className="text-secondary-gray hover:text-accent-mainBlue transition-colors cursor-pointer">
                Implementación Tecnológica
              </p>
              <p className="text-secondary-gray hover:text-accent-mainBlue transition-colors cursor-pointer">
                Desarrollo de MVPs
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-black mb-4">Empresa</h4>
            <div className="space-y-2">
              <a href="#equipo" className="block text-secondary-gray hover:text-accent-mainBlue transition-colors">
                Nuestro Equipo
              </a>
              <a href="#metodologia" className="block text-secondary-gray hover:text-accent-mainBlue transition-colors">
                Metodología OPT
              </a>
              <a href="#stack" className="block text-secondary-gray hover:text-accent-mainBlue transition-colors">
                Stack Tecnológico
              </a>
              <a href="#proyectos" className="block text-secondary-gray hover:text-accent-mainBlue transition-colors">
                Casos de Éxito
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-black mb-4">Contacto</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contacto@scaie.com"
                className="block text-secondary-gray hover:text-accent-mainBlue transition-colors"
              >
                contacto@scaie.com
              </a>
              <a 
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-gray hover:text-accent-mainBlue transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="https://linkedin.com/company/scaie"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-gray hover:text-accent-mainBlue transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-separator mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-gray text-legal mb-4 md:mb-0">
            © 2025 scAIe. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary-gray hover:text-accent-mainBlue transition-colors text-legal">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-secondary-gray hover:text-accent-mainBlue transition-colors text-legal">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
