import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Building2, Workflow, Cpu } from 'lucide-react';

const Footer = () => {
  const services = {
    organizacion: [
      { name: 'Análisis Organizacional', path: '/servicios#organizacion' },
      { name: 'Rediseño de Estructuras', path: '/servicios#organizacion' },
      { name: 'Gestión del Cambio', path: '/servicios#organizacion' },
    ],
    procesos: [
      { name: 'Mapeo de Procesos', path: '/servicios#procesos' },
      { name: 'Automatización Inteligente', path: '/servicios#procesos' },
      { name: 'Optimización de Flujos', path: '/servicios#procesos' },
    ],
    tecnologia: [
      { name: 'Implementación Tecnológica', path: '/servicios#tecnologia' },
      { name: 'Desarrollo de MVPs', path: '/servicios#tecnologia' },
      { name: 'Integración de Sistemas', path: '/servicios#tecnologia' },
    ],
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          
          {/* Services Column */}
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-white mb-4">Servicios por Metodología</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h5 className="font-bold text-organizacion mb-3">Organización</h5>
                <ul className="space-y-2">
                  {services.organizacion.map(s => <li key={s.name}><Link to={s.path} className="hover:text-white transition-colors text-sm">{s.name}</Link></li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-procesos mb-3">Procesos</h5>
                <ul className="space-y-2">
                  {services.procesos.map(s => <li key={s.name}><Link to={s.path} className="hover:text-white transition-colors text-sm">{s.name}</Link></li>)}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-tecnologia mb-3">Tecnología</h5>
                <ul className="space-y-2">
                  {services.tecnologia.map(s => <li key={s.name}><Link to={s.path} className="hover:text-white transition-colors text-sm">{s.name}</Link></li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/equipo" className="hover:text-white transition-colors text-sm">Nuestro Equipo</Link></li>
              <li><Link to="/metodologia" className="hover:text-white transition-colors text-sm">Metodología</Link></li>
              <li><Link to="/stack" className="hover:text-white transition-colors text-sm">Stack Tecnológico</Link></li>
              <li><Link to="/proyectos" className="hover:text-white transition-colors text-sm">Casos de Éxito</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contacto@scaie.com" className="hover:text-white transition-colors text-sm">contacto@scaie.com</a></li>
              <li><a href="https://wa.me/5215535913417" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">WhatsApp</a></li>
              <li><a href="https://linkedin.com/company/scaie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href="https://calendly.com/scaie-empresa/30min" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-blue-300 transition-colors text-sm">📅 Agendar Diagnóstico</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} scAIe. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacidad" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
            <Link to="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
