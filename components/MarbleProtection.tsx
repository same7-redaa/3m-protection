import React, { useEffect, useState, useRef } from 'react';

interface CardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const MarbleFeatureCard: React.FC<CardProps> = ({ title, desc, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`p-8 border-r-4 transition-all duration-700 group ${isActive ? 'bg-white border-red-600 translate-y-[-10px] shadow-2xl' : 'bg-gray-50 border-red-600/30 translate-y-0 shadow-sm'}`}>
      <div className={`text-red-600 mb-6 transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}>{icon}</div>
      <h3 className="text-2xl font-black text-black mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </div>
  );
};

const TypeCard: React.FC<CardProps> = ({ title, desc, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`p-8 border-t-4 transition-all duration-700 group ${isActive ? 'bg-white border-red-600 translate-y-[-10px] shadow-2xl' : 'bg-white border-red-600/30 translate-y-0 shadow-sm'}`}>
      <div className={`text-red-600 mb-6 transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}>{icon}</div>
      <h3 className="text-2xl font-black text-black mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </div>
  );
};

const CareCard: React.FC<CardProps> = ({ title, desc, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`flex space-x-6 space-x-reverse p-8 border-r-4 transition-all duration-700 group ${isActive ? 'bg-white border-red-600 translate-y-[-5px] shadow-xl' : 'bg-gray-50 border-red-600/30 translate-y-0 shadow-sm'}`}>
      <div className={`text-red-600 flex-shrink-0 transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}>{icon}</div>
      <div className="text-right">
        <h3 className="text-xl font-black text-black mb-3">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const LocationCard: React.FC<{ title: string }> = ({ title }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`flex items-center space-x-4 space-x-reverse p-6 border-r-4 transition-all duration-700 ${isActive ? 'bg-white border-red-600 shadow-lg translate-y-[-5px]' : 'bg-white border-red-600/30 shadow-sm translate-y-0'}`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-700 ${isActive ? 'bg-red-600' : 'bg-gray-300'}`}>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={`text-lg font-black transition-colors duration-700 ${isActive ? 'text-black' : 'text-gray-400'}`}>{title}</span>
    </div>
  );
};

