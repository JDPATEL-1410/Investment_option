import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            badge: 'AMFI Registered Mutual Fund Distributor',
            title: 'Your partner in',
            highlight: 'wealth creation',
            description: 'Expert guidance for mutual fund investments, SIPs, and comprehensive wealth management solutions tailored to your financial goals.',
            features: ['Goal-Based Planning', 'Expert Advisory', 'Transparent Process', '24/7 Support'],
            image: '/hero_wealth_creation.png',
            primaryCTA: { text: 'Get Started', link: '/contact' },
            secondaryCTA: { text: 'Try Calculators', link: '/calculators' }
        },
        {
            badge: 'Trusted by 1000+ Investors',
            title: 'Build your',
            highlight: 'financial future',
            description: 'Start your investment journey with as little as ₹500 per month through systematic investment plans designed for your goals.',
            features: ['Low Minimum Investment', 'Flexible Plans', 'Tax Benefits', 'Regular Monitoring'],
            image: '/hero_sip_investment.png',
            primaryCTA: { text: 'Start SIP', link: '/services/sip' },
            secondaryCTA: { text: 'Learn More', link: '/about' }
        },
        {
            badge: 'Comprehensive Financial Planning',
            title: 'Secure your',
            highlight: 'retirement dreams',
            description: 'Plan for a comfortable retirement with our expert guidance on long-term wealth creation and pension planning.',
            features: ['Retirement Planning', 'Pension Solutions', 'Tax Optimization', 'Wealth Protection'],
            image: '/hero_retirement_planning.png',
            primaryCTA: { text: 'Plan Retirement', link: '/services/retirement' },
            secondaryCTA: { text: 'View Services', link: '/services' }
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                            {currentSlideData.title}{' '}
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600">
                                {currentSlideData.highlight}
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            {currentSlideData.description}
                        </p>

                        {/* Features List */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {currentSlideData.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to={currentSlideData.primaryCTA.link}
                                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                {currentSlideData.primaryCTA.text}
                                <FaArrowRight className="text-base" />
                            </Link>
                            <Link
                                to={currentSlideData.secondaryCTA.link}
                                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md"
                            >
                                {currentSlideData.secondaryCTA.text}
                            </Link>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex items-center gap-4 pt-4">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                                aria-label="Previous slide"
                            >
                                <FaChevronLeft className="text-gray-600" />
                            </button>
                            <div className="flex gap-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'w-8 bg-blue-600'
                                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
                                aria-label="Next slide"
                            >
                                <FaChevronRight className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative lg:block hidden">
                        <div className="relative z-10">
                            <img
                                src={currentSlideData.image}
                                alt="Wealth Management Platform"
                                className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white"
                            />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float border border-gray-100 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Trusted by</p>
                                    <p className="text-lg font-bold text-gray-900">1000+ Clients</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-xl animate-float border border-gray-100 z-20" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">₹</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">AUM Managed</p>
                                    <p className="text-lg font-bold text-gray-900">Growing Daily</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" fill="white" fillOpacity="1" />
                </svg>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;
