import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaShieldAlt, FaPercentage, FaGlobe } from 'react-icons/fa';

const InvestmentCategories = () => {
    const categories = [
        {
            icon: FaChartLine,
            title: 'Equity Funds',
            description: 'High growth potential through equity market exposure',
            risk: 'High',
            riskColor: 'text-red-600 bg-red-50',
            horizon: '5+ years',
            features: ['Capital appreciation', 'Wealth creation', 'Long-term growth'],
        },
        {
            icon: FaShieldAlt,
            title: 'Debt & Hybrid Funds',
            description: 'Balanced approach with stable returns and lower volatility',
            risk: 'Moderate',
            riskColor: 'text-orange-600 bg-orange-50',
            horizon: '3-5 years',
            features: ['Regular income', 'Capital preservation', 'Balanced portfolio'],
        },
        {
            icon: FaPercentage,
            title: 'ELSS / Tax Saving Funds',
            description: 'Save tax under Section 80C while building wealth',
            risk: 'Moderate to High',
            riskColor: 'text-yellow-600 bg-yellow-50',
            horizon: '3+ years',
            features: ['Tax deduction up to ₹1.5L', 'Wealth creation', '3-year lock-in'],
        },
        {
            icon: FaGlobe,
            title: 'International & Thematic Funds',
            description: 'Diversify globally and invest in emerging themes',
            risk: 'High',
            riskColor: 'text-purple-600 bg-purple-50',
            horizon: '5+ years',
            features: ['Global diversification', 'Sector-specific', 'Future trends'],
        },
    ];

    return (
        <section className="section-container bg-gradient-to-b from-white to-secondary-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                    Investment Categories
                </span>
                <h2 className="mt-2 mb-4">
                    Diverse Investment Options for Every Goal
                </h2>
                <p className="text-gray-600 text-lg">
                    Choose from a wide range of mutual fund categories tailored to your
                    risk appetite and investment horizon.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="card group hover:scale-[1.02] transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 
                flex items-center justify-center shadow-md group-hover:shadow-lg 
                transition-all duration-300 group-hover:scale-110">
                                    <category.icon className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary-500">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Recommended: {category.horizon}
                                    </p>
                                </div>
                            </div>

                            {/* Risk Badge */}
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.riskColor}`}>
                                {category.risk} Risk
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {category.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                            {category.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-teal"></div>
                                    <span className="text-sm text-gray-600">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            to="/services"
                            className="text-accent-teal font-semibold hover:text-accent-green 
              transition-colors duration-300 inline-flex items-center group/link"
                        >
                            Explore funds
                            <svg
                                className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InvestmentCategories;
