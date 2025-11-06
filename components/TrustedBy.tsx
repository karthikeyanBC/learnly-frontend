import React from 'react';
import { trustedByLogos } from '../constants';

const TrustedBy: React.FC = () => {
    const duplicatedLogos = [...trustedByLogos, ...trustedByLogos];

    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Trusted by the world's best companies
                </h2>
                <div className="mt-8 relative overflow-hidden">
                    <div className="flex animate-marquee-infinite">
                        {duplicatedLogos.map((company, index) => (
                            <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-12 text-gray-500">
                                <company.logo />
                            </div>
                        ))}
                    </div>
                     <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"></div>
                </div>
            </div>
            <style>
                {`
                @keyframes marquee-infinite {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    animation: marquee-infinite 30s linear infinite;
                }
                `}
            </style>
        </div>
    );
};

export default TrustedBy;
