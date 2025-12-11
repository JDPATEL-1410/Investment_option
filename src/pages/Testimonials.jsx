import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';

const Testimonials = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="gradient-bg py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                        Client Testimonials
                    </span>
                    <h1 className="mt-4 mb-6">
                        What Our Clients Say
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it. Here's what our satisfied clients
                        have to say about their experience with Investment Options.
                    </p>
                </div>
            </section>

            <TestimonialsSection />
        </div>
    );
};

export default Testimonials;
