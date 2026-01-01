import { motion } from 'framer-motion';
import { Shield, Target, TrendingUp, Sparkles } from 'lucide-react';

const AssetAllocationSection = () => {
    const values = [
        {
            title: 'Transparency',
            description: 'Clear, unbiased advice with full visibility into your investments.',
            icon: Shield,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Goal Oriented',
            description: 'Strategies designed around your specific life milestones.',
            icon: Target,
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Regular Reviews',
            description: 'Consistent monitoring and rebalancing for optimal performance.',
            icon: TrendingUp,
            color: 'from-green-500 to-emerald-500',
        },
    ];

    return (
        <section className="section-navy overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            <span className="text-primary font-bold uppercase tracking-widest text-xs">Our Core Values</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1]">
                            Building Wealth with{' '}
                            <span className="block mt-2 bg-gradient-to-r from-primary via-primary-300 to-primary bg-clip-text text-transparent animate-gradient">
                                Integrity & Precision
                            </span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                            We believe in a transparent, goal-focused approach that puts your financial success first.
                            Our commitment to excellence drives every decision we make.
                        </p>

                        <div className="space-y-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="group relative"
                                >
                                    {/* Glass Card */}
                                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 
                                                  hover:bg-white/10 hover:border-white/20 hover:shadow-glow
                                                  transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                                        {/* Gradient Overlay on Hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        <div className="relative flex gap-6 items-start">
                                            {/* Icon Container with Gradient */}
                                            <div className="relative flex-shrink-0">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-[2px] group-hover:scale-110 transition-transform duration-500`}>
                                                    <div className="w-full h-full rounded-2xl bg-navy flex items-center justify-center">
                                                        <value.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                </div>
                                                {/* Glow Effect */}
                                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                                                    {value.title}
                                                </h3>
                                                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Decorative Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        {/* 3D Card Stack Effect */}
                        <div className="relative perspective">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, rotateY: -20 }}
                                    whileInView={{ opacity: 1, rotateY: 0 }}
                                    transition={{ delay: i * 0.2, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="absolute inset-0 preserve-3d"
                                    style={{
                                        transform: `translateZ(${i * -20}px) translateX(${i * 20}px) translateY(${i * 20}px)`,
                                    }}
                                >
                                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-[400px]
                                                  shadow-2xl hover:shadow-glow transition-all duration-500">
                                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${values[i]?.color} opacity-10`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-10 right-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-glow"
                        >
                            <div className="text-center">
                                <p className="text-4xl font-black text-white mb-1">98%</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Client Satisfaction</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-10 left-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-glow"
                        >
                            <div className="text-center">
                                <p className="text-4xl font-black text-primary mb-1">15+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AssetAllocationSection;
