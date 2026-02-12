
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  desc: string;
  image: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, image, onClick }) => {
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
      className={`group relative bg-white overflow-hidden shadow-sm border-t-4 transition-all duration-700 cursor-pointer ${isActive ? 'border-red-600 translate-y-[-10px] shadow-2xl' : 'border-white translate-y-0 shadow-sm'}`}
      onClick={onClick}
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

        {/* زر استكشف أكثر المميز */}
        <button
          className={`group/btn relative overflow-hidden px-8 py-4 rounded-full font-black tracking-widest transition-all duration-500 transform ${isActive
            ? 'bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white shadow-2xl shadow-red-500/50 scale-105 hover:scale-110 hover:shadow-red-600/70'
            : 'bg-gray-100 text-gray-500 shadow-sm hover:bg-gray-200'
            }`}
        >
          {/* تأثير التوهج المتحرك */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-30 transition-opacity duration-500 ${isActive ? 'animate-shimmer' : ''}`}></div>

          <span className="relative z-10 flex items-center gap-3">
            <span>استكشف أكثر</span>
            <svg
              className={`w-5 h-5 transition-all duration-500 ${isActive ? 'group-hover/btn:translate-x-[-8px]' : 'rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleMarbleClick = () => {
    navigate('/marble-protection');
  };

  const handleGlassClick = () => {
    navigate('/glass-protection');
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
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
            onClick={handleMarbleClick}
          />
          <ServiceCard
            title="أفلام حماية زجاج المباني"
            desc="تعزيز متانة الواجهات الزجاجية ورفع كفاءة العزل مع توفير حماية فائقة ضد العوامل الجوية المختلفة."
            image="/glass-protection/بعد.jpeg"
            onClick={handleGlassClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
