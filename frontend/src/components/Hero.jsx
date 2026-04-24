import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, ClipboardList, CheckCheck, IndianRupee, Clock } from 'lucide-react';

const HeroStatCard = ({ icon, label, value, sub, color }) => (
  <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-lg border border-slate-100 dark:border-slate-700">
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
    <section id="home" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            All-in-One Car Service Management System
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.15] text-[#111827] dark:text-white mb-5">
            Run Your Car Service<br />
            Business{' '}
            <span className="text-blue-600">Smarter</span>
            {' '}—<br />
            All in One Place
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-md">
            Mind Service Center helps you manage customers, services, staff, inventory, and billing effortlessly. Save time, reduce costs and grow your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
            >
              <ArrowRight className="w-4 h-4" />
              Get Started
            </button>
            <a href="/login" className="flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm">
              Login <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#f59e0b', '#3B82F6', '#10b981', '#8b5cf6'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs text-white font-bold" style={{ background: c }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-1">4.8/5</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Trusted by 500+ Service Centers</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-3xl blur-2xl opacity-60 pointer-events-none"></div>

          {/* Main card */}
          <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 p-6">
            {/* Top overview */}
            <div className="flex justify-between items-center mb-5">
              <div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm">Today's Overview</h3>
                <p className="text-xs text-slate-400 mt-0.5">May 12, 2024</p>
              </div>
              <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 px-3 py-1 rounded-full font-medium">Live</span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <HeroStatCard
                icon={<ClipboardList className="w-5 h-5 text-blue-600" />}
                color="bg-blue-50 dark:bg-blue-900/30"
                label="Jobs Today"
                value="24"
              />
              <HeroStatCard
                icon={<CheckCheck className="w-5 h-5 text-green-600" />}
                color="bg-green-50 dark:bg-green-900/30"
                label="Completed"
                value="18"
                sub="↑ 12% from yesterday"
              />
              <HeroStatCard
                icon={<IndianRupee className="w-5 h-5 text-purple-600" />}
                color="bg-purple-50 dark:bg-purple-900/30"
                label="Revenue Today"
                value="₹48,500"
              />
              <HeroStatCard
                icon={<Clock className="w-5 h-5 text-orange-500" />}
                color="bg-orange-50 dark:bg-orange-900/30"
                label="Pending Payments"
                value="₹12,450"
              />
            </div>

            {/* Mini chart */}
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">Revenue This Week</p>
                <p className="text-xs font-bold text-blue-600">↑ 8.2%</p>
              </div>
              <svg viewBox="0 0 200 60" className="w-full" style={{ height: '60px' }}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,50 33,35 66,42 100,18 133,28 166,10 200,20"
                  fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                />
                <polygon
                  points="0,50 33,35 66,42 100,18 133,28 166,10 200,20 200,60 0,60"
                  fill="url(#grad)"
                />
              </svg>
            </div>
          </div>

          {/* Floating car image badge */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl px-4 py-2.5 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-white">6 In Progress</div>
              <div className="text-[10px] text-slate-400">Updated just now</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
