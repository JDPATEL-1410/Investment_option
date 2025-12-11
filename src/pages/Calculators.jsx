import React from 'react';
import CalculatorsPreview from '../components/CalculatorsPreview';
import PageHero from '../components/PageHero';

const Calculators = () => {
    return (
        <div className="pt-20">
            {/* Hero Section with Image */}
            <PageHero
                title="Financial"
                highlightText="Calculators"
                description="Use our free financial calculators to estimate returns, plan goals, and make informed investment decisions"
                imageSrc="/calculators_header.png"
                showImage={true}
            />

            <CalculatorsPreview />

            {/* Note */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-xl">!</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Important Note</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    These calculators provide estimates based on assumed rates of return. Actual returns may vary based on market conditions. For personalized financial planning, please consult with our advisors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calculators;
