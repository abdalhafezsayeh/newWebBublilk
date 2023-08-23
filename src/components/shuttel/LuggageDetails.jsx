/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Container from '../globalComponents/Container'

function LuggageDetails() {
  return (
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
  )
}

export default LuggageDetails