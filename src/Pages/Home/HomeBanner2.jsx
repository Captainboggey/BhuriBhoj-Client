import React from 'react';
import hb2 from "../../assets/home/chef-service.jpg"
import "../../../src/index.css"
import { Parallax } from 'react-parallax';

const HomeBanner2 = () => {
    return (


        <Parallax blur={{ min: -50, max: 50 }} strength={-200} bgImage={hb2} className='max-h-screen'>
            <div className="hero my-10   min-h-screen  ">

                <div className="hero text-center">
                    <div className="max-w-screen-lg bg-white p-4 py-10">
                        <h1 className="text-5xl font-bold logo-font mb-4">Bhuri Bhoj</h1>
                        <p className="">
                            At Bhhuri Bhoj, we serve more than just meals — we serve memories.
                            Our mission is to bring people together over delicious flavors and warm hospitality.
                            From traditional favorites to modern delights, every bite is crafted with love
                        </p>

                    </div>
                </div>

            </div>
        </Parallax>

    );
};

export default HomeBanner2;