import React from 'react';
import { FaCheckCircle, FaLightbulb, FaHandshake, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const About = () => {
    const values = [
        {
            icon: FaCheckCircle,
            title: 'Integrity',
            description: 'We maintain the highest standards of honesty and transparency in all our dealings.'
        },
        {
            icon: FaLightbulb,
            title: 'Innovation',
            description: 'Constantly evolving our services to meet the changing needs of our clients.'
        },
        {
            icon: FaHandshake,
            title: 'Trust',
            description: 'Building long-term relationships based on reliability and consistent performance.'
        },
        {
            icon: FaShieldAlt,
            title: 'Security',
            description: 'Ensuring the safety and confidentiality of your financial information.'
        },
        {
            icon: FaUsers,
            title: 'Client-Centric',
            description: 'Your financial goals and satisfaction are at the heart of everything we do.'
        },
        {
            icon: FaChartLine,
            title: 'Excellence',
            description: 'Committed to delivering superior results and exceptional service quality.'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <PageHero
                title="About"
                highlightText="Investment Options"
                description="Your trusted partner in wealth creation and financial planning"
                imageSrc="/about_hero.png"
            />

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Story
                            </span>
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Investment Options has been helping individuals and families achieve their financial goals through strategic investment planning and wealth management.
                            </p>
                            <p>
                                As an AMFI registered mutual fund distributor, we provide expert guidance on mutual funds, SIPs, lumpsum investments, and comprehensive financial planning services. Our mission is to make wealth creation accessible and understandable for everyone.
                            </p>
                            <p>
                                We believe in building long-term relationships with our clients, understanding their unique financial situations, and providing personalized solutions that align with their goals and risk appetite.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6">
                                <FaLightbulb className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To empower individuals and families to achieve financial freedom through expert guidance, innovative solutions, and personalized wealth management strategies that align with their life goals.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                <FaChartLine className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the most trusted and preferred financial advisory firm, recognized for our integrity, expertise, and commitment to helping clients build sustainable wealth for generations to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Core Values
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-primary-50 hover:to-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                                    <value.icon className="text-white text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Us
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">AMFI Registered</h3>
                            <p className="text-gray-600">Certified and compliant with all regulatory requirements</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                            <p className="text-gray-600">Experienced financial advisors with proven track records</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Service</h3>
                            <p className="text-gray-600">Customized solutions tailored to your unique needs</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Process</h3>
                            <p className="text-gray-600">Clear communication and complete transparency</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Platform</h3>
                            <p className="text-gray-600">Advanced technology for seamless investment management</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
                            <p className="text-gray-600">Round-the-clock assistance for all your queries</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
