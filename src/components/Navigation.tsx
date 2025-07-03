import React, { useState } from 'react';
import { Menu, X, Building2, Workflow, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { 
      name: 'Servicios', 
      to: '/servicios',
      description: 'Organización, Procesos y Tecnología'
    },
    { 
      name: 'Workshop', 
      to: '/workshop',
      description: 'Workshop'
    },
    { 
      name: 'Metodología OPT', 
      to: '/metodologia',
      description: 'Nuestro framework probado'
    },
    { 
      name: 'Stack Tecnológico', 
      to: '/stack',
      description: 'Herramientas que utilizamos'
    },
    { 
      name: 'Equipo', 
      to: '/equipo',
      description: 'Expertos en OPT'
    },
    { 
      name: 'Proyectos', 
      to: '/proyectos',
      description: 'Casos de éxito con OPT'
    },
    { 
      name: 'Contacto', 
      to: '/contacto',
      description: 'Solicita tu diagnóstico OPT'
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 z-50 border-b border-gray-700 shadow-lg py-2">
      <div className="flex items-center justify-between mx-auto px-4 max-w-7xl">
        <div className="flex-shrink-0 pr-6 md:pr-12">
          <Link to="/" className="flex items-center">
            <span className="text-h3 md:text-h2 lg:text-[40px] font-black text-contrast tracking-tight">scAIe</span>
            <div className="ml-3 flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-opt-organizacion"></div>
              <div className="w-2 h-2 rounded-full bg-opt-procesos"></div>
              <div className="w-2 h-2 rounded-full bg-opt-tecnologias"></div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="group relative">
                <Link
                  to={item.to}
                  className="text-body-lg md:text-xl lg:text-[20px] text-white hover:text-opt-organizacion transition-colors duration-300 font-semibold hover:scale-105 transform px-3 md:px-4 py-2 md:py-3 rounded-xl"
                >
                  {item.name}
                </Link>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  {item.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block ml-10">
          <Button 
            className="bg-gray-500 hover:bg-gray-600 text-white text-button-lg px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
          >
            Diagnóstico OPT Gratuito
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white transition-colors duration-300 p-2 hover:text-opt-organizacion"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Converted to dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg py-2 z-40 border border-gray-700">
          <div className="px-2 pt-2 pb-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block px-4 py-3 text-base text-white hover:bg-gray-700 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="font-bold">{item.name}</div>
                <div className="text-xs text-gray-400 mt-1">{item.description}</div>
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Button 
                className="bg-gray-500 hover:bg-gray-600 text-white w-full text-button-lg py-3 rounded-xl shadow-md"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://calendly.com/scaie-empresa/30min', '_blank');
                }}
              >
                Diagnóstico OPT
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
