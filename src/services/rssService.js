/**
 * RSS Feed Service for Economic Times Articles
 * Fetches and parses RSS feed from Economic Times
 */

// Economic Times RSS Feed URLs
const RSS_FEEDS = {
    markets: 'https://economictimes.indiatimes.com/markets/rssfeeds/1977021501.cms',
    mutualFunds: 'https://economictimes.indiatimes.com/mf/rssfeeds/48250160.cms',
    personalFinance: 'https://economictimes.indiatimes.com/wealth/rssfeeds/837555174.cms',
    news: 'https://economictimes.indiatimes.com/rssfeedstopstories.cms',
};

/**
 * Parse RSS XML to JSON
 */
const parseRSS = (xmlText) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlText, 'text/xml');

    const items = xml.querySelectorAll('item');
    const articles = [];

    items.forEach((item, index) => {
        // Limit to 10 articles
        if (index >= 10) return;

        const title = item.querySelector('title')?.textContent || '';
        const link = item.querySelector('link')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        const pubDate = item.querySelector('pubDate')?.textContent || '';

        // Extract image from description or use default
        let imageUrl = '/api/placeholder/400/250'; // Default placeholder

        // Try to extract image from description HTML
        const descDiv = document.createElement('div');
        descDiv.innerHTML = description;
        const img = descDiv.querySelector('img');
        if (img) {
            imageUrl = img.src;
        }

        // Clean description text (remove HTML tags)
        const cleanDescription = descDiv.textContent || descDiv.innerText || '';

        articles.push({
            id: index,
            title: title.trim(),
            link: link.trim(),
            description: cleanDescription.trim().substring(0, 150) + '...',
            image: imageUrl,
            pubDate: new Date(pubDate),
            source: 'Economic Times',
        });
    });

    return articles;
};

/**
 * Fetch RSS feed using CORS proxy
 */
export const fetchEconomicTimesArticles = async (feedType = 'personalFinance') => {
    try {
        const feedUrl = RSS_FEEDS[feedType] || RSS_FEEDS.personalFinance;

        // Using RSS2JSON API as CORS proxy
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

        const response = await fetch(proxyUrl);
        const data = await response.json();

        if (data.status !== 'ok') {
            throw new Error('Failed to fetch RSS feed');
        }

        // Transform RSS2JSON format to our format
        const articles = data.items.slice(0, 10).map((item, index) => {
            const title = item.title.toLowerCase();
            const description = (item.description || '').toLowerCase();
            const combinedText = title + ' ' + description;

            // Intelligent category detection based on keywords
            let category = 'Market Insights'; // Default category

            if (combinedText.includes('sip') ||
                combinedText.includes('investment') ||
                combinedText.includes('invest') ||
                combinedText.includes('portfolio') ||
                combinedText.includes('diversif')) {
                category = 'Investment Tips';
            } else if (combinedText.includes('tax') ||
                combinedText.includes('deduction') ||
                combinedText.includes('saving') ||
                combinedText.includes('80c')) {
                category = 'Tax Strategy';
            } else if (combinedText.includes('plan') ||
                combinedText.includes('retirement') ||
                combinedText.includes('goal') ||
                combinedText.includes('wealth') ||
                combinedText.includes('financial planning')) {
                category = 'Financial Planning';
            } else if (combinedText.includes('market') ||
                combinedText.includes('stock') ||
                combinedText.includes('sensex') ||
                combinedText.includes('nifty') ||
                combinedText.includes('equity')) {
                category = 'Market Insights';
            }

            return {
                id: `et-${index}`,
                title: item.title,
                link: item.link,
                description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || '',
                image: item.thumbnail || item.enclosure?.link || 'https://via.placeholder.com/400x250/1a1f4e/6366f1?text=Economic+Times',
                pubDate: new Date(item.pubDate),
                source: 'Economic Times',
                author: item.author || 'Economic Times',
                category: category,
                readTime: '5 min read',
            };
        });

        return articles;
    } catch (error) {
        console.error('Error fetching Economic Times articles:', error);
        // Return fallback articles
        return getFallbackArticles();
    }
};

/**
 * Fallback articles in case RSS feed fails
 */
const getFallbackArticles = () => {
    return [
        {
            id: 'et-1',
            title: 'Market Update: Sensex and Nifty Hit New Highs',
            link: 'https://economictimes.indiatimes.com',
            description: 'Indian stock markets continue their upward trajectory as investors show confidence in economic recovery...',
            image: 'https://via.placeholder.com/400x250/1a1f4e/6366f1?text=Market+News',
            pubDate: new Date(),
            source: 'Economic Times',
            category: 'Market Insights',
            readTime: '5 min read',
        },
        {
            id: 'et-2',
            title: 'Mutual Funds: Top Performing Schemes This Quarter',
            link: 'https://economictimes.indiatimes.com',
            description: 'Analysis of the best performing mutual fund schemes across different categories for long-term investors...',
            image: 'https://via.placeholder.com/400x250/1a1f4e/6366f1?text=Mutual+Funds',
            pubDate: new Date(),
            source: 'Economic Times',
            category: 'Investment Tips',
            readTime: '6 min read',
        },
        {
            id: 'et-3',
            title: 'Tax Planning: Smart Strategies for 2026',
            link: 'https://economictimes.indiatimes.com',
            description: 'Expert tips on tax-saving investments and strategies to maximize your returns while minimizing tax liability...',
            image: 'https://via.placeholder.com/400x250/1a1f4e/6366f1?text=Tax+Planning',
            pubDate: new Date(),
            source: 'Economic Times',
            category: 'Tax Strategy',
            readTime: '7 min read',
        },
    ];
};

/**
 * Get cached articles from localStorage
 */
export const getCachedArticles = () => {
    try {
        const cached = localStorage.getItem('et_articles');
        const cacheTime = localStorage.getItem('et_articles_time');

        if (cached && cacheTime) {
            const now = new Date().getTime();
            const cacheAge = now - parseInt(cacheTime);

            // Cache for 6 hours (21600000 ms)
            if (cacheAge < 21600000) {
                return JSON.parse(cached);
            }
        }
    } catch (error) {
        console.error('Error reading cache:', error);
    }
    return null;
};

/**
 * Save articles to cache
 */
export const cacheArticles = (articles) => {
    try {
        localStorage.setItem('et_articles', JSON.stringify(articles));
        localStorage.setItem('et_articles_time', new Date().getTime().toString());
    } catch (error) {
        console.error('Error saving cache:', error);
    }
};

/**
 * Main function to get articles (with caching)
 */
export const getEconomicTimesArticles = async (feedType = 'personalFinance') => {
    // Try to get from cache first
    const cached = getCachedArticles();
    if (cached) {
        return cached;
    }

    // Fetch fresh articles
    const articles = await fetchEconomicTimesArticles(feedType);

    // Cache the results
    cacheArticles(articles);

    return articles;
};

export default {
    getEconomicTimesArticles,
    fetchEconomicTimesArticles,
    getCachedArticles,
    cacheArticles,
};
