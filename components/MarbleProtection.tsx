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
  const [sliderPos, setSliderPos] = useState(50);
  const autoAnimRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newPos = 50 + 45 * Math.sin(elapsed / 800);
      setSliderPos(newPos);
      autoAnimRef.current = requestAnimationFrame(animate);
    };
    autoAnimRef.current = requestAnimationFrame(animate);
    return () => { if (autoAnimRef.current) cancelAnimationFrame(autoAnimRef.current); };
  }, []);

  const isBefore = sliderPos > 50;

  const beforeImage = "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=2070";
  const afterImage = "https://images.unsplash.com/photo-1590374585152-ca0e8194c0d6?auto=format&fit=crop&q=80&w=2070";

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
                نوفر أفضل حلول حماية الرخام للمشاريع الفاخرة. شاهد الفرق بين سطح بدون حماية وسطح محمي بتقنية 3M المتطورة.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a 
                  href="tel:+966000000000"
                  className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">احصل على عرض سعر</span>
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

            {/* صورة المقارنة */}
            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-3 -right-3 w-20 h-20 md:w-32 md:h-32 bg-red-600 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 md:w-32 md:h-32 bg-red-600 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -inset-1 border-4 border-red-600 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              
              <div className="relative w-full aspect-[4/3] overflow-hidden pointer-events-none bg-gray-100 border-4 border-red-600">
                <div className={`absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-black uppercase tracking-[0.1em] shadow-xl transition-all duration-500 border-b-2 md:border-b-4 whitespace-nowrap ${
                  isBefore ? 'bg-black text-white border-gray-600' : 'bg-red-600 text-white border-red-800'
                }`}>
                  {isBefore ? 'قبل الحماية: بهتان وبقع' : 'بعد الحماية: لمعان دائم'}
                </div>

                <img src={afterImage} alt="بعد الحماية" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 w-full h-full z-10" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                  <img src={beforeImage} alt="قبل الحماية" className="absolute inset-0 w-full h-full object-cover" />
                </div>

                <div className="absolute top-0 bottom-0 z-30 w-0.5 md:w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ left: `${sliderPos}%` }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white border-[4px] md:border-[5px] border-red-600 rounded-full flex items-center justify-center shadow-xl">
                    <div className="flex gap-0.5 md:gap-1">
                      <div className="w-0.5 md:w-1 h-4 md:h-5 bg-red-600 rounded-full"></div>
                      <div className="w-0.5 md:w-1 h-4 md:h-5 bg-red-600 rounded-full opacity-50"></div>
                    </div>
                  </div>
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
              مزايا حماية الرخام بتقنية 3M
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "أفلام شفافة عالية الوضوح", 
                desc: "مثالية للحفاظ على مظهر ولون السطح الأصلي بشفافية تامة، مع حماية متقدمة ضد الخدوش والبقع.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              },
              { 
                name: "أفلام مقاومة للحرارة", 
                desc: "مصممة خصيصًا لتتحمل درجات الحرارة العالية، مما يجعلها مثالية لأسطح المطابخ والمناطق المعرضة للحرارة.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
              },
              { 
                name: "أفلام الشفاء الذاتي", 
                desc: "تقنية متطورة تجعل الخدوش البسيطة تختفي تلقائيًا عند التعرض للحرارة البسيطة مثل حرارة الشمس.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
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

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">احمِ رخامك الآن</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            اتصل بنا للحصول على استشارة مجانية وتقييم متخصص لأسطح الرخام لديك.
          </p>
          <a 
            href="tel:+966000000000"
            className="bg-white text-red-600 px-12 py-5 text-xl font-black hover:bg-black hover:text-white transition-all duration-500 shadow-2xl hover:shadow-xl hover:scale-105 inline-block relative overflow-hidden group"
          >
            <span className="relative z-10">احصل على عرض سعر</span>
            <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default MarbleProtection;
