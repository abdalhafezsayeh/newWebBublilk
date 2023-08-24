import React from 'react'
import Container from '../globalComponents/Container'

function PayCards() {
  return (
    <>
    <Container className="flex flex-col gap-8 py-10">
      <div className="flex flex-wrap gap-6 items-center">
        {/* booking card */}
        <div className='py-5 px-8 flex flex-col gap-4 bg-[#F2F2F2] rounded-lg min-h-[215px] min-w-[400px]'>
          <h2 className='text-main font-semibold tracking-wider'>Booking Details</h2>
          <div className='flex justify-between items-center gap-3'>
            {/* name */}
            <span className='flex flex-col gap-2 text-text-light'>
              <strong className='text-black'>Full Name</strong>
              Taha Ahmed
            </span>
            {/* phone */}
            <span className='flex flex-col gap-2 text-text-light'>
              <strong className='text-black'>Phone Number</strong>
              +201121945676
            </span>
          </div>

          <div className='flex justify-between items-center gap-3'>
            {/* email */}
            <span className='flex flex-col gap-2 text-text-light'>
              <strong className='text-black'>Email</strong>
              teto67523@gmail.com
            </span>
            {/* phone */}
            <span className='flex flex-col gap-2 text-text-light'>
              <strong className='text-black'>Booking Number</strong>
              #33644629098
            </span>
          </div>
        </div>

        {/* Reservation Summary */}
        <div className='py-5 px-8 flex flex-col gap-4 bg-[#F2F2F2] rounded-lg min-h-[215px] min-w-[400px]'>
          <h2 className='text-main font-semibold tracking-wider'>Reservation Summary</h2>
          <div className='flex justify-between items-center gap-3'>
            {/* Check in */}
            <span className='flex flex-col gap-2 text-text-light'>
              <strong className='text-black'>Check in</strong>
              Fr 24 Mar 2023 <br />
              12:00 AM
            </span>
            {/* phone */}
            <span className='flex flex-col gap-2 text-text-light'>
              <strong className='text-black'>Check out</strong>
              Fr 24 Mar 2023 <br />
              12:00 AM
            </span>
          </div>

        </div>

        {/* Price Details */}
        <div className='py-5 flex flex-col gap-4 bg-[#F2F2F2] rounded-lg min-h-[215px] min-w-[400px]'>
          <h2 className='text-main font-semibold tracking-wider px-8'>Price Details</h2>
          <div className='flex flex-col  gap-4'>
            
            <div className='flex items-center gap-6 px-8'>
              <strong className='text-black tracking-wider'>Price Seats</strong>
              <p className='text-text-light'>1500 EUR</p>
            </div>

            <div className='flex items-center gap-6 px-8'>
              <strong className='text-black tracking-wider'>Price Luggage&apos;s</strong>
              <p className='text-text-light'>1000 EUR</p>
            </div>

            <hr className='w-full h-px bg-line' />

            <div className='flex items-center gap-6 px-8'>
              <strong className='text-main tracking-wider'>Total</strong>
              <p className='text-text-light'>2500 EUR</p>
            </div>
          </div>

        </div>
      </div>
    </Container>


      <span className='absolute right-10 bottom-2 my-7'>
        <button onClick={() => setNumberTheScreen(2)} className='w-fit px-14 h-[35px] bg-secondary rounded-2xl text-white'>checkout</button>
      </span>
    </>
  )
}

export default PayCards