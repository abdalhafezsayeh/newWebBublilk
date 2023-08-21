import AxiosInstance from '@/helper/AxiosInstance'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiFillStar } from 'react-icons/ai'
import Loading from '../globalComponents/Loading'
import { UserData } from '@/context/userContext'
import { BiCommentDots } from 'react-icons/bi'

function AddRating({ driverName , driverCarModel="BMW" , carNumber , trip_id }) {

  const {setIsActiveTrip, setFlagWhenUserSendBookingFindDriver} = useContext(UserData)
  const [optionAndComments, setOptionAndComments] = useState('')
  const [verfiyLoading, setVerfiyLoading] = useState(false)

  const router = useRouter()

  const [rating, setRating] = useState(2)
  const [starArray] = useState([1, 2, 3, 4, 5])

  const stars = starArray.map((item) =>
        <button
          type='button'
          key={item}
          onClick={() => setRating(item)}
        >
            {item <= rating ?
                <AiFillStar size={28} color={"#FFCC00"} />
                :
                <AiFillStar size={28} color="#EFEFF4"/>
            }

        </button>
  )

  const handelSubmit = (e)=>{
    e.preventDefault()
    setVerfiyLoading(true)
    AxiosInstance.post("driver/trip/rate/",{
      rate:rating,
      comment:optionAndComments,
      trip_id
    })
    .then((res)=>{
      // console.log(res.data.message)
      if(res.data.message == 'Trip rated successfully') {
        router.push('/')
        setIsActiveTrip(false)
        setFlagWhenUserSendBookingFindDriver(null)
      }
    })
    .catch((err)=> {
      toast.error("Somthing Happend try Again Later")
      console.log(err)
    })
    .finally(() => setVerfiyLoading(false))
  }

  return (
    <div className='h-screen w-[92%] mx-auto flex justify-around items-center flex-col'>
      <h1 className='font-semibold text-center'>Rating</h1>
      <div className='borderGradint w-full h-[80%] flex flex-col items-center justify-between gap-y-3 px-3 bg-white rounded-md pb-7 pt-4'>
        {/* image & data */}
        <div className='flex flex-col items-center gap-y-3 -mt-16'>
          <div className='w-32 h-28  bg-white'>
            <Image 
              alt="user"
              src={`https://logo.clearbit.com/${driverCarModel}.com`}
              width={100}
              height={100}
              className='w-fit object-contain h-28'
            />
          </div>
          <h3 className='font-semibold text-center'>{driverName}</h3>
          <p className='text-[#8A8A8F] '>{carNumber} - {driverCarModel}</p>
        </div>

        {/* qs */}
        <div className='w-full flex items-center flex-col gap-y-3'>
          <h2 className='text-[#242E42] font-bold text-xl '>How is your trip?</h2>
          <p className='text-center text-[#8A8A8F]'>Your feedback will help improve driving experience</p>
        </div>

        {/* rate & comment */}
        <div className='w-full flex flex-col items-center gap-y-3'>
          <span className='flex gap-x-0 justify-center'>
            {stars}
          </span>
        </div>

        <div className='border border-slate-400 rounded-lg mb-1 flex items-center p-1 px-3 overflow-hidden justify-center h-12'>
            <span className='opacity-80 text-xl'>
                <BiCommentDots />
            </span>
            <textarea value={optionAndComments} onChange={(e) => setOptionAndComments(e.target.value)} className='w-full h-full text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md' type='text' placeholder='Add Comment' />
        </div>

        <button onClick={handelSubmit} className='w-full py-2 rounded-md bg-mobileMain text-white'>
          {verfiyLoading ? <Loading width="27px" height="27px" /> :"Submit Review"}
        </button>

      </div>
    </div>
  )
}

export default React.memo(AddRating)