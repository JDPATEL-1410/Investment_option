import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, Calculator, ArrowRight, Info, PieChart as PieIcon } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Cell, Pie } from 'recharts';

import PageHeader from '../../components/PageHeader';

const SIPCalculator = () => {
    const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const calculateSIP = () => {
        const monthlyRate = expectedReturn / 12 / 100;
        const months = timePeriod * 12;
        const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        const investedBody = monthlyInvestment * months;
        const wealthGain = futureValue - investedBody;

        return {
            invested: Math.round(investedBody),
            returns: Math.round(wealthGain),
            total: Math.round(futureValue),
        };
    };

    const result = calculateSIP();

    const chartData = [];
    const monthlyRate = expectedReturn / 12 / 100;
    for (let year = 1; year <= timePeriod; year++) {
        const months = year * 12;
        const fv = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        const inv = monthlyInvestment * months;
        chartData.push({
            year: `Yr ${year}`,
            invested: Math.round(inv),
            total: Math.round(fv),
            returns: Math.round(fv - inv)
        });
    }

    const pieData = [
        { name: 'Invested', value: result.invested },
        { name: 'Est. Returns', value: result.returns }
    ];
    const COLORS = ['#001B3D', '#414393'];

    return (
        <>
            <Helmet>
                <title>SIP Calculator - Plan Your Wealth | Investment Options</title>
                <meta name="description" content="Calculate your future mutual fund returns with our premium SIP calculator." />
            </Helmet>

            <PageHeader
                badge="Precision Tool"
                title={
                    <>
                        SIP <span className="text-primary">Calculator</span>
                    </>
                }
                subtitle="Calculate your future mutual fund returns"
                description="Visualize the growth of your monthly investments over time with the power of compounding."
                icon={Calculator}
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
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Configure Inputs
                                </h3>

                                <div className="space-y-10">
                                    <div className="relative">
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Monthly Investment</label>
                                            <div className="text-2xl font-black text-navy">₹{monthlyInvestment.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input
                                            type="range"
                                            min="500"
                                            max="200000"
                                            step="500"
                                            value={monthlyInvestment}
                                            onChange={(e) => setMonthlyInvestment(parseInt(e.target.value))}
                                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Expected Return (% p.a)</label>
                                            <div className="text-2xl font-black text-navy">{expectedReturn}%</div>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="30"
                                            step="0.5"
                                            value={expectedReturn}
                                            onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
                                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>

                                    <div className="relative">
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Time Period (Years)</label>
                                            <div className="text-2xl font-black text-navy">{timePeriod} Years</div>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="40"
                                            step="1"
                                            value={timePeriod}
                                            onChange={(e) => setTimePeriod(parseInt(e.target.value))}
                                            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <div className="bg-navy rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                                <Info className="w-10 h-10 text-primary mb-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                                <h4 className="text-lg font-bold mb-4 italic">Pro Tip:</h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                    Increasing your SIP amount by just 10% every year can double your corpus in 15 years.
                                </p>
                                <a href="/calculators/step-up-sip" className="text-primary font-bold flex items-center gap-2 text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Try Step-Up Calculator <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Results & Visualization */}
                        <div className="lg:col-span-8 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="space-y-6">
                                            <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Invested Amount</p>
                                                <h4 className="text-3xl font-black text-navy">₹{result.invested.toLocaleString('en-IN')}</h4>
                                            </div>
                                            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
                                                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Estimated Wealth Gain</p>
                                                <h4 className="text-3xl font-black text-primary">₹{result.returns.toLocaleString('en-IN')}</h4>
                                            </div>
                                            <div className="p-8 rounded-[2rem] bg-navy text-white shadow-xl">
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Portfolio Value</p>
                                                <h4 className="text-4xl font-black text-white">₹{result.total.toLocaleString('en-IN')}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative flex justify-center">
                                        <div className="h-[300px] w-full max-w-[300px]">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart>
                                                    <Pie
                                                        data={pieData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={80}
                                                        outerRadius={100}
                                                        paddingAngle={8}
                                                        dataKey="value"
                                                        stroke="none"
                                                    >
                                                        {pieData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip
                                                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                                        formatter={(val) => `₹${val.toLocaleString('en-IN')}`}
                                                    />
                                                </PieChart>
                                            </ResponsiveContainer>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">ROI Benefit</p>
                                                <p className="text-2xl font-black text-navy">{Math.round((result.returns / result.invested) * 100)}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100"
                            >
                                <h3 className="text-xl font-bold text-navy mb-10 italic flex items-center justify-between">
                                    Growth Projection Over Time
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                        <PieIcon className="w-4 h-4" /> Compound Curve
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
                                                <linearGradient id="colorInv" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#001B3D" stopOpacity={0.1} />
                                                    <stop offset="95%" stopColor="#001B3D" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                            <XAxis
                                                dataKey="year"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                                                tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                                            />
                                            <Tooltip
                                                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', padding: '20px' }}
                                                formatter={(value) => `₹${value.toLocaleString('en-IN')}`}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="total"
                                                stroke="#414393"
                                                strokeWidth={4}
                                                fillOpacity={1}
                                                fill="url(#colorTotal)"
                                                name="Total Assets"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="invested"
                                                stroke="#001B3D"
                                                strokeWidth={2}
                                                fillOpacity={1}
                                                fill="url(#colorInv)"
                                                name="Total Investment"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Investment Logic Disclaimer */}
                    <div className="mt-16 bg-white rounded-[2.5rem] p-10 border border-gray-100 italic">
                        <div className="flex gap-6 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                <Info className="w-6 h-6 text-gray-400" />
                            </div>
                            <div className="text-sm text-gray-500 leading-relaxed">
                                <p className="font-bold text-navy mb-2 not-italic underline decoration-primary/30">About these calculations:</p>
                                <p>The results shown are based on mathematical formulas for compound interest. SIP assumes that the monthly investment is made at the beginning of each period. Returns are calculated on a compounding basis. Actual mutual fund returns may vary significantly based on market fluctuations, fund performance, and expense ratios. Please consult a professional advisor before making investment decisions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SIPCalculator;
