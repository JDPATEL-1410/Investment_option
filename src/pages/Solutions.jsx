import React from 'react';
import { FaGraduationCap, FaUmbrella, FaHome, FaCoins, FaHeart } from 'react-icons/fa';

const Solutions = () => {
    const goals = [
        {
            icon: FaGraduationCap,
            title: 'Child Education Planning',
            description: 'Secure your child\'s educational future with systematic investment planning.',
            color: 'from-blue-500 to-blue-600',
            features: [
                'Calculate education corpus needed',
                'Inflation-adjusted planning',
                'Flexible SIP options',
                'Regular portfolio monitoring',
            ],
        },
        {
            icon: FaUmbrella,
            title: 'Retirement Planning',
            description: 'Build a comfortable retirement corpus for financial independence.',
            color: 'from-purple-500 to-purple-600',
            features: [
                'Retirement corpus calculation',
                'Tax-efficient strategies',
                'Diversified portfolio',
                'Post-retirement income planning',
            ],
        },
        {
            icon: FaHome,
            title: 'Dream Home Planning',
            description: 'Achieve your dream of owning a home with disciplined savings.',
            color: 'from-accent-teal to-accent-green',
            features: [
                'Down payment planning',
                'Short to medium-term goals',
                'Liquid fund options',
                'Milestone-based tracking',
            ],
        },
        {
            icon: FaCoins,
            title: 'Wealth Creation',
            description: 'Build long-term wealth through strategic equity investments.',
            color: 'from-orange-500 to-orange-600',
            features: [
                'Long-term wealth building',
                'Equity-focused portfolio',
                'Compounding benefits',
                'Regular rebalancing',
            ],
        },
        {
            icon: FaHeart,
            title: 'Financial Freedom',
            description: 'Achieve complete financial independence and live life on your terms.',
            color: 'from-pink-500 to-pink-600',
            features: [
                'Passive income generation',
                'Multiple income streams',
                'Early retirement planning',
                'Lifestyle goal planning',
            ],
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="gradient-bg py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                        Goal-Based Solutions
                    </span>
                    <h1 className="mt-4 mb-6">
                        Your Goals, Our Expertise
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Every financial goal is unique. We create customized investment strategies
                        aligned with your specific life goals and time horizons.
                    </p>
                </div>
            </section>

            {/* Goals Grid */}
            <section className="section-container bg-white">
                <div className="grid md:grid-cols-2 gap-8">
                    {goals.map((goal, index) => (
                        <div
                            key={index}
                            className="card hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4 mb-6">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${goal.color} 
                flex items-center justify-center shadow-lg flex-shrink-0`}>
                                    <goal.icon className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary-500 mb-2">
                                        {goal.title}
                                    </h3>
                                    <p className="text-gray-600">{goal.description}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-semibold text-primary-500">What we offer:</h4>
                                <ul className="space-y-2">
                                    {goal.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-teal mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container bg-gradient-to-br from-primary-500 to-primary-600 text-white">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-white mb-6">Ready to Start Planning?</h2>
                    <p className="text-primary-100 text-lg mb-8">
                        Let's discuss your financial goals and create a customized investment plan.
                    </p>
                    <a href="/contact" className="btn-secondary inline-block bg-white text-primary-500 
          hover:bg-primary-50 border-white">
                        Book Free Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
