
import React, { useState } from 'react';

const tabs = [
    { name: 'Learner', title: 'A Personalized Path to Mastery', description: 'Engage with courses, track your progress, and stay motivated with gamification, learning streaks, and a clear view of your achievements.' },
    { name: 'Manager', title: 'Empower Your Team\'s Growth', description: 'Track your team\'s performance, manage course assignments, and identify skill gaps. Get the insights you need to build a top-performing team.' },
    { name: 'Admin', title: 'Manage Your Entire Learning Ecosystem', description: 'Get a platform-wide view of all training activity. Manage users, customize branding, run compliance reports, and track learning engagement.' }
];

const DashboardGraphic: React.FC<{ activeTab: string }> = ({ activeTab }) => {
    const isLearner = activeTab === 'Learner';
    const isManager = activeTab === 'Manager';
    const isAdmin = activeTab === 'Admin';

    return (
        <div className="relative aspect-video w-full">
            <div className="absolute inset-0 rounded-2xl bg-white shadow-2xl border border-gray-200/50 transform rotate-2"></div>
            <div className="relative w-full h-full bg-gray-50 rounded-2xl shadow-inner border border-gray-200/50 overflow-hidden p-4 sm:p-6 flex space-x-4">
                {/* Sidebar */}
                <div className="w-1/4 bg-white rounded-lg p-3 space-y-2 hidden sm:block">
                    <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-indigo-100 rounded"></div>
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                    {isManager && <div className="h-4 w-full bg-gray-100 rounded"></div>}
                    {isAdmin && <>
                        <div className="h-4 w-full bg-gray-100 rounded"></div>
                        <div className="h-4 w-full bg-gray-100 rounded"></div>
                    </>}
                </div>
                {/* Main content */}
                <div className="w-full sm:w-3/4 bg-white rounded-lg p-3 sm:p-4">
                    <div className={`h-8 w-1/2 bg-gray-200 rounded mb-4 ${isAdmin ? 'w-2/3' : 'w-1/2'}`}></div>
                    {/* Charts/cards */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className={`h-16 sm:h-20 rounded-lg ${isLearner ? 'bg-indigo-100' : 'bg-gray-100'}`}></div>
                        <div className={`h-16 sm:h-20 rounded-lg ${isManager ? 'bg-indigo-100' : 'bg-gray-100'}`}></div>
                        <div className={`h-16 sm:h-20 rounded-lg ${isAdmin ? 'bg-indigo-100' : 'bg-gray-100'} col-span-2 sm:col-span-1`}></div>
                        <div className="h-16 sm:h-20 rounded-lg bg-gray-100 hidden sm:block"></div>
                    </div>
                    {/* List */}
                    <div className="mt-4 space-y-2">
                        <div className="h-5 bg-gray-100 rounded"></div>
                        <div className="h-5 bg-gray-100 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const PlatformRoles: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Learner');

    const activeTabData = tabs.find(tab => tab.name === activeTab);

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">A Unified Platform for Everyone</h2>
                    <p className="mt-4 text-lg text-gray-600">Get the right tools and insights for admins, managers, and learners in your organization.</p>
                </div>

                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="flex justify-center border-b border-gray-200">
                        {tabs.map(tab => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`px-4 sm:px-6 py-3 font-semibold text-lg border-b-2 transition-colors duration-200
                                    ${activeTab === tab.name
                                        ? 'border-indigo-600 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`
                                }
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <h3 className="text-2xl font-bold text-gray-900">{activeTabData?.title}</h3>
                        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">{activeTabData?.description}</p>
                    </div>
                </div>

                <div className="mt-12 max-w-5xl mx-auto">
                    <DashboardGraphic activeTab={activeTab} />
                </div>
            </div>
        </section>
    )
}

export default PlatformRoles;
