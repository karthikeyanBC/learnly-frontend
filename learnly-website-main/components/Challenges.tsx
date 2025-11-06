import React from 'react';
import FeatureCard from './FeatureCard';
import { challenges } from '../constants';

const Challenges: React.FC = () => {
    return (
        <section className="py-20 sm:py-28 bg-gray-50/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
                <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-orange-50 to-white/0"></div>
            </div>
             <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
                <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-indigo-50 to-white/0"></div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Built to Solve Real Training Challenges</h2>
                    <p className="mt-4 text-lg text-gray-600">Address the pain points that slow down your organization and turn them into growth opportunities.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <FeatureCard 
                            key={index}
                            icon={challenge.icon}
                            title={challenge.title}
                            description={challenge.description}
                            variant="challenge"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Challenges;