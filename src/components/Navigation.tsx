import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const accentGray = '#6B7280'; // Gris destacado

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Servicios', to: '/servicios' },
    { name: 'Metodología OPT', to: '/metodologia' },
    { name: 'Stack Tecnológico', to: '/stack' },
    { name: 'Equipo', to: '/equipo' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Contacto', to: '/contacto' },
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
    <nav className="fixed top-0 w-full bg-primary-black z-50 border-b border-gray-800 shadow-lg py-2">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 pr-6 md:pr-12">
            <Link to="/">
              <span className="text-h3 md:text-h2 lg:text-[40px] font-black text-primary-neutral tracking-tight">scAIe</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-14">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-body-lg md:text-2xl lg:text-[22px] text-white hover:text-accent-mainBlue transition-colors duration-300 font-semibold hover:scale-110 transform px-2 md:px-4 py-2 md:py-3 rounded-xl"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block ml-10">
            <Button 
              className="btn-primary text-button-xl px-12 py-6 rounded-3xl shadow-md"
              onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
            >
              Consultoría Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white transition-colors duration-300 p-2"
              style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.color = accentGray}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-6 pb-8 space-y-6 bg-primary-black border-t border-gray-800 rounded-b-2xl shadow-xl mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block px-4 py-4 text-xl text-white hover:text-accent-mainBlue transition-colors duration-300 font-semibold hover:bg-gray-800 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  className="btn-primary w-full text-button-lg py-6 rounded-3xl shadow-md"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.open('https://calendly.com/scaie-empresa/30min', '_blank');
                  }}
                >
                  Consultoría Gratuita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
