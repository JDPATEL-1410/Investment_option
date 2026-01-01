import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Coffee, Calculator, ArrowRight, Info, History } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const SWPCalculator = () => {
    const [totalInvestment, setTotalInvestment] = useState(5000000);
    const [withdrawalAmount, setWithdrawalAmount] = useState(30000);
    const [expectedReturn, setExpectedReturn] = useState(8);
    const [timePeriod, setTimePeriod] = useState(20);

    const calculateSWP = () => {
        let balance = totalInvestment;
        const monthlyRate = expectedReturn / 12 / 100;
        const chartData = [];
        let totalWithdrawn = 0;

        for (let month = 1; month <= timePeriod * 12; month++) {
            const interest = balance * monthlyRate;
            balance = balance + interest - withdrawalAmount;
            totalWithdrawn += withdrawalAmount;

            if (month % 12 === 0 || month === 1) {
                chartData.push({
                    year: `Yr ${Math.ceil(month / 12)}`,
                    balance: Math.max(0, Math.round(balance)),
                    withdrawn: Math.round(totalWithdrawn)
                });
            }
            if (balance <= 0) break;
        }

        return {
            finalBalance: Math.max(0, Math.round(balance)),
            totalWithdrawn: Math.round(totalWithdrawn),
            chartData
        };
    };

    const result = calculateSWP();

    return (
        <>
            <Helmet>
                <title>SWP Calculator - Monthly Pension Planner | Investment Options</title>
                <meta name="description" content="Plan your regular income with our Systematic Withdrawal Plan (SWP) calculator." />
            </Helmet>

            <section className="relative pt-32 pb-24 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8">
                            <Coffee className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Pension Planner</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 italic tracking-tight">SWP <span className="text-primary italic">Calculator</span></h1>
                        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
                            Design your monthly "salary" from your investments while keeping the principal growing.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-10">
                        {/* Control Panel */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-navy mb-8 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Withdrawal Strategy
                                </h3>

                                <div className="space-y-10">
                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Corpus</label>
                                            <div className="text-2xl font-black text-navy">₹{totalInvestment.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input type="range" min="100000" max="50000000" step="100000" value={totalInvestment} onChange={(e) => setTotalInvestment(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Monthly Withdrawal</label>
                                            <div className="text-2xl font-black text-primary">₹{withdrawalAmount.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input type="range" min="1000" max="500000" step="1000" value={withdrawalAmount} onChange={(e) => setWithdrawalAmount(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Expected ROI (%)</label>
                                            <div className="text-2xl font-black text-navy">{expectedReturn}%</div>
                                        </div>
                                        <input type="range" min="1" max="15" step="0.5" value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Time Period (Years)</label>
                                            <div className="text-2xl font-black text-navy">{timePeriod} Yrs</div>
                                        </div>
                                        <input type="range" min="1" max="40" step="1" value={timePeriod} onChange={(e) => setTimePeriod(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg group">
                                    <div className="flex items-center gap-3 mb-2">
                                        <History className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Withdrawal Amount</p>
                                    </div>
                                    <h4 className="text-3xl font-black text-navy italic">₹{result.totalWithdrawn.toLocaleString('en-IN')}</h4>
                                </div>
                                <div className={`p-8 rounded-[2rem] shadow-xl text-white ${result.finalBalance > 0 ? 'bg-navy' : 'bg-red-900'}`}>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Final Balance Remaining</p>
                                    <h4 className="text-3xl font-black text-white italic">₹{result.finalBalance.toLocaleString('en-IN')}</h4>
                                    {result.finalBalance === 0 && <p className="text-xs text-red-200 mt-2 font-bold uppercase">Corpus Exhausted Early</p>}
                                </div>
                            </div>

                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                                <h3 className="text-xl font-bold text-navy mb-10 italic">Corpus Sustainability Chart</h3>
                                <div className="h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={result.chartData}>
                                            <defs>
                                                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#414393" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#414393" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} formatter={(v) => `₹${v.toLocaleString('en-IN')}`} />
                                            <Area type="monotone" dataKey="balance" stroke="#414393" strokeWidth={4} fill="url(#colorBalance)" name="Remaining Corpus" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SWPCalculator;
