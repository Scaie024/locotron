import React, { useState } from 'react';
import { Menu, X, Building2, Workflow, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Effect to lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset on component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Servicios', to: '/servicios', description: 'Organización, Procesos y Tecnología' },
    { name: 'Workshop', to: '/workshop', description: 'Sesiones prácticas de OPT' },
    { name: 'Metodología', to: '/metodologia', description: 'Nuestro framework probado' },
    { name: 'Stack', to: '/stack', description: 'Herramientas que utilizamos' },
    { name: 'Equipo', to: '/equipo', description: 'Expertos en OPT' },
    { name: 'Proyectos', to: '/proyectos', description: 'Casos de éxito con OPT' },
    { name: 'Contacto', to: '/contacto', description: 'Solicita tu diagnóstico' },
  ];

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-800 z-50 border-b border-gray-700 shadow-lg py-2">
        <div className="flex items-center justify-between mx-auto px-4 max-w-7xl">
          <Link to="/" className="flex-shrink-0 flex items-center pr-6 md:pr-12" onClick={handleCloseMenu}>
            <span className="text-2xl md:text-3xl font-black text-white tracking-tight">scAIe</span>
            <div className="ml-3 flex space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-opt-organizacion"></div>
              <div className="w-2 h-2 rounded-full bg-opt-procesos"></div>
              <div className="w-2 h-2 rounded-full bg-opt-tecnologias"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-white hover:text-opt-organizacion transition-colors duration-300 font-semibold text-base lg:text-lg px-3 py-2 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block ml-6">
            <Button 
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
            >
              Diagnóstico Gratuito
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-white transition-transform duration-300 p-2 hover:text-opt-organizacion transform hover:scale-110"
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full-screen overlay */}
      <div className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-95 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex justify-end p-4">
            <button
              onClick={handleMenuToggle}
              className="text-white transition-transform duration-300 p-2 hover:text-opt-organizacion transform hover:scale-110"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block py-4 text-2xl text-white hover:text-opt-organizacion transition-colors duration-200 transform hover:scale-105"
              onClick={handleCloseMenu}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-8">
            <Button 
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold text-lg w-full px-8 py-4 rounded-xl shadow-lg"
              onClick={() => {
                handleCloseMenu();
                window.open('https://calendly.com/scaie-empresa/30min', '_blank');
              }}
            >
              Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
