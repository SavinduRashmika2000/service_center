import React from 'react';
import { CarFront, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-darkCard border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CarFront className="text-primary h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight">
                AutoCare <span className="text-primary">Pro</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The all-in-one platform to manage your car service business efficiently. Trusted by hundreds of garages worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Features</a></li>
              <li><a href="#modules" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Modules</a></li>
              <li><a href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">123 Auto Avenue, Tech Park, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">support@autocarepro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AutoCare Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Made with <span className="text-red-500">❤️</span> for auto businesses.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
