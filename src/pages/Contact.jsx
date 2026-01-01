import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Shield, CheckCircle, Smartphone, Award, ThumbsUp, Users } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Our senior advisor will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Contact Us - Investment Options | Expert Advisory Rajkot</title>
                <meta name="description" content="Reach out to Investment Options for personalized mutual fund advisory and goal-based financial planning." />
            </Helmet>

            <PageHeader
                badge="Let's Connect"
                title={
                    <>
                        Ready to Start Your <br />
                        <span className="text-primary italic">Wealth Journey?</span>
                    </>
                }
                description="Great wealth isn't a result of luck. It's the result of a solid plan and steady action. Our advisors are ready to craft your personalized roadmap."
                icon={CheckCircle}
            />

            {/* Main Contact Section */}
            <section className="relative pb-32 mt-10 z-20">
                <div className="container-custom">
                    <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid lg:grid-cols-5 items-stretch">

                            {/* Left Side: Contact Info (2 columns) */}
                            <div className="lg:col-span-2 bg-navy p-12 lg:p-16 text-white relative overflow-hidden">
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="mb-12">
                                        <h3 className="text-3xl font-black mb-6 italic">Financial Command Center</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Visit our headquarters in Rajkot or reach out via our direct lines. We're here to provide the clarity you deserve.
                                        </p>
                                    </div>

                                    <div className="space-y-10 flex-grow">
                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                                                <Smartphone className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Direct Advisory</p>
                                                <p className="text-xl font-bold">+91 98252 15325</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                                                <Mail className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Global Support</p>
                                                <p className="text-xl font-bold">info@investmentoptions.co.in</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                                                <Clock className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Office Hours</p>
                                                <p className="text-xl font-bold">Mon - Sat: 9:30 AM - 7:30 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-16 pt-10 border-t border-white/10">
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <Shield className="w-5 h-5 text-primary" />
                                            <span>AMFI Registered Mutual Fund Distributor</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            </div>

                            {/* Right Side: Form (3 columns) */}
                            <div className="lg:col-span-3 p-12 lg:p-16">
                                <div className="max-w-2xl mx-auto">
                                    <h3 className="text-3xl font-black text-navy mb-8 italic">Quick Inquiry <span className="text-primary text-sm not-italic ml-4 font-bold uppercase tracking-widest border-b-2 border-primary pb-1">Secure & Private</span></h3>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Your Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Rahul Sharma"
                                                    required
                                                    className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 px-6 py-5 focus:outline-none focus:border-primary transition-all font-bold text-navy placeholder:text-gray-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Email Address</label>
                                                <input
                                                    type="email"
                                                    placeholder="rahul@example.com"
                                                    required
                                                    className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 px-6 py-5 focus:outline-none focus:border-primary transition-all font-bold text-navy placeholder:text-gray-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Contact Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 00000 00000"
                                                required
                                                className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 px-6 py-5 focus:outline-none focus:border-primary transition-all font-bold text-navy placeholder:text-gray-300"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Message / Goal Description</label>
                                            <textarea
                                                placeholder="Briefly describe your financial goals..."
                                                required
                                                className="w-full bg-gray-50 border-2 border-transparent border-b-gray-200 px-6 py-5 min-h-[150px] focus:outline-none focus:border-primary transition-all font-bold text-navy placeholder:text-gray-300 resize-none"
                                            />
                                        </div>

                                        <button type="submit" className="btn-navy w-full justify-center text-xl py-6 rounded-[2rem] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all group">
                                            Send My Strategy Request <Send className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                    </form>

                                    <div className="mt-8 flex items-center justify-center gap-6 text-gray-400 grayscale opacity-50">
                                        <Award className="w-6 h-6" />
                                        <ThumbsUp className="w-6 h-6" />
                                        <Users className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map & Location Section */}
            <section className="section bg-white pt-10">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 italic leading-tight">Visit Our <br /><span className="text-primary italic">Strategy Hub</span></h2>
                            <div className="space-y-10">
                                <div className="flex gap-6 group">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-navy group-hover:text-white transition-all shadow-inner">
                                        <MapPin className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-navy mb-2">Novem Square Headquarters</h4>
                                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                            3rd Floor, Novem Square Building, 307-308, <br />
                                            Amin Marg, off 150 Feet Ring Road, Bharatvan Society, <br />
                                            Rajkot, Gujarat 360001
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-8 bg-primary/5 rounded-[3rem] border border-primary/20 flex items-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <p className="text-navy font-bold italic text-lg">
                                    "Your trust is our greatest asset. Visit us for a cup of coffee and a conversation about your future."
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-[4rem] p-4 h-[550px] shadow-2xl border border-white overflow-hidden"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4542.696035001539!2d70.7745825!3d22.283979599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1278f4820b%3A0x8478fe11a702b829!2sInvestment%20Options!5e1!3m2!1sen!2sin!4v1766662524329!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-[3.5rem]"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="container-custom relative z-10 text-center text-white">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 italic">Prefer a casual chat over <span className="underline decoration-white/30">WhatsApp?</span></h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
                            Skip the forms. Send us a message directly and get a response from an expert advisor within minutes.
                        </p>
                        <a
                            href="https://wa.me/919825215325"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-navy py-8 px-16 text-2xl inline-flex items-center gap-6 group rounded-[2.5rem] shadow-2xl"
                        >
                            <MessageCircle className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                            Launch Direct WhatsApp
                        </a>
                    </motion.div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c3.134 0 5-2.239 5-5s-1.866-5-5-5-5 2.239-5 5 1.866 5 5 5zm58 33c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
            </section>
        </div>
    );
};

export default Contact;

