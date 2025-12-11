import React, { useState } from 'react';
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaPaperPlane,
} from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        preferredTime: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.mobile || !formData.email) {
            setFormStatus({
                type: 'error',
                message: 'Please fill in all required fields.',
            });
            return;
        }

        // Simulate form submission
        setFormStatus({
            type: 'success',
            message: 'Thank you! We will contact you within 24 working hours.',
        });

        // Reset form
        setFormData({
            name: '',
            mobile: '',
            email: '',
            city: '',
            preferredTime: '',
            message: '',
        });

        // Clear message after 5 seconds
        setTimeout(() => {
            setFormStatus({ type: '', message: '' });
        }, 5000);
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Address',
            content: '3rd Floor, Novem Square Building, 307-308, Amin Marg, off 150 Feet Ring Road, Bharatvan Society, Nalanda Society, Rajkot, Gujarat 360001',
            link: null,
        },
        {
            icon: FaPhone,
            title: 'Phone',
            content: '+91 98252 15325',
            link: 'tel:+919825215325',
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            content: 'info@investmentoptions.in',
            link: 'mailto:info@investmentoptions.in',
        },
        {
            icon: FaWhatsapp,
            title: 'WhatsApp',
            content: 'Chat with us',
            link: 'https://wa.me/919825215325',
        },
    ];

    return (
        <section className="section-container bg-gradient-to-b from-secondary-50 to-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                    Get In Touch
                </span>
                <h2 className="mt-2 mb-4">
                    Start Your Investment Journey Today
                </h2>
                <p className="text-gray-600 text-lg">
                    Have questions or ready to start investing? Reach out to us and our
                    team will get back to you within 24 working hours.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft 
                hover:shadow-soft-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 
                flex items-center justify-center flex-shrink-0 shadow-md">
                                    <info.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-500 mb-1">
                                        {info.title}
                                    </h4>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target={info.link.startsWith('http') ? '_blank' : undefined}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-600 hover:text-accent-teal transition-colors duration-300"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600">{info.content}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-xl overflow-hidden h-64 shadow-soft">
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <div className="text-center">
                                <FaMapMarkerAlt className="h-12 w-12 mx-auto mb-2" />
                                <p className="text-sm">Google Maps Integration</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-2xl shadow-soft-lg p-8">
                    <h3 className="text-2xl font-bold text-primary-500 mb-6">
                        Send Us a Message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                transition-all duration-300"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                  transition-all duration-300"
                                    placeholder="10-digit mobile number"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                  transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                  transition-all duration-300"
                                    placeholder="Your city"
                                />
                            </div>

                            <div>
                                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Contact Time
                                </label>
                                <select
                                    id="preferredTime"
                                    name="preferredTime"
                                    value={formData.preferredTime}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                  transition-all duration-300"
                                >
                                    <option value="">Select time</option>
                                    <option value="morning">Morning (9 AM - 12 PM)</option>
                                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                    <option value="evening">Evening (4 PM - 7 PM)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message / Investment Need
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                focus:ring-2 focus:ring-primary-500 focus:border-transparent 
                transition-all duration-300 resize-none"
                                placeholder="Tell us about your investment goals or questions..."
                            ></textarea>
                        </div>

                        {/* Privacy Note */}
                        <p className="text-xs text-gray-500">
                            <strong>Privacy:</strong> Your information is secure and will only be used
                            to contact you regarding your investment inquiry.
                        </p>

                        {/* Status Message */}
                        {formStatus.message && (
                            <div
                                className={`p-4 rounded-lg ${formStatus.type === 'success'
                                    ? 'bg-green-50 text-green-700 border border-green-200'
                                    : 'bg-red-50 text-red-700 border border-red-200'
                                    }`}
                            >
                                {formStatus.message}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full btn-primary flex items-center justify-center space-x-2"
                        >
                            <span>Send Message</span>
                            <FaPaperPlane className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
