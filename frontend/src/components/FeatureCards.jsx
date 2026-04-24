import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Package, UserCircle, Receipt, Navigation } from 'lucide-react';

const features = [
  {
    title: 'Customer Management',
    description: 'Manage customer profiles, vehicles, service history, and loyalty points.',
    icon: <Users className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-100 dark:bg-blue-900/30'
  },
  {
    title: 'Service Management',
    description: 'Create service orders, assign mechanics, track progress, and manage service types.',
    icon: <Wrench className="w-6 h-6 text-green-500" />,
    color: 'bg-green-100 dark:bg-green-900/30'
  },
  {
    title: 'Stock Management',
    description: 'Track spare parts inventory, receive stock, low stock alerts, and suppliers.',
    icon: <Package className="w-6 h-6 text-orange-500" />,
    color: 'bg-orange-100 dark:bg-orange-900/30'
  },
  {
    title: 'Staff Management',
    description: 'Manage staff profiles, roles, attendance, and performance efficiently.',
    icon: <UserCircle className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-100 dark:bg-purple-900/30'
  },
  {
    title: 'Billing & Payments',
    description: 'Generate invoices, manage payments, due amounts, and financial reports.',
    icon: <Receipt className="w-6 h-6 text-pink-500" />,
    color: 'bg-pink-100 dark:bg-pink-900/30'
  },
  {
    title: 'Vehicle Tracking',
    description: 'Link multiple vehicles to customers and track service milestones and history.',
    icon: <Navigation className="w-6 h-6 text-indigo-500" />,
    color: 'bg-indigo-100 dark:bg-indigo-900/30'
  }
];

const FeatureCards = () => {
  return (
    <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h3 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Core Modules</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Run Your Garage</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
            className="glass-card p-8 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              {feature.description}
            </p>
            <a href="#" className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
