
import React, { useState } from 'react';
import { SolutionDetail, solutionPageData, solutionPageFaqs } from '../constants';
import FinalCTA from '../components/FinalCTA';
import FeatureSection from '../components/FeatureSection';
import ComplianceSection from '../components/ComplianceSection';
import PlaceholderImage from '../components/PlaceholderImage';

const AccordionFAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; }> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 last:border-b-0">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none">
            <span className="text-lg font-semibold text-gray-800">{question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="px-6 pb-5 text-gray-600 leading-relaxed">{answer}</p>
        </div>
    </div>
);


interface SolutionDetailPageProps {
    item?: SolutionDetail;
}

const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ item }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const handleFaqClick = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    
    if (!item) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Solution not found</h2>
                <a href="/" className="mt-4 text-indigo-600 hover:underline">
                    Back to Home
                </a>
            </div>
        );
    }

    const pageData = solutionPageData[item.slug];
    const faqs = solutionPageFaqs[item.slug];
    
    if (!pageData) {
         return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Content for this solution is not available yet.</h2>
                <a href="/" className="mt-4 text-indigo-600 hover:underline">
                    Back to Home
                </a>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4">
                    <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-50 to-white/0"></div>
                </div>
                <div className="relative max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
                        {React.cloneElement(item.icon, { className: 'h-8 w-8' })}
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">{pageData.headline}</h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600">
                        {pageData.subheading}
                    </p>
                </div>
            </section>

            <PlaceholderImage />
            
            {/* Challenge/Solution Section */}
            <section className="py-20 sm:py-28 bg-gray-50/50">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{pageData.challenge.title}</h2>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{pageData.challenge.description}</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white border-2 border-indigo-500 shadow-2xl">
                             <h2 className="text-3xl font-bold text-indigo-700 tracking-tight">{pageData.solution.title}</h2>
                            <p className="mt-4 text-lg text-gray-600 leading-relaxed">{pageData.solution.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities Section */}
            <section className="py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Key Capabilities for {item.title}</h2>
                    </div>
                     <div className="mt-20 space-y-20 lg:space-y-28">
                        {pageData.keyCapabilities.map((feature: any, index: number) => (
                            <FeatureSection 
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                imagePosition={index % 2 === 0 ? 'right' : 'left'}
                                imageSeed={feature.imageSeed}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {faqs && (
                 <section className="bg-gray-50/50 py-20 sm:py-28">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
                        </div>
                        <div className="mt-16 max-w-4xl mx-auto bg-white border border-gray-200/80 rounded-2xl shadow-xl overflow-hidden">
                            {faqs.map((faq, index) => (
                                <AccordionFAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openFaqIndex === index}
                                    onClick={() => handleFaqClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ComplianceSection />
            
            <FinalCTA />
        </div>
    );
};

export default SolutionDetailPage;
