import React from 'react';
import Headline from '../../Shared/Headline';
import useMenu from '../../Hooks/useMenu';

const ChefRecomand = () => {
    const [menu] = useMenu();
    const modify = menu.slice(0, 3)

    return (
        <div>
            <Headline subheading={'Should Try'} heading={'Chef Recommends'}></Headline>

            <div className='grid justify-center md:grid-cols-3 gap-2'>
                {
                    modify.map(item => <div id={item._id} className="card bg-base-300 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={item.image}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions">
                                <button className='btn  my-5 text-yellow-500 mx-4 rounded-md border-b-2 border-b-yellow-500 bg-transparent'>Add to cart</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefRecomand;