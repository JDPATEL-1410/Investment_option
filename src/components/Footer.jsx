import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Resources', path: '/resources' },
        { name: 'Calculators', path: '/calculators' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const services = [
        { name: 'Mutual Funds', path: '/services/mutual-funds' },
        { name: 'SIP Investments', path: '/services/sip' },
        { name: 'Lumpsum Investments', path: '/services/lumpsum' },
        { name: 'Wealth Management', path: '/services/wealth-management' },
        { name: 'Tax Planning', path: '/services/tax' },
        { name: 'Financial Planning', path: '/services/financial-planning' },
        { name: 'Retirement Planning', path: '/services/retirement' },
        { name: 'Education Planning', path: '/services/education' },
        { name: 'Insurance', path: '/services/insurance' },
    ];

    const regulatoryLinks = [
        { name: 'NSE', url: 'https://www.nseindia.com' },
        { name: 'BSE', url: 'https://www.bseindia.com' },
        { name: 'SEBI', url: 'https://www.sebi.gov.in' },
        { name: 'RBI', url: 'https://www.rbi.org.in' },
        { name: 'CDSL', url: 'https://www.cdslindia.com' },
        { name: 'NCDEX', url: 'https://www.ncdex.com' },
        { name: 'MCX', url: 'https://www.mcxindia.com' },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
                    {/* Company Info with Logo */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <img
                            src="/logo.png"
                            alt="Investment Options"
                            className="h-20 w-auto"
                        />
                        <p className="text-gray-700 text-sm leading-relaxed max-w-sm text-center md:text-left">
                            Your trusted partner in financial growth. We help you build wealth through smart investment strategies and personalized financial planning.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 w-full">
                            <div className="flex items-start space-x-3 justify-center md:justify-start">
                                <FaMapMarkerAlt className="text-[#40459c] mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-xs leading-relaxed text-left">
                                    3rd Floor, Novem Square Building,<br />
                                    307-308, Amin Marg,<br />
                                    Rajkot, Gujarat 360001
                                </p>
                            </div>
                            <div className="flex items-center space-x-3 justify-center md:justify-start">
                                <FaPhone className="text-[#40459c] flex-shrink-0" />
                                <a href="tel:+919825215325" className="text-gray-700 text-sm hover:text-[#40459c] transition-colors">
                                    +91 98252 15325
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 justify-center md:justify-start">
                                <FaEnvelope className="text-[#40459c] flex-shrink-0" />
                                <a href="mailto:info@investmentoptions.in" className="text-gray-700 text-sm hover:text-[#40459c] transition-colors">
                                    info@investmentoptions.in
                                </a>
                            </div>
                            <div className="flex items-start space-x-3 justify-center md:justify-start">
                                <FaClock className="text-[#40459c] mt-1 flex-shrink-0" />
                                <div className="text-gray-700 text-xs text-left">
                                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p>Sat: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-3 pt-2 justify-center md:justify-start">
                            <a
                                href="https://www.facebook.com/p/Investment-Options-100063724825649/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border-2 border-[#40459c] hover:bg-[#40459c] text-[#40459c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border-2 border-[#40459c] hover:bg-[#40459c] text-[#40459c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border-2 border-[#40459c] hover:bg-[#40459c] text-[#40459c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border-2 border-[#40459c] hover:bg-[#40459c] text-[#40459c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white border-2 border-[#40459c] hover:bg-[#40459c] text-[#40459c] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#40459c] text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path} className="text-center md:text-left">
                                    <Link
                                        to={link.path}
                                        className="text-gray-700 hover:text-[#40459c] hover:translate-x-1 transition-all duration-300 text-sm inline-block font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#40459c] text-lg font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name} className="text-center md:text-left">
                                    <Link
                                        to={service.path}
                                        className="text-gray-700 hover:text-[#40459c] hover:translate-x-1 transition-all duration-300 text-sm inline-block font-medium"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Regulatory Links */}
                <div className="border-t border-gray-300 pt-8 mb-8">
                    <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
                        {regulatoryLinks.map((link, index) => (
                            <React.Fragment key={link.name}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-[#40459c] transition-colors text-sm font-semibold"
                                >
                                    {link.name}
                                </a>
                                {index < regulatoryLinks.length - 1 && (
                                    <span className="text-gray-400">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Risk Factors & Disclaimer */}
                <div className="border-t border-gray-300 pt-8 mb-8">
                    <div className="bg-white rounded-lg p-6 border-2 border-[#40459c]/20 shadow-sm space-y-4">
                        <p className="text-gray-700 text-xs leading-relaxed text-justify">
                            <strong className="text-[#40459c]">Risk Factors:</strong> Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other exit structure and TER applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes.
                        </p>
                        <p className="text-gray-700 text-xs leading-relaxed text-justify">
                            We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made to clients at the time of investments. Option of Direct Plan for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct Plans.
                        </p>
                    </div>
                </div>

                {/* AMFI Registration */}
                <div className="border-t border-gray-300 pt-6 mb-6">
                    <div className="text-center space-y-2">
                        <p className="text-gray-800 text-sm font-semibold">
                            AMFI Registered Mutual Fund Distributor
                        </p>
                        <p className="text-gray-700 text-xs">
                            ARN: <span className="text-[#40459c] font-semibold">[ARN Number]</span> |
                            Date of Registration: <span className="text-[#40459c]">[DD/MM/YYYY]</span> |
                            Current Validity: <span className="text-[#40459c]">[DD/MM/YYYY]</span>
                        </p>
                    </div>
                </div>

                {/* Grievance Information */}
                <div className="border-t border-gray-300 pt-6 mb-6">
                    <div className="bg-white rounded-lg p-6 border-2 border-[#40459c]/20 shadow-sm">
                        <p className="text-gray-700 text-xs leading-relaxed text-center">
                            <strong className="text-[#40459c]">For any Grievance:</strong> Please contact our Customer Care -
                            <span className="text-gray-900 font-semibold"> [Name]</span>:
                            <a href="tel:+919825215325" className="text-[#40459c] hover:underline transition-colors"> +91 98252 15325</a> |
                            Email: <a href="mailto:care@investmentoptions.in" className="text-[#40459c] hover:underline transition-colors">care@investmentoptions.in</a>
                        </p>
                    </div>
                </div>

                {/* Policy Links */}
                <div className="border-t border-gray-300 pt-6 mb-6">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <Link to="/privacy" className="text-gray-700 hover:text-[#40459c] transition-colors text-xs font-medium">
                            Privacy Policy
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link to="/terms" className="text-gray-700 hover:text-[#40459c] transition-colors text-xs font-medium">
                            Terms of Service
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link to="/disclaimers" className="text-gray-700 hover:text-[#40459c] transition-colors text-xs font-medium">
                            Disclaimer
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link to="#" className="text-gray-700 hover:text-[#40459c] transition-colors text-xs font-medium">
                            Commission Disclosure
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link to="#" className="text-gray-700 hover:text-[#40459c] transition-colors text-xs font-medium">
                            SID/SAI/KIM
                        </Link>
                        <span className="text-gray-400">|</span>
                        <Link to="#" className="text-gray-700 hover:text-[#40459c] transition-colors text-xs font-medium">
                            Code of Conducts
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-300 pt-6">
                    <div className="text-center space-y-2">
                        <p className="text-gray-700 text-xs">
                            © {currentYear} Investment Options. All Rights Reserved.
                        </p>
                        <p className="text-gray-600 text-xs">
                            Designed with ❤️ by <span className="text-[#40459c] font-semibold">AinaTech Services LLP</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
