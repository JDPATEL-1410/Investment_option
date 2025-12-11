import React from 'react';
import PageHero from '../components/PageHero';

const TermsConditions = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="Terms &"
                highlightText="Conditions"
                description="Please read these terms and conditions carefully before using our services"
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

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 mb-8">
                            By accessing and using Investment Options' services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                        <p className="text-gray-600 mb-6">
                            Investment Options is an AMFI registered mutual fund distributor providing:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Mutual fund investment advisory and distribution services</li>
                            <li>Systematic Investment Plan (SIP) facilitation</li>
                            <li>Financial planning and goal-based investment guidance</li>
                            <li>Portfolio review and rebalancing recommendations</li>
                            <li>Investment calculators and educational resources</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
                        <p className="text-gray-600 mb-6">
                            To use our services, you must:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Be at least 18 years of age</li>
                            <li>Be a resident of India</li>
                            <li>Have the legal capacity to enter into binding contracts</li>
                            <li>Provide accurate and complete information during registration</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Investment Risks</h2>
                        <p className="text-gray-600 mb-6">
                            You acknowledge and understand that:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Mutual fund investments are subject to market risks</li>
                            <li>Past performance is not indicative of future results</li>
                            <li>The value of investments may go up or down</li>
                            <li>You should read all scheme-related documents carefully before investing</li>
                            <li>Investment decisions are your sole responsibility</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                        <p className="text-gray-600 mb-6">
                            As a user, you agree to:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Provide accurate and up-to-date information</li>
                            <li>Maintain the confidentiality of your account credentials</li>
                            <li>Notify us immediately of any unauthorized use of your account</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Not use our services for any illegal or unauthorized purpose</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Fees and Charges</h2>
                        <p className="text-gray-600 mb-8">
                            We do not charge any fees for our advisory services. However, mutual fund schemes may have their own expense ratios, exit loads, and other charges as specified in their offer documents. We may receive commissions from mutual fund companies for distribution services.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-600 mb-8">
                            Investment Options shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services or any investment decisions made based on our recommendations. Our liability is limited to the extent permitted by applicable law.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                        <p className="text-gray-600 mb-8">
                            All content, trademarks, logos, and intellectual property on our website and materials are owned by Investment Options or licensed to us. You may not use, reproduce, or distribute any content without our prior written permission.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Termination</h2>
                        <p className="text-gray-600 mb-8">
                            We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                        <p className="text-gray-600 mb-8">
                            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Rajkot, Gujarat.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                        <p className="text-gray-600 mb-8">
                            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                        <p className="text-gray-600 mb-4">
                            For questions about these Terms and Conditions, please contact us:
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

export default TermsConditions;
