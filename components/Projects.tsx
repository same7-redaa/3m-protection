
import React, { useEffect, useRef, useState } from 'react';

const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className="group relative h-[350px] md:h-[450px] overflow-hidden bg-black rounded-lg"
    >
      <img 
        src={project.img} 
        alt={project.title} 
        className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? 'scale-110 opacity-100' : 'scale-100 opacity-70'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 flex flex-col justify-end p-6 text-white ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>
          <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-black mb-3 rounded">
            {project.category}
          </span>
          <h4 className="text-xl md:text-2xl font-black">{project.title}</h4>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    // صور الرخام
    { title: "حماية رخام فاخرة", category: "حماية الرخام", img: "/صور رخام/split-image-composition-before-and-after-compariso.jpeg" },
    { title: "أسطح رخامية محمية", category: "حماية الرخام", img: "/صور رخام/split-image-composition-before-and-after-compariso (1).jpeg" },
    { title: "مشروع رخام متميز", category: "حماية الرخام", img: "/صور رخام/image-1770916643234.jpeg" },
    { title: "رخام بحماية 3M", category: "حماية الرخام", img: "/صور رخام/image-1770916643234 (1).jpeg" },
    
    // صور الزجاج
    { title: "واجهات زجاجية محمية", category: "حماية الزجاج", img: "/glass-protection/بعد.jpeg" },
    { title: "عزل حراري متقدم", category: "حماية الزجاج", img: "/glass-protection/بعد 1.jpeg" },
    { title: "زجاج معزول حرارياً", category: "حماية الزجاج", img: "/glass-protection/بعد 2.jpeg" },
    { title: "حماية زجاج كاملة", category: "حماية الزجاج", img: "/glass-protection/After.jpeg" },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-3 space-x-reverse mb-4">
            <span className="w-16 h-1 bg-red-600"></span>
            <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">سجل الإنجازات</span>
            <span className="w-16 h-1 bg-red-600"></span>
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-black mb-6">مشاريع نفتخر فيها</h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            تصفح معرض أعمالنا المتميزة في حماية الرخام والزجاج بتقنية <span className="font-en font-cairo">3M</span> العالمية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
