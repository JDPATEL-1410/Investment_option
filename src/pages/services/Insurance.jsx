import PageTemplate from '../../components/PageTemplate';
import { ShieldCheck, HeartPulse, ShieldAlert, Umbrella, ArrowRight, CheckCircle2 } from 'lucide-react';

const Insurance = () => {
    return (
        <PageTemplate
            title="Insurance Planning"
            subtitle="The foundation of a strong financial house is a strong roof."
            description="Protect your family's future and your wealth from life's major risks with the right Term and Health insurance."
            icon={ShieldCheck}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Risk Protection First</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Insurance is not an investment; it is a cost for peace of mind. Without proper Term Life and Health Insurance, one medical emergency or unfortunate event can wipe out years of wealth accumulation.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-navy rounded-[2.5rem] p-10 text-white group">
                            <Umbrella className="w-12 h-12 text-primary mb-6 transition-transform group-hover:-translate-y-2" />
                            <h3 className="text-2xl font-bold mb-4 italic">Term Life Insurance</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">Ensure your family's lifestyle, children's education, and liabilities are covered with a high-sum-assured term plan.</p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                                Risk Audit <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="bg-primary/5 rounded-[2.5rem] p-10 border-2 border-primary/20 group">
                            <HeartPulse className="w-12 h-12 text-navy mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-navy mb-4 italic">Health Insurance</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed">Protect your savings from hospital bills. We help you choose plans without room-rent caps and with restoration benefits.</p>
                            <div className="flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest">
                                Plan Comparison <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section>
                    <h3 className="text-3xl font-bold text-navy mb-10 italic text-center">Our <span className="text-primary italic">Selection Philosophy</span></h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Zero Clutter', desc: 'No mixed "Investment + Insurance" products. We only suggest pure risk cover.', icon: ShieldAlert },
                            { title: 'Claim Support', desc: 'We stand with you and your family when it matters most—the claim process.', icon: ShieldCheck },
                            { title: 'Transparent Review', desc: 'Evaluating hidden clauses, co-pays, and waiting periods of policies.', icon: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="card-gradient">
                                <item.icon className="w-8 h-8 text-primary mb-4" />
                                <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-navy rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 italic">Don't Get <span className="text-primary italic">Mis-Sold</span></h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Avoid ULIPs or traditional endowment plans that give 4-5% returns and low insurance cover. Instead, buy a <strong>Pure Term Plan</strong> and invest the surplus in <strong>Mutual Funds</strong> to create 10x more wealth.
                            </p>
                            <div className="space-y-4">
                                {['Calculate Your Human Life Value (HLV)', 'Identify the right Top-up/Super-topup plans', 'Review corporate medical covers for gaps'].map((s, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium text-gray-300">{s}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 text-center">
                            <h4 className="text-xl font-bold mb-6">Insurance Checklist</h4>
                            <ul className="space-y-4 text-gray-300 text-left">
                                <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-primary mt-1.5" /> 15x-20x Annual Income for Life Cover</li>
                                <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-primary mt-1.5" /> Critical Illness & Accidental Riders</li>
                                <li className="flex gap-3 items-start"><div className="w-2 h-2 rounded-full bg-primary mt-1.5" /> No-Claim Bonus Benefits</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden group">
                    <h3 className="text-3xl font-bold text-navy mb-4 italic">Is your family fully protected?</h3>
                    <p className="text-navy/60 mb-8 font-medium">Get a complete Risk Audit of your current policies today.</p>
                    <a href="/contact" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Start Your Risk Audit</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Insurance;
