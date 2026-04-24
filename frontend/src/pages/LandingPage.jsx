import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import Stats from '../components/Stats';
import DashboardPreview from '../components/DashboardPreview';
import Footer from '../components/Footer';

const LandingPage = () => {
  // Theme state
  const [isDark, setIsDark] = useState(true);

  // Apply theme on initial load and when state changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
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
