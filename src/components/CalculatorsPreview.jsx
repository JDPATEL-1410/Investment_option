import React, { useState } from 'react';
import { FaCalculator, FaBullseye, FaUmbrella, FaGraduationCap, FaHome, FaPiggyBank } from 'react-icons/fa';

const CalculatorsPreview = () => {
    const [activeCalculator, setActiveCalculator] = useState('sip');

    // SIP Calculator State
    const [sipAmount, setSipAmount] = useState(5000);
    const [sipRate, setSipRate] = useState(12);
    const [sipYears, setSipYears] = useState(10);

    // Lumpsum Calculator State
    const [lumpsumAmount, setLumpsumAmount] = useState(100000);
    const [lumpsumRate, setLumpsumRate] = useState(12);
    const [lumpsumYears, setLumpsumYears] = useState(10);

    // Goal Calculator State
    const [goalAmount, setGoalAmount] = useState(1000000);
    const [goalYears, setGoalYears] = useState(10);
    const [goalRate, setGoalRate] = useState(12);

    // Retirement Calculator State
    const [currentAge, setCurrentAge] = useState(30);
    const [retirementAge, setRetirementAge] = useState(60);
    const [monthlyExpense, setMonthlyExpense] = useState(50000);
    const [inflation, setInflation] = useState(6);

    // SIP Calculation
    const calculateSIP = () => {
        const monthlyRate = sipRate / 12 / 100;
        const months = sipYears * 12;
        const futureValue = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        const invested = sipAmount * months;
        const returns = futureValue - invested;
        return { futureValue, invested, returns };
    };

    // Lumpsum Calculation
    const calculateLumpsum = () => {
        const futureValue = lumpsumAmount * Math.pow((1 + lumpsumRate / 100), lumpsumYears);
        const returns = futureValue - lumpsumAmount;
        return { futureValue, invested: lumpsumAmount, returns };
    };

    // Goal Calculation
    const calculateGoal = () => {
        const monthlyRate = goalRate / 12 / 100;
        const months = goalYears * 12;
        const monthlySIP = (goalAmount * monthlyRate) / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        const totalInvested = monthlySIP * months;
        return { monthlySIP, totalInvested, goalAmount };
    };

    // Retirement Calculation
    const calculateRetirement = () => {
        const yearsToRetirement = retirementAge - currentAge;
        const futureExpense = monthlyExpense * Math.pow((1 + inflation / 100), yearsToRetirement);
        const yearsInRetirement = 25; // Assuming 25 years post-retirement
        const corpusNeeded = futureExpense * 12 * yearsInRetirement;
        return { corpusNeeded, futureExpense, yearsToRetirement };
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const calculators = [
        { id: 'sip', icon: FaCalculator, title: 'SIP Calculator', color: 'from-blue-500 to-blue-600' },
        { id: 'lumpsum', icon: FaPiggyBank, title: 'Lumpsum Calculator', color: 'from-green-500 to-green-600' },
        { id: 'goal', icon: FaBullseye, title: 'Goal Calculator', color: 'from-purple-500 to-purple-600' },
        { id: 'retirement', icon: FaUmbrella, title: 'Retirement Calculator', color: 'from-orange-500 to-orange-600' },
    ];

    const sipResults = calculateSIP();
    const lumpsumResults = calculateLumpsum();
    const goalResults = calculateGoal();
    const retirementResults = calculateRetirement();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Calculator Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {calculators.map((calc) => (
                        <button
                            key={calc.id}
                            onClick={() => setActiveCalculator(calc.id)}
                            className={`p-6 rounded-xl transition-all duration-300 ${activeCalculator === calc.id
                                    ? `bg-gradient-to-br ${calc.color} text-white shadow-lg scale-105`
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <calc.icon className="text-3xl mx-auto mb-2" />
                            <p className="text-sm font-semibold text-center">{calc.title}</p>
                        </button>
                    ))}
                </div>

                {/* SIP Calculator */}
                {activeCalculator === 'sip' && (
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">SIP Calculator</h3>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Monthly Investment: {formatCurrency(sipAmount)}
                                </label>
                                <input
                                    type="range"
                                    min="500"
                                    max="100000"
                                    step="500"
                                    value={sipAmount}
                                    onChange={(e) => setSipAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Expected Return Rate: {sipRate}% p.a.
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.5"
                                    value={sipRate}
                                    onChange={(e) => setSipRate(Number(e.target.value))}
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Time Period: {sipYears} years
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={sipYears}
                                    onChange={(e) => setSipYears(Number(e.target.value))}
                                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Results</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Total Invested</span>
                                    <span className="text-xl font-bold text-gray-900">{formatCurrency(sipResults.invested)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Est. Returns</span>
                                    <span className="text-xl font-bold text-green-600">{formatCurrency(sipResults.returns)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                                    <span className="font-semibold">Future Value</span>
                                    <span className="text-2xl font-bold">{formatCurrency(sipResults.futureValue)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Lumpsum Calculator */}
                {activeCalculator === 'lumpsum' && (
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Lumpsum Calculator</h3>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Investment Amount: {formatCurrency(lumpsumAmount)}
                                </label>
                                <input
                                    type="range"
                                    min="10000"
                                    max="10000000"
                                    step="10000"
                                    value={lumpsumAmount}
                                    onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Expected Return Rate: {lumpsumRate}% p.a.
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.5"
                                    value={lumpsumRate}
                                    onChange={(e) => setLumpsumRate(Number(e.target.value))}
                                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Time Period: {lumpsumYears} years
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={lumpsumYears}
                                    onChange={(e) => setLumpsumYears(Number(e.target.value))}
                                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-2 border-green-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Results</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Total Invested</span>
                                    <span className="text-xl font-bold text-gray-900">{formatCurrency(lumpsumResults.invested)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Est. Returns</span>
                                    <span className="text-xl font-bold text-green-600">{formatCurrency(lumpsumResults.returns)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg text-white">
                                    <span className="font-semibold">Future Value</span>
                                    <span className="text-2xl font-bold">{formatCurrency(lumpsumResults.futureValue)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Goal Calculator */}
                {activeCalculator === 'goal' && (
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Goal Calculator</h3>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Target Amount: {formatCurrency(goalAmount)}
                                </label>
                                <input
                                    type="range"
                                    min="100000"
                                    max="50000000"
                                    step="100000"
                                    value={goalAmount}
                                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Time to Achieve: {goalYears} years
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="40"
                                    value={goalYears}
                                    onChange={(e) => setGoalYears(Number(e.target.value))}
                                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Expected Return Rate: {goalRate}% p.a.
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="30"
                                    step="0.5"
                                    value={goalRate}
                                    onChange={(e) => setGoalRate(Number(e.target.value))}
                                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Results</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Monthly SIP Required</span>
                                    <span className="text-xl font-bold text-purple-600">{formatCurrency(goalResults.monthlySIP)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Total Investment</span>
                                    <span className="text-xl font-bold text-gray-900">{formatCurrency(goalResults.totalInvested)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white">
                                    <span className="font-semibold">Goal Amount</span>
                                    <span className="text-2xl font-bold">{formatCurrency(goalResults.goalAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Retirement Calculator */}
                {activeCalculator === 'retirement' && (
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Retirement Calculator</h3>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Current Age: {currentAge} years
                                </label>
                                <input
                                    type="range"
                                    min="18"
                                    max="60"
                                    value={currentAge}
                                    onChange={(e) => setCurrentAge(Number(e.target.value))}
                                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Retirement Age: {retirementAge} years
                                </label>
                                <input
                                    type="range"
                                    min="50"
                                    max="75"
                                    value={retirementAge}
                                    onChange={(e) => setRetirementAge(Number(e.target.value))}
                                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Current Monthly Expense: {formatCurrency(monthlyExpense)}
                                </label>
                                <input
                                    type="range"
                                    min="10000"
                                    max="500000"
                                    step="5000"
                                    value={monthlyExpense}
                                    onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Inflation Rate: {inflation}% p.a.
                                </label>
                                <input
                                    type="range"
                                    min="3"
                                    max="10"
                                    step="0.5"
                                    value={inflation}
                                    onChange={(e) => setInflation(Number(e.target.value))}
                                    className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-6">Results</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Years to Retirement</span>
                                    <span className="text-xl font-bold text-gray-900">{retirementResults.yearsToRetirement} years</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                                    <span className="text-gray-600">Future Monthly Expense</span>
                                    <span className="text-xl font-bold text-orange-600">{formatCurrency(retirementResults.futureExpense)}</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-white">
                                    <span className="font-semibold">Corpus Needed</span>
                                    <span className="text-2xl font-bold">{formatCurrency(retirementResults.corpusNeeded)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CalculatorsPreview;
