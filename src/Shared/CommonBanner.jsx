import React from 'react';
import { Parallax,Background } from 'react-parallax';
import menuBanner from "../assets/Our Menu/ourMenuBanner.jpg"
const CommonBanner = ({coverImg,coverTitle}) => {
    return (
              <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverImg}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div
  className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
    
     
    </div>
  </div>
</div>
       
    </Parallax>
    );
};

export default CommonBanner;