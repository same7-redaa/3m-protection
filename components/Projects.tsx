
import React, { useEffect, useRef, useState } from 'react';

const ProjectItem: React.FC<{ project: any }> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef}
      className="group relative h-[400px] md:h-[500px] overflow-hidden bg-black"
    >
      <img 
        src={project.img} 
        alt={project.title} 
        className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? 'scale-110 opacity-100 grayscale-0' : 'scale-100 opacity-60 grayscale'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 flex flex-col justify-end p-8 text-white ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className={`text-red-500 font-bold mb-2 transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>{project.location}</span>
        <h4 className={`text-2xl font-black transition-transform duration-700 delay-100 ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>{project.title}</h4>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    { title: "الأبراج الإدارية", location: "المركز المالي", img: "https://images.unsplash.com/photo-1449156001437-3a16d1dfda00?auto=format&fit=crop&q=80&w=1000" },
    { title: "الفلل الملكية", location: "المجمع السكني الفاخر", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" },
    { title: "المراكز التجارية", location: "المنطقة المركزية", img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=1000" },
    { title: "الواجهات الزجاجية", location: "مجمع الابتكار", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <section id="أعمالنا" className="py-24 bg-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-20">
          <h2 className="text-red-600 text-lg font-bold mb-4 tracking-[0.2em]">سجل الإنجازات</h2>
          <h3 className="text-5xl md:text-6xl font-black text-black">مشاريع نفخر بحمايتها</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-b-2 border-red-600 text-black px-4 py-2 text-xl font-black hover:bg-red-600 hover:text-white transition-all duration-300">
            شاهد المعرض الكامل
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
