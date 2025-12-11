import React from 'react';
import { Link } from 'react-router-dom';
import { FaClipboardList, FaCheckCircle, FaArrowRight, FaBullseye, FaChartPie, FaShieldAlt, FaCalculator } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const FinancialPlanning = () => {
    const services = [
        'Comprehensive financial goal setting',
        'Cash flow analysis and budgeting',
        'Investment portfolio planning',
        'Risk assessment and insurance review',
        'Retirement and estate planning',
        'Tax optimization strategies'
    ];

    const planningAreas = [
        {
            title: 'Goal Setting',
            description: 'Define and prioritize your financial objectives',
            icon: FaBullseye,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Asset Allocation',
            description: 'Optimal distribution across asset classes',
            icon: FaChartPie,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Risk Management',
            description: 'Insurance and emergency fund planning',
            icon: FaShieldAlt,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Financial Analysis',
            description: 'Income, expenses, and net worth tracking',
            icon: FaCalculator,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Financial"
                highlightText="Planning"
                description="Holistic financial planning to achieve all your life goals"
                imageSrc="/financial_planning_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            What is{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Financial Planning?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Financial Planning is a comprehensive approach to managing your finances to achieve your life goals. It involves analyzing your current financial situation, setting realistic goals, and creating a roadmap to achieve them.
                            </p>
                            <p>
                                Our financial planning service covers all aspects of your financial life - from budgeting and saving to investing, insurance, tax planning, and retirement. We create a personalized plan that evolves with your changing needs and life stages.
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
                        Planning{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Areas
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {planningAreas.map((area, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <area.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                                <p className="text-gray-600">{area.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Get your personalized financial plan
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Start your journey towards financial freedom with expert guidance
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Get Started
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialPlanning;
