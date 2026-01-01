import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - Ref and isVisible state
 */
export const useScrollReveal = (options = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
};

/**
 * Custom hook for stagger animations
 * @param {number} count - Number of items to stagger
 * @param {number} delay - Delay between each item (ms)
 * @returns {Array} - Array of visibility states
 */
export const useStaggerAnimation = (count, delay = 100) => {
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        const timers = [];
        for (let i = 0; i < count; i++) {
            const timer = setTimeout(() => {
                setVisibleItems(prev => [...prev, i]);
            }, i * delay);
            timers.push(timer);
        }

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [count, delay]);

    return visibleItems;
};

/**
 * Custom hook for scroll progress
 * @returns {number} - Scroll progress (0-100)
 */
export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollHeight) * 100;
            setProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return progress;
};

/**
 * Custom hook for element in viewport detection
 * @param {Object} options - Configuration options
 * @returns {Object} - Ref and inView state
 */
export const useInView = (options = {}) => {
    const { threshold = 0, rootMargin = '0px' } = options;
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin]);

    return { ref, inView };
};
