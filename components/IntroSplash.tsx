
import React, { useEffect, useState } from 'react';

const IntroSplash: React.FC = () => {
  const [phase, setPhase] = useState<'logo' | 'before' | 'transition' | 'after' | 'outro'>('logo');
  const [transitionProgress, setTransitionProgress] = useState(0);

  const beforeImage = "/Before.jpeg";
  const afterImage = "/After.jpeg";

  useEffect(() => {
    // مرحلة 1: عرض الشعار (2 ثانية)
    const logoTimer = setTimeout(() => setPhase('before'), 2000);

    // مرحلة 2: عرض صورة "قبل" (1.5 ثانية)
    const beforeTimer = setTimeout(() => setPhase('transition'), 3500);

    // مرحلة 3: بدء الانتقال
    const transitionTimer = setTimeout(() => {
      let startTime: number;
      const duration = 2000; // 2 ثانية للانتقال

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / duration);
        setTransitionProgress(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => setPhase('after'), 500);
          setTimeout(() => setPhase('outro'), 2000);
        }
      };

      requestAnimationFrame(animate);
    }, 3500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(beforeTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 ${phase === 'outro' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

      {/* شعار 3M */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${phase === 'logo' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 md:space-x-reverse mb-4 md:mb-6">
          <span className="text-7xl md:text-9xl font-black tracking-tighter text-red-600 drop-shadow-2xl">3M</span>
          <span className="text-3xl md:text-5xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white mt-2 md:mt-0">PROTECTION</span>
        </div>
        <div className="w-24 md:w-32 h-1 bg-red-600 animate-pulse mb-4"></div>
        <div className="text-gray-400 font-bold tracking-[0.15em] text-sm md:text-base uppercase">إتقان في التنفيذ</div>
      </div>

      {/* حاوية الصور */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${phase !== 'logo' && phase !== 'outro' ? 'opacity-100' : 'opacity-0'}`}>

        {/* صورة قبل الحماية */}
        <div className={`absolute inset-0 transition-all duration-1000 ${phase === 'before' ? 'opacity-100' : phase === 'transition' ? 'opacity-100' : 'opacity-0'}`}>
          <img
            src={beforeImage}
            className="absolute inset-0 w-full h-full object-cover"
            alt="قبل الحماية"
          />

          {/* ملصق "قبل الحماية" */}
          <div className={`absolute top-1/2 left-6 md:left-16 -translate-y-1/2 transition-all duration-700 ${phase === 'before' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="bg-black/70 backdrop-blur-sm border-l-8 border-red-600 pl-6 pr-8 py-6 rounded-r-2xl">
              <div className="text-red-500 text-sm md:text-lg font-bold uppercase tracking-widest mb-2">المرحلة الأولى</div>
              <div className="text-white text-4xl md:text-7xl font-black leading-tight">قبل<br />الحماية</div>
            </div>
          </div>
        </div>

        {/* صورة بعد الحماية مع تأثير الانتقال */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: phase === 'transition'
              ? `circle(${transitionProgress * 150}% at 50% 50%)`
              : phase === 'after'
                ? 'circle(150% at 50% 50%)'
                : 'circle(0% at 50% 50%)'
          }}
        >
          <img
            src={afterImage}
            className="absolute inset-0 w-full h-full object-cover"
            alt="بعد الحماية"
          />
        </div>

        {/* دائرة متوسعة للانتقال */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${phase === 'transition' ? 'opacity-100' : 'opacity-0'}`}
          style={{
            width: `${transitionProgress * 200}vw`,
            height: `${transitionProgress * 200}vw`,
            border: '4px solid rgba(239, 68, 68, 0.6)',
            borderRadius: '50%',
            boxShadow: '0 0 60px rgba(239, 68, 68, 0.8)',
            transition: 'opacity 0.3s'
          }}
        ></div>

        {/* ملصق "بعد الحماية" - خارج clipPath ليظهر بوضوح */}
        <div className={`absolute top-1/2 right-6 md:right-16 -translate-y-1/2 z-50 transition-all duration-700 ${(phase === 'after' || transitionProgress > 0.7) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="bg-black/80 backdrop-blur-md border-r-8 border-green-500 pr-6 pl-8 py-6 rounded-l-2xl shadow-2xl">
            <div className="text-green-400 text-sm md:text-lg font-bold uppercase tracking-widest mb-2 text-right">المرحلة الثانية</div>
            <div className="text-white text-4xl md:text-7xl font-black leading-tight text-right">بعد<br />الحماية</div>
          </div>
        </div>

      </div>

      {/* فلاش أبيض عند نهاية الانتقال */}
      <div className={`absolute inset-0 bg-white transition-opacity duration-300 pointer-events-none ${transitionProgress > 0.95 && transitionProgress < 1 ? 'opacity-30' : 'opacity-0'}`}></div>

    </div>
  );
};

export default IntroSplash;
