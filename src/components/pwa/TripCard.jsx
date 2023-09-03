/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiEdit, BiTimeFive } from 'react-icons/bi'
import { BsFillTelephoneOutboundFill, BsStarFill } from 'react-icons/bs'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoIosArrowForward } from 'react-icons/io'
import AxiosInstance from '@/helper/AxiosInstance'
import Loading from '../globalComponents/Loading'
import Link from 'next/link'

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

function TripCard({date , price , from , to , time , payment, id, isPay, status , item , setShowModalCancel}) {

  const router = useRouter()
  const [cancelLoading, setCancelLoading] = useState(false)

  const handleNavigateToAcceptOffer = (e,date) => {
    e.preventDefault()
    if(date > formattedDate) {
      toast.success("Please wait for the start time.", {style:{fontSize:'12px'}});
    } else if(status == 'completed') {
      router.push(`/detailsTrip?id=${id}`)
    } else {
      router.push(`/acceptOffer?reqId=${id}`)
    }
  }

  const handelCancelTrip = (e)=>{
    e.preventDefault()
    setCancelLoading(true)
    AxiosInstance.post("ride-request/cancel-after-accepting-offer/",{
      request_id:item?.Request_id
    })
    .then(({data})=>{
      if(data.message == "Cancellation Request sent successfully , please wait for admin to reply")
        setShowModalCancel(true)
    })
    .catch((err)=> toast.error("Somthing hapend Please Try again Later"))
    .finally(()=> setCancelLoading(false))
  }
  return (
    <>
    <div className='bg-[#F8F8F8] pt-9 pb-4 relative shadow rounded-lg overflow-hidden flex flex-col gap-y-4'>
      {/* status */}
      <span className='absolute top-0 right-0 py-1 px-2 rounded-bl-lg bg-[#FFFFFF]'>
        {status == "completed" && (
          <span className='flex gap-x-2 items-center text-xs'>
          <BsStarFill color="#F6C002"  />
          {item?.rate?.toFixed(1)}
          </span>
        )}

        {status !== "completed" && date > formattedDate && (
          <Link href={`/editRequest?id=${item?.Request_id}`} className='flex gap-x-2 cursor-pointer items-center text-lg text-mobileMain'>
            <BiEdit />
          </Link>
        )}

      </span>

      <div onClick={(e) => handleNavigateToAcceptOffer(e , date)} className='cursor-pointer flex flex-col gap-y-4'>

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

      {status !== "completed" && <div className='w-full flex justify-center items-center gap-2 px-3'>
        <button type='button' onClick={handelCancelTrip} className='w-[95%] min-h-[34px] bg-white text-sm flex items-center capitalize justify-center text-red-600 py-1 rounded-md text-center border border-[#DEE2E7]'>
          {cancelLoading ? <Loading width="24px" height="24px" /> : "cancellation request"}
        </button>

        <Link href="tel:+33644915310" className="h-[34px] w-[34px] flex items-center justify-center bg-white rounded-md border border-[#DEE2E7] text-mobileMain">
          <BsFillTelephoneOutboundFill />
        </Link>
      </div>}
    </div>

    </>
  )
}

export default TripCard