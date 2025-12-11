import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar, FaCheckCircle, FaArrowRight, FaPiggyBank, FaShieldAlt, FaCalculator } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const Tax = () => {
    const benefits = [
        'Save up to ₹46,800 in taxes annually',
        'ELSS funds with 3-year lock-in period',
        'Dual benefit of tax saving and wealth creation',
        'Better returns than traditional tax-saving options',
        'Equity exposure for long-term growth',
        'Professional fund management'
    ];

    const taxSavingOptions = [
        {
            title: 'ELSS Funds',
            description: 'Equity Linked Savings Scheme under 80C',
            icon: FaPiggyBank,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Tax Optimization',
            description: 'Strategic planning to minimize tax liability',
            icon: FaCalculator,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Section 80C',
            description: 'Deduction up to ₹1.5 lakh per year',
            icon: FaFileInvoiceDollar,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Long-term Benefits',
            description: 'Tax-free returns after 1 year',
            icon: FaShieldAlt,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Tax"
                highlightText="Planning"
                description="Save taxes while building wealth through smart investment strategies"
                imageSrc="/tax_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Why{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Tax Planning?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Tax planning is an essential part of financial planning. By investing in tax-saving instruments like ELSS (Equity Linked Savings Scheme), you can reduce your tax liability under Section 80C while simultaneously building wealth for the future.
                            </p>
                            <p>
                                ELSS funds offer the dual benefit of tax savings and potential for higher returns through equity investments. With the shortest lock-in period of just 3 years among all 80C instruments, ELSS provides liquidity along with tax benefits.
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
                        Tax Saving{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Options
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {taxSavingOptions.map((option, index) => (
                            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                    <option.icon className="text-2xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                                <p className="text-gray-600">{option.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Save taxes smartly this year
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Invest in ELSS and save up to ₹46,800 in taxes
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Start Saving Taxes
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tax;
