import React, { useEffect, useState, useRef } from 'react';

interface CardProps {
  title: string;
  desc: string;
  stat?: string;
  icon: React.ReactNode;
}

const BenefitCard: React.FC<CardProps> = ({ title, desc, stat, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`p-8 border-r-4 transition-all duration-700 group ${isActive ? 'bg-white border-red-600 translate-y-[-10px] shadow-2xl' : 'bg-gray-50 border-red-600/30 translate-y-0 shadow-sm'}`}>
      <div className="flex items-start justify-between mb-6">
        <div className={`text-red-600 transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}>{icon}</div>
        <div className="text-3xl font-black text-red-600 font-en">{stat}</div>
      </div>
      <h3 className="text-2xl font-black text-black mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </div>
  );
};

const SustainabilityCard: React.FC<CardProps> = ({ title, desc, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`p-8 border-t-4 transition-all duration-700 group ${isActive ? 'bg-white border-red-600 translate-y-[-10px] shadow-2xl' : 'bg-gray-50 border-red-600/30 translate-y-0 shadow-sm'}`}>
      <div className={`text-red-600 mb-6 transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}>{icon}</div>
      <h3 className="text-2xl font-black text-black mb-4">{title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
    </div>
  );
};

const SectorCard: React.FC<{ sector: string, benefits: string[], icon: React.ReactNode }> = ({ sector, benefits, icon }) => {
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
      <h3 className="text-2xl font-black text-black mb-6">{sector}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, bidx) => (
          <li key={bidx} className="flex items-start space-x-3 space-x-reverse">
            <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-700 ${isActive ? 'text-red-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-base font-bold transition-colors duration-700 ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const StatCard: React.FC<{ stat: string, title: string, desc: string, icon: React.ReactNode }> = ({ stat, title, desc, icon }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsActive(entry.isIntersecting), { threshold: 0.2, rootMargin: "-50px" });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`text-center p-10 border-t-4 transition-all duration-700 ${isActive ? 'bg-white/10 border-red-600 translate-y-[-5px]' : 'bg-white/5 border-red-600/30 translate-y-0'}`}>
      <div className={`mb-6 flex justify-center transition-transform duration-700 ${isActive ? 'text-red-600 scale-110' : 'text-red-600/50 scale-100'}`}>{icon}</div>
      <div className={`text-6xl font-black mb-4 font-en transition-colors duration-700 ${isActive ? 'text-red-600' : 'text-red-600/50'}`}>{stat}</div>
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};


const GlassProtection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const autoAnimRef = useRef<number | null>(null);

  const beforeImage = "/قبل.jpeg";
  const afterImage = "/بعد.jpeg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // الحركة التلقائية
  useEffect(() => {
    let startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newPos = 50 + 45 * Math.sin(elapsed / 1000);
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
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 md:pt-24 pb-12 flex items-center bg-black overflow-hidden">
        {/* صورة خلفية */}
        <div className="absolute inset-0 z-0">
          <img src="/1.jpg" alt="حماية الزجاج" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* النص */}
            <div className="text-right order-2 lg:order-1">
              <div className="inline-flex items-center space-x-3 space-x-reverse mb-4 md:mb-6">
                <span className="w-10 md:w-16 h-1 bg-red-600"></span>
                <span className="text-red-600 font-black tracking-[0.1em] text-xs md:text-sm uppercase">حماية متقدمة للزجاج</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black leading-[1.2] md:leading-[1.1] text-white mb-6 md:mb-8">
                حماية الزجاج <br /><span className="text-red-600 font-en">3M</span> الذكية
              </h1>

              <p className="text-lg md:text-2xl text-gray-300 font-normal leading-relaxed mb-8 md:mb-10 max-w-xl border-r-4 border-red-600 pr-6 md:pr-8">
                نوفر أفضل حلول حماية الزجاج للمباني الحديثة. اسحب الشريط لرؤية الفرق بين قبل وبعد الحماية.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <a
                  href="tel:+966000000000"
                  className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 text-center relative overflow-hidden group"
                >
                  <span className="relative z-10">استشارة مجانية</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById('key-benefits');
                    if (element) {
                      const offset = 120;
                      const elementPosition = element.offsetTop - offset;
                      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
                    }
                  }}
                  className="border-2 border-white hover:bg-white hover:text-black text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-black transition-all duration-500 hover:scale-105"
                >
                  تعرف على المزيد
                </button>
              </div>

              {/* إحصائيات سريعة */}
              <div className="mt-10 md:mt-14 grid grid-cols-3 gap-6">
                <div className="border-r-2 border-red-600 pr-4">
                  <div className="text-3xl md:text-4xl font-black text-red-600 font-en">99%</div>
                  <div className="text-gray-400 text-sm md:text-base font-bold mt-1">حجب الأشعة</div>
                </div>
                <div className="border-r-2 border-red-600 pr-4">
                  <div className="text-3xl md:text-4xl font-black text-red-600 font-en">80%</div>
                  <div className="text-gray-400 text-sm md:text-base font-bold mt-1">عزل حراري</div>
                </div>
                <div className="border-r-2 border-red-600 pr-4">
                  <div className="text-3xl md:text-4xl font-black text-red-600 font-en">30%</div>
                  <div className="text-gray-400 text-sm md:text-base font-bold mt-1">توفير طاقة</div>
                </div>
              </div>
            </div>

            {/* صورة المقارنة المحسّنة */}
            <div className="relative order-1 lg:order-2">
              {/* عناصر ديكور */}
              <div className="absolute -top-3 -right-3 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-red-600 to-orange-500 opacity-80"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-green-500 to-emerald-600 opacity-80"></div>

              {/* Container الصورة */}
              <div
                className="relative w-full aspect-[4/3] overflow-hidden bg-gray-900 shadow-2xl pointer-events-none select-none"
              >
                {/* Badge العلوي */}
                <div className={`absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm font-black uppercase tracking-widest shadow-2xl transition-all duration-500 rounded-full backdrop-blur-md border-2 ${isBefore
                  ? 'bg-red-600/90 text-white border-red-400'
                  : 'bg-green-500/90 text-white border-green-300'
                  }`}>
                  {isBefore ? '🔴 قبل الحماية' : '✅ بعد الحماية'}
                </div>

                {/* صورة "بعد" */}
                <img src={afterImage} alt="بعد الحماية" className="absolute inset-0 w-full h-full object-cover" />

                {/* صورة "قبل" مع clip */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img src={beforeImage} alt="قبل الحماية" className="absolute inset-0 w-full h-full object-cover" />

                  {/* تأثير overlay لـ "قبل" */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none"></div>
                </div>

                {/* ملصقات الجانبين */}
                <div className={`absolute bottom-4 md:bottom-6 left-4 md:left-6 z-30 transition-opacity duration-300 ${sliderPos > 20 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-green-500/90 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-green-300 shadow-xl">
                    <div className="text-white font-black text-xs md:text-sm">بعد الحماية</div>
                    <div className="text-white/90 text-[10px] md:text-xs">✨ وضوح مثالي</div>
                  </div>
                </div>

                <div className={`absolute bottom-4 md:bottom-6 right-4 md:right-6 z-30 transition-opacity duration-300 ${sliderPos < 80 ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-red-600/90 backdrop-blur-sm px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 border-red-400 shadow-xl text-right">
                    <div className="text-white font-black text-xs md:text-sm">قبل الحماية</div>
                    <div className="text-white/90 text-[10px] md:text-xs">⚠️ تلف وخدوش</div>
                  </div>
                </div>

                {/* رسالة التوجيه */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 md:opacity-0 transition-opacity duration-500">
                  <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs font-bold">
                    ← اسحب للمقارنة →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Key Benefits Section */}
      <section id="key-benefits" className="py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">توفير ملموس</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              عائد سريع مع توفير كبير
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-4xl">
              تعتبر أفلام النوافذ من أفضل تقنيات ترشيد الطاقة، وتتمتع بأحد أسرع معدلات العائد، حيث يبلغ حوالي ثلاث سنوات فقط.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "تقليل اكتساب الحرارة",
                desc: "تقليل اكتساب الحرارة صيفًا بنسبة تصل إلى 79% مع الحفاظ على درجة حرارة معتدلة ومريحة داخل المبنى.",
                stat: "79%",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
              },
              {
                title: "توفير الطاقة",
                desc: "توفير يصل إلى 19 كيلوواط/ساعة لكل قدم مربع من الزجاج، مما يقلل فواتير الكهرباء بشكل ملحوظ.",
                stat: "19kWh",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: "عائد سريع",
                desc: "استرداد تكلفة الاستثمار في غضون 3 سنوات أو أقل من خلال توفير الطاقة والتشغيل.",
                stat: "3 سنوات",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              {
                title: "حوافز متاحة",
                desc: "إمكانية الحصول على حوافز وخصومات من شركات المرافق لتشجيع كفاءة الطاقة.",
                stat: "$$",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              {
                title: "فعالة في كل المناخات",
                desc: "مثبتة الفاعلية في جميع المناطق المناخية، من الحارة إلى الباردة، على مدار السنة.",
                stat: "100%",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              {
                title: "تدقيق طاقة مجاني",
                desc: "إمكانية إجراء تدقيق طاقة احترافي لحساب التوفير المتوقع بدقة لمشروعك.",
                stat: "مجاني",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              }
            ].map((feature, idx) => (
              <BenefitCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">بيئة مستدامة</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              قلّل استهلاك الطاقة والانبعاثات الكربونية
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "الحفاظ على النوافذ الحالية",
                desc: "تحديث النوافذ الحالية بدلاً من استبدالها يمنع التخلص منها كنفايات ويوفر الموارد.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              },
              {
                title: "إدخال الضوء الطبيعي",
                desc: "السماح بدخول الضوء الطبيعي مع تقليل الحرارة يقلل الحاجة للإضاءة الكهربائية.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              },
              {
                title: "خفض استهلاك الطاقة",
                desc: "التحكم في بيئة المبنى يقلل استهلاك الطاقة ويخفض تكاليف التشغيل بشكل كبير.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              },
              {
                title: "المساعدة في LEED",
                desc: "المساهمة في الحصول على نقاط شهادة LEED للمباني الخضراء والصديقة للبيئة.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              },
              {
                title: "تقليل التلوث الضوئي",
                desc: "الحد من الإضاءة الزائدة والانعكاسات التي تساهم في التلوث الضوئي الليلي.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              },
              {
                title: "أثر كربوني سلبي",
                desc: "إمكانية الوصول إلى أثر كربوني سلبي خلال 6 أشهر فقط من التركيب.",
                icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              }
            ].map((item, idx) => (
              <SustainabilityCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">قطاعات الاستخدام</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-black">
              توفير الطاقة مفيد لكل الأعمال
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                sector: "المكاتب",
                benefits: ["خفض تكاليف الطاقة", "المساعدة في LEED", "عائد سريع"],
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              },
              {
                sector: "الفنادق",
                benefits: ["تحسين راحة النزلاء", "تقليل تكاليف التشغيل", "مظهر فاخر"],
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              },
              {
                sector: "الرعاية الصحية",
                benefits: ["تقليل أكبر بند تشغيلي", "تحسين راحة المرضى", "بيئة صحية"],
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              },
              {
                sector: "الجهات الحكومية",
                benefits: ["ترشيد الإنفاق", "الالتزام بكفاءة الطاقة", "قدوة للقطاع الخاص"],
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
              }
            ].map((sector, idx) => (
              <SectorCard key={idx} {...sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-right mb-16">
            <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
              <span className="w-16 h-1 bg-red-600"></span>
              <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">حقائق وأرقام</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black">إحصائيات مهمة</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                stat: "33%",
                title: "من تكاليف التبريد",
                desc: "تشير التقديرات إلى أن 33% من تكاليف التبريد ناتجة عن اكتساب الحرارة الشمسية عبر النوافذ.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              },
              {
                stat: "20×",
                title: "فقدان الحرارة",
                desc: "النافذة المفردة تفقد حرارة أكثر بـ 20 مرة من جدار معزول بشكل جيد، مما يزيد تكاليف التدفئة.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              },
              {
                stat: "40%",
                title: "فقدان التدفئة",
                desc: "حوالي 40% من فقدان التدفئة في المباني التجارية يحدث بسبب النوافذ غير المعزولة بشكل صحيح.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              }
            ].map((item, idx) => (
              <StatCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">احصل على تدقيق طاقة مجاني</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            احصل على تقييم احترافي مجاني لمشروعك وتقدير دقيق للتوفير المتوقع في فواتير الطاقة. فريقنا المتخصص جاهز لمساعدتك في اتخاذ القرار الصحيح.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+966000000000"
              className="bg-white text-red-600 px-12 py-5 text-xl font-black hover:bg-black hover:text-white transition-all duration-500 shadow-2xl hover:shadow-xl hover:scale-105 text-center relative overflow-hidden group"
            >
              <span className="relative z-10">اطلب تدقيق طاقة مجاني</span>
              <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </a>
            <a
              href="mailto:info@3mprotection.com"
              className="border-2 border-white text-white px-12 py-5 text-xl font-black hover:bg-white hover:text-red-600 transition-all duration-500 hover:scale-105 text-center relative overflow-hidden group"
            >
              <span className="relative z-10">تواصل معنا الآن</span>
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                text: "استشارة فورية"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                text: "تقرير توفير مفصل"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                text: "ضمان الجودة"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-white/90">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <div className="text-lg font-bold">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlassProtection;
