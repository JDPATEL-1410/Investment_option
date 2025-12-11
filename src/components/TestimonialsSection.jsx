import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            location: 'Mumbai, Maharashtra',
            rating: 5,
            text: 'Investment Options helped me plan my daughter\'s education fund systematically. Their guidance on SIP investments has been invaluable. The team is professional, transparent, and always available to answer my queries.',
            initials: 'RK',
            color: 'from-blue-500 to-blue-600',
        },
        {
            name: 'Priya Sharma',
            location: 'Bangalore, Karnataka',
            rating: 5,
            text: 'I was completely new to mutual fund investing. The team at Investment Options patiently explained everything and created a customized plan for my retirement. Five years later, I\'m very happy with my portfolio\'s performance.',
            initials: 'PS',
            color: 'from-purple-500 to-purple-600',
        },
        {
            name: 'Amit Patel',
            location: 'Ahmedabad, Gujarat',
            rating: 5,
            text: 'What I appreciate most is their research-driven approach and regular portfolio reviews. They don\'t push products but focus on what\'s best for my financial goals. Highly recommended for goal-based investing!',
            initials: 'AP',
            color: 'from-accent-teal to-accent-green',
        },
        {
            name: 'Sneha Reddy',
            location: 'Hyderabad, Telangana',
            rating: 5,
            text: 'The tax-saving investment options they suggested not only helped me save on taxes but also created wealth over time. Their transparency and client-first approach sets them apart from others.',
            initials: 'SR',
            color: 'from-pink-500 to-pink-600',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-container bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                    Client Testimonials
                </span>
                <h2 className="mt-2 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 text-lg">
                    Don't just take our word for it. Here's what our satisfied clients
                    have to say about their experience with Investment Options.
                </p>
            </div>

            {/* Carousel */}
            <div className="relative max-w-4xl mx-auto">
                {/* Main Testimonial Card */}
                <div className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12">
                    <FaQuoteLeft className="h-12 w-12 text-primary-200 mb-6" />

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                        "{testimonials[currentIndex].text}"
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {/* Avatar */}
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} 
              flex items-center justify-center shadow-md`}>
                                <span className="text-white font-bold text-xl">
                                    {testimonials[currentIndex].initials}
                                </span>
                            </div>

                            {/* Info */}
                            <div>
                                <h4 className="font-bold text-primary-500 text-lg">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-gray-500 text-sm">
                                    {testimonials[currentIndex].location}
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex space-x-1">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center space-x-4 mt-8">
                    <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg 
            flex items-center justify-center text-primary-500 hover:bg-primary-50 
            transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary-500 w-8'
                                        : 'bg-primary-200 hover:bg-primary-300'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg 
            flex items-center justify-center text-primary-500 hover:bg-primary-50 
            transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
