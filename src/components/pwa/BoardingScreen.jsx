/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Container from '../globalComponents/Container'
import { FaArrowRight } from 'react-icons/fa'

function BoardingScreen({ hidePage }) {

  const [swapBetween , setSwapBetween ] = useState(0)

  const handelSwap = () =>{
    setSwapBetween((prev) => prev + 1)
  }


  return (
    <div className='fixed top-0 left-0 bg-white z-50 w-full h-[100svh] overflow-hidden flex flex-col justify-between items-center gap-y-4'>
      {/* header */}
      <Container className='flex justify-between items-center my-0 pt-4'>
        <img className='object-contain' src='/logo.webp' alt="kiro travel taxi" loading='lazy' width={50} height={50} />
        
        <span className='w-9 h-9 bg-[#E3E3E399] rounded-lg flex justify-center items-center'>
          <img className='object-contain' src='/translateIcon.png' alt="kiro travel taxi" loading='lazy' width={100} height={100} />
        </span>
      </Container>

      <Container className='flex flex-col justify-center items-center gap-y-6 overflow-hidden'>
        
        <div className='w-full flex duration-500'
          style={{
            transform:`translate3d(-${swapBetween * 100}%, 0 , 0)`
          }}
        >
          <div className={`min-w-full duration-300 flex flex-col justify-center items-center gap-y-5 min-h-[298px]`}>
            <img className='object-contain w-2/3' src='/logo.webp' alt="kiro travel taxi" loading='lazy' width={100} height={100} />
            <h2 className='text-[#103A10] text-base font-bold'>
              Platform to book your <br />
              VTC - TAXI CAB - Minibus and Bus
              <span className='uppercase text-[#A3A3A38A] text-sm mt-2 block font-normal'><span className='text-mobileMain'>Compare</span> and book with the best offer</span>
            </h2>
          </div>

          <div className={`min-w-full duration-300 flex flex-col justify-center items-center gap-y-5 min-h-[298px]`}>
            <img className='object-contain w-2/3' src='/boarding1.gif' alt="kiro travel taxi" loading='lazy' width={100} height={100} />
            <h2 className='text-[#103A10] text-base font-bold'>
              Create your account <br />
              Request a quote <br />
              Accept an offer <br />
              Pay your transfer ONLINE OR ON BOARD
            </h2>
          </div>

          <div className={`min-w-full duration-300 flex flex-col justify-center items-center gap-y-5 min-h-[298px]`}>
            <img className='object-contain w-2/3' src='/boarding2.gif' alt="kiro travel taxi" loading='lazy' width={100} height={100} />
            <h2 className='text-[#103A10] text-base font-bold'>
              Book You Trip
              <span className='uppercase text-[#A3A3A38A] text-sm mt-2 block font-normal'>Advance booking is recommended </span>
            </h2>
          </div>
        </div>

        {/* taps */}

        <div className='w-full flex items-center gap-x-3'>
          <span onClick={()=> setSwapBetween(0)} className={`cursor-pointer h-1 rounded-lg duration-300 ${swapBetween == 0 ? "bg-mobileMain w-6" :"bg-[#A3A3A38A] w-4"}`}></span>
          <span onClick={()=> setSwapBetween(1)} className={`cursor-pointer h-1 rounded-lg duration-300 ${swapBetween == 1 ? "bg-mobileMain w-6" :"bg-[#A3A3A38A] w-4"}`}></span>
          <span onClick={()=> setSwapBetween(2)} className={`cursor-pointer h-1 rounded-lg duration-300 ${swapBetween == 2 ? "bg-mobileMain w-6" :"bg-[#A3A3A38A] w-4"}`}></span>
        </div>


      </Container>

      <div className='w-full'>
        {swapBetween >= 2 && <div className='animate__animated animate__flipInY w-full flex justify-center items-center'>
          <button onClick={hidePage} className='py-2 w-1/2 min-w-fit px-2 bg-mobileMain rounded-sm text-white -skew-x-[18deg]'>
            <span className='skew-x-0 font-medium tracking-wider '>
              Get Started
            </span>
          </button>
        </div>}
        
        <div className={`animate__animated ${swapBetween > 1 &&  "animate__lightSpeedOutRight" } w-full flex justify-end items-center`}>
          <span onClick={handelSwap} className='cursor-pointer w-14 h-14 -rotate-6 -mr-1 -mb-1 bg-mobileMain rounded-tl-3xl text-white grid place-items-center'>
            <FaArrowRight />
          </span>
        </div>

      </div>
    </div>
  )
}

export default BoardingScreen