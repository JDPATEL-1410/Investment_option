import React from 'react';
import { FaChartLine, FaHeadset, FaMobileAlt, FaRupeeSign } from 'react-icons/fa';

const PartnerBenefits = () => {
    const benefits = [
        {
            icon: FaChartLine,
            title: 'Scale',
            description: 'Grow your investment portfolio with our comprehensive mutual fund solutions and expert guidance.'
        },
        {
            icon: FaHeadset,
            title: 'Support',
            description: 'Dedicated relationship manager and 24/7 customer support for all your investment needs.'
        },
        {
            icon: FaMobileAlt,
            title: 'Technology',
            description: 'Advanced digital platform for seamless investment tracking and portfolio management.'
        },
        {
            icon: FaRupeeSign,
            title: 'Monetization',
            description: 'Maximize returns with strategic investment planning and goal-based wealth creation.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-primary-50 hover:to-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white transform group-hover:scale-110 transition-transform duration-300">
                                <benefit.icon className="text-2xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerBenefits;
