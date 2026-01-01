import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Trophy, GraduationCap, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            content: "Highly competent team of professionals who are ready to provide highest returns in investment portfolios and risk mitigation through insurance. World class services for investors.",
            name: 'Ketan Gandhi',
            role: 'Verified Investor, Rajkot',
            rating: 5,
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjUoc7oQz1iq1gkTMNC3H0g1Ws4XmNB-RN3mUjyHdB7lO4ojxLtK=s120-c-rp-mo-ba4-br100'
        },
        {
            content: "Good services, all product i.e. Mutual funds, life insurance, general insurance, postal scheme, in one roof. With technology and staff strength on prime and convince location.",
            name: 'Manish Ashar',
            role: 'Financial Planning Client',
            rating: 5,
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjUKBfKI_da2tg2EvHDwDav4v2p4WsM0DbSg90jh7CeCFbtDmY1F9g=s120-c-rp-mo-ba5-br100'
        },
        {
            content: "Excellent service for mutual fund, insurance etc. Superb Knowledge about investments & related tax.",
            name: 'Sanket Makadia',
            role: 'Wealth Management Client',
            rating: 5,
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjXagNlcKW1IwROtCtsGJLD1o4BVvQ6bsrR3Vg1LiH2Qh-PG0va2=s120-c-rp-mo-ba5-br100'
        },
        {
            content: "Perfect place for future need. Superb Knowledge about investments & related tax.",
            name: 'Ravi Bhatt',
            role: 'Tax Planning Client',
            rating: 5,
            img: 'https://lh3.googleusercontent.com/a/ACg8ocKfpXHY9qXIemjK8Dog6jFh5oowGM5iQRQRgxAQCrOJNYhxgg=s120-c-rp-mo-ba3-br100'
        },
        {
            content: "Positive: Professionalism, Responsiveness. Perfect place for future investment needs.",
            name: 'Gohel Divya',
            role: 'Mutual Fund Investor',
            rating: 5,
            img: 'https://lh3.googleusercontent.com/a/ACg8ocJtZ1WBxvdn4cQ9YNMmDbDluKr16Cm9afwYsWS3fhWsSajdFg=s120-c-rp-mo-br100'
        },
        {
            content: "Great experience with the team. They provide very clear guidance and transparency in all investment classes.",
            name: 'Manish Mesvaniya',
            role: 'Portfolio Client',
            rating: 5,
            img: 'https://lh3.googleusercontent.com/a/ACg8ocL3Uodtax-_i-1yIuv0bcmS9lNOvzzkNq23UbpH56OCB40PwA=s120-c-rp-mo-ba4-br100'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="section bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-12 mb-12"
                    >
                        <p className="text-primary font-bold uppercase tracking-widest text-center">Wall of Love</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mt-2">What Our Investors Say</h2>

                        {/* Google Review Badge */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <div className="flex flex-col items-center p-4 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xl font-black text-navy">5.0</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-[#fb6340] text-[#fb6340]" />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#4285F4]"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-gray-400">Verified Google Reviews</span>
                                </div>
                            </div>
                            <div className="h-12 w-[1px] bg-gray-200" />
                            <div className="text-center md:text-left">
                                <p className="text-navy font-bold text-sm">Investment Options</p>
                                <p className="text-gray-400 text-xs">Rajkot, Gujarat</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="card-navy relative p-10 md:p-16 min-h-[450px] flex flex-col justify-center"
                            >
                                <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5" />

                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                                    ))}
                                </div>

                                <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 italic text-white/90">
                                    "{testimonials[activeIndex].content}"
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary/30 rotate-3">
                                            <img
                                                src={testimonials[activeIndex].img}
                                                alt={testimonials[activeIndex].name}
                                                className="-rotate-3 scale-110"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-black text-white">{testimonials[activeIndex].name}</p>
                                            <p className="text-primary font-bold uppercase tracking-widest text-sm">{testimonials[activeIndex].role}</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex gap-4">
                                        <button onClick={prevTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-navy transition-all">
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button onClick={nextTestimonial} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-navy transition-all">
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="flex gap-2 mt-8 justify-center md:justify-start pl-4">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === i ? 'w-8 bg-primary' : 'w-2 bg-gray-200'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {[
                            { icon: Users, title: 'Trusted', count: '10K+', color: 'text-primary', bg: 'bg-white/10' },
                            { icon: Trophy, title: 'Awards', count: '15+', color: 'text-primary', bg: 'bg-white/10' },
                            { icon: GraduationCap, title: 'Experts', count: '25+', color: 'text-primary', bg: 'bg-white/10' },
                            { icon: Clock, title: 'Years', count: '15+', color: 'text-primary', bg: 'bg-white/10' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-navy p-6 rounded-[2.5rem] text-center border border-white/5 hover:border-primary transition-all group shadow-2xl hover:-translate-y-1"
                            >
                                <div className={`w-16 h-16 ${stat.bg} rounded-3xl flex items-center justify-center mx-auto mb-5 group-hover:rotate-12 transition-transform`}>
                                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                                </div>
                                <p className="text-3xl font-black text-white mb-1">{stat.count}</p>
                                <p className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em]">{stat.title}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

