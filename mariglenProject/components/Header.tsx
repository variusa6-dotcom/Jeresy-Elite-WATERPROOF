import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LICENSE_NUMBER, NAV_LINKS, PHONE_LINK } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar (Hidden on scroll to save space) */}
      <div className={`hidden md:block container mx-auto px-6 mb-2 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="flex justify-between text-slate-300 text-sm font-medium">
          <span className="flex items-center gap-2"><ShieldCheck size={16} /> NJ License: {LICENSE_NUMBER}</span>
          <span>Serving All of New Jersey</span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white md:text-white'}`}>
                JERSEY ELITE
              </span>
              <span className="text-[0.65rem] tracking-[0.2em] text-blue-400 font-bold uppercase">Waterproofing</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-slate-200 hover:text-white transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={PHONE_LINK} 
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20"
            >
              <Phone size={18} />
              {PHONE_NUMBER}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 md:hidden shadow-2xl">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-slate-200 hover:text-blue-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-slate-400 text-sm mb-2">License: {LICENSE_NUMBER}</div>
              <a 
                href={PHONE_LINK} 
                className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-4 rounded-lg font-bold w-full"
              >
                <Phone size={20} />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;