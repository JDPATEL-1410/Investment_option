import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, TrendingUp, Home, GraduationCap, CreditCard, PiggyBank } from 'lucide-react';

const CalculatorsPreview = () => {
    const calculators = [
        { icon: TrendingUp, name: 'SIP Calculator', path: '/calculators/sip', desc: 'Plan your SIP investments' },
        { icon: PiggyBank, name: 'Lumpsum Calculator', path: '/calculators/lumpsum', desc: 'One-time investment planning' },
        { icon: Home, name: 'Retirement Calculator', path: '/calculators/retirement', desc: 'Plan your retirement corpus' },
        { icon: GraduationCap, name: 'Education Planner', path: '/calculators/education', desc: 'Child education planning' },
        { icon: CreditCard, name: 'EMI Calculator', path: '/calculators/emi', desc: 'Calculate loan EMIs' },
        { icon: Calculator, name: 'Goal Calculator', path: '/calculators/goal', desc: 'Achieve any financial goal' },
    ];

    return (
        <section className="section bg-gradient-to-br from-primary-900 to-primary-700 text-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="heading-lg text-white mb-4">
                        Financial <span className="text-primary-200">Calculators</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="text-xl text-primary-100 max-w-3xl mx-auto">
                        Plan your investments with our easy-to-use calculators
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {calculators.map((calc, index) => (
                        <motion.div key={calc.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                            <Link to={calc.path} className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all group">
                                <calc.icon className="w-12 h-12 text-primary-200 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold mb-2">{calc.name}</h3>
                                <p className="text-primary-100">{calc.desc}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CalculatorsPreview;
