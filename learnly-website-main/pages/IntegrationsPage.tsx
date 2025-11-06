
import React, { useState, useMemo } from 'react';
import { integrations, Integration, IntegrationCategory } from '../constants';

const integrationCategories: IntegrationCategory[] = ['All', 'Authentication', 'HRIS', 'CRM', 'Collaboration', 'Content Providers', 'Recognition', 'Analytics', 'Virtual Classroom'];

const IntegrationsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<IntegrationCategory>('All');

    const allIntegrations: Integration[] = useMemo(() => Object.values(integrations).flat(), []);

    const filteredIntegrations = useMemo(() => {
        if (activeCategory === 'All') {
            return allIntegrations;
        }
        return allIntegrations.filter(integration => integration.category === activeCategory);
    }, [activeCategory, allIntegrations]);

    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Integrations & Ecosystem</h1>
                    <p className="mt-4 text-lg text-gray-600">Connect Learnly with your favorite tools to create a seamless, automated, and powerful learning experience across your entire organization.</p>
                </div>

                <div className="mt-16">
                    <div className="flex justify-center flex-wrap gap-3">
                        {integrationCategories.map(category => {
                            const count = category === 'All' ? allIntegrations.length : allIntegrations.filter(i => i.category === category).length;
                            if (count === 0) return null;
                            
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2.5 font-semibold text-sm rounded-lg transition-colors duration-200 ${
                                        activeCategory === category
                                            ? 'bg-indigo-600 text-white shadow'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                                    }`}
                                >
                                    {category} ({count})
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredIntegrations.map(integration => (
                        <div key={integration.name} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
                                    {React.cloneElement(integration.icon, { className: "w-7 h-7 text-gray-600"})}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{integration.name}</h3>
                            </div>
                            <p className="mt-4 text-gray-600 flex-grow">{integration.description}</p>
                            <div className="mt-6 pt-4 border-t border-gray-200/80">
                                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{integration.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntegrationsPage;
