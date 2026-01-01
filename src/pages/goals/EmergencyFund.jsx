import PageTemplate from '../../components/PageTemplate';
import { ShieldAlert, Umbrella, Zap, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

const EmergencyFund = () => {
    return (
        <PageTemplate
            title="Emergency Fund"
            subtitle="The ultimate safety net for life's unexpected turns."
            description="Build a liquid and secure financial buffer to protect your long-term investments during crises."
            icon={ShieldAlert}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Why an Emergency Fund is Step Zero?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Before you start building wealth, you must protect it. An emergency fund ensures that during job losses, medical emergencies, or urgent house repairs, you don't have to break your long-term SIPs or take high-interest loans.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                            <Umbrella className="w-12 h-12 text-primary mb-6 transition-transform group-hover:-translate-y-2" />
                            <h3 className="text-2xl font-bold mb-4">The "6-Month" Rule</h3>
                            <p className="text-gray-400 leading-relaxed">Most financial experts recommend keeping at least 6 months of your unavoidable monthly expenses in a liquid fund.</p>
                            <div className="mt-8 text-primary font-bold flex items-center gap-2">
                                Calculate your buffer <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="bg-primary/5 rounded-[2.5rem] p-10 border-2 border-primary/20 flex flex-col justify-center">
                            <h4 className="text-xl font-bold text-navy mb-4 italic">Example Calculation:</h4>
                            <div className="space-y-3 font-medium text-navy/70">
                                <div className="flex justify-between border-b border-navy/5 pb-2"><span>Monthly Expenses:</span> <span className="text-navy font-bold">₹50,000</span></div>
                                <div className="flex justify-between border-b border-navy/5 pb-2"><span>EMIs:</span> <span className="text-navy font-bold">₹20,000</span></div>
                                <div className="flex justify-between border-b border-navy/5 pb-2"><span>Insurance:</span> <span className="text-navy font-bold">₹5,000</span></div>
                                <div className="flex justify-between pt-2"><span className="text-lg font-bold text-navy uppercase">Total Goal:</span> <span className="text-2xl font-bold text-primary">₹4,50,000</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-8 italic">Where to park your <span className="text-primary italic">Safety Net?</span></h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Liquid Funds', desc: 'Instant redemption (T+1) with better returns than savings accounts.', icon: Zap },
                            { title: 'Overnight Funds', desc: 'Lowest possible risk with daily liquidity.', icon: Clock },
                            { title: 'Arbitrage Funds', desc: 'Tax-efficient alternative for those in the 30% tax bracket.', icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="card-gradient group">
                                <item.icon className="w-10 h-10 text-navy mb-4 group-hover:text-primary transition-colors" />
                                <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-6">Our Recommendation</h3>
                    <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center flex-shrink-0 animate-pulse">
                                <ShieldAlert className="w-16 h-16 text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-navy mb-4">Don't chase high returns with this fund.</h4>
                                <p className="text-gray-500 leading-relaxed italic font-medium">
                                    The primary objective of an emergency fund is <span className="text-navy font-bold">Liquidity & Safety</span>, not growth. We ensure your emergency corpus is invested in high-quality debt instruments that are available when you need them the most.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-navy p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                    <h3 className="text-3xl font-bold text-white mb-4 italic">Is your safety net strong enough?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Let's audit your current liquidity and build a robust emergency buffer.</p>
                    <a href="/contact" className="btn-primary">Audit My Emergency Fund</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default EmergencyFund;
