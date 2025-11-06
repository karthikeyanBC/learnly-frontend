
import React from 'react';

const LearnAnythingCTA: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="relative rounded-3xl p-12 overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-500">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                     <div className="relative max-w-3xl mx-auto text-center">
                         <div className="inline-flex items-center bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6 backdrop-blur-sm">
                            <span className="w-2.5 h-2.5 mr-2.5 bg-white rounded-full"></span>
                            AI-Powered Learning
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Learn Anything, Your Way</h2>
                        <p className="mt-4 text-lg text-indigo-100">
                            Tell us what you want to learn, and our AI will create a personalized learning path with courses, flashcards, and quizzes tailored to your timeline.
                        </p>
                        <div className="mt-10">
                             <a href="/signup" className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-2xl transform hover:-translate-y-1 text-lg">
                                Start Learning Today <span className="ml-2">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearnAnythingCTA;
