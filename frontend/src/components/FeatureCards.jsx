import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Package, UserCircle, Receipt, Navigation } from 'lucide-react';

const features = [
  {
    title: 'Customer Management',
    description: 'Manage customer profiles, vehicles, service history, and loyalty points.',
    icon: <Users className="w-6 h-6 text-blue-500" />,
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Service Management',
    description: 'Create service orders, assign mechanics, track progress, and manage service types.',
    icon: <Wrench className="w-6 h-6 text-green-500" />,
    iconBg: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'Stock Management',
    description: 'Track spare parts inventory, receive stock, low stock alerts, and suppliers.',
    icon: <Package className="w-6 h-6 text-orange-500" />,
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
  },
  {
    title: 'Staff Management',
    description: 'Manage staff profiles, roles, attendance, and performance efficiently.',
    icon: <UserCircle className="w-6 h-6 text-purple-500" />,
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    title: 'Billing & Payments',
    description: 'Generate invoices, manage payments, due amounts, and financial reports.',
    icon: <Receipt className="w-6 h-6 text-pink-500" />,
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
  },
  {
    title: 'Vehicle Tracking',
    description: 'Link multiple vehicles to customers and track service milestones and history.',
    icon: <Navigation className="w-6 h-6 text-indigo-500" />,
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
  },
];

const FeatureCards = () => {
  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3">Core Modules</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Everything You Need to Run Your Garage
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Powerful modules to streamline your car service business operations from entry to exit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card p-8 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.iconBg} group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{feature.title}</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              {feature.description}
            </p>
            <a href="#" className="text-blue-500 font-medium flex items-center gap-1 hover:gap-3 transition-all text-sm">
              Learn More <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
