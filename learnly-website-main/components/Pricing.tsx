import React, { useState } from 'react';
import { pricingPlans } from '../constants';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 mr-2.5 flex-shrink-0 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
);

const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

    const plans = pricingPlans[billingCycle];

    return (
        <section id="pricing" className="py-20 sm:py-28 bg-gray-50/50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Simple, Transparent Pricing</h2>
                    <p className="mt-4 text-lg text-gray-600">Choose the plan that's right for your team. No hidden fees, ever.</p>
                </div>

                <div className="mt-12 flex justify-center items-center space-x-4">
                    <span className={`font-semibold ${billingCycle === 'monthly' ? 'text-indigo-600' : 'text-gray-500'}`}>Monthly</span>
                    <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="billing-toggle" className="sr-only peer" onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')} />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                    <span className={`font-semibold ${billingCycle === 'annually' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        Annually <span className="text-sm font-medium text-green-600">(Save 20%)</span>
                    </span>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {plans.map(plan => (
                        <div key={plan.name} className={`rounded-2xl p-8 flex flex-col h-full border transition-all duration-300 ${plan.highlight ? 'bg-white shadow-2xl scale-105 border-indigo-500' : 'bg-white border-gray-200/80 shadow-lg'}`}>
                             {plan.highlight && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider text-white bg-indigo-600">MOST POPULAR</span>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                            <p className="mt-4 text-gray-600 flex-grow">{plan.description}</p>
                            <div className="mt-8">
                                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="text-lg font-medium text-gray-500">{plan.priceUnit}</span>
                            </div>
                            <ul className="mt-8 space-y-4">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className={`w-full mt-10 text-center font-semibold py-3.5 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-300' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
