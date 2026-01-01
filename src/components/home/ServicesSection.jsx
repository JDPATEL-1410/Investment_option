import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    TrendingUp,
    Target,
    PieChart,
    Shield,
    Umbrella,
    Clock,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react';
import DecorativeBackground from '../DecorativeBackground';
import teamImage from '../../assets/team-professional.png';

const ServicesSection = () => {
    const services = [
        {
            icon: TrendingUp,
            title: 'Mutual Fund Investing',
            description: 'We help you invest in the right mutual funds based on your goals, time horizon, and risk profile — not trends or noise.',
            link: '/services/mutual-funds',
        },
        {
            icon: Target,
            title: 'SIP Planning',
            description: 'Systematic Investment Plans help you build wealth with discipline. We design SIPs that grow with your income and adjust with life.',
            link: '/services/goal-planning',
        },
        {
            icon: PieChart,
            title: 'Portfolio Review',
            description: 'Markets change. Life changes. Your portfolio should too. Regular reviews ensure your asset allocation stays on track.',
            link: '/services/portfolio-review',
        },
    ];

    return (
        <section className="section bg-gray-50 overflow-hidden relative">
            {/* Decorative Background */}
            <DecorativeBackground variant="financial" />

            <div className="container-custom relative z-10">
                {/* Years Experience Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={teamImage}
                                alt="Professional Financial Team"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-10 -left-10 bg-primary text-white p-8 rounded-2xl shadow-xl z-20"
                        >
                            <p className="text-5xl font-bold mb-1">15+</p>
                            <p className="text-sm font-medium uppercase tracking-wider">Years Experience</p>
                        </motion.div>
                    </div>

                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-widest mb-4"
                        >
                            About Our Expertise
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight"
                        >
                            Our Expertise Will Fill Your <span className="text-primary">Financial Dreams</span>
                        </motion.h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            With over 15 years in the financial industry, we have helped thousands of clients navigate complex markets and achieve their long-term wealth goals through disciplined strategy and personalized care.
                        </p>
                        <div className="space-y-4">
                            {['Certified Financial Experts', 'Goal-Oriented Strategies', '24/7 Digital Dashboard Access'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="font-semibold text-navy">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-navy mb-4"
                    >
                        Our Core <span className="text-primary">Investment Services</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={service.link}
                                className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center border border-gray-100"
                            >
                                <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:rotate-[360deg] transition-all duration-700">
                                    <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                <span className="text-primary font-bold inline-flex items-center gap-2">
                                    Read More
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
