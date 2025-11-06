import React from 'react';
import { complianceData } from '../constants';

const ComplianceSection: React.FC = () => {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Enterprise-Grade Security & Compliance
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Built with the security, compliance, and scalability that modern enterprises demand. Your data is safe with us.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {complianceData.map((item) => (
                        <div key={item.name} className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl text-indigo-600">
                                {React.cloneElement(item.icon, { className: 'w-8 h-8' })}
                            </div>
                            <h3 className="mt-4 text-lg font-bold text-gray-900">{item.name}</h3>
                            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
