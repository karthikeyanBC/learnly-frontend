
import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="bg-gray-50/50 py-20 sm:py-28">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Ready to Transform Your Training?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    Join thousands of organizations using Learnly to deliver better learning experiences.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                     <a href="/signup" className="w-full sm:w-auto flex items-center justify-center bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-300 transform hover:-translate-y-1 text-lg">
                        Start Free Trial <span className="ml-2">&rarr;</span>
                    </a>
                    <a href="/features" className="w-full sm:w-auto flex items-center justify-center bg-white text-gray-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-300 hover:border-gray-400 transform hover:-translate-y-1 text-lg">
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
