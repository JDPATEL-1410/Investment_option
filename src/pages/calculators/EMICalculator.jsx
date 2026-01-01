import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Landmark, Calculator, Info, PieChart as PieIcon, ArrowRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Cell, Pie } from 'recharts';

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const calculateEMI = () => {
        const p = loanAmount;
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - p;

        return {
            emi: Math.round(emi),
            totalPayment: Math.round(totalPayment),
            totalInterest: Math.round(totalInterest),
            principal: p
        };
    };

    const result = calculateEMI();

    const pieData = [
        { name: 'Principal', value: result.principal },
        { name: 'Interest', value: result.totalInterest }
    ];
    const COLORS = ['#001B3D', '#414393'];

    return (
        <>
            <Helmet>
                <title>EMI Calculator - Smart Loan Planning | Investment Options</title>
                <meta name="description" content="Calculate your Home, Car, or Personal loan EMIs and see the total interest impact." />
            </Helmet>

            <section className="relative pt-32 pb-24 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {/* Visual pattern */}
                    <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                </div>
                <div className="container-custom relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8">
                            <Landmark className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Debt Strategy</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 italic tracking-tight">EMI <span className="text-primary italic">Calculator</span></h1>
                        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto italic">
                            Understand your monthly commitment and the total cost of borrowing.
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
                                <h3 className="text-xl font-bold text-navy mb-10 flex items-center gap-2 underline decoration-primary/30">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Loan Details
                                </h3>

                                <div className="space-y-10">
                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Loan Amount</label>
                                            <div className="text-2xl font-black text-navy">₹{loanAmount.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input type="range" min="100000" max="100000000" step="100000" value={loanAmount} onChange={(e) => setLoanAmount(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Interest Rate (% p.a)</label>
                                            <div className="text-2xl font-black text-navy">{interestRate}%</div>
                                        </div>
                                        <input type="range" min="5" max="25" step="0.1" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Tenure (Years)</label>
                                            <div className="text-2xl font-black text-navy">{tenure} Yrs</div>
                                        </div>
                                        <input type="range" min="1" max="30" step="1" value={tenure} onChange={(e) => setTenure(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>
                                </div>
                            </motion.div>

                            <div className="bg-primary p-8 rounded-[2.5rem] shadow-xl group">
                                <h4 className="text-xl font-black text-navy mb-4 italic">Reduce Interest?</h4>
                                <p className="text-navy/70 text-sm font-medium mb-6">Investing just 10% of your EMI as an SIP can effectively make your loan "interest-free" over long durations.</p>
                                <a href="/goals/dream-home" className="flex items-center gap-2 text-navy font-bold uppercase text-[10px] tracking-widest group-hover:gap-4 transition-all">
                                    Strategic Housing Plan <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-8 space-y-8">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <div className="p-8 rounded-[2rem] bg-navy text-white shadow-xl">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Monthly EMI</p>
                                            <h4 className="text-4xl font-black text-white italic">₹{result.emi.toLocaleString('en-IN')}</h4>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100">
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Interest Payable</p>
                                            <h4 className="text-2xl font-black text-red-500">₹{result.totalInterest.toLocaleString('en-IN')}</h4>
                                        </div>
                                        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20">
                                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Total Amount (P+I)</p>
                                            <h4 className="text-2xl font-black text-primary">₹{result.totalPayment.toLocaleString('en-IN')}</h4>
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
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Interest Gap</p>
                                                <p className="text-2xl font-black text-navy">{Math.round((result.totalInterest / result.principal) * 100)}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EMICalculator;
