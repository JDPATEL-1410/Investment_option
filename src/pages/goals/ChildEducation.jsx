import PageTemplate from '../../components/PageTemplate';
import { GraduationCap, BookOpen, Globe, Coins, ArrowRight } from 'lucide-react';

const ChildEducation = () => {
    return (
        <PageTemplate
            title="Child Education"
            subtitle="Give your children the wings of education without the weight of debt."
            description="Strategic investment planning for your child's higher education and overseas study goals."
            icon={GraduationCap}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Securing Their Future</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        The cost of higher education is rising faster than general inflation. Whether it's a premier institute in India or an ivy league university abroad, early planning is the only way to ensure they get the best opportunities without financial hurdles.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Education Inflation', desc: 'Factor in 10-12% annual rise in tuition and living costs.', icon: Coins },
                            { title: 'Global Ambitions', desc: 'Plan for international exposure and foreign currency fluctuations.', icon: Globe }
                        ].map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section className="bg-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-6 italic">Why Mutual Funds for Education?</h3>
                        <div className="grid gap-4">
                            {[
                                'Better growth potential compared to traditional child plans',
                                'Flexibility to adjust monthly contributions as income grows',
                                'Transparent performance tracking and easy liquidity',
                                'Tax-efficient long-term wealth creation'
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <p className="text-gray-300 font-medium">{point}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <a href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Talk to our Education Planner <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    {/* Background visual */}
                    <BookOpen className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 rotate-12" />
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-6">Our Planning Process</h3>
                    <div className="grid gap-6">
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-navy flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-navy text-xl mb-2">Estimate Future Costs</h4>
                                <p className="text-gray-500">We use current costs of degrees and apply education-specific inflation to find the target corpus.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-navy flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-navy text-xl mb-2">Portfolio Selection</h4>
                                <p className="text-gray-500">Choosing the right mix of equity and hybrid funds based on the years left for college.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-navy flex-shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-navy text-xl mb-2">Strategic Exit Planning</h4>
                                <p className="text-gray-500">Moving funds to safer debt instruments 2-3 years before the admission year.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-primary p-12 rounded-[3rem] text-center shadow-2xl shadow-primary/20">
                    <h3 className="text-3xl font-bold text-navy mb-4 italic">Start Growing their Dream Today</h3>
                    <p className="text-navy/70 font-medium mb-8">Every month matters. A small SIP today can bridge a massive gap tomorrow.</p>
                    <a href="/calculators/sip" className="bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all">Start SIP for Education</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default ChildEducation;
