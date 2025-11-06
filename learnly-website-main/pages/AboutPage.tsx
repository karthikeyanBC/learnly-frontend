
import React from 'react';
import { Logo, RocketLaunchIcon, ShieldCheckIcon, SparklesIcon, UsersIcon } from '../constants';

const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    { name: 'Jane Smith', role: 'Chief Product Officer', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
    { name: 'Samuel Green', role: 'Head of Engineering', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
    { name: 'Emily White', role: 'VP of Customer Success', imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
]

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gray-50 py-24 sm:py-32">
                <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">Our Mission</h1>
                    <p className="mt-6 text-lg sm:text-xl text-gray-600">
                        To empower organizations to build high-performing teams by making learning more accessible, engaging, and impactful than ever before.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Born from a Legacy of Innovation</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Learnly is the next evolution from the team behind <a href="https://www.braincert.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">BrainCert</a>, a recognized leader in the online learning space for over a decade.
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                While BrainCert empowers individual creators and coaches, we saw a distinct and growing need for a platform laser-focused on solving the real-world challenges faced by businesses. Companies needed a tool built specifically for employee, customer, and partner training—one that was powerful, scalable, and easy to use.
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                We created Learnly to be that solution. By taking the best of BrainCert's technology and reimagining it for the corporate world, we've built an AI-powered LMS designed to drive business growth.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="p-8 bg-indigo-600 rounded-3xl transform rotate-3">
                                <div className="p-8 bg-white rounded-2xl shadow-2xl transform -rotate-3">
                                    <Logo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Our Core Values</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200/50">
                            <SparklesIcon className="h-10 w-10 text-indigo-600 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">Innovate Fearlessly</h3>
                         </div>
                         <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200/50">
                            <UsersIcon className="h-10 w-10 text-indigo-600 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">Customer-Obsessed</h3>
                         </div>
                         <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200/50">
                            <RocketLaunchIcon className="h-10 w-10 text-indigo-600 mx-auto" />
                            <h3 className="mt-4 text-xl font-bold">Bias for Action</h3>
                         </div>
                         <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200/50">
                             <ShieldCheckIcon className="h-10 w-10 text-indigo-600 mx-auto" />
                             <h3 className="mt-4 text-xl font-bold">Own It</h3>
                         </div>
                    </div>
                </div>
            </section>

             {/* Team Section */}
            <section className="py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Meet the Leadership</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We're a passionate team of educators, engineers, and designers dedicated to building the future of learning.
                    </p>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.name}>
                                <img className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg" src={member.imageUrl} alt={member.name} />
                                <h3 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h3>
                                <p className="text-indigo-600 font-semibold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
