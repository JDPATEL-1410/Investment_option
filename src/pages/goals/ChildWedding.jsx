import PageTemplate from '../../components/PageTemplate';
import { Heart, Coins, Calendar, Sparkles, ArrowRight } from 'lucide-react';

const ChildWedding = () => {
    return (
        <PageTemplate
            title="Child Wedding"
            subtitle="Plan for their perfect day with a perfect financial strategy."
            description="Create a dedicated corpus for your child's marriage without compromising your own retirement or lifestyle."
            icon={Heart}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">A Celebration Without Compromise</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                        "Your child's wedding is a milestone of joy. Don't let it become a source of financial stress."
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-8">
                        Weddings in India are not just ceremonies but massive social events with significant costs involving venue, jewelry, hospitality, and more. Systematic planning allows you to build a substantial corpus over a decade or two, utilizing the power of equity growth.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Jewelry & Gold', icon: Sparkles },
                            { title: 'Venue & Events', icon: Calendar },
                            { title: 'Gifts & Savings', icon: Coins }
                        ].map((item, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-3xl text-center hover:bg-white hover:shadow-xl transition-all border border-gray-100">
                                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 italic">
                                    <item.icon className="w-7 h-7 text-navy" />
                                </div>
                                <h4 className="font-bold text-navy">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section className="bg-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 italic">Strategic Gold <span className="text-primary italic">Accumulation</span></h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Instead of just buying physical gold, we help you invest in Gold ETFs and Sovereign Gold Bonds (SGBs) which are safer, provide interest, and can be liquidated easily when needed for the wedding.
                            </p>
                            <a href="/contact" className="btn-primary">Consult an Expert</a>
                        </div>
                        <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                            <h4 className="text-xl font-bold mb-4">Investment Mix</h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2"><span className="text-sm font-bold">Equity Mutual Funds</span><span className="text-primary font-bold">70%</span></div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary w-[70%]" /></div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2"><span className="text-sm font-bold">Gold Bonds / ETFs</span><span className="text-primary font-bold">20%</span></div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary w-[20%]" /></div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2"><span className="text-sm font-bold">Debt Funds</span><span className="text-primary font-bold">10%</span></div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary w-[10%]" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-8">Benefits of Systematic Planning</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-navy font-bold">1</div>
                                <p className="text-navy font-medium">Avoid high-interest personal or gold loans in the future.</p>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-navy font-bold">2</div>
                                <p className="text-navy font-medium">Capture the long-term appreciation of equity markets.</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-navy font-bold">3</div>
                                <p className="text-navy font-medium">Hedge against rising costs of gold and event services.</p>
                            </div>
                            <div className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 text-navy font-bold">4</div>
                                <p className="text-navy font-medium">Mental peace knowing the milestone is already funded.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-primary/5 p-12 rounded-[3.5rem] border border-primary/20 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-navy mb-4">"A beautiful wedding starts with a beautiful plan."</h4>
                        <p className="text-gray-500 mb-8 max-w-lg mx-auto">Contact us for a customized child milestone projection report.</p>
                        <a href="/contact" className="btn-navy px-12">Get My Report</a>
                    </div>
                    <Sparkles className="absolute -top-10 -left-10 w-48 h-48 text-primary/10" />
                </div>
            </div>
        </PageTemplate>
    );
};

export default ChildWedding;
