import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, ClipboardList, CheckCheck, IndianRupee, Clock } from 'lucide-react';

const HeroStatCard = ({ icon, label, value, sub, color }) => (
  <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-slate-100/50 dark:border-slate-700/50">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
      {icon}
    </div>
    <div>
      <div className="text-xl font-bold text-slate-800 dark:text-white leading-tight">{value}</div>
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
      {sub && <div className="text-[10px] text-green-500 font-medium">{sub}</div>}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[90vh] flex items-center">
      <div className="grid lg:grid-cols-2 gap-14 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            All-in-One Car Service Management System
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-[#111827] dark:text-white mb-6">
            Run Your Car Service<br />
            Business{' '}
            <span className="text-blue-600">Smarter</span>
            {' '}—<br />
            All in One Place
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            Mind Service Center helps you manage customers, services, staff, inventory, and billing effortlessly. Save time, reduce costs and grow your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <a href="/login" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm w-full sm:w-auto">
              Login <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?img=11" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" />
              <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" />
              <img src="https://i.pravatar.cc/100?img=13" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" />
              <img src="https://i.pravatar.cc/100?img=14" alt="User" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900" />
            </div>
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium mb-1">Trusted by 500+ Service Centers</p>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-slate-800 dark:text-white mr-1">4.8/5</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Image */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
            <img 
              src="/hero-car.png" 
              alt="Premium Car Service Center" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Stats Panel over the image */}
            <div className="absolute top-6 left-6 right-6 z-20">
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-sm">Today's Overview</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                        <ClipboardList className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Jobs Today</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-white">24</div>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Completed</span>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-slate-800 dark:text-white">18</div>
                      <div className="text-[10px] text-green-500 font-medium mb-1">↑ 12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Stats */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4">
               <div className="flex-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Revenue Today</span>
                    <IndianRupee className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-800 dark:text-white">₹48,500</div>
               </div>
               
               <div className="flex-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Pending</span>
                    <Clock className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="text-xl font-bold text-slate-800 dark:text-white">₹12,450</div>
               </div>
            </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
