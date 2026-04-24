import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Automate Your Garage?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Stop losing time on manual paperwork. Join hundreds of successful service centers growing their business with Mind Service Center.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:shadow-lg hover:scale-105 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-100 font-medium">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-300" /> No Credit Card Required</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-300" /> 14-Day Free Trial</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-300" /> Cancel Anytime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
