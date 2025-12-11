import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaCheckCircle, FaArrowRight, FaShieldAlt, FaCalculator, FaUserTie } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const MutualFunds = () => {
    const benefits = [
        'Professional fund management by expert portfolio managers',
        'Diversification across multiple securities and sectors',
        'Liquidity - Easy to buy and sell units',
        'Regulated by SEBI for investor protection',
        'Suitable for all types of investors',
        'Tax benefits on ELSS funds under Section 80C'
    ];

    const types = [
        {
            title: 'Equity Funds',
            description: 'Invest primarily in stocks for long-term wealth creation',
            icon: FaChartLine,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Debt Funds',
            description: 'Invest in fixed-income securities for stable returns',
            icon: FaShieldAlt,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Hybrid Funds',
            description: 'Balanced mix of equity and debt for moderate risk',
            icon: FaCalculator,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Index Funds',
            description: 'Track market indices with low expense ratios',
            icon: FaUserTie,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <PageHero
                title="Mutual Fund"
                highlightText="Investments"
                description="Build wealth systematically with professionally managed mutual fund portfolios tailored to your financial goals"
                imageSrc="/mutual_funds_header.png"
                showImage={true}
            />

            {/* What are Mutual Funds */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            What are{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Mutual Funds?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Mutual Funds are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who make investment decisions on behalf of investors.
                            </p>
                            <p>
                                When you invest in a mutual fund, you buy units of the fund, and the value of these units (NAV - Net Asset Value) changes based on the performance of the underlying securities. Mutual funds offer an excellent way for individual investors to access professionally managed, diversified portfolios.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Key{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Benefits
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Mutual Funds */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Types of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Mutual Funds
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {types.map((type, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <type.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                                <p className="text-gray-600">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to start investing in mutual funds?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get expert guidance on selecting the right mutual funds for your financial goals
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Schedule Free Consultation
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default MutualFunds;
