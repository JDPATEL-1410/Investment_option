import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa';
import PageHero from '../components/PageHero';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Phone',
            details: ['+91 1234567890', '+91 0987654321'],
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            details: ['info@investmentoptions.com', 'support@investmentoptions.com'],
            color: 'from-purple-500 to-purple-600'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Office Address',
            details: ['3rd Floor, Novem Square Building, 307-308, Amin Marg', 'Rajkot, Gujarat 360001'],
            color: 'from-teal-500 to-teal-600'
        },
        {
            icon: FaClock,
            title: 'Business Hours',
            details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
            color: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <PageHero
                title="Get in"
                highlightText="Touch"
                description="Have questions? We're here to help you achieve your financial goals"
                imageSrc="/contact_header.png"
                showImage={true}
            />

            {/* Contact Info Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-primary-50 hover:to-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} text-white mb-4 transform group-hover:scale-110 transition-transform`}>
                                    <info.icon className="text-2xl" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {info.title}
                                </h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Contact Form & Map */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send us a{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                    Message
                                </span>
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors"
                                        placeholder="Investment Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
                                        placeholder="Tell us about your investment goals..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map & Social */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4379.254361457496!2d70.7745265!3d22.284003800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb1e458a4b65%3A0xa7dff436654c6f5a!2sNovem%20Square!5e1!3m2!1sen!2sin!4v1765444046590!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, borderRadius: '1rem' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location - Novem Square, Rajkot"
                                ></iframe>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Connect with us
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Follow us on social media for the latest updates and financial insights
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://wa.me/911234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                                    >
                                        <FaTwitter className="text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
