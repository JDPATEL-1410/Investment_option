import PageTemplate from '../../components/PageTemplate';
import { Home, Key, Wallet, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

const DreamHome = () => {
    return (
        <PageTemplate
            title="Dream Home"
            subtitle="Build a fund for your foundation, one SIP at a time."
            description="Intelligent financial planning to fund your down payment and reduce your home loan burden."
            icon={Home}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6 italic underline decoration-primary/30">Your Vision, Our Strategy</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Buying a home is often the largest financial commitment in a lifetime. While home loans are available, a larger down payment can significantly reduce your EMI burden and total interest paid over 20 years.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card-navy group">
                            <Key className="w-12 h-12 text-primary mb-6 transition-transform group-hover:rotate-12" />
                            <h3 className="text-2xl font-bold mb-4">Down Payment Fund</h3>
                            <p className="text-gray-400 mb-6">Build a corpus specifically for the 20-25% down payment and registration costs using growth-oriented mutual funds.</p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="card bg-gray-50 group border-2 border-transparent hover:border-primary/20 transition-all">
                            <Landmark className="w-12 h-12 text-navy mb-6" />
                            <h3 className="text-2xl font-bold text-navy mb-4">Loan EMI Bridge</h3>
                            <p className="text-gray-500 mb-6">Set up a parallel SIP during your loan tenure to eventually prepay your home loan and save lakhs in interest.</p>
                            <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest">
                                ROI Analysis <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-8 text-center italic">How we help you buy your <span className="text-primary italic">Dream Home</span></h3>
                    <div className="space-y-4">
                        {[
                            { title: 'Projected Cost Mapping', desc: 'Estimating the real estate value in your preferred locality 5-7 years from now.' },
                            { title: 'Tax Benefit Optimization', desc: 'Mapping your home loan repayment with Section 24 and 80C benefits.' },
                            { title: 'Interest Savings Strategy', desc: 'Implementing a "Home Loan Offsetting" strategy with equity investments.' },
                            { title: 'Asset Rebalancing', desc: 'Moving your home fund to safety as the purchase date approaches.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-navy" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy text-xl mb-1">{item.title}</h4>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-navy rounded-[3rem] p-12 text-white relative overflow-hidden">
                    <div className="relative z-10 text-center max-w-2xl mx-auto">
                        <Wallet className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                        <h3 className="text-3xl font-bold mb-6">Smart Home Purchase Example</h3>
                        <p className="text-gray-400 mb-10 italic">"By investing just 10% of your EMI amount in a separate SIP, you can potentially pay off a 20-year home loan in just 14 years."</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/calculators/emi" className="bg-primary text-navy px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">EMI Calculator</a>
                            <a href="/contact" className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all border border-white/10">Plan My Prepayment</a>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default DreamHome;
