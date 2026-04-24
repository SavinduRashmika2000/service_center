import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '250+', label: 'Happy Customers', icon: '🚙' },
  { value: '1,200+', label: 'Services Completed', icon: '🔧' },
  { value: '3,500+', label: 'Parts in Stock', icon: '📦' },
  { value: '$120K+', label: 'Revenue Generated', icon: '💰' }
];

const Stats = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-darkCard dark:to-darkCard border-0 shadow-2xl overflow-hidden relative"
      >
        {/* Background decors */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay pointer-events-none"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-14 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-3 opacity-80">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-blue-100 dark:text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
