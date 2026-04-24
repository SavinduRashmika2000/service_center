import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Activity, Users } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-card bg-gradient-to-br from-blue-900 to-indigo-900 p-8 md:p-16 rounded-[2rem] border border-blue-800 overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <svg className="absolute w-[800px] h-[800px] -top-64 -right-64 text-blue-500 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
             <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
             <circle cx="50" cy="50" r="20" />
          </svg>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h3 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Ready to get started?</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Take Your Garage to the Next Level
            </h2>
            <p className="text-blue-100 mb-8 text-lg opacity-90 max-w-lg">
              Join hundreds of garage owners who trust AutoCare Pro to manage their business efficiently and increase their revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-blue-400/50 hover:bg-blue-800/30 text-white font-medium py-3 px-8 rounded-lg transition-all flex items-center gap-2">
                Book a Demo <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Mock Dashboard UI Graphic */}
            <div className="bg-darkBg rounded-2xl shadow-2xl border border-gray-800 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gray-900 border-b border-gray-800 p-3 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-4 grid grid-cols-3 gap-4 h-64">
                <div className="col-span-1 space-y-4">
                  <div className="h-20 bg-gray-800 rounded-lg animate-pulse flex items-center p-3">
                    <Activity className="text-blue-500 w-8 h-8 opacity-50" />
                  </div>
                  <div className="h-20 bg-gray-800 rounded-lg animate-pulse flex items-center p-3">
                    <Users className="text-green-500 w-8 h-8 opacity-50" />
                  </div>
                </div>
                <div className="col-span-2 space-y-4">
                  <div className="h-full bg-gray-800 rounded-lg animate-pulse p-4">
                     <div className="h-4 w-1/3 bg-gray-700 rounded mb-4"></div>
                     <div className="flex h-3/4 items-end gap-2">
                       <div className="w-full bg-blue-500/50 rounded-t h-1/2"></div>
                       <div className="w-full bg-blue-500/50 rounded-t h-3/4"></div>
                       <div className="w-full bg-blue-500/50 rounded-t h-1/4"></div>
                       <div className="w-full bg-blue-500/50 rounded-t h-full"></div>
                       <div className="w-full bg-blue-500/50 rounded-t h-2/3"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating avatars/icons */}
            <div className="absolute -left-6 -bottom-6 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-xl flex items-center justify-center animate-bounce">
               <Users className="text-primary w-8 h-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
