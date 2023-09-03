/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Container from '../globalComponents/Container'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function SliderOne() {

  const [activeSlide, setActiveSlide] = useState(0)





  return (
    <div className='py-20'>
      <Container>
        {/* Header  */}
        <div className='border-b-[1px] border-main flex relative'>
          <span className='absolute right-0 bottom-2'>
              <button className='w-fit px-8 h-[35px] bg-secondary rounded-2xl text-white'>Find the best Paris</button>
          </span>

          <span onClick={() => setActiveSlide(0)} className={`relative ${activeSlide === 0 ? '-bottom-[1px] border-main text-main animate__animated animate__bounce' : 'border-transparent'}  rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-32 text-center h-12 leading-[44px]`}>paris</span>
          <span onClick={() => setActiveSlide(1)}  className={`relative ${activeSlide === 1 ? '-bottom-[1px] border-main text-main animate__animated animate__bounce' : 'border-transparent'} rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-32 text-center h-12 leading-[44px]`}>Bordeaux</span>
          <span onClick={() => setActiveSlide(2)} className={`relative ${activeSlide === 2 ? '-bottom-[1px] border-main text-main animate__animated animate__bounce' : 'border-transparent'} rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-32 text-center h-12 leading-[44px]`}>Lyon</span>
        </div>


        {/* Slider  */}
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            pagination={{clickable: true}}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper my_test w-full min-h-fit !px-14 !pb-[50px] mt-6"
          >
            <SwiperSlide>
                <div  className='rounded-2xl overflow-hidden relative'>
                  <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                  <img className='w-full' src="/bg.png" alt="" />
                  <div className='flex flex-col w-full z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px]'>
                    <span className='capitalize font-[700] text-[30px]'>Paris</span>
                    <span className='text-[22px] font-[400] mt-3 capitalize'>from</span>
                    <span className='text-[22px] font-[700] mt-3 capitalize'>Eur 315.68</span>
                    <span className='text-[20px] font-[500] mt-3 capitalize'>On way/Economy</span>
                    <span className='mt-3'>
                      <button className='w-[140px] h-[35px] bg-secondary rounded-2xl'>Book Now</button>
                    </span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div  className='rounded-2xl overflow-hidden relative'>
                  <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                  <img className='w-full' src="/bg.png" alt="" />
                  <div className='flex flex-col w-full z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px]'>
                    <span className='capitalize font-[700] text-[30px]'>Paris</span>
                    <span className='text-[22px] font-[400] mt-3 capitalize'>from</span>
                    <span className='text-[22px] font-[700] mt-3 capitalize'>Eur 315.68</span>
                    <span className='text-[20px] font-[500] mt-3 capitalize'>On way/Economy</span>
                    <span className='mt-3'>
                      <button className='w-[140px] h-[35px] bg-secondary rounded-2xl'>Book Now</button>
                    </span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div  className='rounded-2xl overflow-hidden relative'>
                  <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                  <img className='w-full' src="/bg.png" alt="" />
                  <div className='flex flex-col w-full z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px]'>
                    <span className='capitalize font-[700] text-[30px]'>Paris</span>
                    <span className='text-[22px] font-[400] mt-3 capitalize'>from</span>
                    <span className='text-[22px] font-[700] mt-3 capitalize'>Eur 315.68</span>
                    <span className='text-[20px] font-[500] mt-3 capitalize'>On way/Economy</span>
                    <span className='mt-3'>
                      <button className='w-[140px] h-[35px] bg-secondary rounded-2xl'>Book Now</button>
                    </span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div  className='rounded-2xl overflow-hidden relative'>
                  <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                  <img className='w-full' src="/bg.png" alt="" />
                  <div className='flex flex-col w-full z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px]'>
                    <span className='capitalize font-[700] text-[30px]'>Paris</span>
                    <span className='text-[22px] font-[400] mt-3 capitalize'>from</span>
                    <span className='text-[22px] font-[700] mt-3 capitalize'>Eur 315.68</span>
                    <span className='text-[20px] font-[500] mt-3 capitalize'>On way/Economy</span>
                    <span className='mt-3'>
                      <button className='w-[140px] h-[35px] bg-secondary rounded-2xl'>Book Now</button>
                    </span>
                  </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div  className='rounded-2xl overflow-hidden relative'>
                  <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                  <img className='w-full' src="/bg.png" alt="" />
                  <div className='flex flex-col w-full z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px]'>
                    <span className='capitalize font-[700] text-[30px]'>Paris</span>
                    <span className='text-[22px] font-[400] mt-3 capitalize'>from</span>
                    <span className='text-[22px] font-[700] mt-3 capitalize'>Eur 315.68</span>
                    <span className='text-[20px] font-[500] mt-3 capitalize'>On way/Economy</span>
                    <span className='mt-3'>
                      <button className='w-[140px] h-[35px] bg-secondary rounded-2xl'>Book Now</button>
                    </span>
                  </div>
                </div>
            </SwiperSlide>                        
          </Swiper>
        </>

      </Container>



    </div>
  )
}

export default SliderOne