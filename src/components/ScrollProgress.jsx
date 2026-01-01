import { useScrollProgress } from '../utils/useScrollAnimations';

const ScrollProgress = () => {
    const progress = useScrollProgress();

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
            <div
                className="h-full bg-gradient-to-r from-primary via-navy to-primary transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
