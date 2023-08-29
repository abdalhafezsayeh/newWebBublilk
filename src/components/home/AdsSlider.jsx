/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination , Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsStarFill } from "react-icons/bs";
import AxiosInstance from "@/helper/AxiosInstance";

function AdsSlider() {
  const [ adsData , setAdsData ] = useState([])
  useEffect(()=>{
    AxiosInstance.get("ads/")
      .then(({data})=>{
        data.message == "Ads retrieved successfully" &&
          setAdsData(data.data)
      })
      .catch(err => console.log(err))
  },[])

  return (
    <div className="w-[95%] mx-auto">
      {adsData.length > 0 && <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination , Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="mySwiper w-full min-h-fit !pb-[50px]"
      >
        {adsData.map((item , index)=>(
          <SwiperSlide key={index} className="!w-[350px] !h-[450px]">
          <div className="flex flex-col gap-4 bg-white shadow-[0px_4px_25px_0px_rgba(0,0,0,0.08)] w-full h-full py-7 px-5">
            <span className="w-full flex">
              <span className="py-1 px-4 bg-secondary text-white font-medium tracking-wider">
                40% OFF
              </span>
            </span>
            <img
              alt="kiro travel taxi ferney"
              src={item?.image}
              className="w-full object-fill h-[80%]"
            />

            <span className="w-full flex justify-between items-center">
              <p className="text-text-blue font-semibold text-lg">{item?.title}</p>
              <span className="flex gap-1 items-center text-text-light font-semibold">
                <BsStarFill className="text-star text-lg" />
                {item.rate.toFixed(2)}
              </span>
            </span>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>}
    </div>
  );
}

export default AdsSlider;
