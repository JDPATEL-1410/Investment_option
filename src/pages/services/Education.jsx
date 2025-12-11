import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaCheckCircle, FaArrowRight, FaBook, FaUniversity, FaGlobe } from 'react-icons/fa';
import PageHero from '../../components/PageHero';

const Education = () => {
    const benefits = [
        'Start early to benefit from power of compounding',
        'Inflation-adjusted corpus calculation',
        'Flexible investment options - SIP or Lumpsum',
        'Tax benefits under Section 80C',
        'Goal-based investment strategy',
        'Regular monitoring and rebalancing'
    ];

    const educationGoals = [
        {
            title: 'School Education',
            description: 'Plan for quality schooling expenses',
            icon: FaBook,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Higher Education',
            description: 'College and university fees planning',
            icon: FaUniversity,
            color: 'from-green-500 to-green-600'
        },
        {
            title: 'Study Abroad',
            description: 'International education funding',
            icon: FaGlobe,
            color: 'from-purple-500 to-purple-600'
        },
        {
            title: 'Professional Courses',
            description: 'Specialized training and certifications',
            icon: FaGraduationCap,
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            <PageHero
                title="Child Education"
                highlightText="Planning"
                description="Secure your child's educational future with systematic investment planning"
                imageSrc="/education_header.png"
                showImage={true}
            />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Why Plan for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Child's Education?
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Education costs are rising faster than general inflation. Quality education, especially higher education and study abroad programs, require substantial financial resources. Planning early ensures you have adequate funds when needed.
                            </p>
                            <p>
                                Our child education planning service helps you calculate the required corpus, considering inflation and your child's age, and creates a customized investment strategy to achieve your goal. Start early to leverage the power of compounding and reduce the monthly investment burden.
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
                        Education{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                            Goals
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {educationGoals.map((goal, index) => (
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
                            Secure your child's future today
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Start planning for your child's education with our expert guidance
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                        >
                            Plan Now
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
