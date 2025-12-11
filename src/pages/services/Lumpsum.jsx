import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaCheckCircle, FaArrowRight, FaClock, FaChartBar, FaBullseye } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const Lumpsum = () => {
    const benefits = [
        'Potential for higher returns with one-time investment',
        'Ideal for surplus funds or windfall gains',
        'No commitment to regular monthly investments',
        'Suitable for market timing strategies',
        'Lower transaction costs compared to multiple SIPs',
        'Immediate exposure to market opportunities'
    ];

    const whenToInvest = [
        {
            title: 'Market Correction',
            description: 'Invest during market dips for better entry points',
            icon: FaChartBar,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Windfall Gains',
            description: 'Bonus, inheritance, or sale proceeds',
            icon: FaMoneyBillWave,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Short-term Goals',
            description: 'Goals within 3-5 years timeframe',
            icon: FaClock,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Specific Targets',
            description: 'Defined financial objectives',
            icon: FaBullseye,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Lumpsum"
                highlightText="Investments"
                description="Make one-time investments to maximize returns on your surplus funds"
                imageSrc="/lumpsum_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            What is{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Lumpsum Investment?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Lumpsum investment is a one-time investment where you invest a large amount of money in a mutual fund scheme at once, rather than spreading it over time through SIPs. This approach is ideal when you have surplus funds available and want to deploy them immediately.
                            </p>
                            <p>
                                While lumpsum investments can potentially generate higher returns if timed correctly, they also carry higher risk compared to SIPs. The key is to invest when markets are favorable and align with your financial goals and risk appetite.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Key{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Advantages
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

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        When to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Invest Lumpsum
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whenToInvest.map((scenario, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${scenario.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <scenario.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{scenario.title}</h3>
                                <p className="text-gray-600">{scenario.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to invest your surplus funds?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get expert guidance on lumpsum investment strategies
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Consult Our Experts
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lumpsum;
