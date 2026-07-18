import React, { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Heritage', href: '#heritage' },
    { name: 'Academy', href: '#academy' },
    { name: 'Community', href: '#community' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-parchment/90 backdrop-blur-md shadow-sm border-b border-navy/5 py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-3 md:gap-4">
            <Moon className="w-5 h-5 md:w-6 md:h-6 text-navy" />
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl text-navy leading-none" style={{ fontFamily: 'var(--font-calligraphy)' }}>
                Jamia Masjid
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-semibold text-navy/70 hover:text-gold transition-colors tracking-[0.2em] uppercase"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 border border-navy/20 text-navy text-xs font-semibold tracking-[0.2em] uppercase hover:bg-navy hover:text-parchment transition-all duration-300">
              Endowment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-gold focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-parchment border-b border-navy/10 absolute top-full w-full left-0 shadow-xl">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block text-sm font-semibold text-navy hover:text-gold transition-colors tracking-[0.2em] uppercase border-b border-navy/5 pb-4"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full px-6 py-3 bg-navy text-parchment text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-300">
                Endowment
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
