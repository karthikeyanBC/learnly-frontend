
import React from 'react';

// Reusable component for the alternating feature sections
const FeatureSection: React.FC<{
    icon: React.ReactElement<{ className?: string }>;
    title: string;
    description: string;
    imageSeed: number;
    imagePosition: 'left' | 'right';
}> = ({ icon, title, description, imageSeed, imagePosition }) => {
    
    const ImageComponent = () => {
         const colors = ['indigo', 'sky', 'rose', 'orange', 'teal', 'cyan', 'lime', 'emerald'];
         const color1 = colors[imageSeed % colors.length];
         const color2 = colors[(imageSeed + 3) % colors.length];

         return (
             <div className="relative aspect-square">
                <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl border border-gray-200/50 transform rotate-3"></div>
                <div className={`relative w-full h-full bg-gradient-to-br from-${color1}-50 to-${color2}-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden p-6`}>
                    <div className="h-6 bg-gray-200/80 rounded-lg flex items-center px-3">
                        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5"></div>
                        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5"></div>
                        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                    </div>
                    <div className={`mt-4 h-12 bg-${color1}-500 rounded-lg opacity-80`}></div>
                    <div className="mt-3 space-y-2">
                        <div className="h-3 bg-gray-200 rounded-full"></div>
                        <div className="h-3 bg-gray-200 w-5/6 rounded-full"></div>
                    </div>
                     <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="h-8 bg-white rounded-lg border border-gray-200"></div>
                        <div className="h-8 bg-white rounded-lg border border-gray-200"></div>
                    </div>
                </div>
            </div>
         )
    };

    const textContent = (
        <div className="flex flex-col justify-center">
            <div className="inline-flex items-center space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                    {React.cloneElement(icon, { className: 'h-7 w-7' })}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
            </div>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>
    );

    return (
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {imagePosition === 'left' ? (
                <>
                    <div><ImageComponent /></div>
                    <div>{textContent}</div>
                </>
            ) : (
                <>
                    <div className="md:order-2"><ImageComponent /></div>
                    <div className="md:order-1">{textContent}</div>
                </>
            )}
        </div>
    );
};

export default FeatureSection;
