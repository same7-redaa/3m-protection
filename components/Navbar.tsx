
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const isHomePage = location.pathname === '/';
  // خلفية بيضاء بسيطة في كل الصفحات
  const navBg = !isHomePage ? 'bg-white shadow-lg' : (isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md');
  const navPadding = !isHomePage ? 'py-5 md:py-6' : (isScrolled ? 'py-4 md:py-5' : 'py-8 md:py-10');
  const textColor = 'text-black hover:text-red-600';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${navBg} ${navPadding} backdrop-blur-sm`}>
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center space-x-3 space-x-reverse cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <img src="/3M protection.png" alt="3M Protection" className="h-12 md:h-16 w-auto object-contain drop-shadow-lg" />
        </Link>
        
        <div className="hidden lg:flex space-x-10 space-x-reverse">
          {[
            { label: 'الرئيسية', id: 'hero' },
            { label: 'خدماتنا', id: 'services' },
            { label: 'مين نحنا', id: 'about' },
            { label: 'أعمالنا', id: 'projects' }
          ].map((item) => (
            isHomePage ? (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
              </button>
            ) : (
              <Link
                key={item.id}
                to="/"
                onClick={() => setTimeout(() => scrollToSection(item.id), 100)}
                className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            )
          ))}
        </div>

        <a 
          href={isHomePage ? '#services' : '/'}
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              scrollToSection('services');
            }
          }}
          className="bg-red-600 hover:bg-black text-white px-6 md:px-10 py-3 md:py-3.5 text-sm md:text-lg font-black transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden group"
        >
          <span className="relative z-10">تواصل معانا</span>
          <span className="absolute inset-0 bg-gradient-to-r from-black to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </a>
      </div>
      
      {/* خط أحمر أسفل الناف بار */}
      <div className={`absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent transition-all duration-700 ${(isScrolled || !isHomePage) ? '-bottom-1' : 'bottom-3'}`}></div>
    </nav>
  );
};

export default Navbar;
