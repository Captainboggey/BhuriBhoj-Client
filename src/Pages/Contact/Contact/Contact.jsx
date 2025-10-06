import React from 'react';
import CommonBanner from '../../../Shared/CommonBanner';
import contactCover from '../../../assets/Contact/contacBg.jpg'
import Headline from '../../../Shared/Headline';
import icon1 from '../../../assets/Contact/telephone.png'
import icon2 from '../../../assets/Contact/location.svg'
import icon3 from '../../../assets/Contact/Frame.png'

const Contact = () => {
    return (
        <div>
            <CommonBanner coverImg={contactCover} coverTitle={'Cotact Us'}></CommonBanner>
            <Headline heading={'our location'} subheading={'Visit Us'}></Headline>
            <div className='grid lg:grid-cols-3 gap-2  justify-center'>
                <div className="card h-52  bg-base-100 w-96 shadow-xl">
                    <figure className='bg-yellow-800 h-16'>
                        <img
                            src={icon1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body m-4 border-2 bg-[#E8E8E8]">
                        <h2 className="text-2xl font-semibold text-center">PHONE</h2>
                        <p className='text-center'>+8801823112210</p>

                    </div>
                </div>
                <div className="card h-52  bg-base-100 w-96 shadow-xl">
                    <figure className='bg-yellow-800 h-16'>
                        <img
                            src={icon2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body m-4 border-2 bg-[#E8E8E8]">
                        <h2 className="text-2xl font-semibold text-center">ADDRESS</h2>
                        <p className='text-center'>+8801823112210</p>

                    </div>
                </div>
                <div className="card h-52  bg-base-100 w-96 shadow-xl">
                    <figure className='bg-yellow-800 h-16'>
                        <img
                            src={icon3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body m-4 border-2 bg-[#E8E8E8]">
                        <h2 className="text-2xl font-semibold text-center">WORKING HOURS</h2>
                        <p className='text-center'>Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00</p>

                    </div>
                </div>


            </div>

            <Headline heading={'contact form'} subheading={'Send Us a Message'}></Headline>

            <div className="card bg-[#F3F3F3] w-full  max-w-screen shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className='flex w-full gap-6 justify-around'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-extrabold text-black">Name*</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered w-full " required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-extrabold text-black">Email*</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full" required />

                        </div>

                    </div>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text font-extrabold text-black ">Phone*</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered w-full " required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-extrabold text-black">Message*</span>
                        </label>
                        <input type="email" placeholder="email" className="textarea textarea-bordered textarea-lg w-full max-w-full h-80" required />
                    </div>

                    <div className='text-center'>
                        <button className='btn text-white bg-[#835D23]'>Send Message</button>
                    </div>


                </form>
            </div>


        </div>
    );
};

export default Contact;