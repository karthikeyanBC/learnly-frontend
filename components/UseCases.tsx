
import React from 'react';
import FeatureCard from './FeatureCard';
import { menuSolutions, SolutionDetail } from '../constants';

interface UseCasesProps {
}

const UseCases: React.FC<UseCasesProps> = () => {
    const solutions: SolutionDetail[] = React.useMemo(() => Object.values(menuSolutions).flat(), []);

    return (
        <section className="py-20 sm:py-28 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">One Platform, Every Audience</h2>
                    <p className="mt-4 text-lg text-gray-600">Deliver tailored learning experiences that drive success, whether you're training employees, customers, or partners.</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((solution, index) => (
                       <a key={index} href={`/solutions/${solution.slug}`} className="block">
                         <FeatureCard 
                            icon={solution.icon}
                            title={solution.title}
                            description={solution.description}
                        />
                       </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
