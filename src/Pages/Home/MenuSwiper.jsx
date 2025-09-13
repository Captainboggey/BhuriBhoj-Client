import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import s1 from "../../assets/menuswiper/slide1.jpg"
import s2 from "../../assets/menuswiper/slide2.jpg"
import s3 from "../../assets/menuswiper/slide3.jpg"
import s4 from "../../assets/menuswiper/slide4.jpg"
import s5 from "../../assets/menuswiper/slide5.jpg"


import { Pagination } from 'swiper/modules';
const MenuSwiper = () => {
    return (
        <div className='my-10'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper "
            >
                <SwiperSlide ><div className=' text-center '><img src={s1} alt="" /></div></SwiperSlide>
                <SwiperSlide><div className=' text-center '><img src={s2} alt="" /> </div></SwiperSlide>
                <SwiperSlide><div className=' text-center '><img src={s3} alt="" /></div></SwiperSlide>
                <SwiperSlide><div className=' text-center '><img src={s4} alt="" /> </div></SwiperSlide>
                <SwiperSlide><img src={s5} alt="" /></SwiperSlide>

            </Swiper>

        </div>
    );
};

export default MenuSwiper;