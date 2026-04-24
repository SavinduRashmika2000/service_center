import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import Stats from '../components/Stats';
import DashboardPreview from '../components/DashboardPreview';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [isDark, setIsDark] = useState(false); // Light mode default

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="min-h-screen font-sans bg-[#F9FAFB] dark:bg-slate-950 text-[#111827] dark:text-slate-100 transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
        <FeatureCards />
        <Stats />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
