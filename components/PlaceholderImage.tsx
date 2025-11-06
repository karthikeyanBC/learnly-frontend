
import React from 'react';

const PlaceholderImage: React.FC<{ text?: string }> = ({ text = "Placeholder for Dashboard/Feature Screenshot" }) => {
    return (
        <section className="py-10 sm:py-16 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/80 aspect-video overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <p className="text-gray-500 font-semibold text-xl sm:text-2xl px-4 text-center">{text}</p>
                    </div>
                    <svg className="absolute inset-0 w-full h-full text-gray-200/70" width="100" height="100">
                        <defs>
                            <pattern id="placeholder-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                                <circle cx="2" cy="2" r="1" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#placeholder-pattern)"/>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default PlaceholderImage;