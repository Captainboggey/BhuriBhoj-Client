import React from 'react';
import useMenu from '../../Hooks/useMenu';
import Headline from '../../Shared/Headline';

const OurMenu = () => {
    const [menu] = useMenu();
    const modify = menu.slice(0, 6)
    // console.log(modify)
    return (
        <div>
            <Headline subheading={'Check it out'} heading={'From Our Menu'}></Headline>

            <div className='grid md:grid-cols-2 gap-4'>
                {
                    modify.map(item =>
                        <div id={item._id} className=" bg-base-100 shadow-sm flex gap-2">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Movie"
                                    className='w-[118px] h-[104px] rounded-r-full rounded-b-full  ' />
                            </figure>

                            <div>
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.recipe}</p>
                            </div>
                            <div className=" ">
                                <p className='text-yellow-400'>{item.price}$</p>
                            </div>
                        </div>

                    )
                }
            </div>
            <div className='text-center'>
                <button className='btn  my-5 text-black mx-4 rounded-md border-b-2 border-b-black bg-transparent'>View Full Menu</button>
            </div>

        </div>
    );
};

export default OurMenu;