import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaChartLine, FaCalculator, FaLightbulb, FaHandshake, FaClock } from 'react-icons/fa';

const WhyChooseUsNew = () => {
    const reasons = [
        {
            icon: FaCheckCircle,
            title: 'AMFI Registered',
            description: 'Certified and registered with AMFI, ensuring compliance and trust in all transactions.'
        },
        {
            icon: FaShieldAlt,
            title: 'Transparent & Secure',
            description: 'Complete transparency in all dealings with robust security measures for your investments.'
        },
        {
            icon: FaUsers,
            title: 'Expert Guidance',
            description: 'Experienced financial advisors providing personalized investment strategies.'
        },
        {
            icon: FaChartLine,
            title: 'Goal-Based Planning',
            description: 'Customized investment plans aligned with your financial goals and risk appetite.'
        },
        {
            icon: FaCalculator,
            title: 'Financial Tools',
            description: 'Access to powerful calculators and tools for informed investment decisions.'
        },
        {
            icon: FaLightbulb,
            title: 'Research-Driven',
            description: 'Data-driven insights and market research to optimize your portfolio performance.'
        },
        {
            icon: FaHandshake,
            title: 'Dedicated Support',
            description: 'Personal relationship manager committed to your financial success.'
        },
        {
            icon: FaClock,
            title: '24/7 Service',
            description: 'Round-the-clock customer support for all your investment queries.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why choose{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Investment Options
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Experience the perfect blend of expertise, technology, and personalized service
                    </p>
                </div>

                {/* Reasons Grid - 2 columns on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <reason.icon className="text-white text-xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {reason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsNew;
