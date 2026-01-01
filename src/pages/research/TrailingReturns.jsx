import { useState, useEffect } from 'react';
import PageTemplate from '../../components/PageTemplate';
import { TrendingUp, RefreshCcw, Info, Search } from 'lucide-react';
import { getTrailingReturns } from '../../services/trailingReturnsService';
import { motion, AnimatePresence } from 'framer-motion';

const TrailingReturns = () => {
    const [funds, setFunds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [lastRefresh, setLastRefresh] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        const data = await getTrailingReturns();
        setFunds(data);
        setLoading(false);
        setLastRefresh(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filteredFunds = funds.filter(fund =>
        fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fund.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PageTemplate
            title="Trailing Returns"
            subtitle="Real-time Performance Analytics"
            description="Analyze top-performing mutual funds with live trailing returns calculated from daily NAVs."
            icon={TrendingUp}
        >
            <div className="space-y-8">
                {/* Header Controls */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search funds or categories..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        {lastRefresh && (
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                Last Updated: {lastRefresh}
                            </span>
                        )}
                        <button
                            onClick={fetchData}
                            disabled={loading}
                            className="p-3 bg-navy text-white rounded-xl hover:bg-primary transition-all disabled:opacity-50 group"
                        >
                            <RefreshCcw className={`w-5 h-5 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl overflow-hidden min-h-[400px]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-8 py-6 text-sm font-black text-navy uppercase tracking-widest border-b border-gray-100">Fund Name</th>
                                    <th className="px-8 py-6 text-sm font-black text-navy uppercase tracking-widest border-b border-gray-100">Category</th>
                                    <th className="px-8 py-6 text-sm font-black text-navy uppercase tracking-widest border-b border-gray-100 text-center">1 Year</th>
                                    <th className="px-8 py-6 text-sm font-black text-navy uppercase tracking-widest border-b border-gray-100 text-center">3 Year</th>
                                    <th className="px-8 py-6 text-sm font-black text-navy uppercase tracking-widest border-b border-gray-100 text-center">5 Year</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                <AnimatePresence mode="popLayout">
                                    {loading ? (
                                        [...Array(6)].map((_, i) => (
                                            <tr key={`skeleton-${i}`} className="animate-pulse">
                                                <td className="px-8 py-6"><div className="h-6 bg-gray-100 rounded-lg w-full" /></td>
                                                <td className="px-8 py-6"><div className="h-8 bg-gray-50 rounded-full w-24" /></td>
                                                <td className="px-8 py-6"><div className="h-6 bg-gray-100 rounded-lg w-16 mx-auto" /></td>
                                                <td className="px-8 py-6"><div className="h-6 bg-gray-100 rounded-lg w-16 mx-auto" /></td>
                                                <td className="px-8 py-6"><div className="h-6 bg-gray-100 rounded-lg w-16 mx-auto" /></td>
                                            </tr>
                                        ))
                                    ) : filteredFunds.length > 0 ? (
                                        filteredFunds.map((fund, index) => (
                                            <motion.tr
                                                key={fund.name}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="hover:bg-gray-50/80 transition-colors group"
                                            >
                                                <td className="px-8 py-6">
                                                    <p className="font-bold text-navy group-hover:text-primary transition-colors">{fund.name}</p>
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Updated: {fund.lastUpdated}</p>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <span className="px-4 py-1.5 bg-navy/5 text-navy text-[10px] font-black uppercase tracking-widest rounded-full border border-navy/10">
                                                        {fund.category}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-center">
                                                    <span className={`text-lg font-black ${parseFloat(fund['1Y']) > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                                        {fund['1Y']}%
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-center">
                                                    <span className={`text-lg font-black ${parseFloat(fund['3Y']) > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                                        {fund['3Y']}%
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-center">
                                                    <span className={`text-lg font-black ${parseFloat(fund['5Y']) > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                                        {fund['5Y']}%
                                                    </span>
                                                </td>
                                            </motion.tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-8 py-20 text-center">
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                                                        <Search className="w-8 h-8 text-gray-300" />
                                                    </div>
                                                    <p className="text-gray-500 font-bold">No funds found matching your search.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Information Card */}
                <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 flex gap-6 items-start">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <Info className="w-6 h-6 text-navy" />
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-lg font-black text-navy uppercase tracking-widest">Understanding Trailing Returns</h4>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            Trailing returns (CAGR) represent the annual growth rate of an investment over a specified period of time.
                            These values are calculated dynamically using direct NAV data from AMFI.
                            <span className="block mt-2 italic font-bold text-navy">* Past performance does not guarantee future results. Data is fetched from public sources and may have a minor lag.</span>
                        </p>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default TrailingReturns;

