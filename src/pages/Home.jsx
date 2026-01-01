import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ValuesSection from '../components/home/ValuesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import EconomicTimesNews from '../components/home/EconomicTimesNews';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Investment Options - AMFI Registered Mutual Fund Distributor | Smart Financial Planning</title>
                <meta
                    name="description"
                    content="Experience professional financial planning with Investment Options. Goal-based investing, SIPs, and expert asset allocation for your future."
                />
            </Helmet>

            <HeroSection />
            <ServicesSection />

            {/* Risk Profile CTA */}
            <section className="py-24 bg-navy relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] p-10 md:p-20 text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic">Don't Invest <span className="text-primary italic">Blindly.</span></h2>
                            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
                                Take our professional risk profiling questionnaire to understand your investor personality and get a custom asset allocation.
                            </p>
                            <Link to="/risk-profile" className="btn-primary inline-flex items-center gap-3 text-lg py-5 px-10">
                                Start Your Risk Audit <ArrowRight className="w-6 h-6" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </section>

            <ProcessSection />
            <ValuesSection />
            <TestimonialsSection />
            <EconomicTimesNews limit={3} showViewMore={true} showHeader={true} />

            {/* Bottom CTA Bar */}
            <section className="bg-primary py-8 overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                                <PhoneCall className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-white">
                                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Call Us Anytime</p>
                                <h3 className="text-2xl font-bold text-white">+91 98252 15325</h3>
                            </div>
                        </div>
                        <div className="h-10 w-[1px] bg-white/20 hidden md:block" />
                        <div className="text-center md:text-left flex-1 px-4">
                            <h4 className="text-xl font-bold text-white mb-1">Schedule Your Free Consultation Today</h4>
                            <p className="text-white/80 text-sm italic">"The best time to plant a tree was 20 years ago. The second best time is now."</p>
                        </div>
                        <Link to="/contact" className="bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-600 transition-all transform hover:scale-105 shadow-xl">
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
