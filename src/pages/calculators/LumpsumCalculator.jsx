import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, Calculator, Info, Coins, BarChart3, PieChart as PieIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Cell, Pie } from 'recharts';

import PageHeader from '../../components/PageHeader';

const LumpsumCalculator = () => {
    const [amount, setAmount] = useState(100000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);

    const calculateLumpsum = () => {
        const futureValue = amount * Math.pow(1 + rate / 100, years);
        const wealthGain = futureValue - amount;

        return {
            invested: Math.round(amount),
            returns: Math.round(wealthGain),
            total: Math.round(futureValue),
        };
    };

    const result = calculateLumpsum();

    const chartData = [];
    for (let i = 1; i <= years; i++) {
        const fv = amount * Math.pow(1 + rate / 100, i);
        chartData.push({
            year: `Yr ${i}`,
            invested: Math.round(amount),
            total: Math.round(fv),
            returns: Math.round(fv - amount)
        });
    }

    const pieData = [
        { name: 'Principal', value: result.invested },
        { name: 'Returns', value: result.returns }
    ];
    const COLORS = ['#001B3D', '#414393'];

    return (
        <>
            <Helmet>
                <title>Lumpsum Calculator - One-time Investment | Investment Options</title>
                <meta name="description" content="Calculate your one-time mutual fund investment returns with precision." />
            </Helmet>

            <PageHeader
                badge="Wealth Planner"
                title={
                    <>
                        Lumpsum <span className="text-primary">Calculator</span>
                    </>
                }
                subtitle="Analyze your one-time investments"
                description="Calculate the potential growth of your one-time investments over long horizons."
                icon={Coins}
            />

            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-10">
                        {/* Control Panel */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100"
                            >
                                <h3 className="text-xl font-bold text-navy mb-8 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Investment Inputs
                                </h3>

                                <div className="space-y-10">
                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Investment</label>
                                            <div className="text-2xl font-black text-navy">₹{amount.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input type="range" min="5000" max="10000000" step="5000" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Expected ROI (%)</label>
                                            <div className="text-2xl font-black text-navy">{rate}%</div>
                                        </div>
                                        <input type="range" min="1" max="30" step="0.5" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Duration (Years)</label>
                                            <div className="text-2xl font-black text-navy">{years} Yrs</div>
                                        </div>
                                        <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Principal Amount</p>
                                            <h4 className="text-3xl font-black text-navy">₹{result.invested.toLocaleString('en-IN')}</h4>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
                                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Profit/Return</p>
                                            <h4 className="text-3xl font-black text-primary">₹{result.returns.toLocaleString('en-IN')}</h4>
                                        </div>
                                        <div className="p-8 rounded-[2.5rem] bg-navy text-white shadow-xl">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Future Value</p>
                                            <h4 className="text-4xl font-black text-white">₹{result.total.toLocaleString('en-IN')}</h4>
                                        </div>
                                    </div>

                                    <div className="relative flex justify-center">
                                        <div className="h-[300px] w-full max-w-[300px]">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={100} paddingAngle={8} dataKey="value" stroke="none">
                                                        {pieData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} formatter={(val) => `₹${val.toLocaleString('en-IN')}`} />
                                                </PieChart>
                                            </ResponsiveContainer>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">ROI Benefit</p>
                                                <p className="text-2xl font-black text-navy">{Math.round((result.returns / result.invested) * 100)}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-navy mb-10 italic flex items-center justify-between">
                                    Investment Progress Map
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                        <BarChart3 className="w-4 h-4" /> Growth Path
                                    </span>
                                </h3>
                                <div className="h-[400px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={chartData}>
                                            <defs>
                                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#414393" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#414393" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                            <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                                            <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }} formatter={(value) => `₹${value.toLocaleString('en-IN')}`} />
                                            <Area type="monotone" dataKey="total" stroke="#414393" strokeWidth={4} fill="url(#colorTotal)" name="Assets" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LumpsumCalculator;
