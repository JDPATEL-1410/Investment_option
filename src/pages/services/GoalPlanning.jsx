import PageTemplate from '../../components/PageTemplate';
import { Target, Compass, Milestone, Flag, ArrowRight, CheckCircle2 } from 'lucide-react';

const GoalPlanning = () => {
    return (
        <PageTemplate
            title="Goal-Based Planning"
            subtitle="Investment is the means; your goal is the destination."
            description="Comprehensive financial mapping to ensure every life milestone is adequately funded and protected."
            icon={Target}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-3xl font-bold text-navy mb-6">Why Plan for Goals?</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Most people invest in products first and think about goals later. We reverse this. We help you define your life milestones—buying a home, children's education, or early retirement—and then design an investment strategy that gets you there.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-navy rounded-[2.5rem] text-white group">
                            <Compass className="w-12 h-12 text-primary mb-6 transition-transform group-hover:rotate-45" />
                            <h3 className="text-2xl font-bold mb-4">Clarity over Complexity</h3>
                            <p className="text-gray-400">Knowing exactly how much to save per month for a ₹5 Crore retirement takes away the anxiety of market volatility.</p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-200">
                            <Milestone className="w-12 h-12 text-navy mb-6" />
                            <h3 className="text-2xl font-bold text-navy mb-4">Milestone Tracking</h3>
                            <p className="text-gray-500">We don't just set goals; we track them. You can see how close you are to your child's college fund in percentage terms.</p>
                        </div>
                    </div>
                </section>

                <div className="h-px bg-gray-100 w-full" />

                <section>
                    <h3 className="text-3xl font-bold text-navy mb-10 italic">Our 4-Step <span className="text-primary italic">Goal Framework</span></h3>
                    <div className="space-y-6">
                        {[
                            { title: 'Goal Identification', desc: 'Listing all short, medium, and long-term milestones.' },
                            { title: 'Inflation-Adjusted Projection', desc: 'Calculating the real value of the goal in 10 or 20 years.' },
                            { title: 'Asset Allocation', desc: 'Mapping the right risk level based on the time remaining.' },
                            { title: 'Periodic Review', desc: 'Adjusting contributions based on changing life circumstances.' }
                        ].map((point, i) => (
                            <div key={i} className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                    <span className="font-bold text-navy">{i + 1}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy text-xl mb-1">{point.title}</h4>
                                    <p className="text-gray-500">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-primary/5 p-12 rounded-[3rem] border-2 border-primary/20 relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-navy mb-6 italic">The Cost of <span className="text-primary italic">Delaying</span></h3>
                            <p className="text-gray-500 mb-8 leading-relaxed font-medium italic">
                                "Waiting just 5 years to start planning for a 20-year goal can nearly double the monthly investment required to reach the same target."
                            </p>
                            <a href="/calculators/sip" className="btn-navy">Run a SIP Calculation</a>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-2xl">
                            <h4 className="text-xl font-bold text-navy mb-6">Common Goals We Plan</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {['Education', 'Retirement', 'Dream Home', 'Emergency Fund', 'Wedding', 'Vacation'].map((g, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-gray-500 bg-gray-50 p-4 rounded-xl">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        {g}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="bg-navy p-12 rounded-[3.5rem] text-center shadow-2xl relative overflow-hidden">
                    <Flag className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                    <h3 className="text-3xl font-bold text-white mb-4 italic">Finish your race with a trophy.</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Get your personalized 360-degree Financial Goal Roadmap today.</p>
                    <a href="/contact" className="btn-primary">Connect with an Advisor</a>
                </div>
            </div>
        </PageTemplate>
    );
};

export default GoalPlanning;
