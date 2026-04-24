import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutDashboard, CheckCircle2, Clock, DollarSign, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
            Smart • Simple • Powerful
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-white">
            Manage Your Car<br />Service Business<br />
            <span className="text-blue-500">with Confidence</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            <strong>AutoCare Pro</strong> is a complete Car Service Management System to manage customers, services, staff, inventory and billing — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="btn-primary flex items-center gap-2 px-8 py-3 text-base font-semibold rounded-xl">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-outline flex items-center gap-2 px-8 py-3 text-base font-semibold rounded-xl">
              Explore Features <LayoutDashboard className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Boost Productivity</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Dashboard Mock */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl pointer-events-none"></div>

          <div className="glass-card p-6 w-full max-w-lg relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">Today's Overview</h3>
              <span className="text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">Today</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'New Services', value: '12', icon: <FileText className="w-4 h-4" />, color: 'blue' },
                { label: 'Completed', value: '8', icon: <CheckCircle2 className="w-4 h-4" />, color: 'green' },
                { label: 'Pending', value: '5', icon: <Clock className="w-4 h-4" />, color: 'orange' },
                { label: 'Total Revenue', value: '$2,450', icon: <DollarSign className="w-4 h-4" />, color: 'purple' },
              ].map((stat, i) => {
                const colorMap = {
                  blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-100 dark:border-blue-800/50', icon: 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300' },
                  green: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-100 dark:border-green-800/50', icon: 'bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300' },
                  orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-100 dark:border-orange-800/50', icon: 'bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300' },
                  purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-100 dark:border-purple-800/50', icon: 'bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300' },
                };
                const c = colorMap[stat.color];
                return (
                  <div key={i} className={`${c.bg} p-4 rounded-xl border ${c.border}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-slate-500 dark:text-slate-400 text-sm">{stat.label}</span>
                      <div className={`p-2 rounded-lg ${c.icon}`}>{stat.icon}</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</div>
                  </div>
                );
              })}
            </div>

            {/* Mini Chart */}
            <div className="mt-6 h-12 w-full overflow-hidden opacity-60">
              <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none">
                <polyline points="0,20 20,10 40,15 60,5 80,10 100,2" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="0,20 20,10 40,15 60,5 80,10 100,2 100,20" fill="rgba(59,130,246,0.1)" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
