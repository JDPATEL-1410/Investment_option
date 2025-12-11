import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock } from 'react-icons/fa';

const ResourcesPreview = () => {
    const articles = [
        {
            title: 'Why SIP is Better Than Trying to Time the Market',
            description:
                'Learn how systematic investment plans help you build wealth consistently without worrying about market timing.',
            category: 'Investment Strategy',
            readTime: '5 min read',
            image: '/wealth-growth.png',
        },
        {
            title: 'Direct vs Regular Mutual Funds: What Matters More',
            description:
                'Understanding the real difference between direct and regular mutual funds beyond just the expense ratio.',
            category: 'Mutual Funds',
            readTime: '7 min read',
            image: '/mutual-fund-investment.png',
        },
        {
            title: 'How Much Life Insurance Cover Do You Really Need?',
            description:
                'A comprehensive guide to calculating the right life insurance coverage for your family\'s financial security.',
            category: 'Insurance',
            readTime: '6 min read',
            image: '/family-investing.png',
        },
    ];

    return (
        <section className="section-container bg-white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-teal font-semibold text-sm uppercase tracking-wide">
                    Resources & Insights
                </span>
                <h2 className="mt-2 mb-4">
                    Learn About Smart Investing
                </h2>
                <p className="text-gray-600 text-lg">
                    Stay informed with our latest articles, guides, and insights on
                    mutual funds, financial planning, and wealth creation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <article
                        key={index}
                        className="group card hover:scale-[1.02] transition-all duration-300 p-0 overflow-hidden"
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                            {/* Category Badge */}
                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm 
              text-primary-500 px-3 py-1 rounded-full text-xs font-semibold">
                                {article.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-primary-500 mb-3 line-clamp-2 
              group-hover:text-accent-teal transition-colors duration-300">
                                {article.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                {article.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex items-center space-x-2 text-gray-500 text-xs">
                                    <FaClock className="h-3 w-3" />
                                    <span>{article.readTime}</span>
                                </div>

                                <Link
                                    to="/resources"
                                    className="text-accent-teal font-semibold text-sm hover:text-accent-green 
                  transition-colors duration-300 inline-flex items-center group/link"
                                >
                                    Read more
                                    <FaArrowRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 
                  transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12">
                <Link to="/resources" className="btn-primary inline-block">
                    View All Articles
                </Link>
            </div>
        </section>
    );
};

export default ResourcesPreview;
