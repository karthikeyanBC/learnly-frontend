
import React, { useState } from 'react';
import { Logo, menuSolutions, featureMenuLinks } from '../constants';
import { Page } from '../App';

interface HeaderProps {
}

const ChevronDownIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);


const Header: React.FC<HeaderProps> = () => {
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [featuresOpen, setFeaturesOpen] = useState(false);

    const solutions = Object.values(menuSolutions).flat();

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="/">
                           <Logo />
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {/* Solutions Dropdown */}
                        <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
                            <a href="/solutions" className="group flex items-center font-semibold text-gray-700 hover:text-indigo-600 transition">
                                Solutions <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                            </a>
                            <div className={`absolute left-1/2 -translate-x-1/2 w-96 pt-4 transition-all duration-300 transform ${solutionsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <div className="bg-white rounded-xl shadow-2xl border border-gray-200/50 p-4">
                                    <div className="space-y-1">
                                        {solutions.map(item => (
                                            <a key={item.slug} href={`/solutions/${item.slug}`} onClick={() => setSolutionsOpen(false)} className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition">
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600">
                                                    {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
                                                </div>
                                                <div className="ml-4">
                                                    <p className="font-semibold text-gray-900">{item.title}</p>
                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features Dropdown */}
                        <div className="relative" onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
                            <a href="/features" className="group flex items-center font-semibold text-gray-700 hover:text-indigo-600 transition">
                                Features <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
                            </a>
                             <div className={`absolute top-full left-1/2 -translate-x-1/2 w-96 pt-4 transition-all duration-300 transform ${featuresOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                                <div className="bg-white rounded-xl shadow-2xl border border-gray-200/50 p-4">
                                    <div className="space-y-1">
                                        {featureMenuLinks.map(item => (
                                            <a
                                                key={item.slug}
                                                href={`/features/${item.slug}`}
                                                onClick={() => setFeaturesOpen(false)}
                                                className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition"
                                            >
                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600">
                                                    {React.cloneElement(item.icon, { className: 'h-6 w-6' })}
                                                </div>
                                                <div className="ml-4">
                                                    <p className="font-semibold text-gray-900">{item.title}</p>
                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="/pricing" className="font-semibold text-gray-700 hover:text-indigo-600 transition">Pricing</a>
                        <a href="/integrations" className="font-semibold text-gray-700 hover:text-indigo-600 transition">Integrations</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <a href="/login" className="font-semibold text-gray-700 hover:text-indigo-600 transition">Log In</a>
                        <a href="/signup" className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition">Start Free Trial</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
