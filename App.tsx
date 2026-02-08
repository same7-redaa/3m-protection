
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // زيادة المهلة الزمنية لإخفاء الشاشة الافتتاحية لتصبح حوالي 5.5 ثانية
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {showSplash && <IntroSplash />}
      <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <About />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
