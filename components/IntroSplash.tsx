
import React, { useEffect, useState } from 'react';

const IntroSplash: React.FC = () => {
  const [clipPercent, setClipPercent] = useState(0);
  const [phase, setPhase] = useState<'intro' | 'comparison' | 'outro'>('intro');

  const beforeImage = "https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=2070";
  const afterImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070";

  useEffect(() => {
    const startIntro = setTimeout(() => setPhase('comparison'), 1500);
    
    let startTime: number;
    const duration = 2500;
    
    const animateScan = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;
      const percent = Math.min(100, progress * 100);
      setClipPercent(percent);
      
      if (progress < 1) {
        requestAnimationFrame(animateScan);
      } else {
        setTimeout(() => setPhase('outro'), 1000);
      }
    };

    const scanTimeout = setTimeout(() => {
      requestAnimationFrame(animateScan);
    }, 1800);

    return () => {
      clearTimeout(startIntro);
      clearTimeout(scanTimeout);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-[1500ms] ${phase === 'outro' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          src={beforeImage} 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 transition-opacity duration-1000"
          alt="Before"
          style={{ opacity: phase === 'comparison' ? 0.4 : 0 }}
        />
        
        {/* ملصق قبل - معدل للهاتف */}
        <div className={`absolute top-1/2 left-4 md:left-10 -translate-y-1/2 z-50 text-white transition-all duration-1000 ${phase === 'comparison' && clipPercent < 50 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 md:-translate-x-20'}`}>
          <div className="text-xs md:text-xl font-black uppercase tracking-[0.2em] mb-1 md:mb-2 opacity-70">المرحلة الأولى</div>
          <div className="text-3xl md:text-8xl font-black border-r-4 md:border-r-8 border-white pr-3 md:pr-6 leading-tight">قبل<br className="md:hidden" /> الحماية</div>
        </div>

        <div 
          className="absolute inset-0 w-full h-full z-10 transition-none"
          style={{ clipPath: `inset(0 ${100 - clipPercent}% 0 0)` }}
        >
          <img 
            src={afterImage} 
            className="absolute inset-0 w-full h-full object-cover"
            alt="After"
          />
          {/* ملصق بعد - معدل للهاتف */}
          <div className={`absolute top-1/2 right-4 md:right-10 -translate-y-1/2 z-50 text-white text-left transition-all duration-1000 ${clipPercent > 50 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 md:translate-x-20'}`}>
            <div className="text-xs md:text-xl font-black uppercase tracking-[0.2em] mb-1 md:mb-2 text-red-500 opacity-90">المرحلة الثانية</div>
            <div className="text-3xl md:text-8xl font-black border-l-4 md:border-l-8 border-red-600 pl-3 md:pl-6 leading-tight">بعد<br className="md:hidden" /> الحماية</div>
          </div>
        </div>

        <div 
          className="absolute top-0 bottom-0 z-20 w-0.5 md:w-1 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,1)] md:shadow-[0_0_50px_rgba(220,38,38,1)]"
          style={{ left: `${clipPercent}%`, opacity: phase === 'comparison' ? 1 : 0 }}
        ></div>
      </div>

      <div className={`relative z-[60] flex flex-col items-center transition-all duration-[1200ms] px-4 text-center ${phase === 'intro' ? 'scale-100 md:scale-110 opacity-100' : 'scale-90 opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row items-center md:space-x-6 md:space-x-reverse mb-4 md:mb-6">
           <span className="text-6xl md:text-9xl font-black tracking-tighter text-red-600 font-en drop-shadow-2xl">3M</span>
           <span className="text-2xl md:text-5xl font-bold tracking-[0.2em] md:tracking-[0.3em] text-white font-en mt-2 md:mt-0">PROTECTION</span>
        </div>
        <div className="w-20 md:w-32 h-0.5 md:h-1 bg-red-600 animate-pulse"></div>
        <div className="mt-4 text-gray-400 font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm uppercase">إتقان في التنفيذ</div>
      </div>

      <div className={`absolute inset-0 bg-white z-[70] transition-opacity duration-500 pointer-events-none ${clipPercent > 99 && clipPercent < 100 ? 'opacity-100' : 'opacity-0'}`}></div>

    </div>
  );
};

export default IntroSplash;
