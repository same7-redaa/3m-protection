
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-red-600 ${isScrolled ? 'bg-white shadow-lg py-3 md:py-4' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-3 md:px-4 flex justify-between items-center">
        <div className="flex items-center space-x-1.5 md:space-x-2 space-x-reverse">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-red-600 font-en">3M</span>
          <span className={`text-sm md:text-xl font-bold tracking-tight font-en text-black`}>PROTECTION</span>
        </div>
        
        <div className="hidden lg:flex space-x-10 space-x-reverse">
          {['الرئيسية', 'خدماتنا', 'من نحن', 'أعمالنا'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className={`text-sm md:text-base font-black transition-all duration-300 ${isScrolled ? 'text-black hover:text-red-600' : 'text-red-600 hover:text-black'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-red-600 hover:bg-black text-white px-4 md:px-8 py-2 md:py-2.5 text-xs md:text-lg font-black transition-all duration-300 shadow-md">
          تواصل معنا
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
