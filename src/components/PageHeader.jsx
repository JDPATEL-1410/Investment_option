import { motion } from 'framer-motion';

const PageHeader = ({
    badge,
    title,
    subtitle,
    description,
    icon: Icon,
    gradient = 'from-navy via-navy-800 to-navy-900',
    pattern = true
}) => {
    return (
        <section className={`relative pt-32 pb-20 bg-gradient-to-br ${gradient} text-white overflow-hidden`}>
            {/* Animated Background Pattern */}
            {pattern && (
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
            )}

            {/* Decorative Gradient Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Floating Shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-pulse" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Icon */}
                    {Icon && (
                        <motion.div
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20"
                        >
                            <Icon className="w-12 h-12 text-navy" />
                        </motion.div>
                    )}

                    {/* Badge */}
                    {badge && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-sm font-bold uppercase tracking-wider text-primary">
                                {badge}
                            </span>
                        </motion.div>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight italic tracking-tight"
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle (if provided) */}
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl font-semibold text-primary/90 mb-6 italic"
                        >
                            "{subtitle}"
                        </motion.p>
                    )}

                    {/* Description */}
                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <svg
                className="absolute bottom-0 left-0 w-full h-auto"
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    fill="white"
                    fillOpacity="0.1"
                />
            </svg>
        </section>
    );
};

export default PageHeader;
