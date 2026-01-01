import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-primary to-navy text-white rounded-full shadow-glow-lg flex items-center justify-center cursor-pointer group overflow-hidden"
                    aria-label="Back to top"
                >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <ArrowUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
