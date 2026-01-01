import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Shield } from 'lucide-react';
import whitelogo from '../assets/whitelogo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services/mutual-funds' },
        { name: 'Calculators', path: '/calculators/sip' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        { name: 'Mutual Funds', path: '/services/mutual-funds' },
        { name: 'Goal Planning', path: '/services/goal-planning' },
        { name: 'Portfolio Review', path: '/services/portfolio-review' },
        { name: 'Tax Planning', path: '/services/tax-planning' },
        { name: 'Retirement Planning', path: '/services/retirement-planning' },
    ];

    return (
        <footer className="bg-navy text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            {/* Main Footer Content */}
            <div className="container-custom relative py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src={whitelogo}
                                alt="Investment Options"
                                className="h-20 w-60 mx-auto lg:mx-0"
                            />
                        </Link>
                        <p className="text-white mb-6 leading-relaxed">
                            AMFI Registered Mutual Fund Distributor
                        </p>
                        <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20 w-full max-w-xs">
                            <p className="text-xs text-white font-bold uppercase mb-1">AMFI Registered</p>
                            <p className="text-sm text-white">ARN-123456</p>
                        </div>

                        {/* Social Media */}
                        <div className="flex gap-3 justify-center lg:justify-start">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                            >
                                <Linkedin className="w-5 h-5 text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                            >
                                <Instagram className="w-5 h-5 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-white hover:text-primary transition-colors inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.path}
                                        className="text-white hover:text-primary transition-colors inline-block"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <div className="space-y-4 flex flex-col items-center lg:items-start">
                            <a href="tel:+919825215325" className="flex gap-3 text-white hover:text-primary transition-colors group">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>+91 98252 15325</span>
                            </a>

                            <a href="mailto:info@investmentoptions.co.in" className="flex gap-3 text-white hover:text-primary transition-colors group">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>info@investmentoptions.co.in</span>
                            </a>

                            <div className="flex gap-3 text-white justify-center lg:justify-start">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed max-w-[200px]">
                                    3rd Floor, Novem Square,<br />
                                    307-308, Amin Marg,<br />
                                    Rajkot - 360001
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Market & Regulatory Links */}
                <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-12 border-b border-white/5 pb-8">
                    <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">NSE</a>
                    <span className="text-white/10">|</span>
                    <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">BSE</a>
                    <span className="text-white/10">|</span>
                    <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">SEBI</a>
                    <span className="text-white/10">|</span>
                    <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">RBI</a>
                    <span className="text-white/10">|</span>
                    <a href="https://www.cdslindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">CDSL</a>
                    <span className="text-white/10">|</span>
                    <a href="https://www.ncdex.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">NCDEX</a>
                    <span className="text-white/10">|</span>
                    <a href="https://www.mcxindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MCX</a>
                </div>

                {/* Regulatory Information Box */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-12 mb-16 relative group overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative space-y-8">
                        {/* Risk Factors */}
                        <div className="space-y-3">
                            <h5 className="text-primary font-black uppercase tracking-widest text-[10px]">Risk Factors & Disclosures</h5>
                            <p className="text-[11px] md:text-xs text-white/50 leading-relaxed font-medium">
                                <span className="text-white font-bold italic">Risk Factors –</span> Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other exit structure and TER applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes. We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure For Commission earnings is made to clients at the time of investments. Option of Direct Plan for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct Plans.
                            </p>
                        </div>

                        {/* Registration Details */}
                        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center py-8 border-y border-white/5">
                            <div className="space-y-2">
                                <p className="text-xs font-black uppercase tracking-widest text-primary">AMFI Registered Mutual Fund Distributor</p>
                                <div className="flex gap-4 text-[11px] text-white/40 font-bold">
                                    <span>ARN: 249212</span>
                                    <span>•</span>
                                    <span>Registration Date: 26/07/2025</span>
                                    <span>•</span>
                                    <span>Validity: 25/05/2028</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest">
                                <Link to="/commission-disclosure" className="text-white/60 hover:text-primary transition-colors">Commission Disclosure</Link>
                                <span className="text-white/10">|</span>
                                <a href="https://www.sebi.gov.in/filings/mutual-funds.html" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">SID/SAI/KIM</a>
                                <span className="text-white/10">|</span>
                                <Link to="/privacy-policy" className="text-white/60 hover:text-primary transition-colors">Privacy Policy</Link>
                                <span className="text-white/10">|</span>
                                <a href="/AMFI_Code-of-Conduct.pdf" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">Code of Conduct</a>
                            </div>
                        </div>

                        {/* Grievance Info */}
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-start border-b border-white/5 pb-8">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Grievance & Redressal</p>
                                <p className="text-xs text-white/80 font-bold">
                                    Keval Ashar: <a href="tel:+919825215325" className="text-primary hover:underline">+91 98252 15325</a>
                                </p>
                            </div>
                            <div className="space-y-2 md:text-right">
                                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Redressal</p>
                                <a href="mailto:info@investmentoptions.co.in" className="text-xs text-primary font-bold hover:underline">info@investmentoptions.co.in</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Styling */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                        © {currentYear} INVESTMENT OPTIONS. ALL RIGHTS RESERVED | <span className="text-primary/40">Designed by <a href="#" className="hover:text-primary transition-colors">AinaTech Services LLP</a></span>
                    </p>
                    <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest">
                        <Link to="/privacy-policy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/disclaimer" className="text-white/40 hover:text-white transition-colors">Disclaimer</Link>
                        <Link to="/commission-disclosure" className="text-white/40 hover:text-white transition-colors">Commission Disclosure</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
