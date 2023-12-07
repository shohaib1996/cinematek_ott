"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCube, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Banner = () => {
    return (
        <>
            <Swiper
                navigation={true}
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image height={540} width={1350} className='mx-auto h-[540px] object-cover' alt='movies' src="https://wallpapersmug.com/download/2560x1440/08a926/avatar-2-the-way-of-water-pster.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image height={540} width={1350} className='mx-auto  h-[540px] object-cover' alt='movies' src="https://wallpaperaccess.com/full/6658195.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image height={540} width={1350} className='mx-auto  h-[540px] object-cover' alt='movies' src="https://images.wallpapersden.com/image/download/aquaman-2018-movie-banner-textless_a2hoaW2UmZqaraWkpJRpZWVlrWZtZ20.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image height={540} width={1350} className='mx-auto  h-[540px] object-cover' alt='movies' src="https://wallpapersmug.com/download/2560x1440/7d9200/eternals-pay-off-marvel-movie.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;