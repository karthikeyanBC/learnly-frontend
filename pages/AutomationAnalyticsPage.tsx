
import React from 'react';
import { featurePageData, featurePageAccordionsData } from '../constants';
import FinalCTA from '../components/FinalCTA';
import AccordionFeatures from '../components/AccordionFeatures';
import FeatureCard from '../components/FeatureCard';
import PlaceholderImage from '../components/PlaceholderImage';

const AutomationAnalyticsPage: React.FC = () => {
    const pageData = featurePageData['automation-analytics'];
    const accordionData = featurePageAccordionsData['automation-analytics'];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4">
                    <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-50 to-white/0"></div>
                </div>
                <div className="relative max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
                        {React.cloneElement(pageData.icon, { className: 'h-8 w-8' })}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">{pageData.headline}</h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600">
                        {pageData.subheading}
                    </p>
                </div>
            </section>

            <PlaceholderImage />

            {/* Interactive Accordion Section */}
            <section className="py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Automate Tasks, Prove Your Impact</h2>
                        <p className="mt-4 text-lg text-gray-600">Click each capability to see how you can measure and prove your training ROI.</p>
                    </div>
                    <div className="mt-16">
                        <AccordionFeatures features={accordionData} />
                    </div>
                </div>
            </section>
            
            {/* Key Capabilities Section */}
            <section className="py-20 sm:py-28 bg-gray-50/50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Automate Workflows, Prove Impact</h2>
                        <p className="mt-4 text-lg text-gray-600">A powerful suite of tools to eliminate manual tasks and measure the true impact of your training.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pageData.keyCapabilities.map((capability, index) => (
                            <FeatureCard
                                key={index}
                                icon={capability.icon}
                                title={capability.title}
                                description={capability.description}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <FinalCTA />
        </div>
    );
};

export default AutomationAnalyticsPage;