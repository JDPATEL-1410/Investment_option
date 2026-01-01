import PageTemplate from '../../components/PageTemplate';
import { Coffee, TrendingDown, ShieldCheck, History, ArrowRight, CheckCircle2 } from 'lucide-react';

const RetirementPlanning = () => {
    return (
        <PageTemplate
            title="Retirement Planning"
            subtitle="The art of creating an unshakeable income stream."
            description="Specialized advisory to build a retirement corpus that outlives you, providing a dignified and inflation-protected lifestyle."
            icon={Coffee}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6 italic underline decoration-primary/30">Your Second Innings</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Retirement planning in the 21st century is challenging. With no government pension and medical inflation at 12-14%, your savings need to grow even after you stop working. We help you transition from the <span className="text-navy font-bold">Accumulation Phase</span> to the <span className="text-primary font-bold">Distribution Phase</span>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="card-navy group">
                            <History className="w-12 h-12 text-primary mb-6 group-hover:rotate-[-45deg] transition-transform" />
                            <h3 className="text-2xl font-bold mb-4 italic">SWP Strategy</h3>
                            <p className="text-gray-400 mb-6">Systematic Withdrawal Plan (SWP) allows you to draw a regular monthly "salary" from your corpus while the balance continues to grow tax-efficiently.</p>
                            <a href="/calculators/retirement" className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-widest">
                                Run Projections <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="card-gradient group">
                            <ShieldCheck className="w-12 h-12 text-navy mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-navy mb-4 italic">Bucket Strategy</h3>
                            <p className="text-gray-500 mb-6">Dividing your corpus into Short, Medium, and Long-term buckets to manage liquidity and equity exposure risks during retirement.</p>
                            <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest">
                                Advisory Framework <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section className="bg-gray-50 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-navy mb-6 italic">The Three <br /><span className="text-primary italic">Retirement Risks</span></h3>
                            <div className="space-y-6">
                                {[
                                    { title: 'Longevity Risk', desc: 'Outliving your money due to better medical care and longer life expectancy.' },
                                    { title: 'Inflation Risk', desc: 'Expenses doubling every 8-10 years, making fixed pensions inadequate.' },
                                    { title: 'Market Volatility Risk', desc: 'A major market crash just before or during early retirement years.' }
                                ].map((risk, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">!</div>
                                        <div>
                                            <h4 className="font-bold text-navy">{risk.title}</h4>
                                            <p className="text-sm text-gray-500">{risk.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-navy p-10 rounded-[2.5rem] text-white">
                            <h4 className="text-xl font-bold mb-8 italic">Our Solutions</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <p className="text-sm font-medium">Inflation-Proof Pension Planning</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <p className="text-sm font-medium">Estate & Succession Advisory</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <p className="text-sm font-medium">Post-Retirement Medical Fund</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <p className="text-sm font-medium">Tax-Free Income Streams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <h3 className="text-3xl font-bold text-navy mb-4 italic">Build a corpus that never ends.</h3>
                    <p className="text-navy/60 mb-8 font-medium">Let's calculate your personalized "Retirement Number" today.</p>
                    <a href="/contact" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Free Retirement Audit</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default RetirementPlanning;
