import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Scale, UserX, RefreshCw, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Terms = () => {
    const sections = [
        {
            icon: FileText,
            title: 'Acceptance of Terms',
            content: [
                'By accessing and using this website, you accept and agree to be bound by these Terms of Use',
                'If you do not agree to these terms, please do not use our website or services',
                'We reserve the right to modify these terms at any time',
                'Continued use of the website constitutes acceptance of modified terms',
            ]
        },
        {
            icon: Globe,
            title: 'Use of Services',
            content: [
                'Our services are provided for informational and advisory purposes only',
                'You must be 18 years or older to use our services',
                'You agree to provide accurate and complete information',
                'You are responsible for maintaining the confidentiality of your account',
                'You agree not to misuse our website or services',
            ]
        },
        {
            icon: AlertCircle,
            title: 'Investment Disclaimer',
            content: [
                'Mutual Fund investments are subject to market risks',
                'Past performance is not indicative of future results',
                'Please read all scheme-related documents carefully before investing',
                'Investment decisions should be made based on your own judgment',
                'We are not responsible for any investment losses',
            ]
        },
        {
            icon: Scale,
            title: 'Intellectual Property',
            content: [
                'All content on this website is owned by Investment Options',
                'You may not reproduce, distribute, or modify any content without permission',
                'Trademarks and logos are property of their respective owners',
                'Unauthorized use of our intellectual property is prohibited',
            ]
        },
        {
            icon: UserX,
            title: 'Limitation of Liability',
            content: [
                'We provide services on an "as is" and "as available" basis',
                'We do not guarantee uninterrupted or error-free service',
                'We are not liable for any indirect, incidental, or consequential damages',
                'Our liability is limited to the maximum extent permitted by law',
                'You use our services at your own risk',
            ]
        },
        {
            icon: RefreshCw,
            title: 'Termination',
            content: [
                'We reserve the right to terminate or suspend access to our services',
                'Termination may occur without prior notice for violations of these terms',
                'Upon termination, your right to use the services will immediately cease',
                'Provisions that should survive termination will remain in effect',
            ]
        },
    ];

    return (
        <>
            <Helmet>
                <title>Terms of Use - Investment Options</title>
                <meta
                    name="description"
                    content="Terms of Use for Investment Options - Read our terms and conditions for using our website and services."
                />
            </Helmet>

            <PageHeader
                badge="Governance"
                title="Terms of Use"
                description="Please read these terms carefully before using our website and services. These terms outline your rights and responsibilities."
                icon={Scale}
            />

            {/* Content Section */}
            <section className="section bg-white">
                <div className="container-custom max-w-5xl">
                    {/* Introduction */}
                    <div className="mb-16">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            These Terms of Use ("Terms") govern your access to and use of the Investment Options website and services. Investment Options is an AMFI Registered Mutual Fund Distributor (ARN-123456). By using our website, you agree to comply with these Terms.
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

                    {/* Additional Sections */}
                    <div className="mt-12 space-y-8">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-navy mb-4">Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-navy mb-4">SEBI/AMFI Compliance</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Investment Options operates in compliance with SEBI (Securities and Exchange Board of India) regulations and AMFI (Association of Mutual Funds in India) guidelines. All our services and recommendations adhere to regulatory requirements.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-navy mb-4">Severability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                            </p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 bg-navy text-white rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            If you have any questions about these Terms of Use, please contact us:
                        </p>
                        <div className="space-y-2">
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

export default Terms;
