
import React from 'react';
import { menuFeatures, FeatureDetail } from '../constants';

const AbstractGraphic: React.FC<{seed: number}> = ({seed}) => {
    const colors = seed % 2 === 0 ? ['indigo', 'sky'] : ['orange', 'rose'];
    return (
        <div className="relative aspect-[4/3] lg:aspect-square">
            <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl border border-gray-200/50 transform rotate-3"></div>
            <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl border border-gray-200/50 transform -rotate-3"></div>
            <div className={`relative w-full h-full bg-gradient-to-br from-${colors[0]}-50 to-${colors[1]}-50 rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden p-6`}>
                <div className="h-6 bg-gray-200/80 rounded-lg flex items-center px-3">
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5"></div>
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mr-1.5"></div>
                    <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                </div>
                <div className={`mt-4 h-12 bg-${colors[0]}-500 rounded-lg opacity-80`}></div>
                <div className="mt-3 space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 w-5/6 rounded-full"></div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-8 bg-white rounded-lg border border-gray-200"></div>
                    <div className="h-8 bg-white rounded-lg border border-gray-200"></div>
                </div>
                 <div className="mt-3 space-y-2">
                    <div className="h-3 bg-gray-200 w-3/4 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

const FeatureRow: React.FC<{ feature: FeatureDetail, imagePosition: 'left' | 'right' }> = ({ feature, imagePosition }) => {
    if (!feature) return null;

    const textContent = (
        <div className="flex flex-col justify-center">
            <div className="inline-flex items-center space-x-3">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                    {React.cloneElement(feature.icon, { className: 'h-7 w-7' })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{feature.title}</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{feature.description}</p>
            <ul className="mt-6 space-y-4">
                {feature.accordionFeatures.slice(0, 2).map(item => (
                    <li key={item.title} className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 mr-3 mt-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-8">
                <a href={`/features/${feature.slug}`} className="text-indigo-600 font-semibold hover:text-indigo-500 transition group text-base inline-flex items-center">
                    Learn more about {feature.title} <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-2">&rarr;</span>
                </a>
            </div>
        </div>
    );

    const imageContent = <AbstractGraphic seed={feature.title.length} />;

    return (
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {imagePosition === 'left' ? (
                <>
                    <div>{imageContent}</div>
                    <div>{textContent}</div>
                </>
            ) : (
                <>
                    <div className="md:order-2">{imageContent}</div>
                    <div className="md:order-1">{textContent}</div>
                </>
            )}
        </div>
    );
};


const DetailedFeatures: React.FC = () => {
    // FIX: Explicitly type allFeatures to ensure type safety in .find() calls below.
    const allFeatures: FeatureDetail[] = React.useMemo(() => Object.values(menuFeatures).flat(), []);
    
    // FIX: Correct slugs to match data in constants.tsx to fix runtime error where features are not found.
    const aiFeature = allFeatures.find(f => f.slug === 'ai-course-creation');
    const competencyFeature = allFeatures.find(f => f.slug === 'skills-engine');
    const analyticsFeature = allFeatures.find(f => f.slug === 'learning-analytics-dashboards');

    if (!aiFeature || !competencyFeature || !analyticsFeature) {
        return null; 
    }

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Go Deeper Than Ever Before</h2>
                    <p className="mt-4 text-lg text-gray-600">Explore the core capabilities that make Learnly the most powerful and intuitive LMS on the market.</p>
                </div>
                
                <div className="mt-20 space-y-20 lg:space-y-28">
                    <FeatureRow feature={aiFeature} imagePosition="left" />
                    <FeatureRow feature={competencyFeature} imagePosition="right" />
                    <FeatureRow feature={analyticsFeature} imagePosition="left" />
                </div>
            </div>
        </section>
    );
};

export default DetailedFeatures;
