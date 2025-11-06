
import React from 'react';

const AbstractUIGraphic: React.FC = () => (
    <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-white shadow-2xl border border-gray-200/50 transform rotate-3"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-white shadow-2xl border border-gray-200/50 transform -rotate-3"></div>
        <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden p-6">
            <div className="h-8 bg-gray-100 rounded-lg flex items-center px-4">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex space-x-4 mt-6">
                <div className="w-1/3">
                    <div className="h-24 bg-indigo-100 rounded-lg"></div>
                    <div className="h-4 bg-gray-200 rounded-full mt-3"></div>
                    <div className="h-3 bg-gray-200 w-3/4 rounded-full mt-2"></div>
                </div>
                <div className="w-2/3">
                     <div className="h-10 bg-indigo-500 rounded-lg flex items-center justify-between px-4">
                        <div className="h-4 w-1/3 bg-indigo-300 rounded-full"></div>
                        <div className="h-4 w-1/4 bg-white rounded-full"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full mt-4"></div>
                    <div className="h-4 bg-gray-200 w-5/6 rounded-full mt-2"></div>
                    <div className="h-4 bg-gray-200 w-3/4 rounded-full mt-2"></div>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="h-16 bg-gray-100 rounded-lg"></div>
                <div className="h-16 bg-gray-100 rounded-lg"></div>
            </div>
        </div>
    </div>
);


const Hero: React.FC = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50"></div>
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center border border-gray-200 rounded-full px-4 py-1.5 text-sm font-semibold text-gray-700 mb-6 bg-white/50 shadow-sm">
                            <span className="w-2.5 h-2.5 mr-2.5 bg-indigo-500 rounded-full animate-pulse"></span>
                            The All-in-One AI-Powered LMS
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                           The <span className="text-indigo-600">Intelligent Learning Platform hello</span> That Drives Business Growth
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-gray-600">
                           Leverage the power of AI to build world-class training programs that accelerate growth, improve performance, and create a culture of continuous learning.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            <a href="/signup" className="w-full sm:w-auto flex items-center justify-center bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-300 transform hover:-translate-y-1 text-lg">
                                Start Free Trial <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                            </a>
                            <a href="/" className="w-full sm:w-auto flex items-center justify-center bg-white text-gray-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg border border-gray-300 hover:border-gray-400 transform hover:-translate-y-1 text-lg">
                                Watch Demo
                            </a>
                        </div>
                         <p className="mt-6 text-sm text-gray-500">
                            No credit card required • Free plan available
                        </p>
                    </div>
                    <div className="hidden md:block h-96">
                        <AbstractUIGraphic />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
