
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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-separator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-black text-accent-orange">scAIe</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-text hover:text-accent-orange transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-accent-orange hover:bg-accent-orange-hover text-white text-button px-6 py-3 rounded-xl transition-all duration-200"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consultoría Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-text hover:text-accent-orange transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-separator">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-primary-text hover:text-accent-orange transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  className="w-full bg-accent-orange hover:bg-accent-orange-hover text-white text-button py-3 rounded-xl"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
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
