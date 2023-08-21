/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'


const Index = () => {

  const router = useRouter()

  return (
    <div className='w-full svh flex justify-center items-center'>
        <div className='bg-white rounded-2xl p-5 flex flex-col justify-center items-center gap-y-4' >
          
          {/* Header  */}
          <div>
            <img width={150} src='./acceptOffer/icons.gif' alt='icon Trips' />
          </div>
          
          {/* Body */}
          <div className='text-center'>
            <p className='capitalize text-[#555]'>The trip has been booked successfully.</p>
          </div>

          {/* Footer  */}
          <div>
            <button onClick={() => router.push('/')} className='bg-mobileMain text-white w-[170px] h-[50px] rounded-[12px]'>Back To Home</button>
          </div>

        </div>
    </div>
  )
}

export default Index