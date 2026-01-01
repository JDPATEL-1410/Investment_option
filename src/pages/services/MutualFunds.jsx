import PageTemplate from '../../components/PageTemplate';
import { Layers, TrendingUp, ShieldCheck, History, ArrowRight, CheckCircle2 } from 'lucide-react';

const MutualFunds = () => {
    return (
        <PageTemplate
            title="Mutual Funds"
            subtitle="Professional management for your hard-earned money."
            description="Expert guidance in selecting the right mutual fund schemes across Equity, Debt, and Hybrid categories."
            icon={Layers}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Simplifying Mutual Funds</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        With over 2,500 mutual fund schemes in India, choosing the "best" fund isn't about looking at yesterday's top performers. It's about finding consistency, risk-adjusted returns, and alignment with your goals.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Equity Funds', desc: 'Long-term wealth creation by investing in stocks across Large, Mid, and Small caps.', icon: TrendingUp },
                            { title: 'Debt Funds', desc: 'Stable returns with lower volatility compared to equity, ideal for short to medium term.', icon: ShieldCheck },
                            { title: 'Hybrid Funds', desc: 'The best of both worlds—combining equity for growth and debt for stability.', icon: Layers },
                            { title: 'Index Funds', desc: 'Low-cost passive investing that tracks major market indices like Nifty 50.', icon: History }
                        ].map((item, i) => (
                            <div key={i} className="card group hover:border-primary/30 transition-all">
                                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 italic underline decoration-primary/30">Why Invest Through Us?</h3>
                            <div className="space-y-6">
                                {[
                                    { title: 'Research-First Selection', desc: 'We filter funds based on rolling returns, standard deviation, and Sharpe ratio.' },
                                    { title: 'Conflict-Free Advice', desc: 'Our recommendations are aligned with your risk profile, not fund house incentives.' },
                                    { title: 'Regular Portfoio Audit', desc: 'We monitor your funds every quarter and recommend exits if performance lags.' }
                                ].map((point, i) => (
                                    <div key={i} className="flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white">{point.title}</h4>
                                            <p className="text-gray-400 text-sm">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
                            <h4 className="text-xl font-bold mb-6">Our Filter Criteria</h4>
                            <ul className="space-y-4 text-gray-300 font-medium">
                                <li className="flex justify-between"><span>Rolling Returns (5Y+)</span> <span className="text-primary">Top 25%</span></li>
                                <li className="flex justify-between"><span>Expense Ratio</span> <span className="text-primary">Below Avg</span></li>
                                <li className="flex justify-between"><span>Fund Manager Tenure</span> <span className="text-primary">3Y+</span></li>
                                <li className="flex justify-between"><span>Alpha over Benchmark</span> <span className="text-primary">Positive</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-8">The Investment Process</h3>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { step: '01', title: 'KYC & Onboarding', desc: 'Paperless digital onboarding with top-tier security.' },
                            { step: '02', title: 'Strategy Design', desc: 'Customizing SIP/Lumpsum amounts based on cashflow.' },
                            { step: '03', title: 'Execution', desc: 'Deployment through our robust investment platform.' }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-black text-gray-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-10">{item.step}</div>
                                <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <h3 className="text-3xl font-bold text-navy mb-4 italic transition-transform group-hover:scale-105">Ready for professional fund management?</h3>
                    <p className="text-navy/70 mb-8 font-medium">Join 5,000+ families who trust us with their mutual fund investments.</p>
                    <a href="/contact" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all">Start Your Portfolio</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default MutualFunds;
