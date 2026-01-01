import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, Calculator, ArrowRight, Info, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import PageHeader from '../../components/PageHeader';

const StepUpSIPCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState(10000);
    const [annualStepUp, setAnnualStepUp] = useState(10);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const calculateStepUpSIP = () => {
        let totalTotal = 0;
        let totalInvested = 0;
        let currentMonthly = initialInvestment;
        const monthlyRate = expectedReturn / 12 / 100;

        const chartData = [];

        for (let year = 1; year <= timePeriod; year++) {
            for (let month = 1; month <= 12; month++) {
                totalInvested += currentMonthly;
                totalTotal = (totalTotal + currentMonthly) * (1 + monthlyRate);
            }
            chartData.push({
                year: `Yr ${year}`,
                invested: Math.round(totalInvested),
                total: Math.round(totalTotal),
                monthly: Math.round(currentMonthly)
            });
            currentMonthly = currentMonthly * (1 + annualStepUp / 100);
        }

        return {
            invested: Math.round(totalInvested),
            total: Math.round(totalTotal),
            returns: Math.round(totalTotal - totalInvested),
            chartData
        };
    };

    const result = calculateStepUpSIP();

    return (
        <>
            <Helmet>
                <title>Step-Up SIP Calculator - Smart Investing | Investment Options</title>
                <meta name="description" content="Calculate how an annual increase in your SIP can dramatically boost your wealth." />
            </Helmet>

            <PageHeader
                badge="Advanced Wealth Accelerator"
                title={
                    <>
                        Step-Up <span className="text-primary">SIP</span>
                    </>
                }
                subtitle="Small increases, massive gains"
                description="Align your investments with your growing income. Small annual increases lead to massive long-term gains."
                icon={Zap}
            />

            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-10">
                        {/* Control Panel */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-navy mb-8 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Investment Strategy
                                </h3>

                                <div className="space-y-10">
                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Initial Monthly SIP</label>
                                            <div className="text-2xl font-black text-navy">₹{initialInvestment.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input type="range" min="1000" max="100000" step="1000" value={initialInvestment} onChange={(e) => setInitialInvestment(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Annual Step-Up (%)</label>
                                            <div className="text-2xl font-black text-primary">{annualStepUp}%</div>
                                        </div>
                                        <input type="range" min="1" max="25" step="1" value={annualStepUp} onChange={(e) => setAnnualStepUp(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                        <p className="text-[10px] text-gray-400 mt-2 italic">How much you increase your SIP every year.</p>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Expected ROI (%)</label>
                                            <div className="text-2xl font-black text-navy">{expectedReturn}%</div>
                                        </div>
                                        <input type="range" min="1" max="30" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Duration (Years)</label>
                                            <div className="text-2xl font-black text-navy">{timePeriod} Yrs</div>
                                        </div>
                                        <input type="range" min="1" max="40" step="1" value={timePeriod} onChange={(e) => setTimePeriod(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Invested</p>
                                    <h4 className="text-2xl font-black text-navy">₹{result.invested.toLocaleString('en-IN')}</h4>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total ROI</p>
                                    <h4 className="text-2xl font-black text-primary">₹{result.returns.toLocaleString('en-IN')}</h4>
                                </div>
                                <div className="bg-navy p-8 rounded-[2rem] shadow-xl text-white">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Wealth</p>
                                    <h4 className="text-2xl font-black text-white">₹{result.total.toLocaleString('en-IN')}</h4>
                                </div>
                            </div>

                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-navy mb-10 italic">Step-Up Growth Projection</h3>
                                <div className="h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={result.chartData}>
                                            <defs>
                                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#414393" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#414393" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#001B3D" stopOpacity={0.1} />
                                                    <stop offset="95%" stopColor="#001B3D" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} formatter={(v) => `₹${v.toLocaleString('en-IN')}`} />
                                            <Area type="monotone" dataKey="total" stroke="#414393" strokeWidth={4} fill="url(#colorTotal)" name="Total Wealth" />
                                            <Area type="monotone" dataKey="invested" stroke="#001B3D" strokeWidth={2} fill="url(#colorInv)" name="Invested" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-12 bg-primary/5 p-10 rounded-[3rem] border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Info className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-navy mb-1 italic">Why Step-Up?</h4>
                                <p className="text-gray-500 text-sm">A normal ₹10k SIP for 20 years @ 12% returns ₹98 Lakhs. A 10% Step-Up SIP for the same period returns ₹2.1 Crores.</p>
                            </div>
                        </div>
                        <a href="/contact" className="btn-navy whitespace-nowrap">Plan My Strategy <ArrowRight className="w-4 h-4 ml-2" /></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StepUpSIPCalculator;
