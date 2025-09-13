import React from 'react';
import Headline from '../../Shared/Headline';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useQuery } from '@tanstack/react-query';
import axiosPublic from '../../Hooks/axiosPublic';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating'


// import Rating from 'react-rating';
// import './Testimonial.css'
const Testimonial = () => {
    const axios = axiosPublic();
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axios.get('/reviews');
            return res.data
        }

    })


    return (
        <div>
            <Headline subheading={"What Our Client Say"} heading={"testimonial"}></Headline>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide>
                            <div>
                                <div className='flex justify-center my-4'>
                                    {/* rating */}
                         <Rating 
        style={{ maxWidth:200}} className='text-center'
        readOnly
        orientation="horizontal"
        value={review.rating}
      />
                                </div>
                                <div>
                                    <h2 className='mx-16'>{review.details}</h2>
                                    <h2 className='text-3xl  text-center mt-3 text-yellow-700 mb-6
                        '>{review.name}</h2>

                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;