import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LayoutDashboard, CheckCircle2, Clock, DollarSign, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 text-primary font-medium text-sm mb-6">
            Smart • Simple • Powerful
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Manage Your Car<br />Service Business<br />
            <span className="text-primary">with Confidence</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            <strong>AutoCare Pro</strong> is a complete Car Service Management System to manage customers, services, staff, inventory and billing — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="btn-primary flex items-center gap-2 px-8 py-3 text-lg">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-outline flex items-center gap-2 px-8 py-3 text-lg">
              Explore Features <LayoutDashboard className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Boost Productivity</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Mock UI Dashboard Floating */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative lg:h-[500px] flex items-center justify-center"
        >
          {/* Main Car Image placeholder or Dashboard mock */}
          <div className="relative w-full max-w-md aspect-square rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="glass-card p-6 w-full max-w-lg relative z-10 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Today's Overview</h3>
              <span className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Today</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">New Services</span>
                  <div className="p-2 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 rounded-lg">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-bold">12</div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border border-green-100 dark:border-green-800/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Completed</span>
                  <div className="p-2 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-bold">8</div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-800/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Pending</span>
                  <div className="p-2 bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-300 rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-3xl font-bold">5</div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Total Revenue</span>
                  <div className="p-2 bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 rounded-lg">
                    <DollarSign className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-bold">$2,450</div>
              </div>
            </div>
            
            {/* Mock Chart line */}
            <div className="mt-6 h-12 w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent flex items-end overflow-hidden opacity-50">
               <svg viewBox="0 0 100 20" className="w-full h-full preserve-3d">
                 <polyline points="0,20 20,10 40,15 60,5 80,10 100,0" fill="none" stroke="#3B82F6" strokeWidth="2" />
               </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
