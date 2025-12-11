import React from 'react';
import PageHero from '../components/PageHero';

const Disclaimers = () => {
    return (
        <div className="pt-20">
            <PageHero
                title="Important"
                highlightText="Disclaimers"
                description="Please read these disclaimers carefully before making any investment decisions"
                showImage={false}
            />

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
                            <p className="text-sm text-gray-700 mb-0">
                                <strong className="text-red-700">Important Notice:</strong> Please read all disclaimers carefully. Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">1. General Disclaimer</h2>
                        <p className="text-gray-600 mb-8">
                            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Investment Risk Disclaimer</h2>
                        <p className="text-gray-600 mb-6">
                            <strong>Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.</strong>
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Past performance is not indicative of future results</li>
                            <li>The value of investments and income from them may go down as well as up</li>
                            <li>Investors may not get back the amount originally invested</li>
                            <li>Investment in mutual funds involves investment risks such as trading volumes, settlement risk, liquidity risk, default risk including possible loss of principal</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">3. No Financial Advice</h2>
                        <p className="text-gray-600 mb-8">
                            The content on this website is not intended to be and does not constitute financial advice, investment advice, trading advice, or any other type of advice. You should not make any investment decision based solely on the information provided on this website. We recommend that you conduct your own research and consult with qualified financial advisors before making any investment decisions.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Calculator Disclaimer</h2>
                        <p className="text-gray-600 mb-8">
                            The calculators provided on this website are for illustrative purposes only. The results are based on assumed rates of return and do not represent actual investment results. Actual returns may vary significantly based on market conditions, fund performance, and other factors. These calculators should not be used as the sole basis for making investment decisions.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Third-Party Content</h2>
                        <p className="text-gray-600 mb-8">
                            Our website may contain links to third-party websites or content from third-party sources. We do not endorse, warrant, or assume responsibility for the accuracy or reliability of any information offered by third-party websites. We are not responsible for any loss or damage arising from your use of third-party content.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Regulatory Compliance</h2>
                        <p className="text-gray-600 mb-6">
                            Investment Options is registered with AMFI (Association of Mutual Funds in India) as a mutual fund distributor. Our services are subject to regulations by:
                        </p>
                        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                            <li>Securities and Exchange Board of India (SEBI)</li>
                            <li>Association of Mutual Funds in India (AMFI)</li>
                            <li>Other applicable regulatory authorities</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">7. No Guarantee of Returns</h2>
                        <p className="text-gray-600 mb-8">
                            We do not guarantee any specific returns or performance of mutual fund schemes. All investments are subject to market risks, and returns are not guaranteed. Historical performance data, if provided, is for reference purposes only and should not be considered as a guarantee of future performance.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                        <p className="text-gray-600 mb-8">
                            In no event shall Investment Options, its directors, employees, or agents be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the website or our services, including but not limited to investment losses, loss of profits, or loss of data.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Accuracy of Information</h2>
                        <p className="text-gray-600 mb-8">
                            While we make every effort to ensure that the information on our website is accurate and up-to-date, we do not warrant the accuracy, completeness, or timeliness of the information. Market conditions change rapidly, and information may become outdated. We reserve the right to make changes to the website content at any time without notice.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Tax Implications</h2>
                        <p className="text-gray-600 mb-8">
                            Tax laws are subject to change, and tax implications of investments may vary based on individual circumstances. The information provided on this website regarding tax benefits is general in nature and should not be considered as tax advice. We recommend consulting with a qualified tax advisor for personalized tax planning.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Investor Grievances</h2>
                        <p className="text-gray-600 mb-4">
                            For any grievances or complaints, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mb-8">
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@investmentoptions.in</p>
                            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 98252 15325</p>
                            <p className="text-gray-700 mb-4"><strong>Address:</strong> 3rd Floor, Novem Square Building, 307-308, Amin Marg, Rajkot, Gujarat 360001</p>
                            <p className="text-gray-600 text-sm">
                                If your grievance is not resolved within 30 days, you may escalate it to SEBI's SCORES portal (https://scores.gov.in)
                            </p>
                        </div>

                        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                            <p className="text-sm text-gray-700 mb-2">
                                <strong className="text-yellow-700">Statutory Disclaimer:</strong>
                            </p>
                            <p className="text-sm text-gray-600">
                                Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Disclaimers;
