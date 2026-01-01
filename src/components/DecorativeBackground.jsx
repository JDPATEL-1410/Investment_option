/**
 * Decorative Background Component
 * Adds financial-themed background images and patterns to sections
 */

export const DecorativeBackground = ({ variant = 'default', className = '' }) => {
    const variants = {
        default: (
            <>
                {/* Floating geometric shapes */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-navy/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1f4e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </>
        ),

        financial: (
            <>
                {/* Financial chart pattern */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
                        <path d="M0 400 L100 350 L200 380 L300 300 L400 320 L500 250 L600 280 L700 200 L800 220"
                            stroke="currentColor" strokeWidth="3" className="text-primary" />
                        <path d="M0 450 L100 420 L200 440 L300 380 L400 400 L500 340 L600 360 L700 300 L800 320"
                            stroke="currentColor" strokeWidth="2" className="text-navy" opacity="0.5" />
                    </svg>
                </div>

                {/* Floating coins/circles */}
                <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full border-4 border-primary/10 animate-pulse-slow" />
                <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full border-4 border-navy/10 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />

                {/* Gradient orbs */}
                <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-navy/10 to-transparent rounded-full blur-3xl" />
            </>
        ),

        hero: (
            <>
                {/* Large background shapes */}
                <div className="absolute top-0 right-0 w-[60%] h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-navy/10 rounded-l-[100px]" />
                </div>

                {/* Animated gradient orbs */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-[10%] right-[5%] w-[30%] h-[40%] bg-navy/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle, #1a1f4e 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                }} />
            </>
        ),

        stats: (
            <>
                {/* Rising bars pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-5">
                    <div className="flex items-end justify-around h-full px-10">
                        {[40, 60, 45, 75, 55, 80, 65, 90, 70].map((height, i) => (
                            <div
                                key={i}
                                className="bg-primary rounded-t-lg transition-all duration-1000 hover:bg-navy"
                                style={{
                                    width: '8%',
                                    height: `${height}%`,
                                    animationDelay: `${i * 0.1}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Floating numbers */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {['12%', '₹', '24K', '+15%', '∞'].map((symbol, i) => (
                        <div
                            key={i}
                            className="absolute text-6xl font-bold text-primary/5 animate-float"
                            style={{
                                top: `${20 + i * 15}%`,
                                left: `${10 + i * 18}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${4 + i}s`
                            }}
                        >
                            {symbol}
                        </div>
                    ))}
                </div>
            </>
        ),

        minimal: (
            <>
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />

                {/* Single floating orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
            </>
        ),
    };

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {variants[variant] || variants.default}
        </div>
    );
};

export default DecorativeBackground;
