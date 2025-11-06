
import React, { useState, useEffect } from 'react';
import { AccordionFeature } from '../constants';

interface AccordionFeaturesProps {
    features: AccordionFeature[];
}

const AbstractGraphic: React.FC<{seed: number}> = ({seed}) => {
    const colors = ['indigo', 'sky', 'rose', 'orange', 'teal', 'cyan', 'lime', 'emerald'];
    const color1 = colors[seed % colors.length];
    const color2 = colors[(seed + 3) % colors.length];
    
    return (
        <div className="relative aspect-video w-full h-full">
            <div className={`relative w-full h-full bg-gradient-to-br from-${color1}-50 to-${color2}-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden p-6`}>
                <div className="h-6 bg-gray-200/80 rounded-lg flex items-center px-3">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5"></div>
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5"></div>
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                </div>
                <div className={`mt-4 h-10 bg-${color1}-500 rounded-lg opacity-80`}></div>
                <div className="mt-3 space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 w-5/6 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const AccordionFeatures: React.FC<AccordionFeaturesProps> = ({ features }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (features && features.length > 0 && activeIndex >= features.length) {
            setActiveIndex(0);
        }
    }, [features, activeIndex]);

    const activeFeature = features?.[activeIndex];

    if (!activeFeature) {
        return null;
    }

    return (
        <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 flex flex-col">
                {features.map((feature, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className="py-6 text-left w-full border-b border-gray-200 last:border-b-0"
                    >
                        <div className="flex justify-between items-start space-x-4">
                           <div className="flex-grow">
                                <h3 className={`font-semibold text-xl transition-colors ${
                                    activeIndex === index ? 'text-gray-900' : 'text-gray-700'
                                }`}>
                                    {feature.title}
                                </h3>
                                {activeIndex === index && (
                                    <p className="mt-2 text-base leading-relaxed text-gray-600">
                                        {feature.description}
                                    </p>
                                )}
                           </div>
                           <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                activeIndex === index ? 'bg-gray-800 text-white' : 'bg-gray-200/80 text-gray-600'
                            }`}>
                                {activeIndex === index ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
                           </div>
                        </div>
                    </button>
                ))}
            </div>
            <div className="lg:col-span-3 lg:sticky top-28">
                <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xl">
                    <div className="overflow-hidden rounded-xl">
                        {activeFeature.imageUrl ? (
                            <img src={activeFeature.imageUrl} alt={activeFeature.title} className="w-full h-auto object-contain rounded-xl border border-gray-200 bg-gray-50" />
                        ) : (
                            <AbstractGraphic seed={activeFeature.imageSeed || 0} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionFeatures;
