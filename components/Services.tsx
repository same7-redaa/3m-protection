
import React, { useEffect, useRef, useState } from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; image: string }> = ({ title, desc, image }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // إذا كان العنصر يغطي 60% من منطقة الرؤية المحددة (أو في المنتصف)
        setIsActive(entry.isIntersecting);
      },
      { 
        threshold: 0.6,
        rootMargin: "-10% 0px -10% 0px" // تفعيل الحالة عندما يكون العنصر قريباً من المنتصف
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-white overflow-hidden shadow-sm border-t-4 transition-all duration-700 ${isActive ? 'border-red-600 translate-y-[-10px] shadow-2xl' : 'border-white translate-y-0 shadow-sm'}`}
    >
      <div className="h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale'}`} 
        />
      </div>
      <div className="p-10">
        <h3 className={`text-3xl font-black mb-4 transition-colors duration-500 ${isActive ? 'text-red-600' : 'text-black'}`}>{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{desc}</p>
        <a href="#" className={`inline-flex items-center font-black tracking-widest transition-all duration-500 ${isActive ? 'text-red-600 translate-x-[-10px]' : 'text-gray-400 translate-x-0'}`}>
          <span>استكشاف المزيد</span>
          <svg className={`mr-2 w-5 h-5 transition-transform ${isActive ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="خدماتنا" className="py-24 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-red-600 text-lg font-bold mb-4 tracking-[0.2em]">حلولنا المتخصصة</h2>
            <h3 className="text-5xl md:text-6xl font-black text-black">خدمات حماية عالمية</h3>
          </div>
          <p className="max-w-md text-gray-500 text-lg mt-8 md:mt-0 md:text-right">
            نقدم حلولاً متطورة تضمن الحفاظ على جودة الأسطح لسنوات طويلة دون المساس بالجمالية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ServiceCard 
            title="أفلام حماية الرخام"
            desc="حماية مطلقة للأسطح الرخامية الفاخرة ضد البقع، الخدوش، وفقدان اللمعان مع الحفاظ على الملمس الطبيعي."
            image="https://images.unsplash.com/photo-1590374585152-ca0e8194c0d6?auto=format&fit=crop&q=80&w=2070"
          />
          <ServiceCard 
            title="أفلام حماية زجاج المباني"
            desc="تعزيز متانة الواجهات الزجاجية ورفع كفاءة العزل مع توفير حماية فائقة ضد العوامل الجوية المختلفة."
            image="https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&q=80&w=2070"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
