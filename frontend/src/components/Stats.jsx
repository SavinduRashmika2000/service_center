import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '250+', label: 'Happy Customers', emoji: '🚙' },
  { value: '1,200+', label: 'Services Completed', emoji: '🔧' },
  { value: '3,500+', label: 'Parts in Stock', emoji: '📦' },
  { value: '$120K+', label: 'Revenue Generated', emoji: '💰' },
];

const Stats = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white opacity-5 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-3">{stat.emoji}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
