import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, Database, Bell } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: Database,
            title: 'Information We Collect',
            content: [
                'Personal identification information (Name, email address, phone number)',
                'Financial information necessary for investment advisory services',
                'Usage data and analytics to improve our services',
                'Communication preferences and interaction history',
            ]
        },
        {
            icon: Lock,
            title: 'How We Use Your Information',
            content: [
                'To provide and maintain our investment advisory services',
                'To notify you about changes to our services',
                'To provide customer support and respond to inquiries',
                'To send periodic emails regarding your investments',
                'To improve our website and services based on your feedback',
            ]
        },
        {
            icon: Shield,
            title: 'Data Protection',
            content: [
                'We implement industry-standard security measures to protect your data',
                'Your personal information is stored on secure servers',
                'We use encryption for sensitive financial data transmission',
                'Access to your information is restricted to authorized personnel only',
                'Regular security audits and updates are performed',
            ]
        },
        {
            icon: Eye,
            title: 'Information Sharing',
            content: [
                'We do not sell, trade, or rent your personal information to third parties',
                'Information may be shared with AMFI and regulatory bodies as required by law',
                'We may share data with trusted service providers who assist in our operations',
                'All third parties are bound by confidentiality agreements',
            ]
        },
        {
            icon: UserCheck,
            title: 'Your Rights',
            content: [
                'Right to access your personal information',
                'Right to request correction of inaccurate data',
                'Right to request deletion of your data (subject to legal requirements)',
                'Right to opt-out of marketing communications',
                'Right to lodge a complaint with relevant authorities',
            ]
        },
        {
            icon: Bell,
            title: 'Cookies and Tracking',
            content: [
                'We use cookies to enhance user experience',
                'Analytics tools help us understand website usage',
                'You can control cookie preferences through your browser settings',
                'Essential cookies are necessary for website functionality',
            ]
        },
    ];

    return (
        <>
            <Helmet>
                <title>Privacy Policy - Investment Options</title>
                <meta
                    name="description"
                    content="Privacy Policy for Investment Options - Learn how we collect, use, and protect your personal information."
                />
            </Helmet>

            <PageHeader
                badge="Last Updated: Jan 2026"
                title="Privacy Policy"
                description="Your privacy is important to us. This policy outlines how we collect, use, and protect your information as an AMFI Registered Mutual Fund Distributor."
                icon={Shield}
            />

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-5xl">
                    {/* Introduction */}
                    <div className="mb-16">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Investment Options ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services as an AMFI Registered Mutual Fund Distributor.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <section.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-navy mb-4">{section.title}</h2>
                                        <ul className="space-y-3">
                                            {section.content.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    <span className="text-gray-600 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Information */}
                    <div className="mt-16 bg-navy text-white rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                        </p>
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 space-y-2">
                            <p className="text-white">Email: info@investmentoptions.co.in</p>
                            <p className="text-white">Phone: +91 98252 15325</p>
                            <p className="text-white">Address: 3rd Floor, Novem Square, 307-308, Amin Marg, Rajkot - 360001</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
