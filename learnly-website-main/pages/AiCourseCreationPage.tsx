
import React from 'react';
import FinalCTA from '../components/FinalCTA';
import FeatureSection from '../components/FeatureSection';
import { SparklesIcon, DocumentTextIcon, RocketLaunchIcon } from '../constants';
import PlaceholderImage from '../components/PlaceholderImage';

const AiCourseCreationPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
                 <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4">
                    <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-50 to-white/0"></div>
                </div>
                <div className="relative max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-100 text-indigo-600 mb-6">
                        <SparklesIcon className="h-8 w-8" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">AI-Powered Course Creation</h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600">
                        Go from a simple prompt, existing document, or video to a complete, engaging course in minutes, not weeks.
                    </p>
                </div>
            </section>
            
            <PlaceholderImage />

            {/* Main content with alternating feature sections */}
            <section className="py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="space-y-20 lg:space-y-28">
                        <FeatureSection 
                            icon={<RocketLaunchIcon />}
                            title="Generate with AI"
                            description="Automatically build course outlines, lesson content, quizzes, and flashcards from your existing materials. Turn hours of manual work into a few clicks and let your experts focus on refining, not writing from scratch."
                            imagePosition="right"
                            imageSeed={1}
                        />
                         <FeatureSection 
                            icon={<DocumentTextIcon />}
                            title="Upload Anything"
                            description="Our AI works with the content you already have. Simply provide text, upload documents like PDFs or Word files, or even paste a video link. Learnly's AI will analyze the content and structure it into an interactive learning experience."
                            imagePosition="left"
                            imageSeed={2}
                        />
                         <FeatureSection 
                            icon={<SparklesIcon />}
                            title="Edit & Refine"
                            description="The AI gives you a powerful head start. Your subject matter experts can easily jump in to edit, refine, and add their unique insights to the AI-generated draft, saving up to 90% of their valuable creation time."
                            imagePosition="right"
                            imageSeed={3}
                        />
                    </div>
                </div>
            </section>
            
            <FinalCTA />
        </div>
    );
};

export default AiCourseCreationPage;