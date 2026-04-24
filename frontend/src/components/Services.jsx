import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Wrench, Settings2, Disc, Sparkles, BatteryCharging } from 'lucide-react';

const services = [
  {
    icon: <Droplet className="w-8 h-8 text-blue-600" />,
    title: 'Oil Change',
    desc: 'Premium synthetic oil change to keep your engine running smoothly and efficiently.'
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: 'Full Service',
    desc: 'Comprehensive bumper-to-bumper inspection and servicing for complete peace of mind.'
  },
  {
    icon: <Settings2 className="w-8 h-8 text-blue-600" />,
    title: 'Engine Repair',
    desc: 'Expert diagnostics and repair for all engine types by certified technicians.'
  },
  {
    icon: <Disc className="w-8 h-8 text-blue-600" />,
    title: 'Brake Service',
    desc: 'Complete brake pad replacement, rotor resurfacing, and fluid flush.'
  },
  {
    icon: <Sparkles className="w-8 h-8 text-blue-600" />,
    title: 'Car Wash & Detailing',
    desc: 'Professional interior and exterior detailing to make your car look brand new.'
  },
  {
    icon: <BatteryCharging className="w-8 h-8 text-blue-600" />,
    title: 'Battery Check',
    desc: 'Fast battery testing, replacement, and electrical system diagnostics.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Our Services
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          We provide a full range of auto repair and maintenance services for all makes and models.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
              {React.cloneElement(s.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors" })}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
            <p className="text-slate-500 leading-relaxed text-lg">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
