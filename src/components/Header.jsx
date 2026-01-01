import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import whiteLogo from '../assets/whitelogo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const navigation = [
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
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group relative z-10">
                        <img
                            src={isScrolled ? logo : whiteLogo}
                            alt="Investment Options Logo"
                            className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
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
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
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
                                        <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
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
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[55] lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-[85%] sm:w-80 bg-white z-[60] lg:hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                        >
                            {/* Drawer Header */}
                            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-3 bg-gray-50 rounded-xl text-navy hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-grow overflow-y-auto px-6 py-8 custom-scrollbar">
                                <div className="space-y-6">
                                    {navigation.map((item, idx) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (idx * 0.05) }}
                                        >
                                            {item.dropdown ? (
                                                <div className="space-y-3">
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 pl-4">{item.name}</p>
                                                    <div className="grid gap-2">
                                                        {item.dropdown.map((subItem) => (
                                                            <Link
                                                                key={subItem.path}
                                                                to={subItem.path}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="px-4 py-4 rounded-2xl text-navy font-bold hover:bg-primary/5 active:bg-primary/10 transition-all flex items-center justify-between group"
                                                            >
                                                                <span>{subItem.name}</span>
                                                                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <Link
                                                    to={item.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="px-4 py-4 rounded-2xl text-2xl font-black text-navy hover:bg-primary/5 transition-all block italic"
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Drawer Footer */}
                            <div className="p-8 bg-gray-50 mt-auto">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full bg-navy text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:bg-primary transition-all group"
                                >
                                    Start Wealth Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="mt-6 text-center">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rajkot Headquarters</p>
                                    <p className="text-xs font-bold text-navy mt-1">+91 98252 15325</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
