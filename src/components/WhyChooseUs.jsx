import React from 'react';
import {
    FaCertificate,
    FaSearch,
    FaSyncAlt,
    FaHandshake,
    FaLaptop,
    FaUserCheck,
} from 'react-icons/fa';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: FaCertificate,
            title: 'Certified & AMFI Registered',
            description:
                'Fully certified and registered with AMFI, ensuring compliance and professional standards in all our services.',
        },
        {
            icon: FaSearch,
            title: 'Research-Driven Fund Selection',
            description:
                'In-depth analysis and research-backed recommendations to select the best mutual funds for your portfolio.',
        },
        {
            icon: FaSyncAlt,
            title: 'Regular Portfolio Review',
            description:
                'Continuous monitoring and periodic rebalancing to keep your investments aligned with your goals.',
        },
        {
            icon: FaHandshake,
            title: 'Transparent, Long-Term Guidance',
            description:
                'No product pushing, just honest advice focused on building lasting relationships and achieving your goals.',
        },
        {
            icon: FaLaptop,
            title: 'Technology-Enabled Tracking',
            description:
                'Modern tools and platforms for real-time portfolio tracking, reporting, and seamless investment management.',
        },
        {
            icon: FaUserCheck,
            title: 'Client-Centric Approach',
            description:
                'Your financial well-being is our priority. We customize solutions based on your unique needs and risk profile.',
        },
    ];

    const processSteps = [
        {
            number: '01',
            title: 'Discovery Call',
            description: 'Understand your goals, risk appetite, and financial situation',
        },
        {
            number: '02',
            title: 'Financial Plan',
            description: 'Create customized investment recommendations aligned with your goals',
        },
        {
            number: '03',
            title: 'Implementation',
            description: 'Execute the plan with proper documentation and fund selection',
        },
        {
            number: '04',
            title: 'Ongoing Review',
            description: 'Regular monitoring and course correction to stay on track',
        },
    ];

    return (
        <section className="section-container bg-white">
            {/* Why Choose Us */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                    Why Choose Us
                </span>
                <h2 className="mt-2 mb-4">
                    Your Success is Our Mission
                </h2>
                <p className="text-gray-600 text-lg">
                    We combine expertise, transparency, and technology to deliver exceptional
                    wealth management services tailored to your needs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start space-y-4 p-6 rounded-xl 
            bg-gradient-to-br from-white to-secondary-50 border border-secondary-200 
            hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 
            flex items-center justify-center shadow-md">
                            <reason.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-primary-500">{reason.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                ))}
            </div>

            {/* Process Timeline */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Our Process</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A systematic, transparent approach to help you achieve your financial goals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Connector Line */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 
                bg-gradient-to-r from-primary-300 to-primary-200 -translate-x-1/2 z-0"></div>
                            )}

                            {/* Step Card */}
                            <div className="relative bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg 
              transition-all duration-300 z-10">
                                <div className="text-5xl font-bold text-primary-100 mb-4">
                                    {step.number}
                                </div>
                                <h4 className="text-lg font-bold text-primary-500 mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Arrow Flow for Mobile */}
                <div className="lg:hidden flex justify-center items-center space-x-4 mt-8">
                    <div className="flex-1 h-0.5 bg-primary-300"></div>
                    <span className="text-primary-500 font-semibold">Understand → Plan → Invest → Review → Achieve</span>
                    <div className="flex-1 h-0.5 bg-primary-300"></div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
