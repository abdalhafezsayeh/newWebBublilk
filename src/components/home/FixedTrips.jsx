/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Container from "../globalComponents/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import AxiosInstance from "@/helper/AxiosInstance";
import Loading from "../globalComponents/Loading";
import Link from "next/link";

function FixedTrips() {
  const [activeCity, setActiveCity] = useState(0);

  // cities
  const [citiesData, setCitiesData] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);
  useEffect(() => {
    setLoadingCities(true);
    AxiosInstance.get("fixed-trips/cities/")
      .then(({data})=>{
        data.Message == "Cities fetched successfully" &&
        (
          setCitiesData(data.data) ,
          setActiveCity(data?.data[0]?.name)
        )
      })
      .catch((err)=>{
        console.log(err)
      })
      .finally(() => setLoadingCities(false));
  }, []);

  // trips
  const [tripsData, setTripsData] = useState([]);
  const [loadingTrips, setLoadingTrips] = useState(false);
  useEffect(() => {
    if(activeCity){
      setLoadingTrips(true);
      AxiosInstance.get(`fixed-trips/?city=${activeCity}`)
        .then(({data})=>{
          data.Message == "Trips fetched successfully" &&
            setTripsData(data.data)
        })
        .catch((err)=>{
          console.log(err)
        })
        .finally(() => setLoadingTrips(false));
    }
  }, [activeCity]);
  

  return (
    <div className="py-20">
      <Container>
        {/* Header  */}
        <div className="border-b-[1px] border-main flex justify-between items-center relative">
          <div className="w-full flex">
            {citiesData.length > 0 && citiesData.map((item , index)=>(
              <span
                key={index}
                title={item?.name}
                onClick={() => setActiveCity(item?.name)}
                className={`relative ${
                  activeCity === item?.name
                    ? "-bottom-[1px] border-main text-main animate__animated animate__pulse"
                    : "border-transparent"
                } truncate px-2 capitalize rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-36 text-center h-12 leading-[44px]`}
              >
                {item?.name}
              </span>
            ))}
          </div>

          {/* <Link href="#" className="min-w-fit max-w-[220px] flex items-center justify-center capitalize px-4 text-sm h-[35px] bg-secondary rounded-2xl text-white truncate">
            Find the best {activeCity}
          </Link> */}

        </div>

        {/* Slider  */}
        
        {loadingTrips && <div className="w-full h-[400px] flex justify-center items-center">
          <Loading width="50px" height="50px" />
        </div>}

        {!loadingTrips && tripsData.length > 0 && <>
          <Swiper
            centeredSlides={true}
            slidesPerView={4}
            spaceBetween={40}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper my_test w-full min-h-fit !px-14 !pb-[50px] mt-6"
          >
            {tripsData.map((item, index) => (
              <SwiperSlide key={index} className="!h-[380px]">
                <div className="rounded-2xl overflow-hidden relative w-full h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
                  <img
                    className="w-full h-full"
                    src={item?.image}
                    alt={`taxi ferny volitare ${item?.from_location} to ${item?.to_location}`}
                  />
                  <div className="flex flex-col w-full gap-2 z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px] px-2">
                    <span className="capitalize font-light">to</span>
                    <span title={item?.to_location} className="capitalize truncate font-bold text-xl tracking-wider">
                      {item?.to_location}
                    </span>
                    <span className="font-normal text-sm">Fixed Price From</span>
                    <span className="text-lg font-bold capitalize tracking-widest">
                      {item?.price}€
                    </span>
                    <span className="font-normal capitalize">
                      {item?.round_trip ? "Round Trip" : "On way"}
                    </span>
                    <span className="">
                      <button className="w-[140px] h-[35px] bg-secondary rounded-2xl font-normal tracking-wider border border-secondary hover:bg-transparent duration-300">
                        Book Now
                      </button>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>}
      </Container>
    </div>
  );
}

export default FixedTrips;
