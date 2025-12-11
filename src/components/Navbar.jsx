import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Tools & Calculators', path: '/calculators' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-xl py-3'
                : 'bg-white py-4 shadow-md'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <img
                            src="/logo.png"
                            alt="Investment Options Logo"
                            className="h-16 md:h-24 w-56 transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${isActive(link.path)
                                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md'
                                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Login Button */}
                        <Link
                            to="/login"
                            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-sm hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:scale-105"
                        >
                            <FaUser className="text-xs" />
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu - Slide from Left */}
                <div
                    className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    style={{ zIndex: 60 }}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <img src="/logo.png" alt="Investment Options" className="h-12 w-auto" />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                <FaTimes className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="flex flex-col space-y-2 p-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${isActive(link.path)
                                            ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-md'
                                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {/* Mobile Login Button */}
                                <Link
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold text-sm text-center hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                                >
                                    <FaUser className="text-xs" />
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay for Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
                        style={{ zIndex: 55 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
