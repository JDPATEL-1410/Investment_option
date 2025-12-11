import React from 'react';
import HeroSection from '../components/HeroSection';
import PartnerBenefits from '../components/PartnerBenefits';
import WhyChooseUsNew from '../components/WhyChooseUsNew';
import BlogSection from '../components/BlogSection';
import GettingStarted from '../components/GettingStarted';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <HeroSection />
            <PartnerBenefits />
            <WhyChooseUsNew />
            <BlogSection limit={3} />
            <GettingStarted />
        </div>
    );
};

export default Home;
