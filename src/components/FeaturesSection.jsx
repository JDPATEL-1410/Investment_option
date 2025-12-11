import React from 'react';
import { FaChartLine, FaShieldAlt, FaUsers, FaCalculator, FaHeadset, FaMobileAlt } from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            icon: FaChartLine,
            title: 'Expert Investment Guidance',
            description: 'Get personalized investment strategies tailored to your financial goals and risk appetite.'
        },
        {
            icon: FaShieldAlt,
            title: 'Secure & Transparent',
            description: 'AMFI registered with complete transparency in all transactions and portfolio management.'
        },
        {
            icon: FaUsers,
            title: 'Dedicated Support',
            description: 'Personal relationship manager to guide you through your investment journey.'
        },
        {
            icon: FaCalculator,
            title: 'Financial Calculators',
            description: 'Access powerful tools to plan your SIP, retirement, and other financial goals.'
        },
        {
            icon: FaHeadset,
            title: '24/7 Customer Service',
            description: 'Round-the-clock support to address all your investment queries and concerns.'
        },
        {
            icon: FaMobileAlt,
            title: 'Digital Platform',
            description: 'Manage your investments anytime, anywhere with our user-friendly digital solutions.'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Investment Options
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Experience the perfect blend of expertise, technology, and personalized service
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <feature.icon className="text-white text-2xl" />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative Element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-bl-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
