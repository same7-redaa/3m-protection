
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-red-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/3 text-white mb-10 lg:mb-0">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">جاهز لبدء <br /> حماية مشروعك القادم؟</h2>
            <p className="text-2xl font-light opacity-90 max-w-xl">
              تواصل مع خبرائنا اليوم للحصول على استشارة متخصصة وتقييم لمشروعكم بأعلى معايير الدقة.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-black text-white px-12 py-5 text-xl font-black hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
              طلب عرض سعر
            </button>
            <button className="bg-white text-red-600 px-12 py-5 text-xl font-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
              اتصال مباشر
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
