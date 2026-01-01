import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const TeamSection = () => {
    const team = [
        {
            name: 'Jeel Gondaliya',
            role: 'Founder & Principal Consultant',
            image: 'https://i.pravatar.cc/400?img=68',
        },
        {
            name: 'Priya Mehta',
            role: 'Head of Portfolio Management',
            image: 'https://i.pravatar.cc/400?img=47',
        },
        {
            name: 'Amit Rajpurohit',
            role: 'Technical Analyst',
            image: 'https://i.pravatar.cc/400?img=33',
        }
    ];

    return (
        <section className="section bg-gray-50 overflow-hidden">
            <div className="container-custom text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold uppercase tracking-widest mb-4"
                >
                    Our Experts
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-navy mb-16"
                >
                    Our Awesome <span className="text-primary">Financial Team</span>
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Hover Socials */}
                                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex gap-4">
                                        {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-[0.1s]">
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-primary font-semibold text-sm uppercase tracking-wider">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
