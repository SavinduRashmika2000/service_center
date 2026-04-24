import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
        : 'bg-white py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-600 text-white">
              <Car className="w-6 h-6" />
            </div>
            <div className="leading-none">
              <div className="text-xl font-bold text-slate-900 tracking-tight">Mind Service Center</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a href="/login" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
              Login
            </a>
            <a href="#contact" className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Book Service Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-6 flex flex-col gap-5">
          {['Home', 'Services', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-slate-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
          <hr className="border-slate-100 my-2" />
          <a href="/login" className="text-lg font-medium text-slate-500 text-center">Login</a>
          <a href="#contact" className="w-full text-center py-4 text-base font-bold text-white bg-blue-600 rounded-full shadow-md">
            Book Service Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
