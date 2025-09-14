import React from 'react';
import Banner from './Banner';
import Headline from '../../Shared/Headline';
import MenuSwiper from './MenuSwiper';
import HomeBanner2 from './homeBanner2';
import OurMenu from './OurMenu';
import ChefRecomand from './ChefRecomand';
import HomeBanner3 from './HomeBanner3';
import Testimonial from './Testimonial';
// import CommonBanner from '../../Shared/CommonBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Headline subheading={'From 11.00 am to 10.00 pm'} heading={'order online'}></Headline>
            <MenuSwiper></MenuSwiper>
            <HomeBanner2></HomeBanner2>
            <OurMenu></OurMenu>
            <ChefRecomand></ChefRecomand>
            <HomeBanner3></HomeBanner3>
            <Testimonial></Testimonial>
            {/* <CommonBanner></CommonBanner> */}


        </div>
    );
};

export default Home;