import React from 'react';
import BlogSection from '../components/BlogSection';
import PageHero from '../components/PageHero';

const Resources = () => {
    return (
        <div className="pt-20">
            {/* Hero Section with Image */}
            <PageHero
                title="Resources &"
                highlightText="Insights"
                description="Stay informed with the latest financial news, market trends, and expert insights from MoneyControl and other trusted sources"
                imageSrc="/resources_header.png"
                showImage={true}
            />

            {/* Blog Section - Show all articles from Moneycontrol */}
            <BlogSection limit={100} />
        </div>
    );
};

export default Resources;
