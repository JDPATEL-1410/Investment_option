import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import HeroCalculator from './HeroCalculator';
import DecorativeBackground from '../DecorativeBackground';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-800 to-navy-900 overflow-hidden pt-24 pb-16">
            {/* Enhanced Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Pulsing Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            {/* Floating Decorative Shapes */}
            <div className="absolute top-1/4 left-10 w-24 h-24 border-2 border-primary/30 rounded-full animate-bounce hidden md:block" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse hidden md:block" />

            {/* SVG Wave Pattern */}
            <svg className="absolute bottom-0 left-0 w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white" fillOpacity="0.05" />
            </svg>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-semibold tracking-wide uppercase text-white">AMFI REGISTERED MUTUALFUND DISTRIBUTOR</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Smart Finance
                            <span className="text-primary-200 block">Solutions For Your</span>
                            Future Growth
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                            Empowering your financial journey with expert guidance in Mutual Funds, SIPs, and Strategic Asset Allocation. We turn your financial goals into reality.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link to="/contact" className="btn-primary px-8 py-4 text-lg text-white">
                                Get Started Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/services/mutual-funds" className="btn-secondary px-8 py-4 text-lg bg-transparent border-white/20 text-white hover:bg-white/10">
                                Explore Services
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {[
                                { label: 'Active Clients', value: '10,000+' },
                                { label: 'AUM Managed', value: '₹500Cr+' },
                                { label: 'Years Experience', value: '15+' },
                            ].map((stat, idx) => (
                                <div key={idx} className="border-l border-white/10 pl-4">
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Calculator */}
                    <div className="lg:col-span-5 relative mt-20">
                        {/* Advisor Image Overlay (Small floating) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-12 -left-12 hidden xl:block z-20"
                        >
                            <div className="bg-white p-2 rounded-2xl shadow-2xl">
                                <img
                                    src="/finance_advisor_hero.png"
                                    alt="Advisor"
                                    className="w-32 h-32 object-cover rounded-xl"
                                />
                                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-full shadow-lg">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>

                        <HeroCalculator />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
