import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Coffee, Calculator, Info, Target, TrendingUp, ArrowRight } from 'lucide-react';

import PageHeader from '../../components/PageHeader';

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyExpense, setMonthlyExpense] = useState(50000);
    const [expectedInflation, setExpectedInflation] = useState(6);
    const [expectedReturn, setExpectedReturn] = useState(12);

    const calculateRetirement = () => {
        const yearsToRetirement = retirementAge - currentAge;
        const monthlyExpenseAtRetirement = monthlyExpense * Math.pow(1 + expectedInflation / 100, yearsToRetirement);

        // Assuming 20 years of retirement life and 8% return during retirement
        const retirementReturn = 8;
        const monthlyRateRetirement = (retirementReturn / 100) / 12;
        const totalMonthsRetirement = 25 * 12; // 25 years post retirement

        const requiredCorpus = monthlyExpenseAtRetirement * ((1 - Math.pow(1 + monthlyRateRetirement, -totalMonthsRetirement)) / monthlyRateRetirement);

        const monthlyRateAccumulation = (expectedReturn / 100) / 12;
        const totalMonthsAccumulation = yearsToRetirement * 12;
        const requiredSIP = (requiredCorpus * monthlyRateAccumulation) / (Math.pow(1 + monthlyRateAccumulation, totalMonthsAccumulation) - 1);

        return {
            futureExpense: Math.round(monthlyExpenseAtRetirement),
            corpus: Math.round(requiredCorpus),
            sip: Math.round(requiredSIP),
            yearsLeft: yearsToRetirement
        };
    }

    const result = calculateRetirement();

    return (
        <>
            <Helmet>
                <title>Retirement Calculator - Freedom Planner | Investment Options</title>
                <meta name="description" content="Find out exactly how much you need to save every month for a comfortable retirement." />
            </Helmet>

            <PageHeader
                badge="Freedom Map"
                title={
                    <>
                        Retirement <span className="text-primary italic">Number</span>
                    </>
                }
                subtitle="Calculate your retirement needs"
                description="Calculate the corpus required to maintain your current lifestyle after you stop working."
                icon={Coffee}
            />

            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-10">
                        {/* Control Panel */}
                        <div className="lg:col-span-5 space-y-8">
                            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-gray-100">
                                <h3 className="text-xl font-bold text-navy mb-10 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Lifestyle Inputs
                                </h3>

                                <div className="space-y-10">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Current Age</label>
                                            <input type="number" value={currentAge} onChange={(e) => setCurrentAge(parseInt(e.target.value))} className="w-full bg-gray-50 border-2 border-transparent focus:border-primary rounded-xl px-4 py-3 outline-none font-bold text-navy" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Retirement Age</label>
                                            <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(parseInt(e.target.value))} className="w-full bg-gray-50 border-2 border-transparent focus:border-primary rounded-xl px-4 py-3 outline-none font-bold text-navy" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Current Monthly Expense</label>
                                            <div className="text-2xl font-black text-navy">₹{monthlyExpense.toLocaleString('en-IN')}</div>
                                        </div>
                                        <input type="range" min="10000" max="1000000" step="5000" value={monthlyExpense} onChange={(e) => setMonthlyExpense(parseInt(e.target.value))} className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Inflation (%)</label>
                                            <input type="number" value={expectedInflation} onChange={(e) => setExpectedInflation(parseFloat(e.target.value))} className="w-full bg-gray-50 border-2 border-transparent focus:border-primary rounded-xl px-4 py-3 outline-none font-bold text-navy" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-4">Return ROI (%)</label>
                                            <input type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(parseFloat(e.target.value))} className="w-full bg-gray-50 border-2 border-transparent focus:border-primary rounded-xl px-4 py-3 outline-none font-bold text-navy" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-7 space-y-8">
                            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100 flex flex-col justify-between">
                                <div className="space-y-10">
                                    <div className="flex justify-between items-center border-b border-gray-100 pb-8">
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Monthly Expense at retirement</p>
                                            <h4 className="text-3xl font-black text-navy">₹{result.futureExpense.toLocaleString('en-IN')}</h4>
                                        </div>
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                            <TrendingUp className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Target Retirement Corpus</p>
                                        <h4 className="text-5xl md:text-6xl font-black text-navy italic">₹{(result.corpus / 10000000).toFixed(2)} <span className="text-2xl text-gray-300">Cr</span></h4>
                                        <p className="text-sm text-gray-400 mt-2 font-medium">To sustain until age 85</p>
                                    </div>

                                    <div className="bg-navy rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden group">
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Required Monthly Investment</p>
                                        <h4 className="text-5xl font-black mb-4">₹{result.sip.toLocaleString('en-IN')}</h4>
                                        <p className="text-gray-400 text-sm italic">Assuming you start today and invest for {result.yearsLeft} years.</p>
                                        <Target className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/20 flex items-center gap-6">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center flex-shrink-0">
                                    <Info className="w-6 h-6 text-primary" />
                                </div>
                                <p className="text-sm text-gray-500 italic">
                                    This calculation factors in <strong>Post-Retirement Returns (8%)</strong> and a <strong>25-year withdrawal period</strong>. Actual requirements may vary based on health costs and individual longevity.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <a href="/contact" className="btn-navy py-6 px-12 text-xl group">
                                    Book My Retirement Audit <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RetirementCalculator;
