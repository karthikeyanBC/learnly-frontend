
import React from 'react';
import { DetailPageItem } from '../constants';
import AccordionFeatures from '../components/AccordionFeatures';
import PlaceholderImage from '../components/PlaceholderImage';

interface DetailPageProps {
    item?: DetailPageItem;
}

const DetailPage: React.FC<DetailPageProps> = ({ item }) => {
    if (!item) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Content not found</h2>
                <a href="/" className="mt-4 text-indigo-600 hover:underline">
                    Back to Home
                </a>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <section className="py-20 sm:py-28 bg-gray-50">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto">
                      <div className="text-center max-w-4xl mx-auto">
                          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-indigo-100 text-indigo-600">
                             {React.cloneElement(item.icon, { className: 'h-8 w-8' })}
                          </div>
                          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">{item.title}</h1>
                          <p className="mt-4 text-lg text-gray-600">{item.description}</p>
                      </div>
                  </div>
              </div>
            </section>

            <PlaceholderImage />

            <section className="py-20 sm:py-28">
              <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mt-16">
                      <AccordionFeatures features={item.accordionFeatures} />
                  </div>
              </div>
            </section>
        </div>
    );
};

export default DetailPage;
