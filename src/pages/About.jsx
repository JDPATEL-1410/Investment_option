import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Clock, CheckCircle2 } from 'lucide-react';
import TeamSection from '../components/home/TeamSection';
import FAQSection from '../components/home/FAQSection';
import PageHeader from '../components/PageHeader';

const About = () => {
    const philosophy = [
        { title: 'Goal first, product later', desc: 'We start with understanding your life goals before recommending any investment product' },
        { title: 'Risk before return', desc: 'Your comfort with volatility matters more than chasing the highest returns' },
        { title: 'Process over prediction', desc: 'We build systematic processes instead of trying to predict market movements' },
        { title: 'Long-term thinking', desc: 'Short-term excitement is replaced with long-term wealth building strategies' },
    ];

    return (
        <>
            <Helmet>
                <title>About Investment Options - Our Philosophy & Approach</title>
                <meta
                    name="description"
                    content="Learn about Investment Options - AMFI Registered Mutual Fund Distributor committed to goal-based investing and financial clarity"
                />
            </Helmet>

            {/* Enhanced Page Header */}
            <PageHeader
                badge="Our Story"
                title={
                    <>
                        Committed to Your <br />
                        <span className="text-primary italic">Financial Freedom</span>
                    </>
                }
                description="We help individuals and families achieve financial clarity, stability, and long-term wealth through systematic planning and disciplined execution."
            />

            {/* Who We Are */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-navy mb-8 border-l-8 border-primary pl-6">Who We Are</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Investment Options is an AMFI Registered Mutual Fund Distributor committed to helping individuals and families achieve financial clarity, stability, and long-term wealth.
                                </p>
                                <p className="font-bold text-navy text-xl">Our core beliefs define us:</p>
                                <div className="space-y-4">
                                    {[
                                        'Money should reduce stress, not create it',
                                        'Financial planning is a process, not a product',
                                        'Discipline beats prediction',
                                    ].map((belief, index) => (
                                        <div key={index} className="flex items-start gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 transition-hover hover:border-primary/30">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                            <p className="font-semibold text-navy">{belief}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="pt-4">
                                    Our approach is simple: understand your life, define your goals, assess your risk, and build a portfolio that you can stick with through all market phases.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {[
                                    { icon: Target, label: '10,000+', sub: 'Investors', color: 'bg-navy' },
                                    { icon: TrendingUp, label: '₹500Cr+', sub: 'AUM', color: 'bg-primary' },
                                    { icon: Clock, label: '15+', sub: 'Years Exp.', color: 'bg-primary' },
                                    { icon: Shield, label: 'AMFI', sub: 'Registered', color: 'bg-navy' },
                                ].map((item, index) => (
                                    <div key={index} className={`${item.color} ${item.color === 'bg-primary' ? 'text-navy' : 'text-white'} p-10 rounded-[2.5rem] shadow-2xl transition-transform hover:-translate-y-2`}>
                                        <item.icon className="w-8 h-8 mb-6 opacity-80" />
                                        <p className="text-3xl font-bold mb-1">{item.label}</p>
                                        <p className="font-bold uppercase tracking-widest text-xs opacity-70">{item.sub}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Philosophy */}
            <section className="section bg-navy text-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary italic">Philosophy</span></h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto italic">
                            "Investing is not about beating others; it's about controlling your own behavior."
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {philosophy.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary text-navy rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                                        <CheckCircle2 className="w-8 h-8 font-bold" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative icons in background */}
                <Target className="absolute top-20 left-10 w-64 h-64 text-white/5 -rotate-12" />
                <TrendingUp className="absolute bottom-20 right-10 w-64 h-64 text-primary/5 rotate-12" />
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Section */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                        <div className="relative z-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold text-white mb-8"
                            >
                                Ready to build your <br />
                                wealth with a <span className="underline decoration-white/20">strategy?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-xl text-white/80 mb-12 font-medium max-w-2xl mx-auto"
                            >
                                Take the first step towards a secured future. Our experts are ready to guide you through every milestone.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-wrap justify-center gap-4"
                            >
                                <motion.a
                                    href="/contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-navy-700 transition-all flex items-center gap-2"
                                >
                                    Book a Free Consultation
                                </motion.a>
                            </motion.div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
