import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/919825215325?text=Hello! I would like to know more about your investment services.', '_blank');
    };

    return (
        <>
            {/* WhatsApp Button - Always visible */}
            <button
                onClick={openWhatsApp}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-bounce"
                aria-label="Contact on WhatsApp"
                style={{ animationDuration: '2s' }}
            >
                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
            </button>

            {/* Scroll to Top Button - Shows after scrolling */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="text-lg" />
                </button>
            )}
        </>
    );
};

export default FloatingButtons;
