import React from 'react';
import { Droplets } from 'lucide-react';
import { PHONE_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Gradient - "Only the color" */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950"></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Droplets size={16} className="text-blue-400" />
            <span>#1 Rated in New Jersey</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Dry Basements. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Strong Foundations.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Don't let water damage destroy your home's value. Jersey Elite Waterproofing delivers industrial-grade solutions for residential peace of mind. Licensed, insured, and built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={PHONE_LINK}
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;