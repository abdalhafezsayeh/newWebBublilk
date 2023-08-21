/* eslint-disable @next/next/no-img-element */
// import { loadGoogleMapsScript } from '@/components/globalComponents/LoadScripting';
// import Loading from '@/components/globalComponents/Loading';
// import MapInMobile from '@/components/pwa/MapInMobile'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoTime } from 'react-icons/io5';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import AxiosInstance from '@/helper/AxiosInstance';
import { loadGoogleMapsScript } from '@/components/globalComponents/LoadScripting';
import Loading from '@/components/globalComponents/Loading';
import SelectMapMobile from '@/components/globalComponents/SelectMapMobile';


function OfferDetails() {
  const router = useRouter()
  const [ loadin , setLoading ] = useState(true)
  const [ tripData , setTripData ] = useState({})

  useEffect(() => {
    const signal = new AbortController()
    if (router.query.id) {
      AxiosInstance.post("trips/detail/", {
        trip_id: router.query.id,
      },{signal:signal.signal})
        .then((res) => {
          // console.log(res.data.data)
          if (res.data.message == "Trip retrieved successfully") {
            setTripData(res.data.data)
          }
        })
        .catch((err) => {
          console.log(err);
        }).finally(()=> setLoading(false))
    }

    return()=>{
      signal.abort()
    }
  }, [router]);

 // Loade Map
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    loadGoogleMapsScript("AIzaSyBqB6CgEEbTrE5b2LV_xC4DLOtag9wBPaQ", ["places"])
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {});
  }, []);

  if(!isLoaded || loadin){
    return(
      <div className="flex justify-center items-center h-screen bg-white">
        <Loading width={"50px"} height={"50px"} />
      </div>
    )
  }

  return (
    <div className='h-screen'>
        <div
            onClick={() => router.push('/trips')}
            className="bg-[#EEE] z-40 text-xl p-[6px] rounded-md flex sm:hidden cursor-pointer items-center justify-center fixed top-4 left-4"
          >
            <img src='offers/arrow.png' alt='reload Offers Kiro Travel' />
        </div>
      {/* map */}
      <div className='h-[40%] relative'>
        <div className='rounded-bl-3xl h-full overflow-hidden'>
          <SelectMapMobile destiationRef={tripData?.departure} originRef={tripData?.arrival} />
        </div>
        {/* rating */}
        <span className='w-12 h-12 rounded-full flex items-center justify-center gap-x-1 text-[#2E4359] text-xs bg-white shadow-md absolute bottom-[calc(0px-24px)] right-3 p-2'>
          <BsStarFill color='#FFBD1F' size={18} />
          4.8
        </span>
      </div>

      <div className='flex flex-col justify-evenly h-[60%] px-4'>
        <div className='flex flex-col gap-y-3'>
          <h2 className='text-mobileMain font-semibold text-lg'>Ride With {tripData?.driver_name}</h2>

          {/* pick up */}
          <span>
            <h5 className='text-[#103A10]'>Pick-up</h5>
            <span className='ml-1 flex items-center gap-x-1 text-[#B0B0B0]'>
              <HiLocationMarker />
              {tripData?.departure}
            </span>
          </span>

          {/* drop off  */}
          <span>
            <h5 className='text-[#103A10]'>Drop-off</h5>
            <span className='ml-1 flex items-center flex-wrap gap-x-1 text-[#B0B0B0] text-sm'>
              <span className='flex items-center gap-x-1'>
                <HiLocationMarker className='text-base' />
                {tripData?.arrival}
              </span>
              <hr className='h-4 w-px bg-[#B0B0B0]' />
              <span className='flex items-center gap-x-1'>
                <FaCalendarAlt className='text-base'/>
                {tripData?.date}
              </span>
              <hr className='h-4 w-px bg-[#B0B0B0]' />
              <span className='flex items-center gap-x-1'>
                <IoTime className='text-base'/>
                {tripData?.time}
              </span>
            </span>
          </span>

          {/* car details  */}
          <div>
            <h2 className='text-mobileMain font-semibold text-lg'>Car Details</h2>
            <span className='flex items-center gap-x-1 text-[#B0B0B0] text-sm'>
              <span className='flex items-center gap-x-1'>
                {tripData?.driver_car_color}
              </span>
              <hr className='h-4 w-px bg-[#B0B0B0]' />
              <span className='flex items-center gap-x-1'>
                {tripData?.driver_car_model}
              </span>
              <hr className='h-4 w-px bg-[#B0B0B0]' />
              <span className='flex items-center gap-x-1'>
                {tripData?.driver_car_number}
              </span>
            </span>
          </div>

          {/* amount */}
          <div>
            <h2 className='text-mobileMain font-semibold text-lg'>Amount Charged</h2>
            <span className='flex justify-between items-center'>
              <span className='flex items-center gap-x-1 text-[#103A10]'>
                <RiMoneyPoundCircleFill color='#B0B0B0' />
                {tripData?.price} EUR
              </span>

              <p className='text-[#00A1DF] font-semibold '>
                {tripData?.payment}
              </p>
            </span>
          </div>

        </div>

        {/* support */}
        <button
          className='w-full bg-[#323943] text-white font-semibold flex items-center justify-center gap-x-2 py-2 rounded-lg'
        >
          <img 
            alt="support"
            src="detailsTrip/support.png"
            width={30}
            height={30}
            loading='lazy'
          />
          Support
        </button>
      </div>

    </div>
  )
}

export default OfferDetails;

OfferDetails.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}