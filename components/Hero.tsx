
import React, { useState, useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoAnimRef = useRef<number | null>(null);

  const beforeImage = "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=2070";
  const afterImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070";

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
    <section id="الرئيسية" className="relative min-h-screen pt-20 md:pt-24 pb-12 flex items-center bg-white overflow-hidden">
      {/* نص خلفية مخفي على الهواتف الصغيرة */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 rotate-90 text-[8rem] md:text-[14rem] font-black text-gray-50 select-none -z-10 uppercase tracking-tighter opacity-40 md:opacity-60 font-en hidden sm:block">
        3M PROTECTION
      </div>

      <div className="container mx-auto px-3 md:px-4 w-full flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 lg:items-center">
        
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
            نقدم حلول حماية غير مرئية تحافظ على رونق الرخام وصفاء الزجاج. العرض التفاعلي يوضح قدرة تقنياتنا على عزل العوامل الجوية.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button className="bg-red-600 hover:bg-black text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-300 shadow-xl">
              استشارة مجانية
            </button>
            <button className="border-2 border-black hover:bg-black hover:text-white text-black px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-300">
              استكشف خدماتنا
            </button>
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
