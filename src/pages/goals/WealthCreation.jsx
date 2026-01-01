import PageTemplate from '../../components/PageTemplate';
import { TrendingUp, BarChart3, Rocket, Umbrella, ArrowRight, Zap } from 'lucide-react';

const WealthCreation = () => {
    return (
        <PageTemplate
            title="Wealth Creation"
            subtitle="Don't just save money, make your money work as hard as you do."
            description="Aggressive and balanced mutual fund strategies to build substantial long-term multi-generational wealth."
            icon={TrendingUp}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-4xl font-bold text-navy mb-8 italic">The Art of <span className="text-primary italic">Accumulation</span></h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                        Wealth creation is not about one-time luck; it's about persistent discipline and choosing the right asset classes that provide inflation-beating returns.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Hyper Growth', desc: 'Focus on small-cap and thematic funds for long horizons.', icon: Rocket },
                            { title: 'Diversified Alpha', desc: 'Active management to beat the benchmark indices.', icon: Zap },
                            { title: 'Asset Rotation', desc: 'Dynamic allocation between equity and debt based on P/E.', icon: RefreshCcw }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <item.icon className="w-7 h-7 text-navy" />
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-3">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-bold mb-8 italic">The Power of <br /><span className="text-primary italic">15-15-15 Rule</span></h3>
                            <div className="space-y-6 text-gray-400 text-lg">
                                <p>Investing <span className="text-white font-bold">₹15,000</span> every month for <span className="text-white font-bold">15 years</span> at an expected <span className="text-white font-bold">15% return</span> can potentially build a corpus of over <span className="text-primary font-bold text-2xl">₹1 Crore</span>.</p>
                                <p>Increase this to 30 years? The corpus can cross <span className="text-primary font-bold text-2xl">₹10 Crores</span>. That's the compounding magic we want for you.</p>
                            </div>
                            <div className="mt-10">
                                <a href="/calculators/sip" className="btn-primary">Test the Math</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Rule of 72</p>
                                <p className="text-xs text-gray-500">How fast your money doubles at current ROI.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Compounding</p>
                                <p className="text-xs text-gray-500">Returns on your returns over time.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Volatility</p>
                                <p className="text-xs text-gray-500">The price you pay for higher returns.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Patience</p>
                                <p className="text-xs text-gray-500">The ultimate skill for wealth creators.</p>
                            </div>
                        </div>
                    </div>
                    {/* Background visual */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                </section>

                <section>
                    <h3 className="text-3xl font-bold text-navy mb-8">Our Wealth Creation Framework</h3>
                    <div className="space-y-6">
                        <div className="flex gap-8 items-start p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                            <BarChart3 className="w-10 h-10 text-primary flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-navy mb-2">Alpha Generation Portfolio</h4>
                                <p className="text-gray-500">We identify funds with a history of consistent outperformance over the benchmark through varied market cycles.</p>
                            </div>
                        </div>
                        <div className="flex gap-8 items-start p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                            <Umbrella className="w-10 h-10 text-navy flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-navy mb-2">Downside Protection</h4>
                                <p className="text-gray-500">Managing risk is as important as chasing returns. We ensure your portfolio doesn't fall as deep as the market during corrections.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20">
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2 italic">Ready to accelerate your wealth?</h4>
                        <p className="text-white/80 font-bold">Start your Journey with a Portfolio Review today.</p>
                    </div>
                    <a href="/contact" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2">
                        Get Started <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </PageTemplate>
    );
};

// Internal icon for rotation
const RefreshCcw = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
    </svg>
);

export default WealthCreation;
