import React from 'react';
import PageHero from '../components/PageHero';

const PrivacyPolicy = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="Privacy"
                highlightText="Policy"
                description="Your privacy is important to us. Learn how we collect, use, and protect your information."
                showImage={false}
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
                            <p className="text-sm text-gray-600 mb-0">
                                <strong>Last Updated:</strong> December 11, 2024
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600 mb-6">
                            We collect information that you provide directly to us, including:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Personal identification information (Name, email address, phone number, etc.)</li>
                            <li>Financial information necessary for investment services</li>
                            <li>KYC (Know Your Customer) documents as required by regulatory authorities</li>
                            <li>Communication preferences and feedback</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-600 mb-6">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Provide, maintain, and improve our investment services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments, questions, and customer service requests</li>
                            <li>Comply with legal and regulatory requirements</li>
                            <li>Detect, prevent, and address fraud and security issues</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                        <p className="text-gray-600 mb-6">
                            We may share your information in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>With mutual fund companies and asset management companies for processing investments</li>
                            <li>With regulatory authorities (SEBI, AMFI) as required by law</li>
                            <li>With service providers who perform services on our behalf</li>
                            <li>With your consent or at your direction</li>
                            <li>To comply with legal obligations or protect rights and safety</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                        <p className="text-gray-600 mb-8">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                        <p className="text-gray-600 mb-6">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Access and receive a copy of your personal information</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information (subject to legal requirements)</li>
                            <li>Object to processing of your information</li>
                            <li>Withdraw consent at any time</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                        <p className="text-gray-600 mb-8">
                            We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Changes to Privacy Policy</h2>
                        <p className="text-gray-600 mb-8">
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                        <p className="text-gray-600 mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@investmentoptions.in</p>
                            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 98252 15325</p>
                            <p className="text-gray-700"><strong>Address:</strong> 3rd Floor, Novem Square Building, 307-308, Amin Marg, Rajkot, Gujarat 360001</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
