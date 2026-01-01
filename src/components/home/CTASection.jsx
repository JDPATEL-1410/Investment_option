import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="section bg-gradient-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Investment Journey?
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="text-xl text-primary-100 mb-8">
                        Join thousands of investors who trust us with their financial future. Start with as little as ₹500 per month.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn-navy px-8 py-4 text-lg text-white">
                            Get Started Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="tel:+911234567890" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call Us Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
