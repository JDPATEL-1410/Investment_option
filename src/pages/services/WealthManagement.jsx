import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserTie, FaCheckCircle, FaArrowRight, FaChartPie, FaBalanceScale, FaSync } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const WealthManagement = () => {
    const services = [
        'Comprehensive financial planning and analysis',
        'Portfolio construction and diversification',
        'Regular portfolio review and rebalancing',
        'Risk assessment and management',
        'Tax-efficient investment strategies',
        'Retirement and estate planning'
    ];

    const features = [
        {
            title: 'Portfolio Review',
            description: 'Regular analysis of your investment portfolio performance',
            icon: FaChartPie,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Asset Allocation',
            description: 'Strategic distribution across asset classes',
            icon: FaBalanceScale,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Rebalancing',
            description: 'Periodic adjustments to maintain target allocation',
            icon: FaSync,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Advisory',
            description: 'Personalized guidance from expert advisors',
            icon: FaUserTie,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Wealth"
                highlightText="Management"
                description="Comprehensive wealth management solutions to grow and protect your assets"
                imageSrc="/wealth_management_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            What is{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Wealth Management?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Wealth Management is a comprehensive service that combines financial and investment advice, accounting and tax services, retirement planning, and legal or estate planning for one fee. It's designed to sustain and grow long-term wealth.
                            </p>
                            <p>
                                Our wealth management services provide you with a dedicated advisor who understands your financial situation, goals, and risk tolerance. We create a customized strategy that evolves with your changing needs and market conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Services
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Key{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Features
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <feature.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Let us manage your wealth
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get personalized wealth management services tailored to your needs
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Schedule Consultation
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WealthManagement;
