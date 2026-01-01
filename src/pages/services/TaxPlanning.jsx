import PageTemplate from '../../components/PageTemplate';
import { Landmark, TrendingUp, ShieldCheck, Calculator, ArrowRight, Zap } from 'lucide-react';

const TaxPlanning = () => {
    return (
        <PageTemplate
            title="Tax Planning"
            subtitle="Don't let taxes eat your wealth."
            description="Strategic investment advice to minimize your tax liability while maximizing your growth potential through ELSS and other tax-saving instruments."
            icon={Landmark}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Tax Planning vs. Tax Saving</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Saving tax is a one-time event in March; Tax Planning is a year-round strategy. We help you utilize Section 80C, 10(10D), and Capital Gains optimization to ensure more of your money stays in your pocket.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/20 group">
                            <Zap className="w-12 h-12 text-primary mb-6 transition-transform group-hover:scale-110" />
                            <h3 className="text-2xl font-bold text-navy mb-4">ELSS: The Tax Winner</h3>
                            <p className="text-gray-500 mb-6">Equity Linked Savings Schemes (ELSS) have the shortest lock-in (3 years) and the highest growth potential among all 80C options.</p>
                            <a href="/contact" className="text-primary font-bold flex items-center gap-2 hover:underline">Learn about ELSS <ArrowRight className="w-4 h-4" /></a>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-200">
                            <Calculator className="w-12 h-12 text-navy mb-6" />
                            <h3 className="text-2xl font-bold text-navy mb-4">Capital Gains Harvesting</h3>
                            <p className="text-gray-500">Systematically booking ₹1 Lakh of Equity Capital Gains every year to enjoy 0% tax under current laws.</p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section className="bg-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 italic">Year-Round <br /><span className="text-primary italic">Tax Strategy</span></h3>
                            <div className="space-y-4">
                                {[
                                    'Maximizing 80C through ELSS/PPF',
                                    'Optimizing 80D for Health Insurance',
                                    'Utilizing NPS for additional ₹50,000 benefit',
                                    'Tax-efficient withdrawal strategies for retirees'
                                ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 italic">
                                        <div className="w-8 h-8 rounded-full bg-primary text-navy flex items-center justify-center font-bold text-xs">{i + 1}</div>
                                        <p className="text-gray-300 font-medium text-sm">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-2xl">
                            <h4 className="text-xl font-bold text-navy mb-6">Benefit Comparison</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl">
                                    <span className="text-sm font-bold text-gray-500">Traditional FD Tax</span>
                                    <span className="text-red-500 font-bold">30% (As per Slab)</span>
                                </div>
                                <div className="flex justify-between items-center bg-primary/10 p-4 rounded-xl border border-primary/20">
                                    <span className="text-sm font-bold text-navy">Long Term Cap Gains</span>
                                    <span className="text-primary font-bold">12.5%*</span>
                                </div>
                                <p className="text-[10px] text-gray-400 mt-4">*Tax laws are subject to change. Consult your tax advisor.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-navy mb-10 italic">Why Plan Taxes with Us?</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Growth Aligned', desc: 'We don\'t just save tax; we ensure your tax-saving investments earn high ROI.', icon: TrendingUp },
                            { title: 'Goal Integration', desc: 'Your tax-saving instruments become part of your long-term goal corpus.', icon: ShieldCheck },
                            { title: 'Paperless Flow', desc: 'Instant 80C investment certificates for your HR/Tax filing.', icon: Calculator }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6">
                                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <h3 className="text-3xl font-bold text-navy mb-4 italic">Stop the Tax Drainage.</h3>
                    <p className="text-navy/60 mb-8 font-medium italic">"A rupee saved in tax is a rupee earned for your retirement."</p>
                    <a href="/contact" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Download Tax Ready Guide</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default TaxPlanning;
