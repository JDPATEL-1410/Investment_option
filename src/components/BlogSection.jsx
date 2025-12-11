import React, { useState, useEffect } from 'react';
import { FaClock, FaNewspaper, FaUser, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const BlogSection = ({ limit = 6, showHeader = true }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Category-specific fallback thumbnails using Unsplash
    const getCategoryThumbnail = (title, description) => {
        const text = `${title} ${description}`.toLowerCase();

        // Check title and description for keywords
        if (text.includes('invest') || text.includes('stock') || text.includes('mutual fund') || text.includes('sip') || text.includes('equity')) {
            return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop';
        }
        if (text.includes('tax') || text.includes('saving') || text.includes('deduction') || text.includes('80c')) {
            return 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop';
        }
        if (text.includes('wealth') || text.includes('rich') || text.includes('millionaire') || text.includes('portfolio')) {
            return 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop';
        }
        if (text.includes('budget') || text.includes('personal finance') || text.includes('money management') || text.includes('financial planning')) {
            return 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&h=400&fit=crop';
        }
        if (text.includes('insurance') || text.includes('policy') || text.includes('coverage')) {
            return 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop';
        }
        if (text.includes('retirement') || text.includes('pension') || text.includes('senior')) {
            return 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=400&fit=crop';
        }
        if (text.includes('real estate') || text.includes('property') || text.includes('housing')) {
            return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop';
        }
        if (text.includes('gold') || text.includes('commodity') || text.includes('precious metal')) {
            return 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop';
        }
        if (text.includes('crypto') || text.includes('bitcoin') || text.includes('blockchain')) {
            return 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop';
        }
        if (text.includes('market') || text.includes('trading') || text.includes('sensex') || text.includes('nifty')) {
            return 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop';
        }

        // Default financial image
        return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop';
    };

    const fetchBlogArticles = async () => {
        try {
            setLoading(true);
            // Using Economic Times Wealth RSS feed
            const RSS_URL = 'https://economictimes.indiatimes.com/wealth/rssfeeds/837555174.cms';
            const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

            const response = await fetch(API_URL);
            const data = await response.json();

            if (data.status === 'ok' && data.items && data.items.length > 0) {
                const processedArticles = data.items.slice(0, limit).map((item) => {
                    let thumbnail = '';

                    // Method 1: Try enclosure
                    if (item.enclosure && item.enclosure.link) {
                        thumbnail = item.enclosure.link;
                    }

                    // Method 2: Try thumbnail field
                    if (!thumbnail && item.thumbnail) {
                        thumbnail = item.thumbnail;
                    }

                    // Method 3: Extract from description
                    if (!thumbnail && item.description) {
                        const imgMatch = item.description.match(/<img[^>]+src=["']([^"']+)["']/i);
                        if (imgMatch && imgMatch[1]) {
                            thumbnail = imgMatch[1];
                        }
                    }

                    // Method 4: Use category-based fallback
                    if (!thumbnail) {
                        thumbnail = getCategoryThumbnail(item.title, item.description || '');
                    }

                    // Clean up relative URLs
                    if (thumbnail && !thumbnail.startsWith('http')) {
                        thumbnail = `https://www.moneycontrol.com${thumbnail}`;
                    }

                    return {
                        ...item,
                        thumbnail,
                        author: item.author || 'Economic Times',
                        pubDate: item.pubDate || new Date().toISOString()
                    };
                });

                setArticles(processedArticles);
            } else {
                // Fallback articles
                setArticles([
                    {
                        title: 'Top Investment Strategies for 2024',
                        description: 'Discover the most effective investment strategies to maximize your returns in the current market scenario.',
                        thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
                        link: '#',
                        author: 'Investment Expert',
                        pubDate: new Date().toISOString()
                    },
                    {
                        title: 'Understanding Mutual Funds',
                        description: 'A comprehensive guide to mutual fund investments and how they can help you achieve your financial goals.',
                        thumbnail: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&h=400&fit=crop',
                        link: '#',
                        author: 'Finance Advisor',
                        pubDate: new Date().toISOString()
                    },
                    {
                        title: 'Tax Saving Tips for Investors',
                        description: 'Learn how to optimize your tax savings through smart investment choices and planning.',
                        thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
                        link: '#',
                        author: 'Tax Expert',
                        pubDate: new Date().toISOString()
                    }
                ]);
            }
        } catch (err) {
            console.error('Error fetching blog articles:', err);
            // Use fallback articles on error
            setArticles([
                {
                    title: 'Top Investment Strategies for 2024',
                    description: 'Discover the most effective investment strategies to maximize your returns in the current market scenario.',
                    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
                    link: '#',
                    author: 'Investment Expert',
                    pubDate: new Date().toISOString()
                }
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogArticles();
    }, [limit]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    const stripHtml = (html) => {
        if (!html) return '';
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                {showHeader && (
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                            <FaNewspaper className="text-blue-600" />
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                                Latest Insights
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Latest from the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40459c] to-[#5a5fb8]">
                                Financial World
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Stay updated with the latest market trends, investment strategies, and financial news
                        </p>
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Array.from({ length: Math.min(limit, 3) }).map((_, i) => (
                            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg animate-pulse">
                                <div className="h-48 bg-gray-300"></div>
                                <div className="p-6 space-y-3">
                                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded"></div>
                                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Articles Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <article
                                key={index}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                {/* Article Image */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                                    <img
                                        src={article.thumbnail}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.src = getCategoryThumbnail(article.title, article.description || '');
                                        }}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                {/* Article Content */}
                                <div className="p-6">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <div className="flex items-center gap-1">
                                            <FaUser className="text-xs text-blue-500" />
                                            <span>{article.author}</span>
                                        </div>
                                        <span className="text-gray-300">•</span>
                                        <div className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-xs text-blue-500" />
                                            <time dateTime={article.pubDate}>{formatDate(article.pubDate)}</time>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                        {article.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                        {stripHtml(article.description)}
                                    </p>

                                    {/* Read More Link */}
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors duration-300"
                                    >
                                        Read Article
                                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Explore More Button */}
                {!loading && limit <= 3 && (
                    <div className="text-center mt-12">
                        <a
                            href="/resources"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#40459c] to-[#5a5fb8] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Explore More Articles
                            <FaArrowRight className="text-sm" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
