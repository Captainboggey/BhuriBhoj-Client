import React from 'react';
import { Parallax } from 'react-parallax';
import b3 from "../../assets/home/featured.jpg"
import Headline from '../../Shared/Headline';
const HomeBanner3 = () => {
    return (

      
        <Parallax className='my-10 max-h-[800px]'  blur={{ min: -50, max: 50 }} strength={-200} bgImage={b3} >
            <div className='mt-24 text-white' >
                <Headline subheading={'check it out'} heading={'from our menu'}></Headline>
            </div>
            <div className="hero  min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <div className="  min-h-screen">
{/* flex-col */ } 
{/* justify-center flex   flex mx-auto*/   }



                            <div className="flex   flex-col  gap-2 lg:flex-row">

                               <div className=''>
                                 <img
                                    src={b3}
                                    className="max-w-sm  rounded-lg shadow- mx-auto"
                                />
                               </div>
                                <div>

                                    <p className="py-6 text-white">
                                        March 20, 2023
                                        WHERE CAN I GET SOME?
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                                    </p>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
     
    );
};

export default HomeBanner3;