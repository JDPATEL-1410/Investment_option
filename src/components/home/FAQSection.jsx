import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "How do I start investing with you?",
            answer: "Starting is simple. You can book a free consultation through our website. We'll discuss your financial goals and create a personalized investment plan for you."
        },
        {
            question: "What are the fees for your services?",
            answer: "As an AMFI Registered Mutual Fund Distributor, we receive commissions directly from AMC. There is no direct advisory fee for our standard investment implementation services."
        },
        {
            question: "Is my money safe with mutual funds?",
            answer: "Mutual funds are regulated by SEBI. While market risks exist, your money is held by the fund house (AMC) and managed by professional fund managers."
        },
        {
            question: "Can I withdraw my money anytime?",
            answer: "Most mutual funds are open-ended, allowing you to withdraw your money anytime. However, some funds may have an exit load if withdrawn within a specific period."
        }
    ];

    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-primary font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5" /> FAQ Section
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                            Frequently Asked <br />
                            <span className="text-primary">Questions?</span>
                        </h2>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
                                alt="Support"
                                className="rounded-2xl shadow-2xl w-full h-[300px] object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl shadow-xl text-white">
                                <p className="text-sm font-bold uppercase tracking-widest">More Help?</p>
                                <p className="text-xs opacity-80 mt-1">Contact our experts anytime</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-primary bg-primary/5 shadow-lg' : 'border-gray-100 bg-gray-50'}`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                    className="w-full text-left p-6 flex items-center justify-between"
                                >
                                    <span className={`text-lg font-bold ${activeIndex === index ? 'text-navy' : 'text-gray-700'}`}>
                                        {faq.question}
                                    </span>
                                    {activeIndex === index ? (
                                        <Minus className="w-5 h-5 text-primary" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-400" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-primary/10">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
