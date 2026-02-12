
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
  const navPadding = !isHomePage ? 'py-3 md:py-4' : (isScrolled ? 'py-3 md:py-4' : 'py-5 md:py-6');
  const textColor = 'text-black hover:text-red-600';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${navBg} ${navPadding} backdrop-blur-sm`}>
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <Link 
          to="/"
          className="flex items-center space-x-3 space-x-reverse cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <img src="/logo-new.png" alt="3M Protection" className="h-10 md:h-12 w-auto object-contain drop-shadow-lg" />
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
          href="https://wa.me/966535316895"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-black text-white px-6 md:px-10 py-3 md:py-3.5 text-sm md:text-lg font-black transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden group inline-flex items-center space-x-2 space-x-reverse"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
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
