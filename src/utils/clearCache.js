/**
 * Clear cached articles (useful for debugging)
 */
export const clearCache = () => {
    try {
        localStorage.removeItem('et_articles');
        localStorage.removeItem('et_articles_time');
        console.log('Cache cleared successfully');
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
};

// Auto-clear cache on page load to ensure fresh data with categories
if (typeof window !== 'undefined') {
    clearCache();
}
