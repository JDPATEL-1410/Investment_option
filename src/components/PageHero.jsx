import React from 'react';

const PageHero = ({
    title,
    subtitle,
    highlightText,
    description,
    imageSrc,
    showImage = true
}) => {
    return (
        <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden min-h-[50vh] flex items-center">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className={`grid ${showImage && imageSrc ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
                    {/* Left Content */}
                    <div className={`space-y-4 ${!showImage || !imageSrc ? 'max-w-4xl mx-auto text-center' : ''}`}>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                            {title}{' '}
                            {highlightText && (
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600">
                                    {highlightText}
                                </span>
                            )}
                        </h1>
                        {description && (
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {description}
                            </p>
                        )}
                        {subtitle && (
                            <p className="text-base text-gray-500 leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* Right Image */}
                    {showImage && imageSrc && (
                        <div className="relative lg:block hidden">
                            <div className="relative z-10">
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 border-2 border-white"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
        </section>
    );
};

export default PageHero;
