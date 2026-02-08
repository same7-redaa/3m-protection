
import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="من نحن" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-red-600 -z-10 transition-transform duration-1000 ${isInView ? 'translate-x-0 translate-y-0 rotate-12' : 'translate-x-20 translate-y-20 rotate-0'}`}></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Professional Construction" 
              className={`w-full h-[400px] md:h-[600px] object-cover shadow-2xl transition-all duration-1000 ${isInView ? 'grayscale-0 scale-100' : 'grayscale scale-110'}`}
            />
            <div className={`absolute bottom-8 left-8 bg-red-600 p-8 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-4xl md:text-6xl font-black block mb-2">15+</span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">عاماً من الخبرة</span>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-red-600 text-lg font-bold mb-6 tracking-[0.2em]">لماذا 3M PROTECTION؟</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-10 leading-tight">القوة، المتانة، والثقة المطلقة</h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              تأسست 3M PROTECTION لتكون المعيار الأول في قطاع حماية الأسطح الإنشائية. نحن لا نقدم مجرد حماية، بل نمنح عملاءنا راحة البال من خلال جودة تنفيذ لا تضاهى.
            </p>
            <ul className="space-y-6 mb-12">
              {[
                "الالتزام بأعلى معايير الجودة العالمية",
                "فريق تنفيذ متخصص بمشاريع الواجهات والرخام",
                "حلول مخصصة للمشاريع التجارية والسكنيّة الفاخرة",
                "السرعة والدقة في الأداء المهني"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-base md:text-lg font-bold">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-white text-black hover:bg-red-600 hover:text-white px-10 py-4 text-lg font-bold transition-all duration-300 w-full sm:w-auto">
              تعرف على رؤيتنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
