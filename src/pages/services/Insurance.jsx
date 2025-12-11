import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCheckCircle, FaArrowRight, FaHeartbeat, FaHome, FaCar, FaUmbrella } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const Insurance = () => {
    const benefits = [
        'Financial protection for your family',
        'Coverage for medical emergencies',
        'Asset protection (home, vehicle)',
        'Tax benefits under Section 80C and 80D',
        'Peace of mind and security',
        'Customized coverage as per needs'
    ];

    const insuranceTypes = [
        {
            title: 'Life Insurance',
            description: 'Financial security for your loved ones',
            icon: FaShieldAlt,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Health Insurance',
            description: 'Medical expenses and hospitalization coverage',
            icon: FaHeartbeat,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Home Insurance',
            description: 'Protection for your property and belongings',
            icon: FaHome,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Vehicle Insurance',
            description: 'Coverage for your car and two-wheeler',
            icon: FaCar,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Insurance"
                highlightText="Solutions"
                description="Comprehensive insurance coverage to protect what matters most"
                imageSrc="/insurance_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Why{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Insurance?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Insurance is a crucial component of financial planning that provides protection against unforeseen events. It ensures that you and your family are financially secure in case of emergencies, accidents, or health issues.
                            </p>
                            <p>
                                We help you choose the right insurance products based on your needs, budget, and life stage. From life and health insurance to property and vehicle insurance, we provide comprehensive coverage solutions with the best insurance providers.
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
                        Types of{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Insurance
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {insuranceTypes.map((type, index) => (
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

            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Protect your family today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get the right insurance coverage for complete peace of mind
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Get Insurance Quote
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
