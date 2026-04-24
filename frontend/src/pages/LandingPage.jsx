import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import VisualTrust from '../components/VisualTrust';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <VisualTrust />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
