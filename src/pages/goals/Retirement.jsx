import PageTemplate from '../../components/PageTemplate';
import { PiggyBank, Target, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Retirement = () => {
    return (
        <PageTemplate
            title="Retirement Planning"
            subtitle="The best time to start planning for retirement was 20 years ago. The next best time is now."
            description="Professional retirement planning services to ensure your golden years are financially secure and stress-free."
            icon={PiggyBank}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Why Retirement Planning Matters?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Retirement is not an age; it's a financial status. With increasing life expectancy and rising healthcare costs, ensuring a steady stream of income that outpaces inflation is critical for maintaining your lifestyle after you stop working.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Beat Inflation', desc: 'Ensure your money maintains its purchasing power over 20-30 years of retirement.', icon: Target },
                            { title: 'Independent Life', desc: 'Secure your financial freedom without depending on children or others.', icon: ShieldCheck }
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

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-8">The Power of Starting Early</h3>
                    <div className="bg-navy rounded-[2rem] p-8 text-white relative overflow-hidden">
                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Did you know?</p>
                                <h4 className="text-3xl font-bold mb-6">Starting at age 25 vs age 35 can make a 3x difference in your final corpus.</h4>
                                <p className="text-gray-400 mb-8 leading-relaxed">Early investors benefit from the long-term magic of compounding, where your returns start generating their own returns.</p>
                                <a href="/calculators/retirement" className="inline-flex items-center gap-2 bg-primary text-navy px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">
                                    Calculate your Requirement <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="hidden md:block">
                                <BarChart3 className="w-full h-48 text-white/10" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-navy mb-6">Our Approach</h3>
                    <div className="space-y-4">
                        {[
                            'Analyzing current lifestyle and expected future expenses',
                            'Factoring in medical inflation and healthcare needs',
                            'Tax-efficient retirement corpus withdrawal strategy',
                            'Regular portfolio rebalancing to reduce risk as you approach retirement'
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 italic font-medium">
                                <div className="w-8 h-8 rounded-full bg-primary text-navy flex items-center justify-center font-bold text-sm">{i + 1}</div>
                                <p className="text-navy">{step}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/20 text-center">
                    <p className="text-gray-500 italic mb-6">"Retirement is the only goal for which you cannot get a loan. Start building your bridge today."</p>
                    <a href="/contact" className="btn-navy">Schedule My Retirement Review</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Retirement;
