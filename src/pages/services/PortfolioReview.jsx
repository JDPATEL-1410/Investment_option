import PageTemplate from '../../components/PageTemplate';
import { Search, BarChart2, ShieldCheck, RefreshCcw, ArrowRight, AlertTriangle } from 'lucide-react';

const PortfolioReview = () => {
    return (
        <PageTemplate
            title="Portfolio Review"
            subtitle="Is your portfolio working for you, or just existing?"
            description="A deep-dive analysis of your existing investments to identify laggards, overlaps, and risk imbalances."
            icon={Search}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">The Health Check Your Money Deserves</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Most investors collect mutual fund schemes like hobbies. Over time, this leads to a fragmented portfolio with high overlap, poor risk-adjusted returns, and misalignment with current life goals.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100 group">
                            <AlertTriangle className="w-12 h-12 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-navy mb-4">Signs of a Sick Portfolio</h3>
                            <ul className="space-y-3 text-gray-600 font-medium">
                                <li>• Too many funds (15+ schemes)</li>
                                <li>• Underperformance against index</li>
                                <li>• High concentration in one sector</li>
                                <li>• High "Expense Ratio" leakage</li>
                            </ul>
                        </div>
                        <div className="bg-primary/10 p-8 rounded-[2.5rem] border border-primary/20 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-navy mb-4 italic">Our Remedy</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">We provide a comprehensive diagnostic report that suggests exactly which funds to <strong>Keep</strong>, <strong>Exit</strong>, or <strong>Transition</strong>.</p>
                            <a href="/contact" className="text-primary font-bold flex items-center gap-2 hover:underline">Request Free Audit <ArrowRight className="w-4 h-4" /></a>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section>
                    <h3 className="text-3xl font-bold text-navy mb-10 italic text-center">Our <span className="text-primary italic">Review Metrics</span></h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Alpha & Beta', desc: 'Measuring risk-adjusted outperformance.', icon: BarChart2 },
                            { title: 'Overlap Analysis', desc: 'Identifying funds holding the same stocks.', icon: Search },
                            { title: 'Asset Rebalancing', desc: 'Correcting the Equity-Debt-Gold mix.', icon: RefreshCcw }
                        ].map((item, i) => (
                            <div key={i} className="card-gradient text-center">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <item.icon className="w-7 h-7 text-navy" />
                                </div>
                                <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-8 italic">Cleaning Useless "Clutter"</h3>
                        <div className="grid gap-6">
                            {[
                                'Exiting Consistent Laggards: Funds trailing the index for 2+ years.',
                                'Reducing Portfolio Overlap: Why hold 4 different Large Cap funds?',
                                'Optimizing Tax Impact: Planning exits while minimizing Capital Gains Tax.',
                                'Switching to Direct/Better Options: Reducing hidden commission costs.'
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 italic">
                                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                                    <p className="text-gray-300 font-medium">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <h3 className="text-3xl font-bold text-navy mb-4 italic">Get a "Second Opinion" on your money.</h3>
                    <p className="text-navy/60 mb-8 font-medium">It's better to realize a flaw now than 10 years later. Send us your CAS statement for a review.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/contact" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Submit Portfolio for Review</a>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default PortfolioReview;
