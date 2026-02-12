
import React, { useState, useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoAnimRef = useRef<number | null>(null);

  const beforeImage = "/قبل.jpeg";
  const afterImage = "/بعد.jpeg";

  useEffect(() => {
    let startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newPos = 50 + 45 * Math.sin(elapsed / 800);
      setSliderPos(newPos);
      autoAnimRef.current = requestAnimationFrame(animate);
    };

    autoAnimRef.current = requestAnimationFrame(animate);

    return () => {
      if (autoAnimRef.current) cancelAnimationFrame(autoAnimRef.current);
    };
  }, []);

  const isBefore = sliderPos > 50;

  return (
    <section id="hero" className="relative min-h-screen pt-20 md:pt-24 pb-12 flex items-center bg-white overflow-hidden">
      {/* نص خلفية مخفي على الهواتف الصغيرة */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 rotate-90 text-[8rem] md:text-[14rem] font-black text-gray-50 select-none -z-10 uppercase tracking-tighter opacity-40 md:opacity-60 font-en hidden sm:block">
        3M PROTECTION
      </div>

      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 w-full flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 lg:items-center">
        
        <div className="relative z-10 text-right lg:order-1">
          <div className="inline-flex items-center space-x-3 space-x-reverse mb-4 md:mb-6">
            <span className="w-10 md:w-16 h-1 bg-red-600"></span>
            <span className="text-red-600 font-black tracking-[0.1em] text-xs md:text-sm uppercase">أنظمة حماية متطورة</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black leading-[1.2] md:leading-[1.1] text-black mb-6 md:mb-8">
            حماية <span className="text-red-600 font-en">3M</span> <br />
            بلمسة عصرية
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-600 font-normal leading-relaxed mb-8 md:mb-10 max-w-xl border-r-4 border-red-600 pr-6 md:pr-8">
            نعطيك حلول حماية ما تبين تحافظ على رونق الرخام وصفاء الزجاج. العرض التفاعلي يوضحلك قدرة تقنياتنا على عزل العوامل الجوية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <a 
              href="https://wa.me/966535316895"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-black text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group inline-flex items-center justify-center space-x-2 space-x-reverse"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10">استشارة مجانية</span>
              <span className="absolute inset-0 bg-gradient-to-r from-black to-red-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  const offset = 120;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                }
              }}
              className="border-2 border-black hover:bg-black hover:text-white text-black px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 hover:scale-105 text-center relative overflow-hidden group"
            >
              <span className="relative z-10">شوف خدماتنا</span>
            </a>
          </div>

          <div className="mt-10 md:mt-12 flex items-center gap-4 md:gap-6">
            <div className="h-12 md:h-16 w-1 bg-gray-200"></div>
            <div>
              <p className="text-black font-black text-base md:text-lg">نظام العرض الذكي</p>
              <p className="text-gray-400 font-bold italic text-sm md:text-base">عرض المقارنة التفاعلي</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center w-full lg:order-2">
          {/* إطارات حمراء نابضة بتصميم حاد */}
          <div className="absolute -top-3 -right-3 w-20 h-20 md:w-32 md:h-32 bg-red-600 animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-20 h-20 md:w-32 md:h-32 bg-red-600 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute -inset-1 border-4 border-red-600 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          
          <div className="relative w-full max-w-full aspect-[16/9] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] pointer-events-none bg-gray-100 border-4 border-red-600">
            <div 
              className={`absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-black uppercase tracking-[0.1em] shadow-xl transition-all duration-500 border-b-2 md:border-b-4 whitespace-nowrap ${
                isBefore 
                ? 'bg-black text-white border-gray-600' 
                : 'bg-red-600 text-white border-red-800'
              }`}
            >
              {isBefore ? 'الحالة: قبل الحماية' : 'الحالة: بعد الحماية'}
            </div>

            <img src={afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />
            
            {/* Mobile/Tablet: Horizontal comparison */}
            <div 
              className="absolute inset-0 w-full h-full z-10 lg:hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
            >
              <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            {/* Desktop: Vertical comparison */}
            <div 
              className="absolute inset-0 w-full h-full z-10 hidden lg:block"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img src={beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Mobile/Tablet: Horizontal slider line */}
            <div 
              className="absolute left-0 right-0 z-30 h-0.5 md:h-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] lg:hidden"
              style={{ top: `${sliderPos}%` }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white border-[4px] md:border-[6px] border-red-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="flex flex-col gap-0.5 md:gap-1">
                  <div className="h-0.5 md:h-1 w-4 md:w-6 bg-red-600 rounded-full"></div>
                  <div className="h-0.5 md:h-1 w-4 md:w-6 bg-red-600 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
            
            {/* Desktop: Vertical slider line */}
            <div 
              className="absolute top-0 bottom-0 z-30 w-0.5 md:w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hidden lg:block"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-16 md:h-16 bg-white border-[4px] md:border-[6px] border-red-600 rounded-full flex items-center justify-center shadow-xl">
                <div className="flex gap-0.5 md:gap-1">
                  <div className="w-0.5 md:w-1 h-4 md:h-6 bg-red-600 rounded-full"></div>
                  <div className="w-0.5 md:w-1 h-4 md:h-6 bg-red-600 rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
