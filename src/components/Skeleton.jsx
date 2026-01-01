/**
 * Skeleton Loader Components
 * Used for loading states throughout the application
 */

export const SkeletonCard = () => (
    <div className="card p-8 space-y-4">
        <div className="skeleton-circle w-16 h-16" />
        <div className="skeleton-title" />
        <div className="skeleton-text" />
        <div className="skeleton-text w-5/6" />
        <div className="skeleton-text w-4/6" />
    </div>
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
    <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
            <div
                key={i}
                className="skeleton-text"
                style={{ width: `${100 - (i * 10)}%` }}
            />
        ))}
    </div>
);

export const SkeletonImage = ({ className = '' }) => (
    <div className={`skeleton aspect-video ${className}`} />
);

export const SkeletonAvatar = ({ size = 'md' }) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24',
    };

    return <div className={`skeleton-circle ${sizes[size]}`} />;
};

export const SkeletonButton = ({ className = '' }) => (
    <div className={`skeleton h-12 w-32 rounded-xl ${className}`} />
);

export const SkeletonTestimonial = () => (
    <div className="card p-8 space-y-4">
        <div className="flex items-center gap-4">
            <SkeletonAvatar size="lg" />
            <div className="flex-1 space-y-2">
                <div className="skeleton h-5 w-32" />
                <div className="skeleton h-4 w-24" />
            </div>
        </div>
        <SkeletonText lines={4} />
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="skeleton w-5 h-5 rounded" />
            ))}
        </div>
    </div>
);

export const SkeletonBlogPost = () => (
    <div className="card overflow-hidden">
        <SkeletonImage className="rounded-t-[2rem]" />
        <div className="p-8 space-y-4">
            <div className="skeleton h-6 w-20 rounded-full" />
            <div className="skeleton-title" />
            <SkeletonText lines={3} />
            <div className="flex items-center gap-4 pt-4">
                <SkeletonAvatar size="sm" />
                <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-24" />
                    <div className="skeleton h-3 w-20" />
                </div>
            </div>
        </div>
    </div>
);

export const SkeletonServiceCard = () => (
    <div className="card p-8 space-y-6">
        <div className="skeleton w-16 h-16 rounded-2xl" />
        <div className="space-y-3">
            <div className="skeleton h-7 w-3/4" />
            <SkeletonText lines={3} />
        </div>
        <SkeletonButton />
    </div>
);

export const SkeletonCalculator = () => (
    <div className="card-glass p-8 space-y-6">
        <div className="skeleton-title" />
        <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                    <div className="skeleton h-4 w-32" />
                    <div className="skeleton h-12 w-full rounded-xl" />
                </div>
            ))}
        </div>
        <div className="skeleton h-48 w-full rounded-2xl" />
        <SkeletonButton className="w-full" />
    </div>
);

const Skeleton = {
    Card: SkeletonCard,
    Text: SkeletonText,
    Image: SkeletonImage,
    Avatar: SkeletonAvatar,
    Button: SkeletonButton,
    Testimonial: SkeletonTestimonial,
    BlogPost: SkeletonBlogPost,
    ServiceCard: SkeletonServiceCard,
    Calculator: SkeletonCalculator,
};

export default Skeleton;
