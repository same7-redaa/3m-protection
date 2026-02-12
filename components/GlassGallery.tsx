import React from 'react';

interface GalleryItemProps {
    before: string;
    after: string;
    title: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ before, after, title }) => {
    return (
        <div className="group">
            {/* Container الصور - عرض جنباً إلى جنب */}
            <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden shadow-2xl">
                {/* صورة "قبل" */}
                <div className="relative overflow-hidden">
                    <img
                        src={before}
                        alt="قبل الحماية"
                        className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge قبل */}
                    <div className="absolute top-3 left-3 bg-red-600/95 backdrop-blur-sm px-3 py-2 rounded-lg border-2 border-red-400 shadow-xl">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            <span className="text-white font-black text-xs">قبل</span>
                        </div>
                    </div>
                </div>

                {/* صورة "بعد" */}
                <div className="relative overflow-hidden">
                    <img
                        src={after}
                        alt="بعد الحماية"
                        className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge بعد */}
                    <div className="absolute top-3 right-3 bg-green-500/95 backdrop-blur-sm px-3 py-2 rounded-lg border-2 border-green-300 shadow-xl">
                        <div className="flex items-center gap-1.5">
                            <span className="text-white font-black text-xs">بعد</span>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface GalleryGridProps { }

const GalleryGrid: React.FC<GalleryGridProps> = () => {
    const galleryImages = [
        { before: '/glass-protection/قبل.jpeg', after: '/glass-protection/بعد.jpeg', title: 'الحماية الأساسية' },
        { before: '/glass-protection/قبل 1.jpeg', after: '/glass-protection/بعد 1.jpeg', title: 'الحماية المتقدمة' },
        { before: '/glass-protection/قبل 2.jpeg', after: '/glass-protection/بعد 2.jpeg', title: 'الحماية الشاملة' },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
                <GalleryItem key={index} {...item} />
            ))}
        </div>
    );
};

export default GalleryGrid;
