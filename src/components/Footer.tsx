import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Building2, Workflow, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-neutral text-primary-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center">
                <span className="text-3xl font-black text-primary-black">scAIe</span>
                <div className="ml-2 flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-opt-organizacion"></div>
                  <div className="w-2 h-2 rounded-full bg-opt-procesos"></div>
                  <div className="w-2 h-2 rounded-full bg-opt-tecnologias"></div>
                </div>
              </Link>
            </div>
            <p className="text-secondary-gray leading-relaxed mb-4">
              Consultoría tecnológica estratégica aplicando metodología OPT para transformar empresas y optimizar operaciones.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4" style={{ color: '#D2AA52' }} />
                <span className="text-sm font-semibold" style={{ color: '#D2AA52' }}>Organización</span>
              </div>
              <div className="flex items-center space-x-2">
                <Workflow className="h-4 w-4" style={{ color: '#D2DFC3' }} />
                <span className="text-sm font-semibold" style={{ color: '#D2DFC3' }}>Procesos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4" style={{ color: '#C4D8DF' }} />
                <span className="text-sm font-semibold" style={{ color: '#C4D8DF' }}>Tecnología</span>
              </div>
            </div>
          </div>

          {/* Services by OPT */}
          <div>
            <h4 className="font-semibold text-primary-black mb-4">Servicios por Metodología OPT</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-sm font-semibold" style={{ color: '#D2AA52' }}>Organización</p>
                <p className="text-secondary-gray hover:text-opt-organizacion transition-colors cursor-pointer text-sm">
                  Análisis Organizacional
                </p>
                <p className="text-secondary-gray hover:text-opt-organizacion transition-colors cursor-pointer text-sm">
                  Rediseño de Estructuras
                </p>
                <p className="text-secondary-gray hover:text-opt-organizacion transition-colors cursor-pointer text-sm">
                  Gestión del Cambio
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold" style={{ color: '#D2DFC3' }}>Procesos</p>
                <p className="text-secondary-gray hover:text-opt-procesos transition-colors cursor-pointer text-sm">
                  Mapeo de Procesos
                </p>
                <p className="text-secondary-gray hover:text-opt-procesos transition-colors cursor-pointer text-sm">
                  Automatización Inteligente
                </p>
                <p className="text-secondary-gray hover:text-opt-procesos transition-colors cursor-pointer text-sm">
                  Optimización de Flujos
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold" style={{ color: '#C4D8DF' }}>Tecnología</p>
                <p className="text-secondary-gray hover:text-opt-tecnologias transition-colors cursor-pointer text-sm">
                  Implementación Tecnológica
                </p>
                <p className="text-secondary-gray hover:text-opt-tecnologias transition-colors cursor-pointer text-sm">
                  Desarrollo de MVPs
                </p>
                <p className="text-secondary-gray hover:text-opt-tecnologias transition-colors cursor-pointer text-sm">
                  Integración de Sistemas
                </p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-black mb-4">Empresa</h4>
            <div className="space-y-2">
              <Link to="/equipo" className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm">
                Nuestro Equipo OPT
              </Link>
              <Link to="/metodologia" className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm">
                Metodología OPT
              </Link>
              <Link to="/stack" className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm">
                Stack Tecnológico
              </Link>
              <Link to="/proyectos" className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm">
                Casos de Éxito OPT
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-black mb-4">Contacto</h4>
            <div className="space-y-2">
              <a 
                href="mailto:contacto@scaie.com"
                className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm"
              >
                contacto@scaie.com
              </a>
              <a 
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm"
              >
                WhatsApp
              </a>
              <a 
                href="https://linkedin.com/company/scaie"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="https://calendly.com/scaie-empresa/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-gray hover:text-opt-organizacion transition-colors text-sm font-semibold"
              >
                📅 Diagnóstico OPT Gratuito
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-separator mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-secondary-gray text-legal mb-4 md:mb-0">
            © 2025 scAIe. Metodología OPT. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary-gray hover:text-opt-organizacion transition-colors text-legal">
              Aviso de Privacidad
            </a>
            <a href="#" className="text-secondary-gray hover:text-opt-organizacion transition-colors text-legal">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
