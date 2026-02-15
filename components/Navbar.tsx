
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const services = [
    { label: 'أفلام العازل الحراري للزجاج', path: '/glass-protection' },
    { label: 'أفلام حماية الرخام', path: '/marble-protection' }
  ];

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
          {/* الرئيسية */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ) : (
            <Link
              to="/"
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          )}

          {/* خدماتنا مع القائمة المنسدلة */}
          <div 
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <button
              onClick={() => {
                if (isHomePage) {
                  scrollToSection('services');
                } else {
                  navigate('/');
                  setTimeout(() => scrollToSection('services'), 100);
                }
              }}
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group flex items-center gap-1 ${textColor}`}
            >
              خدماتنا
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>

          {/* من نحن */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('about')}
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
            >
              من نحن
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ) : (
            <Link
              to="/"
              onClick={() => setTimeout(() => scrollToSection('about'), 100)}
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
            >
              من نحن
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          )}

          {/* أعمالنا */}
          {isHomePage ? (
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
            >
              أعمالنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </button>
          ) : (
            <Link
              to="/"
              onClick={() => setTimeout(() => scrollToSection('projects'), 100)}
              className={`text-base md:text-lg font-black transition-all duration-500 cursor-pointer relative group ${textColor}`}
            >
              أعمالنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          )}
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

      {/* Mega Menu للخدمات */}
      <div 
        className={`absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-500 overflow-hidden ${
          showServicesDropdown ? 'opacity-100 visible max-h-[400px]' : 'opacity-0 invisible max-h-0'
        }`}
        style={{ top: '100%' }}
        onMouseEnter={() => setShowServicesDropdown(true)}
        onMouseLeave={() => setShowServicesDropdown(false)}
      >
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.path}
                className="group flex items-center gap-6 p-6 bg-gray-50 hover:bg-red-50 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {idx === 0 ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-black text-black group-hover:text-red-600 transition-colors duration-300 mb-2">
                    {service.label}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {idx === 0 ? 'عزل حراري متقدم للزجاج يوفر الطاقة ويحمي من الأشعة فوق البنفسجية' : 'حماية فائقة للأسطح الرخامية من الخدوش والبقع'}
                  </p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-red-600 group-hover:-translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
