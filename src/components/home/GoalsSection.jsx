import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, GraduationCap, Heart, Umbrella, TrendingUp, PiggyBank, ArrowRight } from 'lucide-react';

const GoalsSection = () => {
    const goals = [
        { icon: Home, title: 'Dream Home', path: '/goals/dream-home', color: 'bg-blue-500' },
        { icon: TrendingUp, title: 'Wealth Creation', path: '/goals/wealth-creation', color: 'bg-green-500' },
        { icon: PiggyBank, title: 'Retirement', path: '/goals/retirement', color: 'bg-purple-500' },
        { icon: GraduationCap, title: 'Child Education', path: '/goals/child-education', color: 'bg-orange-500' },
        { icon: Heart, title: 'Child Wedding', path: '/goals/child-wedding', color: 'bg-pink-500' },
        { icon: Umbrella, title: 'Emergency Fund', path: '/goals/emergency-fund', color: 'bg-red-500' },
    ];

    return (
        <section className="section bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-lg mb-4">
                        Plan Your <span className="gradient-text">Life Goals</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Every dream deserves a plan. Let us help you achieve yours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {goals.map((goal, index) => (
                        <motion.div key={goal.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                            <Link to={goal.path} className="block text-center group">
                                <div className={`${goal.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all`}>
                                    <goal.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{goal.title}</h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoalsSection;
