import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Activity, Users } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="rounded-3xl overflow-hidden relative p-8 md:p-16"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}
      >
        {/* Background ring decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-blue-500/10 -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-blue-500/10 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left text */}
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-3">
              Ready to get started?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Take Your Garage to the Next Level
            </h2>
            <p className="text-blue-100/80 mb-8 text-lg max-w-lg">
              Join hundreds of garage owners who trust AutoCare Pro to manage their business efficiently.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all"
                style={{ background: '#3B82F6' }}
              >
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white border border-blue-400/40 hover:bg-blue-800/30 transition-all">
                Book a Demo <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right mock dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Browser chrome */}
              <div className="bg-slate-800 border-b border-slate-700 p-3 flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 ml-2 bg-slate-700 rounded h-4 w-40"></div>
              </div>

              <div className="p-4 grid grid-cols-3 gap-4" style={{ minHeight: '200px' }}>
                {/* Sidebar */}
                <div className="space-y-3">
                  <div className="h-20 bg-slate-800 rounded-lg flex items-center justify-center p-3">
                    <Activity className="text-blue-500 w-6 h-6 opacity-60" />
                  </div>
                  <div className="h-20 bg-slate-800 rounded-lg flex items-center justify-center p-3">
                    <Users className="text-green-500 w-6 h-6 opacity-60" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-slate-700 rounded w-full"></div>
                    <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Chart area */}
                <div className="col-span-2 bg-slate-800 rounded-lg p-4">
                  <div className="h-3 w-1/3 bg-slate-700 rounded mb-4"></div>
                  <div className="flex items-end gap-1 h-24">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{ height: `${h}%`, backgroundColor: `rgba(59,130,246,${0.3 + i * 0.1})` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 -bottom-4 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce">
              <Users className="text-blue-500 w-7 h-7" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
