import React from 'react';

const OurShopTab = ({item}) => {
    

    return (
        <div className='grid justify-center lg:grid-cols-3 gap-4 mt-10'>
            {
                item.map(oneItem=>

<div key={oneItem._id} className="card glass w-96">
  <figure>
    <img
      src={oneItem.image}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{oneItem.name}</h2>
    <p>{oneItem.recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn hover:bg-black hover:text-white  bg-[#E8E8E8] text-[#BB8506] border-b-2 border-t-0 border-l-0 border-r-0 border-[#BB8506]">Add To Cart</button>
    </div>
  </div>
</div>)
            }
        </div>
    );
};

export default OurShopTab;