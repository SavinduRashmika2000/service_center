import React from 'react';
import { Settings, Phone, Mail, MapPin, Globe, MessageCircle, Camera, Share2 } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'Features', 'Pricing', 'About Us', 'Contact'];
  const featureLinks = ['Customer Management', 'Service Management', 'Inventory Management', 'Billing & Invoicing', 'Reports & Analytics'];
  const supportLinks = ['Help Center', 'Documentation', 'Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className="bg-[#111827] text-slate-300 pt-16 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}>
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-bold text-blue-400 tracking-tight">MIND</div>
                <div className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase -mt-0.5">Service Center</div>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              The all-in-one platform to manage your car service business efficiently and grow faster.
            </p>
            <div className="flex gap-3">
              {[Globe, MessageCircle, Camera, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features + Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Features</h4>
            <ul className="space-y-3">
              {featureLinks.map(link => (
                <li key={link}>
                  <a href="#features" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-bold text-white mt-6 mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">support@mindservice.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">123, Auto Street, Chennai,<br />Tamil Nadu, India - 600001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Mind Service Center. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-slate-600">
            Made with <span className="text-red-500 mx-1">❤️</span> for service businesses.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
