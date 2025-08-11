import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import b1 from "../../assets/home caresoul/pexels-chanwalrus-958545.jpg"
import b2 from "../../assets/home caresoul/pexels-ella-olsson-572949-1640772.jpg"
import b3 from "../../assets/home caresoul/pexels-isabella-mendes-107313-858508.jpg"
import b4 from "../../assets/home caresoul/pexels-narda-yescas-724842-1566837.jpg"

const Banner = () => {
    return (
        <Carousel autoPlay={true}>
            <div>
                <img src={b1} />

            </div>
            <div>
                <img src={b2} />

            </div>
            <div>
                <img src={b3} />

            </div>
            <div>
                <img src={b4} />

            </div>
        </Carousel>
    );
};

export default Banner;