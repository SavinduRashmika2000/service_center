import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, CarFront } from 'lucide-react';

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-darkBg/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <CarFront className="text-primary h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight">
              AutoCare <span className="text-primary">Pro</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-primary transition-colors font-medium">Home</a>
            <a href="#features" className="hover:text-primary transition-colors font-medium">Features</a>
            <a href="#modules" className="hover:text-primary transition-colors font-medium">Modules</a>
            <a href="#pricing" className="hover:text-primary transition-colors font-medium">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="btn-outline">Login</button>
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-darkCard shadow-xl border-t dark:border-gray-800 py-4 px-4 flex flex-col space-y-4">
          <a href="#home" className="hover:text-primary transition-colors font-medium">Home</a>
          <a href="#features" className="hover:text-primary transition-colors font-medium">Features</a>
          <a href="#modules" className="hover:text-primary transition-colors font-medium">Modules</a>
          <a href="#pricing" className="hover:text-primary transition-colors font-medium">Pricing</a>
          <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact</a>
          <hr className="dark:border-gray-700" />
          <button className="btn-outline w-full justify-center">Login</button>
          <button className="btn-primary w-full justify-center">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
