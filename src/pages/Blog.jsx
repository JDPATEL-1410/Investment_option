import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight, TrendingUp, BookOpen, Target, Shield, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getEconomicTimesArticles } from '../services/rssService';
import PageHeader from '../components/PageHeader';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Investment Tips', 'Market Insights', 'Financial Planning', 'Tax Strategy'];

    // Fetch articles on component mount
    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                // Clear cache to get fresh articles with categories
                localStorage.removeItem('et_articles');
                localStorage.removeItem('et_articles_time');

                const data = await getEconomicTimesArticles('personalFinance');
                console.log('Loaded articles:', data); // Debug log
                setArticles(data);
            } catch (error) {
                console.error('Failed to load articles:', error);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    // Filter articles by category
    const filteredArticles = selectedCategory === 'All'
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    return (
        <>
            <Helmet>
                <title>Wealth Blog - Investment Insights & Financial Tips | Investment Options</title>
                <meta name="description" content="Stay informed with expert insights on investments, financial planning, tax strategies, and market trends. Your guide to smarter wealth management." />
            </Helmet>

            {/* Enhanced Page Header */}
            <PageHeader
                badge="Wealth Blog"
                title={
                    <>
                        Financial Wisdom for <br />
                        <span className="text-primary">Smarter Investing</span>
                    </>
                }
                description="Expert insights, market analysis, and actionable tips to help you make informed investment decisions and build lasting wealth."
                gradient="from-navy via-navy-600 to-primary"
            />

            {/* Category Filter */}
            <section className="py-12 bg-gray-50 border-b border-gray-200">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-navy text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-navy'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section bg-gray-50">
                <div className="container-custom">
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                                    <div className="h-48 bg-gray-200" />
                                    <div className="p-6">
                                        <div className="h-4 bg-gray-200 rounded mb-3" />
                                        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
                                        <div className="h-3 bg-gray-200 rounded mb-2" />
                                        <div className="h-3 bg-gray-200 rounded w-5/6" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <motion.div
                                layout
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredArticles.map((article, index) => (
                                    <motion.a
                                        key={article.id}
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 transition-all hover:shadow-xl"
                                    >
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden bg-gray-100">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/400x250/1a1f4e/6366f1?text=Economic+Times';
                                                }}
                                            />
                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {article.category}
                                                </span>
                                            </div>
                                            {/* External Link Icon */}
                                            <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                <ExternalLink className="w-5 h-5 text-navy" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Meta Info */}
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(article.pubDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4">
                                                {article.description}
                                            </p>

                                            {/* Read More */}
                                            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                                                <span>Read Full Article</span>
                                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>

                            {filteredArticles.length === 0 && (
                                <div className="text-center py-20">
                                    <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-xl text-gray-500">No articles found in this category.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>




        </>
    );
};

export default Blog;
