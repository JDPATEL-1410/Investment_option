import React from 'react';
import { FaAward, FaUsers, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

const AboutSection = () => {
    const stats = [
        { icon: FaAward, value: '15+', label: 'Years of Experience' },
        { icon: FaUsers, value: '5000+', label: 'Families Served' },
        { icon: FaChartLine, value: '₹500+ Cr', label: 'AUM Managed' },
        { icon: FaMapMarkerAlt, value: 'Pan India', label: 'Service Coverage' },
    ];

    return (
        <section className="section-container bg-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
                        <img
                            src="/advisor-consultation.png"
                            alt="Financial Advisory Consultation"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-primary-500">AMFI</p>
                            <p className="text-sm text-gray-600">Registered</p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div>
                        <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                            About Investment Options
                        </span>
                        <h2 className="mt-2">
                            Your Trusted Partner in Wealth Creation
                        </h2>
                    </div>

                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            At Investment Options, we believe that every financial journey is unique.
                            With over 15 years of experience in the mutual fund industry, we have helped
                            thousands of families achieve their financial dreams through disciplined,
                            goal-based investing.
                        </p>

                        <p>
                            Our mission is simple: to empower you with transparent, research-driven
                            investment solutions that align with your life goals. Whether you're planning
                            for your child's education, building a retirement corpus, or creating wealth
                            for financial freedom, we're here to guide you every step of the way.
                        </p>

                        <p>
                            As an AMFI-registered mutual fund distributor, we prioritize long-term
                            relationships over short-term gains. Our client-centric approach ensures
                            that your portfolio is regularly reviewed, rebalanced, and optimized to
                            navigate changing market conditions.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-soft transition-all duration-300"
                            >
                                <stat.icon className="h-8 w-8 text-accent-teal mb-3" />
                                <p className="text-2xl font-bold text-primary-500">{stat.value}</p>
                                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