const MarbleProtection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 md:pt-24 pb-12 flex items-center bg-black overflow-hidden">
        {/* صورة خلفية */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" alt="حماية الرخام" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* النص */}
            <div className="text-right order-2 lg:order-1">
              <div className="inline-flex items-center space-x-3 space-x-reverse mb-4 md:mb-6">
                <span className="w-10 md:w-16 h-1 bg-red-600"></span>
                <span className="text-red-600 font-black tracking-[0.1em] text-xs md:text-sm uppercase">حماية فاخرة للرخام</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black leading-[1.2] md:leading-[1.1] text-white mb-6 md:mb-8">
                حماية الرخام <br/><span className="text-red-600 font-en">3M</span> الفاخرة
              </h1>
              
              <p className="text-lg md:text-2xl text-gray-300 font-normal leading-relaxed mb-8 md:mb-10 max-w-xl border-r-4 border-red-600 pr-6 md:pr-8">
                نوفر أفضل حلول حماية الرخام للمشاريع الفاخرة. شاهد الفرق بين سطح بدون حماية وسطح محمي بتقنية <span className="font-en">3M</span> المتطورة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a 
                  href="tel:+966535316895"
                  className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">احصل على عرض سعر</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </a>
                <a 
                  href="https://wa.me/966535316895"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-white hover:text-green-600 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group inline-flex items-center space-x-2 space-x-reverse justify-center"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="relative z-10">واتساب</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </a>
                <button 
                  onClick={() => {
                    const element = document.getElementById('marble-features');
                    if (element) {
                      const offset = 120;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white hover:bg-white hover:text-black text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">تعرف على المزيد</span>
                </button>
              </div>

              {/* إحصائيات سريعة */}
              <div className="mt-10 md:mt-14 grid grid-cols-3 gap-6">
                <div className="border-r-2 border-red-600 pr-4">
                  <div className="text-3xl md:text-4xl font-black text-red-600 font-en">100%</div>
                  <div className="text-gray-400 text-sm md:text-base font-bold mt-1">حماية البقع</div>
                </div>
                <div className="border-r-2 border-red-600 pr-4">
                  <div className="text-3xl md:text-4xl font-black text-red-600 font-en">15+</div>
                  <div className="text-gray-400 text-sm md:text-base font-bold mt-1">سنة متانة</div>
                </div>
                <div className="border-r-2 border-red-600 pr-4">
                  <div className="text-3xl md:text-4xl font-black text-red-600 font-en">500+</div>
                  <div className="text-gray-400 text-sm md:text-base font-bold mt-1">مشروع منجز</div>
                </div>
              </div>
            </div>

            {/* معرض الصور */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-3 -right-3 w-20 h-20 md:w-32 md:h-32 bg-red-600 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 md:w-32 md:h-32 bg-red-600 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -inset-1 border-4 border-red-600 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              
              <div className="relative grid grid-cols-2 gap-4 border-4 border-red-600 p-4 bg-white">
                <div className="relative aspect-square overflow-hidden group">
                  <img src="/صور رخام/split-image-composition-before-and-after-compariso.jpeg" alt="حماية الرخام" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative aspect-square overflow-hidden group">
                  <img src="/صور رخام/split-image-composition-before-and-after-compariso (1).jpeg" alt="حماية الرخام" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative aspect-square overflow-hidden group">
                  <img src="/صور رخام/image-1770916643234.jpeg" alt="حماية الرخام" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative aspect-square overflow-hidden group">
                  <img src="/صور رخام/image-1770916643234 (1).jpeg" alt="حماية الرخام" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="marble-features" className="py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">لماذا تختار PPF</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              مزايا حماية الرخام بتقنية <span className="font-en">3M</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "الحماية من الخدوش",
                desc: "حماية الرخام من الخدوش الناتجة عن الأواني الحادة والاستخدام اليومي، مع الحفاظ على بريق السطح كما هو لأطول فترة ممكنة.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: "منع البقع والسوائل",
                desc: "حماية فعّالة من تغلغل البقع والسوائل إلى مسام الرخام، مما يمنع تغير اللون والتعفن على المدى الطويل.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              },
              {
                title: "الحماية من الحرارة",
                desc: "طبقة حماية متقدمة تمنع الأواني الساخنة من إلحاق أي ضرر أو تشوهات بسطح الرخام، مع الحفاظ على مظهره ورونقه.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
              },
              {
                title: "سهولة التنظيف",
                desc: "تنظيف أسهل وأسرع مقارنة بالرخام غير المحمي، حيث يكفي استخدام قطعة قماش مبللة ونظيفة للحفاظ على اللمعان.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              },
              {
                title: "زيادة العمر الافتراضي",
                desc: "الحفاظ على لمعة الرخام الأصلية دون حدوث أي بهتان في اللون أو تآكل، مما يطيل عمر السطح بشكل كبير.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              {
                title: "استثمار مضمون",
                desc: "خيار أفضل من إعادة التلميع أو الصنفرة المتكررة التي قد تشوه جمال الرخام الأصلي، مع ضمان طويل الأمد.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            ].map((feature, idx) => (
              <MarbleFeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Types of Protection Films */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">أنواع الحماية</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              أنواع أفلام الحماية PPF
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "أفلام شفافة فائقة الوضوح", 
                desc: "تقنية متقدمة توفر حماية غير مرئية بشفافية مطلقة، تحافظ على الجمال الطبيعي والمظهر الأصلي للرخام دون أي تأثير على الشكل أو اللمعان.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              },
              { 
                name: "أفلام عاكسة لامعة", 
                desc: "تقنية متقدمة تعزز اللمعان الطبيعي للأسطح، توفر حماية قوية مع إضافة لمعان رائع يبرز جمال الرخام والأحجار الطبيعية.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              },
              { 
                name: "أفلام مطفية أنيقة", 
                desc: "تصميم عصري غير عاكس يقلل من الوهج وبصمات الأصابع، يوفر مظهراً مطفياً راقياً مع حماية فائقة ضد جميع أنواع الأضرار.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              },
              { 
                name: "أفلام مقاومة للحرارة العالية", 
                desc: "حماية استثنائية ضد الحرارة والأضرار الناتجة عن أواني الطهي الساخنة والأجهزة، مصممة خصيصاً لأسطح المطابخ والمناطق ذات درجات الحرارة العالية.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
              },
              { 
                name: "أفلام مقاومة لبصمات الأصابع", 
                desc: "تقنية طلاء متقدمة تمنع ظهور بصمات الأصابع والبقع، تحافظ على نظافة الأسطح وبريقها مع الحد الأدنى من الصيانة المطلوبة.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
              },
              { 
                name: "أفلام حماية من الأشعة فوق البنفسجية", 
                desc: "حماية فائقة ضد الأشعة فوق البنفسجية الضارة التي تمنع التلاشي وتغير اللون، تحافظ على الألوان الزاهية والجمال الطبيعي لأسطحك لسنوات.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              }
            ].map((type, idx) => (
              <TypeCard key={idx} title={type.name} desc={type.desc} icon={type.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">العناية والصيانة</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              نصائح الحفاظ على الرخام المحمي
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "تجنب المواد الكاشطة",
                desc: "لا تستخدم مواد تنظيف قوية أو كاشطة حتى لا تتضرر طبقة الحماية وتفقد فعاليتها.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              },
              {
                title: "استخدام قماش ناعم",
                desc: "نظف السطح باستخدام قطعة قماش ناعمة ومبللة (يفضل مايكروفايبر) مع منظف خفيف وغير حمضي.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              },
              {
                title: "تجنب الأدوات الحادة",
                desc: "لا تستخدم مواد حادة مع أفلام الحماية حتى لا تتعرض للخدش وتقل كفاءتها في الحماية.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              },
              {
                title: "الاستبدال الدوري",
                desc: "بعد 5 إلى 10 سنوات قد تحتاج لاستبدال أفلام الحماية للحفاظ على أعلى مستوى من الحماية.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            ].map((tip, idx) => (
              <CareCard key={idx} {...tip} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">أماكن التطبيق</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              أين نطبق حماية الرخام؟
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "الأرضيات الرخامية الفاخرة",
              "جدران المداخل والممرات",
              "أسطح الطاولات والمكاتب",
              "الواجهات الخارجية",
              "الحمامات والمطابخ",
              "القاعات والصالات الكبيرة"
            ].map((location, idx) => (
              <LocationCard key={idx} title={location} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">معرض الأعمال</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              مشاريعنا في حماية الرخام
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: '/صور رخام/split-image-composition-before-and-after-compariso.jpeg', title: 'حماية رخام فاخرة' },
              { img: '/صور رخام/split-image-composition-before-and-after-compariso (1).jpeg', title: 'أسطح رخامية محمية' },
              { img: '/صور رخام/image-1770916643234.jpeg', title: 'مشروع رخام متميز' },
              { img: '/صور رخام/image-1770916643234 (1).jpeg', title: 'رخام بحماية <span className="font-en font-cairo">3M</span>' },
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[350px] md:h-[400px] overflow-hidden bg-black rounded-lg shadow-xl">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h4 className="text-white text-xl md:text-2xl font-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      dangerouslySetInnerHTML={{ __html: item.title }}>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">احمِ رخامك الآن</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            اتصل بنا للحصول على استشارة مجانية وتقييم متخصص لأسطح الرخام لديك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+966535316895"
              className="bg-white text-red-600 px-12 py-5 text-xl font-black hover:bg-black hover:text-white transition-all duration-500 shadow-2xl hover:shadow-xl hover:scale-105 inline-flex items-center space-x-3 space-x-reverse relative overflow-hidden group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span className="relative z-10">اتصل الآن</span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
            <a 
              href="https://wa.me/966535316895"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-12 py-5 text-xl font-black hover:bg-white hover:text-red-600 transition-all duration-500 hover:scale-105 inline-flex items-center space-x-3 space-x-reverse relative overflow-hidden group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10">تواصل واتساب</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarbleProtection;
