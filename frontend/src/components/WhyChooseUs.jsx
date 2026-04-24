import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Clock, PiggyBank, PenTool } from 'lucide-react';

const reasons = [
  {
    icon: <UserCheck className="w-10 h-10 text-white" />,
    title: 'Expert Technicians',
    desc: 'Our certified mechanics have decades of experience with all major car brands.'
  },
  {
    icon: <Clock className="w-10 h-10 text-white" />,
    title: 'Fast Service',
    desc: 'We value your time. Most standard services are completed on the same day.'
  },
  {
    icon: <PiggyBank className="w-10 h-10 text-white" />,
    title: 'Affordable Prices',
    desc: 'Honest, transparent pricing with no hidden fees or surprise charges.'
  },
  {
    icon: <PenTool className="w-10 h-10 text-white" />,
    title: 'Quality Parts',
    desc: 'We use only genuine, OEM-approved spare parts for all our repairs.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 rounded-[3rem] my-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Why Choose Mind Service Center
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          We combine cutting-edge technology with old-fashioned customer service.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full bg-blue-600 shadow-xl shadow-blue-600/20 flex items-center justify-center mb-6">
              {r.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{r.title}</h4>
            <p className="text-slate-500">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
