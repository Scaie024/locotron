import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodología OPT', href: '#metodologia' },
    { name: 'Stack Tecnológico', href: '#stack' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary-black z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-h3 md:text-h2 lg:text-[40px] font-black text-primary-neutral tracking-tight">scAIe</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-lg md:text-body-xl lg:text-[18px] text-white hover:text-accent-mainBlue transition-colors duration-300 font-medium hover:scale-105 transform"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="btn-primary text-button-xl px-12 py-6 rounded-3xl"
              onClick={() => window.open('https://calendly.com/scaie-empresa/30min', '_blank')}
            >
              Consultoría Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-accent-mainBlue transition-colors duration-300 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-4 bg-primary-black border-t border-gray-800 rounded-b-2xl shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-body-lg text-white hover:text-accent-mainBlue transition-colors duration-300 font-medium hover:bg-gray-800 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  className="btn-primary w-full text-button-lg py-6 rounded-3xl"
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
