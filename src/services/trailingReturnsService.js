/**
 * Service to fetch and calculate Trailing Returns for Indian Mutual Funds
 * Data Source: mfapi.in (Free Public API)
 */

const POPULAR_FUNDS = [
    { code: '102877', name: 'ICICI Prudential Infrastructure Fund', category: 'Sectoral-Infrastructure' },
    { code: '103215', name: 'SBI PSU Fund', category: 'Thematic-PSU' },
    { code: '120847', name: 'Quant Small Cap Fund', category: 'Small Cap' },
    { code: '119027', name: 'Invesco India PSU Equity Fund', category: 'Thematic-PSU' },
    { code: '147704', name: 'Motilal Oswal Midcap Fund', category: 'Mid Cap' },
    { code: '103135', name: 'Nippon India Small Cap Fund', category: 'Small Cap' },
    { code: '101991', name: 'HDFC Top 100 Fund', category: 'Large Cap' },
    { code: '107567', name: 'Mirae Asset Large Cap Fund', category: 'Large Cap' },
    { code: '102885', name: 'ICICI Prudential Bluechip Fund', category: 'Large Cap' },
    { code: '100377', name: 'Axis Bluechip Fund', category: 'Large Cap' }
];

/**
 * Find the closest NAV for a target date
 */
const findClosestNAV = (data, targetDate) => {
    // Binary search or simple loop to find the closest date
    // Data is sorted by date descending (latest first)
    let closestItem = data[0];
    let minDiff = Infinity;

    for (const item of data) {
        const itemDate = new Date(item.date.split('-').reverse().join('-'));
        const diff = Math.abs(itemDate - targetDate);
        if (diff < minDiff) {
            minDiff = diff;
            closestItem = item;
        } else if (diff > minDiff) {
            // Since data is sorted, we can stop once diff starts increasing
            break;
        }
    }
    return parseFloat(closestItem.nav);
};

/**
 * Calculate CAGR
 */
const calculateCAGR = (current, historical, years) => {
    if (!current || !historical || historical === 0) return 0;
    return (Math.pow(current / historical, 1 / years) - 1) * 100;
};

/**
 * Fetch performance for a single fund
 */
const fetchFundPerformance = async (fund) => {
    try {
        const response = await fetch(`https://api.mfapi.in/mf/${fund.code}`);
        const result = await response.json();

        if (result.status !== 'SUCCESS') return null;

        const data = result.data;
        const currentNAV = parseFloat(data[0].nav);
        const now = new Date();

        const periods = [
            { label: '1Y', years: 1 },
            { label: '3Y', years: 3 },
            { label: '5Y', years: 5 }
        ];

        const returns = {};
        for (const period of periods) {
            const targetDate = new Date();
            targetDate.setFullYear(now.getFullYear() - period.years);
            const historicalNAV = findClosestNAV(data, targetDate);
            returns[period.label] = calculateCAGR(currentNAV, historicalNAV, period.years).toFixed(2);
        }

        return {
            name: fund.name,
            category: fund.category,
            ...returns,
            lastUpdated: data[0].date
        };
    } catch (error) {
        console.error(`Error fetching fund ${fund.code}:`, error);
        return null;
    }
};

/**
 * Main function to get all trailing returns
 */
export const getTrailingReturns = async () => {
    try {
        const results = await Promise.all(POPULAR_FUNDS.map(fetchFundPerformance));
        return results.filter(res => res !== null);
    } catch (error) {
        console.error('Error fetching trailing returns:', error);
        return [];
    }
};

export default {
    getTrailingReturns
};
