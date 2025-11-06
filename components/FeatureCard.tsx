import React from 'react';

interface FeatureCardProps {
  // FIX: Explicitly type the icon prop to accept a className.
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  items?: string[];
  variant?: 'default' | 'challenge';
  highlight?: boolean;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'text-indigo-500' }) => (
    <svg className={`w-5 h-5 mr-2.5 flex-shrink-0 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, items, variant = 'default' }) => {
    const cardStyles = {
        default: 'bg-white border-gray-200/80 hover:border-indigo-300',
        challenge: 'bg-orange-50/50 border-orange-200/80 hover:border-orange-300'
    };

    const checkIconColor = {
      default: 'text-indigo-500',
      challenge: 'text-orange-500'
    }

    return (
        <div className={`p-8 rounded-2xl flex flex-col h-full border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${cardStyles[variant]}`}>
            <div className="mb-5">
                {React.cloneElement(icon, { className: 'w-12 h-12' })}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 flex-grow text-base leading-relaxed">{description}</p>
            {items && (
                <ul className="mt-6 space-y-3 text-left">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className={checkIconColor[variant]} />
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FeatureCard;