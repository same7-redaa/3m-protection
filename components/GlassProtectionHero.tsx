import React from 'react';

interface HeroProps {
    beforeImage: string;
    afterImage: string;
}

const GlassProtectionHero: React.FC<HeroProps> = ({ beforeImage, afterImage }) => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            {/* Container الرئيسي */}
            <div className="relative h-screen w-full pt-20 md:pt-24">

                {/* النصف الأيسر - قبل الحماية */}
                <div
                    className="absolute inset-y-0 left-0 w-1/2 group/before cursor-pointer transition-all duration-700 hover:w-[60%] z-10"
                    style={{ transformOrigin: 'left center', paddingTop: '80px' }}
                >
                    {/* الصورة */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={beforeImage}
                            alt="قبل الحماية"
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover/before:scale-110 grayscale group-hover/before:grayscale-0"
                        />
                        {/* تعتيم خفيف */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                    </div>

                    {/* المحتوى */}
                    <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-20">
                        {/* الشارة العلوية */}
                        <div className="inline-flex items-center space-x-3 space-x-reverse mb-6 opacity-0 group-hover/before:opacity-100 transition-all duration-700 delay-100 transform -translate-x-10 group-hover/before:translate-x-0">
                            <div className="w-12 h-1 bg-red-600"></div>
                            <span className="text-red-500 font-black text-xs uppercase tracking-widest">المرحلة الأولى</span>
                        </div>

                        {/* العنوان الرئيسي */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 transform transition-all duration-700 group-hover/before:scale-105">
                            قبل<br />
                            <span className="text-red-600">الحماية</span>
                        </h2>

                        {/* الوصف */}
                        <div className="opacity-0 group-hover/before:opacity-100 transition-all duration-700 delay-200 transform translate-x-10 group-hover/before:translate-x-0">
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-md border-r-4 border-red-600 pr-6">
                                زجاج بدون حماية معرض للخدوش والتلف والحرارة الزائدة
                            </p>

                            {/* المشاكل */}
                            <div className="space-y-3">
                                {['تلف وخدوش واضحة', 'فقدان الوضوح', 'ارتفاع درجة الحرارة'].map((problem, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 space-x-reverse">
                                        <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <span className="text-gray-400 font-bold">{problem}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* الأيقونة السفلية */}
                        <div className="absolute bottom-10 left-8 md:left-16 lg:left-24 opacity-50 group-hover/before:opacity-100 transition-opacity duration-700">
                            <svg className="w-16 h-16 md:w-20 md:h-20 text-red-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* النصف الأيمن - بعد الحماية */}
                <div
                    className="absolute inset-y-0 right-0 w-1/2 group/after cursor-pointer transition-all duration-700 hover:w-[60%] z-20"
                    style={{ transformOrigin: 'right center', paddingTop: '80px' }}
                >
                    {/* الصورة */}
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src={afterImage}
                            alt="بعد الحماية"
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover/after:scale-110"
                        />
                        {/* تعتيم خفيف */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent"></div>
                    </div>

                    {/* المحتوى */}
                    <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 text-right z-20">
                        {/* الشارة العلوية */}
                        <div className="inline-flex items-center justify-end space-x-3 space-x-reverse mb-6 opacity-0 group-hover/after:opacity-100 transition-all duration-700 delay-100 transform translate-x-10 group-hover/after:translate-x-0">
                            <span className="text-green-400 font-black text-xs uppercase tracking-widest">المرحلة الثانية</span>
                            <div className="w-12 h-1 bg-green-500"></div>
                        </div>

                        {/* العنوان الرئيسي */}
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 transform transition-all duration-700 group-hover/after:scale-105">
                            بعد<br />
                            <span className="text-green-400">الحماية</span>
                        </h2>

                        {/* الوصف */}
                        <div className="opacity-0 group-hover/after:opacity-100 transition-all duration-700 delay-200 transform -translate-x-10 group-hover/after:translate-x-0">
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-md border-l-4 border-green-500 pl-6 mr-auto">
                                زجاج محمي بتقنية 3M يوفر حماية شاملة ووضوح مثالي
                            </p>

                            {/* المميزات */}
                            <div className="space-y-3">
                                {['حماية كاملة من الخدوش', 'وضوح بلوري مثالي', 'عزل حراري متقدم'].map((feature, idx) => (
                                    <div key={idx} className="flex items-center justify-end space-x-3 space-x-reverse">
                                        <span className="text-gray-200 font-bold">{feature}</span>
                                        <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* الأيقونة السفلية */}
                        <div className="absolute bottom-10 right-8 md:right-16 lg:right-24 opacity-50 group-hover/after:opacity-100 transition-opacity duration-700">
                            <svg className="w-16 h-16 md:w-20 md:h-20 text-green-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animationDelay: '0.3s' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* الخط الفاصل المتوهج */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent z-30 shadow-[0_0_30px_rgba(220,38,38,0.8)] top-20 md:top-24">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-red-600 bg-black flex items-center justify-center shadow-2xl">
                        <div className="w-3 h-3 rounded-full bg-red-600 animate-ping"></div>
                        <div className="absolute w-3 h-3 rounded-full bg-red-600"></div>
                    </div>
                </div>

                {/* النص التوجيهي */}
                <div className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 z-40 text-center px-4">
                    <div className="bg-black/80 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-full border border-red-600/50 shadow-2xl">
                        <p className="text-white font-black text-xs md:text-base tracking-widest uppercase flex items-center gap-2 md:gap-3">
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-red-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <span className="hidden md:inline">حرك المؤشر على الجانبين لاستكشاف الفرق</span>
                            <span className="md:hidden">استكشف الجانبين</span>
                        </p>
                    </div>
                </div>

                {/* أزرار الإجراء السفلية */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col sm:flex-row gap-4 px-4">
                    <a
                        href="tel:+966000000000"
                        className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-black rounded-full transition-all duration-500 shadow-2xl shadow-red-500/50 hover:shadow-red-600/70 hover:scale-110 text-center relative overflow-hidden group"
                    >
                        <span className="relative z-10">استشارة مجانية الآن</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-shimmer"></div>
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
                        className="border-2 border-white hover:bg-white hover:text-black text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-black rounded-full transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                    >
                        اكتشف المزيد
                    </button>
                </div>

            </div>
        </section>
    );
};

export default GlassProtectionHero;
