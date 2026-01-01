import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, LineChart, Users, CheckCircle2 } from 'lucide-react';

const ValuesSection = () => {
    const values = [
        {
            title: 'Transparency',
            desc: 'Clear, unbiased advice with full visibility into your investments. No hidden agendas, just pure growth.',
            icon: Shield,
            color: 'bg-primary/20',
        },
        {
            title: 'Goal Oriented',
            desc: 'Strategies designed around your specific life milestones. We don\'t sell products; we solve life goals.',
            icon: Target,
            color: 'bg-primary/20',
        },
        {
            title: 'Regular Reviews',
            desc: 'Consistent monitoring and rebalancing for optimal performance. We stay awake so you can sleep peaceful.',
            icon: LineChart,
            color: 'bg-primary/20',
        }
    ];

    const avatars = [
        'https://i.pravatar.cc/150?u=1',
        'https://i.pravatar.cc/150?u=2',
        'https://i.pravatar.cc/150?u=3',
        'https://i.pravatar.cc/150?u=4',
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold tracking-widest uppercase">Our Core Values</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight italic">
                            Building Wealth with <br />
                            <span className="text-primary italic">Integrity & Precision.</span>
                        </h2>

                        <div className="space-y-8 mb-12">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 group"
                                >
                                    <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 transform group-hover:-rotate-6`}>
                                        <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {value.title}
                                        </h4>
                                        <p className="text-gray-400 leading-relaxed font-medium max-w-md">
                                            {value.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Trusted Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-2xl shadow-xl"
                        >
                            <div className="flex -space-x-4">
                                {avatars.map((url, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy overflow-hidden">
                                        <img src={url} alt={`User ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white border-2 border-navy">
                                    +5k
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">10k+ Trusted Investors</p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-2 h-2 rounded-full bg-amber-400" />
                                    ))}
                                    <span className="text-[10px] text-gray-400 ml-1 font-bold">5.0 RATING</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 p-4 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-2xl">
                            <img
                                src="/mobile_app_dashboard_wealth_management.png"
                                alt="Dashboard Visual"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                            />
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full -z-10"
                        />
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full -z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
