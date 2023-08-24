/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Container from '../globalComponents/Container'

function LuggageDetails({setNumberTheScreen}) {
  return (
    <>
    <Container className="flex flex-col gap-8 py-10">
      
      {/* luggage */}
      <div className='flex justify-between items-start gap-3'>
        <div className='flex items-center gap-5 w-full'>
          <span>
            <img 
              src="/shuttle/shuttel-luggage.png"
              alt=""
              className='object-contain'
              width={40}
              height={40}
            />
          </span>
          <div>
            <h3 className='font-semibold tracking-wider'>Included by passenger</h3>
            <p className='text-text-light whitespace-pre-line font-light text-sm'>
              1 Hand bag <br />
              1 Ski luggage <br />
              Special Luggage
            </p>
          </div>
        </div>

        <button className='text-main font-bold tracking-wider'>
          Edit
        </button>
      </div>

      <hr className='w-full h-px bg-line' />

      {/* alert email */}
      <div className='flex items-center gap-5 w-full'>
        <span>
          <img 
            src="/shuttle/shuttel-luggage-2.png"
            alt=""
            className='object-contain'
            width={40}
            height={40}
          />
        </span>
        <div>
          <h3 className='font-semibold tracking-wider'>Alert Email</h3>
          <p className='text-text-light whitespace-pre-line font-light text-sm'>
            We will send a booking confirmation to your email
          </p>
        </div>
      </div>

      <hr className='w-full h-px bg-line' />
    </Container>

      <span className='absolute right-10 bottom-2 my-7'>
        <button onClick={() => setNumberTheScreen(2)} className='w-fit px-14 h-[35px] bg-secondary rounded-2xl text-white'>Confirm</button>
      </span>
    </>
  )
}

export default LuggageDetails