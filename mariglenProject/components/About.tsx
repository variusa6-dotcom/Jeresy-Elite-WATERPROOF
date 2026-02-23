import React from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Why Choose Jersey Elite</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Built on Trust, Engineered for Dryness.</h3>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We understand the unique soil and weather conditions of New Jersey. Our solutions aren't just patches; they are engineered systems designed to withstand the harshest nor'easters and rising water tables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Clock className="text-orange-500" />, title: "Fast Response", desc: "24/7 emergency availability" },
              { icon: <Award className="text-orange-500" />, title: "Lifetime Warranty", desc: "Transferable guarantees" },
              { icon: <Users className="text-orange-500" />, title: "Expert Crew", desc: "No subcontractors, ever" },
              { icon: <Shield className="text-orange-500" />, title: "Fully Insured", desc: "Complete liability coverage" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;