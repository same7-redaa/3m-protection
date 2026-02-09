
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 text-white mb-10 lg:mb-0">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">جاهز تبدأ <br /> حماية مشروعك الجاي؟</h2>
            <p className="text-2xl font-light opacity-90 max-w-xl">
              تواصل مع خبرائنا اليوم عشان تحصل على استشارة متخصصة وتقييم لمشروعك بأعلى مستوى دقة.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
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
              className="bg-black text-white px-12 py-5 text-xl font-black hover:bg-white hover:text-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group"
            >
              <span className="relative z-10">اطلب عرض سعر</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
            <a 
              href="tel:+966000000000"
              className="bg-white text-red-600 px-12 py-5 text-xl font-black hover:bg-black hover:text-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group"
            >
              <span className="relative z-10">اتصل مباشرة</span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
