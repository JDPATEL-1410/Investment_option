import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHeader from './PageHeader';

const PageTemplate = ({ title, subtitle, description, icon, children }) => {
    return (
        <>
            <Helmet>
                <title>{title} - Investment Options | Professional Financial Services</title>
                <meta name="description" content={description} />
            </Helmet>

            <PageHeader
                title={title}
                subtitle={subtitle}
                description={description}
                icon={icon}
            />

            <section className="section bg-white">
                <div className="container-custom max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gray-50 rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl"
                    >
                        {children}
                    </motion.div>

                    <div className="mt-12 flex justify-center">
                        <Link to="/" className="flex items-center gap-2 text-navy font-bold hover:text-primary transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageTemplate;
