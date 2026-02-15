
import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد بن عبدالله المطيري',
      position: 'مالك فيلا سكنية',
      image: '/placeholder-avatar.jpg',
      rating: 5,
      comment: 'تعاملت مع 3M Protection لحماية رخام الفيلا الخاصة بي، والنتيجة كانت مذهلة! الرخام الآن محمي تماماً من البقع والخدوش. الفريق محترف جداً والتنفيذ كان سريع ونظيف. أنصح الجميع بالتعامل معهم.',
      service: 'حماية الرخام'
    },
    {
      id: 2,
      name: 'فهد بن سعود العتيبي',
      position: 'مدير شركة إنشاءات',
      image: '/placeholder-avatar.jpg',
      rating: 5,
      comment: 'قمنا بتركيب أفلام العازل الحراري لمبنى مكاتب كامل، والفرق واضح جداً في درجة الحرارة وفاتورة الكهرباء. الجودة ممتازة والضمان يعطي ثقة كبيرة. شركة موثوقة ومنتجات أصلية 100%.',
      service: 'العازل الحراري للزجاج'
    },
    {
      id: 3,
      name: 'خالد بن محمد الدوسري',
      position: 'صاحب مطعم فاخر',
      image: '/placeholder-avatar.jpg',
      rating: 5,
      comment: 'حماية الرخام في المطعم كانت ضرورية جداً بسبب الاستخدام اليومي المكثف. بعد التطبيق بسنة كاملة، الرخام لا يزال كأنه جديد! سهولة التنظيف أصبحت رائعة. خدمة احترافية وأسعار مناسبة.',
      service: 'حماية الرخام'
    },
    {
      id: 4,
      name: 'سلطان بن راشد القحطاني',
      position: 'مالك مبنى تجاري',
      image: '/placeholder-avatar.jpg',
      rating: 5,
      comment: 'ركبت العازل الحراري في مبنى تجاري بـ 8 طوابق. النتيجة فاقت التوقعات! انخفضت فاتورة الكهرباء بنسبة 40% تقريباً. الفريق التزم بالمواعيد وأنهى العمل في الوقت المحدد. شكراً 3M Protection.',
      service: 'العازل الحراري للزجاج'
    },
    {
      id: 5,
      name: 'عبدالرحمن بن إبراهيم الشمري',
      position: 'مهندس معماري',
      image: '/placeholder-avatar.jpg',
      rating: 5,
      comment: 'بصفتي مهندس معماري، أوصي عملائي دائماً بـ 3M Protection. المنتجات ذات جودة عالمية والتركيب احترافي. التعامل معهم سهل والأسعار تنافسية. لقد نفذوا لي أكثر من 10 مشاريع وكلها ناجحة.',
      service: 'خدمات متنوعة'
    },
    {
      id: 6,
      name: 'ماجد بن فيصل الغامدي',
      position: 'مالك قصر أفراح',
      image: '/placeholder-avatar.jpg',
      rating: 5,
      comment: 'حماية الرخام والعازل الحراري في قصر الأفراح كانت استثمار ممتاز. الرخام محمي من آثار الحفلات المتكررة، والعازل الحراري وفر علي الكثير من تكاليف التكييف. فريق عمل ممتاز وخدمة ما بعد البيع رائعة.',
      service: 'حماية شاملة'
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 space-x-reverse mb-4">
            <span className="w-16 h-1 bg-red-600"></span>
            <span className="text-red-600 font-black tracking-[0.1em] text-sm uppercase">آراء العملاء</span>
            <span className="w-16 h-1 bg-red-600"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">ماذا يقول عملاؤنا؟</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نفخر بثقة عملائنا ورضاهم عن خدماتنا. إليك بعض آرائهم وتجاربهم معنا
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Comment */}
            <div className="flex-grow mb-8">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                "{testimonials[activeIndex].comment}"
              </p>
            </div>

            {/* Client Info */}
            <div className="text-center border-t border-gray-100 pt-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-black">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-black text-black">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 font-bold">{testimonials[activeIndex].position}</p>
                  <span className="inline-block mt-2 px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-bold">
                    {testimonials[activeIndex].service}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 group"
            aria-label="السابق"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 group"
            aria-label="التالي"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-red-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-red-400'
                }`}
                aria-label={`انتقل إلى التقييم ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-black text-red-600 mb-2">500+</div>
            <div className="text-gray-600 font-bold">مشروع منجز</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-black text-red-600 mb-2">98%</div>
            <div className="text-gray-600 font-bold">رضا العملاء</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-black text-red-600 mb-2">10+</div>
            <div className="text-gray-600 font-bold">سنوات خبرة</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-black text-red-600 mb-2">24/7</div>
            <div className="text-gray-600 font-bold">دعم فني</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
