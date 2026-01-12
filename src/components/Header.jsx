import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import logo from '../assets/logo.png';
import whiteLogo from '../assets/whitelogo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < 1024 : false
    );
    const [mounted, setMounted] = useState(false);
    const location = useLocation();

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        const handleResize = () => setIsMobile(window.innerWidth < 1024);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleScroll();
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (!mounted) return;

        if (isMobileMenuOpen) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isMobileMenuOpen, mounted]);

    const navigation = useMemo(
        () => [
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            {
                name: 'Services',
                dropdown: [
                    { name: 'Mutual Funds', path: '/services/mutual-funds' },
                    { name: 'Goal Planning', path: '/services/goal-planning' },
                    { name: 'Portfolio Review', path: '/services/portfolio-review' },
                    { name: 'Tax Planning', path: '/services/tax-planning' },
                    { name: 'Insurance', path: '/services/insurance' },
                    { name: 'Retirement Planning', path: '/services/retirement-planning' },
                ],
            },
            {
                name: 'Calculators',
                dropdown: [
                    { name: 'SIP Calculator', path: '/calculators/sip' },
                    { name: 'Step-Up SIP', path: '/calculators/step-up-sip' },
                    { name: 'Lumpsum Calculator', path: '/calculators/lumpsum' },
                    { name: 'SWP Calculator', path: '/calculators/swp' },
                    { name: 'Retirement Calculator', path: '/calculators/retirement' },
                    { name: 'EMI Calculator', path: '/calculators/emi' },
                ],
            },
            {
                name: 'Insights',
                dropdown: [
                    { name: 'Research', path: '/research/trailing-returns' },
                    { name: 'Wealth Blog', path: '/blog' },
                    { name: 'Risk Profile', path: '/risk-profile' },
                ],
            },
            { name: 'Contact', path: '/contact' },
        ],
        []
    );

    const MobileMenu = () => {
        if (!mounted) return null;
        if (!isMobileMenuOpen) return null;

        // Render to body so it always sits above the page (fixes “opens behind”)
        return createPortal(
            <AnimatePresence>
                {/* Backdrop */}
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 bg-gradient-to-br from-navy/70 via-navy/60 to-primary/40 backdrop-blur-md lg:hidden"
                    style={{ zIndex: 99990 }}
                />

                {/* Drawer */}
                <motion.div
                    key="drawer"
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 300,
                        opacity: { duration: 0.2 },
                    }}
                    className="fixed inset-y-0 right-0 w-[90%] sm:w-96 bg-gradient-to-br from-white via-white to-gray-50/50 lg:hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.4)] overflow-hidden border-l-2 border-primary/10"
                    style={{ zIndex: 100000 }}
                >
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-navy/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                    {/* Drawer Header */}
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="relative p-6 border-b border-gray-200/80 flex items-center justify-between bg-white/80 backdrop-blur-sm"
                    >
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="group">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-14 w-auto transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl text-navy hover:from-primary/10 hover:to-primary/5 hover:text-primary transition-all hover:rotate-90 hover:scale-110 shadow-sm"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </motion.div>

                    {/* Nav Links */}
                    <div className="relative flex-grow overflow-y-auto px-5 py-6 custom-scrollbar">
                        <div className="space-y-5">
                            {navigation.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: 0.15 + idx * 0.06,
                                        type: 'spring',
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                >
                                    {item.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 px-4 mb-3">
                                                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.25em]">
                                                    {item.name}
                                                </p>
                                                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                                            </div>

                                            <div className="grid gap-1.5">
                                                {item.dropdown.map((subItem, subIdx) => (
                                                    <motion.div
                                                        key={subItem.path}
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 + idx * 0.06 + subIdx * 0.03 }}
                                                    >
                                                        <Link
                                                            to={subItem.path}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="relative px-5 py-3.5 rounded-xl text-sm font-bold text-navy/80 hover:text-navy hover:bg-gradient-to-r hover:from-primary/8 hover:to-primary/4 active:scale-[0.98] transition-all flex items-center justify-between group overflow-hidden"
                                                        >
                                                            <span className="relative z-10">{subItem.name}</span>
                                                            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-3 group-hover:translate-x-0 relative z-10" />
                                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="relative px-5 py-4 rounded-2xl text-xl font-black text-navy hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-navy/5 transition-all block italic group overflow-hidden active:scale-[0.98]"
                                        >
                                            <span className="relative z-10">{item.name}</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Drawer Footer */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative p-6 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/80 mt-auto"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />

                        <Link
                            to="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative w-full bg-gradient-to-r from-navy via-navy to-primary text-white py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(65,67,147,0.3)] hover:shadow-[0_12px_40px_rgba(65,67,147,0.4)] transition-all group overflow-hidden active:scale-[0.98]"
                        >
                            <span className="relative z-10">Start Wealth Journey</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <div className="mt-5 text-center space-y-1">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                Rajkot Headquarters
                            </p>
                            <a
                                href="tel:+919825215325"
                                className="text-sm font-bold text-navy hover:text-primary transition-colors inline-flex items-center gap-1.5 group"
                            >
                                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                +91 98252 15325
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>,
            document.body
        );
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
                        : 'bg-white/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-4 lg:py-5'
                    }`}
                style={{ zIndex: 9999 }}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group relative z-10">
                            <img
                                src={isScrolled || isMobile ? logo : whiteLogo}
                                alt="Investment Options Logo"
                                className="h-14 lg:h-20 w-auto transition-all duration-300 group-hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-2">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setOpenDropdown(item.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    {item.dropdown ? (
                                        <>
                                            <button
                                                className={`px-4 py-2 font-bold flex items-center gap-1 transition-colors ${isScrolled ? 'text-navy hover:text-primary' : 'text-white/90 hover:text-white'
                                                    }`}
                                                type="button"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {openDropdown === item.name && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 15 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 15 }}
                                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                                                    >
                                                        <div className="p-3 grid gap-1">
                                                            {item.dropdown.map((subItem) => (
                                                                <Link
                                                                    key={subItem.path}
                                                                    to={subItem.path}
                                                                    className="px-4 py-3 text-sm font-semibold text-gray-600 hover:text-navy hover:bg-gray-50 rounded-xl transition-all"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`px-4 py-2 font-bold transition-colors relative group ${isScrolled ? 'text-navy hover:text-primary' : 'text-white/90 hover:text-white'
                                                }`}
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-6">
                            <Link
                                to="/contact"
                                className={`px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 ${isScrolled
                                        ? 'bg-navy text-white shadow-xl hover:bg-navy-700'
                                        : 'bg-primary text-white hover:bg-primary-600'
                                    }`}
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen((v) => !v)}
                            className={`lg:hidden p-3 rounded-xl transition-all shadow-md ${isScrolled
                                    ? 'bg-white text-navy hover:bg-gray-50 border-2 border-gray-200'
                                    : 'bg-gray-100/80 text-navy hover:bg-gray-200/80 border-2 border-gray-200'
                                }`}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            type="button"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Portal-based Mobile Menu (always on top) */}
            <MobileMenu />
        </>
    );
};

export default Header;
