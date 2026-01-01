import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getEconomicTimesArticles } from '../../services/rssService';

const EconomicTimesNews = ({ limit = 10, showViewMore = true, showHeader = true }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadArticles = async () => {
            setLoading(true);
            try {
                const data = await getEconomicTimesArticles('personalFinance');
                setArticles(data);
            } catch (error) {
                console.error('Failed to load articles:', error);
            } finally {
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    const formatDate = (date) => {
        const now = new Date();
        const articleDate = new Date(date);
        const diffTime = Math.abs(now - articleDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;

        return articleDate.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <section className="section bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-navy mb-4">Latest Financial News</h2>
                        <p className="text-gray-600">Loading articles from Economic Times...</p>
                    </div>
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
                </div>
            </section>
        );
    }

    return (
        <section className="section bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container-custom relative z-10">
                {/* Header */}
                {showHeader && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                            <TrendingUp className="w-4 h-4" />
                            Economic Times
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                            Latest Financial <span className="text-primary">News</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Stay updated with the latest market trends and financial insights
                        </p>
                    </motion.div>
                )}

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(0, limit).map((article, index) => (
                        <motion.a
                            key={article.id}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
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
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* External link icon */}
                                <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    <ExternalLink className="w-5 h-5 text-navy" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Date */}
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(article.pubDate)}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                                    {article.description}
                                </p>

                                {/* Read more */}
                                <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                                    <span>Read Full Article</span>
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* View More */}
                {showViewMore && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-700 transition-all transform hover:scale-105"
                        >
                            View All Articles
                            <ExternalLink className="w-5 h-5" />
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default EconomicTimesNews;
