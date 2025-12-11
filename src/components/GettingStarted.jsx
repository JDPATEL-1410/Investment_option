import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const GettingStarted = () => {
    const steps = [
        {
            number: '01',
            title: 'Schedule a Consultation',
            description: 'Book a free consultation with our expert financial advisors to discuss your goals.'
        },
        {
            number: '02',
            title: 'Get Personalized Plan',
            description: 'Receive a customized investment strategy tailored to your financial objectives.'
        },
        {
            number: '03',
            title: 'Start Investing',
            description: 'Begin your wealth creation journey with our seamless investment platform.'
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Getting started{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            is easy
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Begin your investment journey in just three simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Connector Line (except for last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 z-0"></div>
                            )}

                            <div className="relative z-10 text-center">
                                {/* Number Circle */}
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white text-3xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                        Get Started Today
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GettingStarted;
