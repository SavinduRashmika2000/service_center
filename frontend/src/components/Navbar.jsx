import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, CarFront } from 'lucide-react';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <CarFront className="text-blue-500 h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight">
              AutoCare <span className="text-blue-500">Pro</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'Modules', 'Pricing', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="btn-outline">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-xl border-t dark:border-slate-700 py-4 px-4 flex flex-col space-y-4">
          {['Home', 'Features', 'Modules', 'Pricing', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="hover:text-blue-500 transition-colors font-medium">
              {item}
            </a>
          ))}
          <hr className="dark:border-slate-700" />
          <button className="btn-outline w-full">Login</button>
          <button className="btn-primary w-full justify-center">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
