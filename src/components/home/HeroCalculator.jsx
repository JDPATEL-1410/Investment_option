import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';

const HeroCalculator = () => {
    const [amount, setAmount] = useState(5000);
    const [years, setYears] = useState(10);
    const [rate] = useState(12);

    const calculateReturns = () => {
        const i = rate / 12 / 100;
        const n = years * 12;
        const total = amount * [Math.pow(1 + i, n) - 1] / i * (1 + i);
        return Math.round(total);
    };

    const totalValue = calculateReturns();
    const invested = amount * years * 12;
    const returns = totalValue - invested;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative group"
        >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-navy to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Main Card */}
            <div className="relative backdrop-blur-xl bg-white/95 rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md mx-auto border border-gray-100 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-navy/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                {/* Header */}
                <div className="relative mb-8 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-navy/10 border border-primary/20 mb-4"
                    >
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-navy">Quick Calculator</span>
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
                        Estimate Your Wealth
                    </h3>
                </div>

                <div className="relative space-y-8">
                    {/* Monthly SIP Amount */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Monthly SIP</label>
                            <motion.span
                                key={amount}
                                initial={{ scale: 1.2, color: '#7C7ED1' }}
                                animate={{ scale: 1, color: '#414393' }}
                                className="text-2xl font-black"
                            >
                                ₹{amount.toLocaleString('en-IN')}
                            </motion.span>
                        </div>
                        <div className="relative">
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full appearance-none cursor-pointer accent-primary
                                         [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full 
                                         [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-primary [&::-webkit-slider-thumb]:to-navy
                                         [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary/30
                                         [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                            />
                            <div className="absolute top-1/2 -translate-y-1/2 h-3 bg-gradient-to-r from-primary to-navy rounded-full pointer-events-none"
                                style={{ width: `${(amount / 100000) * 100}%` }} />
                        </div>
                    </div>

                    {/* Investment Period */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Time Period</label>
                            <motion.span
                                key={years}
                                initial={{ scale: 1.2, color: '#7C7ED1' }}
                                animate={{ scale: 1, color: '#414393' }}
                                className="text-2xl font-black"
                            >
                                {years} Years
                            </motion.span>
                        </div>
                        <div className="relative">
                            <input
                                type="range"
                                min="1"
                                max="30"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="w-full h-3 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full appearance-none cursor-pointer accent-primary
                                         [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full 
                                         [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-primary [&::-webkit-slider-thumb]:to-navy
                                         [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary/30
                                         [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                            />
                            <div className="absolute top-1/2 -translate-y-1/2 h-3 bg-gradient-to-r from-primary to-navy rounded-full pointer-events-none"
                                style={{ width: `${(years / 30) * 100}%` }} />
                        </div>
                    </div>

                    {/* Results Card */}
                    <motion.div
                        layout
                        className="relative bg-gradient-to-br from-navy via-navy-700 to-navy-900 p-6 rounded-2xl overflow-hidden group/result"
                    >
                        {/* Animated Background Orb */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover/result:scale-150 transition-transform duration-700" />

                        <div className="relative space-y-4">
                            {/* Total Value */}
                            <div className="text-center">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                                    <TrendingUp className="w-3 h-3" />
                                    Expected Wealth after {years} years
                                </p>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={totalValue}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="text-4xl md:text-5xl font-black text-white mb-1"
                                    >
                                        ₹{totalValue.toLocaleString('en-IN')}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            {/* Breakdown */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                <div className="text-center">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Invested</p>
                                    <p className="text-lg font-bold text-gray-300">₹{invested.toLocaleString('en-IN')}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Returns</p>
                                    <p className="text-lg font-bold text-primary">₹{returns.toLocaleString('en-IN')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="block w-full"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full btn-primary justify-center text-lg py-5 text-white relative overflow-hidden group/btn"
                        >
                            <span className="relative z-10">Ready to Start Investing?</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                        </motion.button>
                    </Link>

                </div>
            </div>
        </motion.div>
    );
};

export default HeroCalculator;
