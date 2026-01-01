import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogPreview = () => {
    const posts = [
        {
            title: 'Why SIP discipline matters more than market timing',
            excerpt: 'Discover how consistent investing beats trying to time the market, and why discipline is your biggest advantage...',
            date: '2024-01-15',
            category: 'Investment Strategy',
            image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=400&q=80',
        },
        {
            title: 'Direct vs Regular mutual funds: what truly matters',
            excerpt: 'Understanding the real difference between direct and regular plans, and making the right choice for your goals...',
            date: '2024-01-10',
            category: 'Mutual Funds',
            image: 'https://images.unsplash.com/photo-1579621970795-87faff2f011d?auto=format&fit=crop&w=400&q=80',
        },
        {
            title: 'How much insurance is actually enough',
            excerpt: 'A practical guide to calculating the right insurance cover for your family\'s financial security...',
            date: '2024-01-05',
            category: 'Insurance',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80',
        },
    ];

    return (
        <section className="section bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest mb-2"
                    >
                        Our Journal
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-navy"
                    >
                        Latest Insight From <span className="text-primary">Our Experts</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group border border-gray-100"
                        >
                            <div className="relative overflow-hidden h-52">
                                <img
                                    src={post.image}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    alt={post.title}
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.date).toLocaleDateString('en-IN', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    })}
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 mb-6 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                                <div className="mt-auto">
                                    <Link
                                        to={`/blog/${index + 1}`}
                                        className="text-navy font-bold inline-flex items-center gap-2 group/btn"
                                    >
                                        Continue Reading
                                        <ArrowRight className="w-4 h-4 text-primary group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
