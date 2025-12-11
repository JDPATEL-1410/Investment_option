import React from 'react';
import { FaTrophy, FaUsers, FaChartLine, FaCalendar } from 'react-icons/fa';

const StatsSection = () => {
    const stats = [
        {
            icon: FaChartLine,
            value: '₹500Cr+',
            label: 'Assets Under Management',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaUsers,
            value: '5000+',
            label: 'Happy Clients',
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: FaCalendar,
            value: '15+',
            label: 'Years of Excellence',
            color: 'from-teal-500 to-teal-600'
        },
        {
            icon: FaTrophy,
            value: '2024',
            label: 'Inception Year',
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Investment Options{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            in numbers
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our track record speaks for itself
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div className={`bg-gradient-to-r ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                                <stat.icon className="text-white text-2xl" />
                            </div>

                            {/* Value */}
                            <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>

                            {/* Decorative Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
