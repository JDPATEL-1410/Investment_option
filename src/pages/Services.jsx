import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaRupeeSign, FaCalculator, FaUserTie, FaShieldAlt, FaPiggyBank, FaGraduationCap, FaHome, FaArrowRight } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const Services = () => {
    const services = [
        {
            icon: FaChartLine,
            title: 'Mutual Fund Investments',
            description: 'Expert guidance on selecting the right mutual funds based on your financial goals, risk appetite, and investment horizon.',
            features: ['Equity Funds', 'Debt Funds', 'Hybrid Funds', 'Index Funds'],
            color: 'from-blue-500 to-blue-600',
            link: '/services/mutual-funds'
        },
        {
            icon: FaRupeeSign,
            title: 'SIP Planning',
            description: 'Systematic Investment Plans to build wealth gradually with disciplined monthly investments starting from as low as ₹500.',
            features: ['Goal-based SIPs', 'Step-up SIPs', 'Flexible SIPs', 'Tax-saving SIPs'],
            color: 'from-purple-500 to-purple-600',
            link: '/services/sip'
        },
        {
            icon: FaPiggyBank,
            title: 'Lumpsum Investments',
            description: 'Strategic one-time investment solutions for surplus funds to maximize returns based on market conditions.',
            features: ['Market Analysis', 'Timing Strategy', 'Portfolio Diversification', 'Risk Management'],
            color: 'from-teal-500 to-teal-600',
            link: '/services/lumpsum'
        },
        {
            icon: FaUserTie,
            title: 'Wealth Management',
            description: 'Comprehensive wealth management services including portfolio review, rebalancing, and ongoing advisory.',
            features: ['Portfolio Review', 'Asset Allocation', 'Rebalancing', 'Performance Tracking'],
            color: 'from-orange-500 to-orange-600',
            link: '/services/wealth-management'
        },
        {
            icon: FaGraduationCap,
            title: 'Child Education Planning',
            description: 'Secure your child\'s educational future with dedicated investment plans tailored for education expenses.',
            features: ['Education Corpus', 'Goal Calculation', 'Inflation Adjusted', 'Tax Benefits'],
            color: 'from-pink-500 to-pink-600',
            link: '/services/education'
        },
        {
            icon: FaHome,
            title: 'Retirement Planning',
            description: 'Build a comfortable retirement corpus through strategic long-term investment planning and wealth creation.',
            features: ['Retirement Corpus', 'Pension Plans', 'Post-retirement Income', 'Healthcare Planning'],
            color: 'from-indigo-500 to-indigo-600',
            link: '/services/retirement'
        },
        {
            icon: FaShieldAlt,
            title: 'Tax Planning',
            description: 'Optimize your tax liability with ELSS and other tax-saving investment options under Section 80C.',
            features: ['ELSS Funds', 'Tax Optimization', '80C Benefits', 'Tax-free Returns'],
            color: 'from-green-500 to-green-600',
            link: '/services/tax'
        },
        {
            icon: FaCalculator,
            title: 'Financial Planning',
            description: 'Holistic financial planning covering all aspects of your financial life from goals to insurance.',
            features: ['Goal Setting', 'Cash Flow Analysis', 'Insurance Review', 'Estate Planning'],
            color: 'from-red-500 to-red-600',
            link: '/services/financial-planning'
        }
    ];

    const process = [
        {
            number: '01',
            title: 'Consultation',
            description: 'Free initial consultation to understand your financial goals and current situation.'
        },
        {
            number: '02',
            title: 'Analysis',
            description: 'Detailed analysis of your financial profile, risk appetite, and investment horizon.'
        },
        {
            number: '03',
            title: 'Planning',
            description: 'Customized investment strategy aligned with your goals and risk profile.'
        },
        {
            number: '04',
            title: 'Execution',
            description: 'Seamless implementation of your investment plan with complete documentation.'
        },
        {
            number: '05',
            title: 'Monitoring',
            description: 'Regular portfolio review and rebalancing to keep you on track towards your goals.'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <PageHero
                title="Our"
                highlightText="Services"
                description="Comprehensive financial solutions tailored to your unique needs"
                imageSrc="/services_hero.png"
            />

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What we{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                offer
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Expert financial services to help you achieve your goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <service.icon className="text-2xl" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Learn More Button */}
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all group-hover:text-blue-700"
                                >
                                    Learn More
                                    <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Process
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            A systematic approach to achieving your financial goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {process.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Connector Line (except for last item) */}
                                {index < process.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 z-0"></div>
                                )}

                                <div className="relative z-10 text-center">
                                    {/* Number Circle */}
                                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to start your investment journey?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Schedule a free consultation with our expert financial advisors today
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Book Free Consultation
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
