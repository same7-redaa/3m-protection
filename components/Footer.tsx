
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-8">
              <span className="text-3xl font-black tracking-tighter text-red-600 font-en">3M</span>
              <span className="text-2xl font-bold tracking-tight text-black font-en">PROTECTION</span>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              الشركة الرائدة في حلول الحماية للمشاريع الإنشائية الفاخرة. نجمع بين الخبرة الطويلة والتقنيات الحديثة لضمان أقصى درجات الحماية.
            </p>
          </div>
          
          <div>
            <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><a href="#" className="hover:text-red-600 transition-colors">خدمات حماية الرخام</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">خدمات حماية الزجاج</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">عن الشركة</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-black font-black text-lg mb-8 uppercase tracking-widest">تواصل معنا</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="font-en">+966 000 000 000</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-en">info@3mprotection.com</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>المملكة العربية السعودية، الرياض</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-sm">
          <p>© 2024 <span className="font-en">3M PROTECTION</span>. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 transition-colors">لينكد إن</a>
            <a href="#" className="hover:text-red-600 transition-colors">إنستقرام</a>
            <a href="#" className="hover:text-red-600 transition-colors">إكس</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
