import React from 'react';
import { Waves, Home, Hammer, Construction, Umbrella, ShieldAlert } from 'lucide-react';

const services = [
  {
    icon: <Waves className="w-8 h-8 text-blue-500" />,
    title: "Basement Waterproofing",
    description: "Complete interior and exterior solutions to keep your basement dry permanently."
  },
  {
    icon: <Home className="w-8 h-8 text-blue-500" />,
    title: "Foundation Repair",
    description: "Structural stabilization for bowed walls, cracks, and sinking foundations."
  },
  {
    icon: <Hammer className="w-8 h-8 text-blue-500" />,
    title: "Crawl Space Encapsulation",
    description: "Seal out moisture, mold, and pests with our heavy-duty vapor barriers."
  },
  {
    icon: <Construction className="w-8 h-8 text-blue-500" />,
    title: "French Drains",
    description: "Custom drainage systems designed to channel water away from your property."
  },
  {
    icon: <Umbrella className="w-8 h-8 text-blue-500" />,
    title: "Sump Pump Systems",
    description: "High-capacity pump installation with battery backups for storm security."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-blue-500" />,
    title: "Mold Remediation",
    description: "Safe removal and treatment of mold caused by chronic water intrusion."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Waterproofing Solutions</h3>
          <p className="text-slate-600 text-lg">
            We use advanced materials and proven engineering techniques to protect New Jersey homes from water damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;