import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Target, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
    const steps = [
        {
            title: 'Goal Discovery',
            desc: 'We start by understanding your life goals and risk appetite.',
            icon: MessageSquare,
            step: '01',
        },
        {
            title: 'Strategic Planning',
            desc: 'A comprehensive roadmap is designed for your specific goals.',
            icon: Target,
            step: '02',
        },
        {
            title: 'Process Execution',
            desc: 'Tax-efficient deployment into carefully selected MF portfolios.',
            icon: Settings,
            step: '03',
        },
        {
            title: 'Wealth Growth',
            desc: 'Regular monitoring and rebalancing for long-term growth.',
            icon: TrendingUp,
            step: '04',
        }
    ];

    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest mb-4"
                    >
                        How It Works
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-navy"
                    >
                        Our Working <span className="text-primary">Process</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Line (Hidden on mobile) */}
                    <div className="hidden lg:block absolute top-[40%] left-0 w-full h-0.5 border-t-2 border-dashed border-primary/20 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-md">
                                    {step.step}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{step.desc}</p>

                            {index < steps.length - 1 && (
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="hidden lg:block absolute top-[40%] -right-8 text-primary/30"
                                >
                                    <ArrowRight className="w-8 h-8" />
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
