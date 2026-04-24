import React from 'react';
import { CarFront, Globe, MessageCircle, Camera, Share2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <CarFront className="text-blue-500 h-7 w-7" />
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                AutoCare <span className="text-blue-500">Pro</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              The all-in-one platform to manage your car service business efficiently. Trusted by hundreds of garages worldwide.
            </p>
            <div className="flex space-x-3">
              {[Globe, MessageCircle, Camera, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Features', 'Modules', 'Pricing', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-base mb-5 text-slate-900 dark:text-white">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-5 text-slate-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-slate-500 dark:text-slate-400 text-sm">123 Auto Avenue, Tech Park, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span className="text-slate-500 dark:text-slate-400 text-sm">support@autocarepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} AutoCare Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-400">
            Made with <span className="text-red-500 mx-1">❤️</span> for auto businesses.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
