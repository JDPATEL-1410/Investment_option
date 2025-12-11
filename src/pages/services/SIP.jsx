import React from 'react';
import { Link } from 'react-router-dom';
import { FaRupeeSign, FaCheckCircle, FaArrowRight, FaCalendar, FaChartLine, FaCalculator } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const SIP = () => {
    const benefits = [
        'Start investing with as low as ₹500 per month',
        'Rupee cost averaging reduces market timing risk',
        'Power of compounding for long-term wealth creation',
        'Disciplined and automated investment approach',
        'Flexibility to increase, decrease, or pause SIPs',
        'Tax benefits with ELSS SIP under Section 80C'
    ];

    const sipTypes = [
        {
            title: 'Regular SIP',
            description: 'Fixed amount invested at regular intervals',
            icon: FaCalendar,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Step-up SIP',
            description: 'Increase SIP amount periodically as income grows',
            icon: FaChartLine,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Flexible SIP',
            description: 'Adjust investment amount based on market conditions',
            icon: FaCalculator,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Perpetual SIP',
            description: 'SIP without end date for long-term goals',
            icon: FaRupeeSign,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <PageHero
                title="SIP"
                highlightText="Planning"
                description="Systematic Investment Plan - Build wealth gradually with disciplined monthly investments"
                imageSrc="/sip_header.png"
                showImage={true}
            />

            {/* What is SIP */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            What is{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                SIP?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                A Systematic Investment Plan (SIP) is a smart and hassle-free mode for investing money in mutual funds. SIP allows you to invest a certain pre-determined amount at regular intervals (weekly, monthly, quarterly, etc.) in your chosen mutual fund scheme.
                            </p>
                            <p>
                                SIP is a planned approach towards investments and helps you inculcate the habit of saving and building wealth for the future. It works on the principle of regular investments, similar to a recurring deposit. The power of compounding and rupee cost averaging makes SIP one of the most effective ways to create long-term wealth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Why Choose{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            SIP?
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

            {/* Types of SIP */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Types of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            SIP
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {sipTypes.map((type, index) => (
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
                            Start your SIP journey today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Begin investing with as low as ₹500 per month and build wealth systematically
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Start SIP Now
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SIP;
