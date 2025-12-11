import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaChartLine,
    FaCoins,
    FaBullseye,
    FaPercentage,
    FaBalanceScale,
    FaShieldAlt,
    FaArrowRight,
} from 'react-icons/fa';

const ServicesSection = () => {
    const services = [
        {
            icon: FaChartLine,
            title: 'SIP in Mutual Funds',
            description:
                'Build wealth systematically through disciplined monthly investments. Start your SIP journey with as little as ₹500 per month.',
            link: '/services#sip',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: FaCoins,
            title: 'Lumpsum Investments',
            description:
                'Invest surplus funds strategically in carefully selected mutual fund schemes for optimal returns.',
            link: '/services#lumpsum',
            color: 'from-accent-teal to-accent-green',
        },
        {
            icon: FaBullseye,
            title: 'Goal-Based Financial Planning',
            description:
                'Achieve your dreams - child education, retirement, dream home, or financial freedom with customized investment plans.',
            link: '/solutions',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: FaPercentage,
            title: 'Tax-Efficient Investing',
            description:
                'Maximize returns while minimizing tax liability through ELSS and other tax-saving investment options.',
            link: '/services#tax',
            color: 'from-orange-500 to-orange-600',
        },
        {
            icon: FaBalanceScale,
            title: 'Asset Allocation & Portfolio Review',
            description:
                'Regular portfolio rebalancing and asset allocation strategies to maintain optimal risk-return balance.',
            link: '/services#portfolio',
            color: 'from-indigo-500 to-indigo-600',
        },
        {
            icon: FaShieldAlt,
            title: 'Insurance & Risk Management',
            description:
                'Comprehensive protection through life insurance, health insurance, and term plans for your family\'s security.',
            link: '/services#insurance',
            color: 'from-red-500 to-red-600',
        },
    ];

    return (
        <section className="section-container bg-gradient-to-b from-secondary-50 to-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                    Our Services
                </span>
                <h2 className="mt-2 mb-4">
                    Comprehensive Financial Solutions
                </h2>
                <p className="text-gray-600 text-lg">
                    From systematic investment plans to comprehensive wealth management,
                    we offer a complete suite of services to help you achieve your financial goals.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group card hover:scale-105 transition-all duration-300"
                    >
                        {/* Icon with Gradient */}
                        <div className="relative mb-6">
                            <div
                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} 
                flex items-center justify-center shadow-lg group-hover:shadow-xl 
                transition-all duration-300 group-hover:scale-110`}
                            >
                                <service.icon className="h-8 w-8 text-white" />
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-primary-500 mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        {/* Learn More Link */}
                        <Link
                            to={service.link}
                            className="inline-flex items-center text-accent-teal font-semibold 
              hover:text-accent-green transition-colors duration-300 group/link"
                        >
                            Learn more
                            <FaArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <Link to="/services" className="btn-primary inline-block">
                    View All Services
                </Link>
            </div>
        </section>
    );
};

export default ServicesSection;
