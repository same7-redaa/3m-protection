
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';
import IntroSplash from './components/IntroSplash';
import GlassProtection from './components/GlassProtection';
import MarbleProtection from './components/MarbleProtection';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // زيادة المهلة الزمنية لإخفاء الشاشة الافتتاحية لتصبح حوالي 5.5 ثانية
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {showSplash && isHomePage && <IntroSplash />}
      <div className={`transition-opacity duration-1000 ${showSplash && isHomePage ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Projects />
                <CTA />
              </>
            } />
            <Route path="/glass-protection" element={<GlassProtection />} />
            <Route path="/marble-protection" element={<MarbleProtection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
