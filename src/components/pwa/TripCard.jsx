/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineCalendar, AiOutlineCloseCircle } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import ModalCom from '../globalComponents/Modal'

function TripCard({date , price , from , to , time , payment, id, isPay, status}) {

  const router = useRouter()
  const [showModalPending, setShowModalPending] = useState(false)
  const [showModalCancel, setShowModalCancel] = useState(false)

  const handleNavigateToAcceptOffer = (date) => {

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    if(date > formattedDate) {
      toast.success("Please wait for the start time.", {style:{fontSize:'12px'}});
    } else if(status == 'completed') {
      router.push(`/detailsTrip?id=${id}`)
    } else if (status == 'pending' || status == "arrived" || status == "ongoing" || status == "accepted") {
      router.push(`/acceptOffer?reqId=${id}`)
    } else if (status === true) {
      setShowModalPending(true)
    } else {
      setShowModalCancel(true)
    }

  }

  return (
    <>
    <div onClick={() => handleNavigateToAcceptOffer(date)} className='bg-[#F8F8F8] cursor-pointer pt-9 pb-8 relative shadow rounded-lg overflow-hidden flex flex-col gap-y-4'>

      {/* status */}
      {isPay && (
        <span className='absolute top-0 right-0 py-1 px-2 rounded-bl-lg bg-[#FFFFFF]'>
          <span className='flex gap-x-2 items-center text-xs'>
          <BsStarFill color="#F6C002"  />
          4.8
          </span>
        </span>
      )}

      {/* circle left */}
      <span className='absolute top-0 left-0 rounded-br-xl w-1 h-1/3 bg-[#00A1DF]' />

      {/* circle right */}
      <span className='absolute bottom-0 right-0 rounded-tl-xl w-1 h-1/3 bg-[#00A1DF]' />

      {/* from & to */}
      <div className='px-2 flex items-center justify-between gap-x-px'>
        <span className='w-[46%] flex items-center gap-x-px text-mobileMain'>
          From:
          <p className='text-[#666666] truncate'> {from}</p>
        </span>
        <span >
          <IoIosArrowForward className="text-[#103A10] text-lg" />
        </span>
        <span className='w-1/2 flex items-center gap-x-px text-mobileMain'>
          To:
          <p className='text-[#666666] truncate'> {to}</p>
        </span>

      </div>

      {/* date & time */}
      <div className='px-2 grid grid-cols-2'>
        <span className='flex gap-x-2 text-[#A6ADB7]'>
          <BiTimeFive className='text-mobileMain text-xl' />
          <p className='truncate'>{time}</p>
        </span>

        <span className='flex gap-x-2 text-[#A6ADB7]'>
          <AiOutlineCalendar className='text-mobileMain text-xl' />
          <p className='truncate'>{date}</p>
        </span>
      </div>

      {/* payment & price */}
      <div className='px-2 grid grid-cols-2'>
        <span className='flex gap-x-2 text-[#A6ADB7] capitalize'>
          <GiReceiveMoney className='text-mobileMain text-xl' />
          {payment}
        </span>

        {price && <span className='flex gap-x-2 text-[#103A10]'>
          EUR {price}€
        </span>}
      </div>
    </div>


    <ModalCom visible={showModalPending} showHeader={false}>
      <div className="w-[90%] bg-white p-4 m-auto rounded-lg relative">
          <span
            onClick={() => setShowModalPending(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <AiOutlineCloseCircle size={20} />
          </span>
          <img  width={500} src="offers.gif" className="m-auto w-full h-full" alt="" />
          <p className="text-center text-[13px] font-semibold text-[#666]">
            So far, no request has been accepted for this trip 
            you can go to the requests page to accept a suitable request.
          </p>
          <div className='flex justify-center items-center mt-6'>
            <button onClick={() => router.push('/offers')} className='bg-mobileMain p-2 rounded-md text-white text-[13px]'>Go To Offers</button>
          </div>
        </div>
    </ModalCom>

    <ModalCom visible={showModalCancel} showHeader={false}>
      <div className="w-[90%] bg-white p-4 m-auto rounded-lg relative">
          <span
            onClick={() => setShowModalCancel(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <AiOutlineCloseCircle size={20} />
          </span>
          <img  width={500} src="err.gif" className="m-auto w-full h-full" alt="" />
          <p className="text-center text-[13px] font-semibold text-[#666]">
            You have canceled this trip, so you will not receive new requests. You can start over.
          </p>
          <div className='flex justify-center items-center mt-6'>
            <button onClick={() => router.push('/')} className='bg-mobileMain p-2 rounded-md text-white text-[13px]'>Go To Home</button>
          </div>
        </div>
    </ModalCom>
    </>
  )
}

export default TripCard