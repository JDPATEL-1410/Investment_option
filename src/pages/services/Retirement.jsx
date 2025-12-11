import React from 'react';
import { Link } from 'react-router-dom';
import { FaUmbrella, FaCheckCircle, FaArrowRight, FaHeartbeat, FaCar, FaHome, FaUserShield } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const Retirement = () => {
    const benefits = [
        'Build a substantial retirement corpus',
        'Maintain your lifestyle post-retirement',
        'Beat inflation with equity exposure',
        'Tax-efficient retirement planning',
        'Regular income post-retirement',
        'Healthcare and emergency fund planning'
    ];

    const retirementGoals = [
        {
            title: 'Corpus Building',
            description: 'Accumulate wealth for retirement years',
            icon: FaUmbrella,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Healthcare Planning',
            description: 'Medical expenses and health insurance',
            icon: FaHeartbeat,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Lifestyle Maintenance',
            description: 'Continue your current standard of living',
            icon: FaHome,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Legacy Planning',
            description: 'Wealth transfer to next generation',
            icon: FaUserShield,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Retirement"
                highlightText="Planning"
                description="Plan for a comfortable and financially secure retirement"
                imageSrc="/retirement_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Why{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Retirement Planning?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Retirement planning is crucial to ensure financial independence and maintain your lifestyle after you stop working. With increasing life expectancy and rising costs, it's essential to start planning early.
                            </p>
                            <p>
                                Our retirement planning service helps you calculate the corpus needed, considering inflation, life expectancy, and desired lifestyle. We create a customized investment strategy combining equity and debt to build a substantial retirement fund while managing risk.
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

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Retirement{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Goals
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {retirementGoals.map((goal, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <goal.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                                <p className="text-gray-600">{goal.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Start planning for retirement today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            The earlier you start, the more comfortable your retirement will be
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Plan Your Retirement
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Retirement;
