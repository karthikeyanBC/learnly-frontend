
import React from 'react';
import { Page } from '../App';
import { DetailPageItem } from '../constants';

interface CategoryListingPageProps {
    pageTitle: string;
    pageSubtitle: string;
    categoriesData: { [key: string]: DetailPageItem[] };
    basePath: 'solutions';
}

const CategoryListingPage: React.FC<CategoryListingPageProps> = ({ pageTitle, pageSubtitle, categoriesData, basePath }) => {
    const featureCategories = Object.entries(categoriesData);

    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">{pageTitle}</h1>
                    <p className="mt-4 text-lg text-gray-600">{pageSubtitle}</p>
                </div>

                <div className="mt-20 space-y-20">
                    {featureCategories.map(([category, features]) => (
                        <div key={category}>
                            <div className="text-center">
                                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{category}</h2>
                            </div>
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {features.map(item => (
                                    <a 
                                        key={item.title} 
                                        href={`/${basePath}/${item.slug}`}
                                        className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200"
                                    >
                                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                                            {React.cloneElement(item.icon, { className: 'h-7 w-7' })}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                            <p className="mt-2 text-base text-gray-600">{item.description}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryListingPage;
