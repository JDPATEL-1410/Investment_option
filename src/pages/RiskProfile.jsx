import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2, Target, TrendingUp, Shield, BarChart3, AlertTriangle, ArrowRight, RefreshCcw } from 'lucide-react';

const RiskProfile = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            question: 'What is your age?',
            options: [
                { text: 'Above 60 years', score: 1 },
                { text: '51 – 60 years', score: 2 },
                { text: '41 – 50 years', score: 3 },
                { text: '31 – 40 years', score: 4 },
                { text: 'Below 30 years', score: 5 },
            ],
        },
        {
            question: 'For how long do you plan to stay invested?',
            options: [
                { text: 'Less than 3 years', score: 1 },
                { text: '3 – 5 years', score: 2 },
                { text: '5 – 7 years', score: 3 },
                { text: '7 – 10 years', score: 4 },
                { text: 'More than 10 years', score: 5 },
            ],
        },
        {
            question: 'What is your main reason for investing?',
            options: [
                { text: 'Capital protection', score: 1 },
                { text: 'Regular income', score: 2 },
                { text: 'Moderate growth', score: 3 },
                { text: 'Long-term wealth creation', score: 4 },
                { text: 'Aggressive wealth creation', score: 5 },
            ],
        },
        {
            question: 'How stable is your income source?',
            options: [
                { text: 'No regular income', score: 1 },
                { text: 'Irregular income', score: 2 },
                { text: 'Somewhat stable', score: 3 },
                { text: 'Stable salaried/business income', score: 4 },
                { text: 'Highly stable with surplus', score: 5 },
            ],
        },
        {
            question: 'How many people financially depend on you?',
            options: [
                { text: 'More than 4', score: 1 },
                { text: '3 – 4', score: 2 },
                { text: '2 – 3', score: 3 },
                { text: '1', score: 4 },
                { text: 'None', score: 5 },
            ],
        },
        {
            question: 'Do you have an emergency fund (3–6 months expenses)?',
            options: [
                { text: 'No emergency fund', score: 1 },
                { text: 'Less than 3 months', score: 2 },
                { text: '3 months', score: 3 },
                { text: '3 – 6 months', score: 4 },
                { text: 'More than 6 months', score: 5 },
            ],
        },
        {
            question: 'How experienced are you with market-linked investments?',
            options: [
                { text: 'No experience', score: 1 },
                { text: 'Limited experience', score: 2 },
                { text: 'Moderate experience', score: 3 },
                { text: 'Experienced investor', score: 4 },
                { text: 'Very experienced', score: 5 },
            ],
        },
        {
            question: 'If your investment falls 20% in a short period, what will you do?',
            options: [
                { text: 'Exit immediately', score: 1 },
                { text: 'Panic but wait', score: 2 },
                { text: 'Stay invested', score: 3 },
                { text: 'Invest more cautiously', score: 4 },
                { text: 'Invest aggressively', score: 5 },
            ],
        },
        {
            question: 'What annual return do you realistically expect?',
            options: [
                { text: 'Up to 6%', score: 1 },
                { text: '6 – 8%', score: 2 },
                { text: '8 – 10%', score: 3 },
                { text: '10 – 12%', score: 4 },
                { text: 'More than 12%', score: 5 },
            ],
        },
        {
            question: 'How comfortable are you with ups and downs in portfolio value?',
            options: [
                { text: 'Not comfortable at all', score: 1 },
                { text: 'Slightly uncomfortable', score: 2 },
                { text: 'Neutral', score: 3 },
                { text: 'Comfortable', score: 4 },
                { text: 'Very comfortable', score: 5 },
            ],
        },
        {
            question: 'Which matters more to you?',
            options: [
                { text: 'Avoid loss at any cost', score: 1 },
                { text: 'Minimize loss', score: 2 },
                { text: 'Balance risk and return', score: 3 },
                { text: 'Maximize returns', score: 4 },
                { text: 'High risk for high returns', score: 5 },
            ],
        },
        {
            question: 'How do you usually take financial decisions?',
            options: [
                { text: 'Very cautious', score: 1 },
                { text: 'Conservative', score: 2 },
                { text: 'Balanced', score: 3 },
                { text: 'Growth-oriented', score: 4 },
                { text: 'Aggressive', score: 5 },
            ],
        },
    ];

    const handleAnswer = (score) => {
        const newAnswers = [...answers, score];
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const calculateRiskProfile = () => {
        const totalScore = answers.reduce((sum, score) => sum + score, 0);

        if (totalScore >= 12 && totalScore <= 20) {
            return {
                profile: 'Conservative',
                allocation: { equity: '25%', debt: '70%', others: '5%' },
                color: 'text-blue-500',
                bgColor: 'bg-blue-500/10',
                borderColor: 'border-blue-500/20',
                icon: Shield,
                description: 'You prefer capital preservation and stability over growth. Your portfolio should focus on low-risk investments with steady returns.',
                meaning: 'You have a low risk tolerance and prefer to protect your capital. Market volatility makes you uncomfortable, and you prioritize safety over high returns.',
            };
        }
        if (totalScore >= 21 && totalScore <= 33) {
            return {
                profile: 'Moderately Conservative',
                allocation: { equity: '40%', debt: '55%', others: '5%' },
                color: 'text-cyan-500',
                bgColor: 'bg-cyan-500/10',
                borderColor: 'border-cyan-500/20',
                icon: AlertTriangle,
                description: 'You seek a balance between safety and modest growth with limited exposure to volatility.',
                meaning: 'You are willing to take some risk for better returns but still prioritize capital protection. You prefer a balanced approach with more emphasis on stability.',
            };
        }
        if (totalScore >= 34 && totalScore <= 45) {
            return {
                profile: 'Moderate',
                allocation: { equity: '60%', debt: '35%', others: '5%' },
                color: 'text-primary',
                bgColor: 'bg-primary/10',
                borderColor: 'border-primary/20',
                icon: BarChart3,
                description: 'You are comfortable with market fluctuations and can invest in a balanced mix of equity and debt.',
                meaning: 'You have a balanced approach to risk and return. You can handle moderate volatility and are focused on long-term wealth creation.',
            };
        }
        if (totalScore >= 46 && totalScore <= 54) {
            return {
                profile: 'Moderately Aggressive',
                allocation: { equity: '75%', debt: '20%', others: '5%' },
                color: 'text-orange-500',
                bgColor: 'bg-orange-500/10',
                borderColor: 'border-orange-500/20',
                icon: TrendingUp,
                description: 'You are willing to accept higher volatility for potentially higher returns over the long term.',
                meaning: 'You have a high risk tolerance and are comfortable with significant market fluctuations. You prioritize growth and can stay invested during market downturns.',
            };
        }
        return {
            profile: 'Aggressive',
            allocation: { equity: '90%', debt: '5%', others: '5%' },
            color: 'text-red-500',
            bgColor: 'bg-red-500/10',
            borderColor: 'border-red-500/20',
            icon: Target,
            description: 'You have very high risk tolerance and seek maximum growth through equity exposure.',
            meaning: 'You are highly comfortable with risk and market volatility. You focus on aggressive wealth creation and can stay invested through major market corrections.',
        };
    };

    const result = showResult ? calculateRiskProfile() : null;

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResult(false);
    };

    const totalScore = showResult ? answers.reduce((sum, score) => sum + score, 0) : 0;

    return (
        <>
            <Helmet>
                <title>Investor Risk Profiling - Know Your Risk Profile | Investment Options</title>
                <meta name="description" content="Discover your investor risk profile with our comprehensive questionnaire." />
            </Helmet>

            <section className="relative pt-32 pb-24 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20"
                        >
                            Strategy Tool
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 italic">Investor <span className="text-primary">Profiling</span></h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Every investor reacts differently to market volatility. Let's find out your tolerance levels to build a portfolio that lets you sleep at night.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            </section>

            <section className="section bg-gray-50">
                <div className="container-custom max-w-4xl">
                    {!showResult ? (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100"
                        >
                            {/* Progress Bar */}
                            <div className="mb-12">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <p className="text-xs font-bold text-navy uppercase tracking-widest mb-1">Question</p>
                                        <h4 className="text-2xl font-bold text-navy">{currentQuestion + 1} <span className="text-gray-300 text-lg">/ {questions.length}</span></h4>
                                    </div>
                                    <p className="font-bold text-primary">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</p>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                        className="bg-primary h-full rounded-full transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Question Card */}
                            <div className="mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                                    {questions[currentQuestion].question}
                                </h2>
                            </div>

                            {/* Options Grid */}
                            <div className="grid gap-4">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => handleAnswer(option.score)}
                                        className="w-full text-left p-6 bg-gray-50 border-2 border-transparent rounded-[1.5rem] hover:bg-primary/5 hover:border-primary/30 transition-all group flex items-center justify-between"
                                    >
                                        <span className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                                            {option.text}
                                        </span>
                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                                {/* Success Confetti visual */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-navy to-primary" />

                                <div className="relative z-10">
                                    <div className={`w-24 h-24 ${result.bgColor} rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner`}>
                                        <result.icon className={`w-12 h-12 ${result.color}`} />
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest mb-2">Your Risk Profile is</h2>
                                    <div className={`text-5xl md:text-7xl font-bold mb-8 italic ${result.color}`}>
                                        {result.profile}
                                    </div>

                                    <div className="max-w-2xl mx-auto mb-12">
                                        <p className="text-xl text-navy font-bold mb-4">"{result.description}"</p>
                                        <p className="text-gray-500 leading-relaxed italic">{result.meaning}</p>
                                    </div>

                                    {/* Score Pill */}
                                    <div className="inline-flex items-center gap-3 bg-gray-100 px-8 py-3 rounded-full mb-16">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total Score</span>
                                        <span className="text-xl font-bold text-navy">{totalScore} <span className="text-gray-300">/ 60</span></span>
                                    </div>

                                    {/* Allocation Cards */}
                                    <div className="grid md:grid-cols-3 gap-6 mb-16 px-4">
                                        {[
                                            { label: 'Equity', value: result.allocation.equity, sub: 'High Growth', bg: 'bg-navy text-white' },
                                            { label: 'Debt', value: result.allocation.debt, sub: 'Stability', bg: 'bg-primary text-navy' },
                                            { label: 'Others', value: result.allocation.others, sub: 'Safe Haven', bg: 'bg-gray-100 text-navy' },
                                        ].map((alloc, i) => (
                                            <div key={i} className={`${alloc.bg} p-8 rounded-[2rem] shadow-lg transition-transform hover:-translate-y-2`}>
                                                <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">{alloc.label}</p>
                                                <h4 className="text-4xl font-bold mb-1">{alloc.value}</h4>
                                                <p className="text-xs font-bold uppercase opacity-40">{alloc.sub}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Box */}
                                    <div className="bg-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold mb-4 transition-colors group-hover:text-primary">Ready to implement this plan?</h3>
                                            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Our advisors are ready to help you deploy this strategy using the most tax-efficient mutual fund portfolios.</p>
                                            <div className="flex flex-wrap justify-center gap-4">
                                                <a href="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/90 hover:text-navy transition-all flex items-center gap-2">
                                                    Personalized Advice <ArrowRight className="w-5 h-5" />
                                                </a>
                                                <button onClick={resetQuiz} className="bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
                                                    <RefreshCcw className="w-5 h-5" /> Retake
                                                </button>
                                            </div>
                                        </div>
                                        {/* Background icon blur */}
                                        <BarChart3 className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </>
    );
};

export default RiskProfile;
