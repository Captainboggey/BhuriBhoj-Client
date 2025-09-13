import React from 'react';

const Headline = ({ subheading, heading }) => {
    return (
        <div className='my-10'>
            <p className='text-yellow-500 text-center text-sm italic'>-- {subheading} --</p>
            <p class="divider w-2/5 mx-auto"></p>
            <p className='text-2xl text-center uppercase'>{heading}</p>
            <p class="divider w-2/5 mx-auto"></p>
        </div>
    );
};

export default Headline;