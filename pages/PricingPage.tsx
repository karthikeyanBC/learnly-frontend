import React from 'react';
import Pricing from '../components/Pricing';

const faqs = [
    {
        question: 'Can I change my plan later?',
        answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be prorated based on your billing cycle.'
    },
    {
        question: 'Is there a discount for non-profits or educational institutions?',
        answer: 'Yes, we offer special discounts for registered non-profit organizations and educational institutions. Please contact our sales team to learn more about our special pricing.'
    },
    {
        question: 'What counts as an "active user"?',
        answer: 'An active user is any user who has logged into the Learnly platform at least once during a given monthly billing period. You are only billed for users who are actively using the platform.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing and bank transfers.'
    }
]

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => (
    <div>
        <dt className="text-lg font-semibold text-gray-900">{question}</dt>
        <dd className="mt-2 text-base text-gray-600">{answer}</dd>
    </div>
);


const PricingPage: React.FC = () => {
    return (
        <>
            <Pricing />
            <section className="bg-white py-20 sm:py-28">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
                        </p>
                    </div>
                    <div className="mt-16 max-w-4xl mx-auto">
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PricingPage;
