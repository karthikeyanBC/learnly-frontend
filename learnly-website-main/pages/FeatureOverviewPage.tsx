
import React from 'react';
import { Page } from '../App';
import { featureMenuLinks } from '../constants';

interface FeatureOverviewPageProps {
}

const FeatureOverviewPage: React.FC<FeatureOverviewPageProps> = () => {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Explore Our Features</h1>
                    <p className="mt-4 text-lg text-gray-600">Discover the powerful, integrated tools that make Learnly the all-in-one solution for modern training.</p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {featureMenuLinks.map((item) => (
                        <a
                            key={item.slug}
                            href={`/features/${item.slug}`}
                            className="flex flex-col p-8 rounded-2xl bg-gray-50/80 hover:bg-white transition-all duration-300 hover:shadow-2xl border border-gray-200/80 hover:border-indigo-300 transform hover:-translate-y-2"
                        >
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                                {React.cloneElement(item.icon, { className: 'h-7 w-7' })}
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="mt-2 text-base text-gray-600 flex-grow">{item.description}</p>
                            <span className="mt-6 font-semibold text-indigo-600 inline-flex items-center">
                                Learn More <span className="ml-2">&rarr;</span>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureOverviewPage;
