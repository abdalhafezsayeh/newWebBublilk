/* eslint-disable @next/next/no-img-element */
import Container from '@/components/globalComponents/Container'
import InputModifySearch from '@/components/shuttel/InputModifySearch'
import LuggageDetails from '@/components/shuttel/LuggageDetails'
import PassengerDetailsModal from '@/components/shuttel/PassengerDetailsModal'
import PayCards from '@/components/shuttel/PayCards'
import TableShuttle from '@/components/shuttel/TableShuttle'
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineAirportShuttle, MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlineLuggage } from 'react-icons/md'

const obj = [
  {
    title: 'No Shuttle',
    date: '2022-03-21'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-22'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-23'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-24'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-25'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-26'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-27'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-28'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-29'
  },
  {
    title: 'No Shuttle',
    date: '2022-03-30'
  },
]

const Index = () => {

  const [modifySearch, setModifySearch] = useState(false)
  const [numberTheScreen, setNumberTheScreen] = useState(0)

  const handleModifySearch = () => {
    setModifySearch(!modifySearch)
  }


  return (
    <div className='py-10'>
      {/* Start Option In Top  */}
      <div className='bg-[#EAEAEA] h-20'>
        <Container>
          <div className='flex justify-center gap-14 items-center relative -top-8 '>
            {/* One  */}
            <div className='flex flex-col items-center gap-2'>
              <span className={`${numberTheScreen === 0 ? 'bg-secondary' : 'bg-[#EAEAEA]' } w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer`}>
                <MdOutlineAirportShuttle size={35} className={`${numberTheScreen === 0 ? 'text-white' : 'text-main'}`}/>
              </span>
              <h3 className={`${numberTheScreen === 0 ? 'text-secondary' : 'text-[#757373]' } capitalize`}>Choose a Trip time</h3>
            </div>
            
            {/* Two */}
            <div className='flex flex-col items-center gap-2'>
              <span className={`${numberTheScreen === 1 ? 'bg-secondary' : 'bg-[#EAEAEA]' } w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer`}>
                <MdOutlineLuggage size={35} className={`${numberTheScreen === 1 ? 'text-white' : 'text-main'} `}/>
              </span>
              <h3 className={`${numberTheScreen === 1 ? 'text-secondary' : 'text-[#757373]' } capitalize`}>Luggage Details</h3>
            </div>

            {/* Three */}
            <div className='flex flex-col items-center gap-2'>
              <span className={`${numberTheScreen === 2 ? 'bg-secondary' : 'bg-[#EAEAEA]' } w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer`}>
                <img src={`shuttle/${numberTheScreen === 2 ? 'passenger_Details_w.png' : 'passenger_Details.png' }`} alt="" />
              </span>
              <h3 className={`${numberTheScreen === 2 ? 'text-secondary' : 'text-[#757373]' } capitalize`}>Passenger Details</h3>
            </div>

            {/* Foure */}
            <div className='flex flex-col items-center gap-2'>
              <span className={`${numberTheScreen === 3 ? 'bg-secondary' : 'bg-[#EAEAEA]' } w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer`}>
                <img src={`shuttle/${numberTheScreen === 3 ? 'pay_w.png' : 'pay.png' }`} alt="" />
              </span>
              <h3 className={`${numberTheScreen === 3 ? 'text-secondary' : 'text-[#757373]' } capitalize`}>Pay</h3>
            </div>

          </div>
        </Container>
      </div>
      {/* End Option In Top  */}

      {/* Start Bar Search  */}
      <div className='mt-7'>
        <Container>
          <div className={`border-[1px] border-[#B4B4B4] px-5 rounded-lg ${modifySearch ? 'h-[500px]' : 'h-12' } duration-300 overflow-hidden `}>

            <div className={`border-b-[1px] ${modifySearch ? ' border-[#B4B4B4]' : 'border-transparent'} duration-500 flex justify-between items-start`}>

              <div className='flex gap-10'>
                <div className='flex gap-6 h-12 items-center'>
                  <h6 className='text-[14px] text-[#757373]'>CAI</h6>
                  <img className='w-5' src="shuttle/shuttle_plane.png" alt="" />
                </div>

                <div className='flex gap-6 h-12 items-center'>
                  <h6 className='text-[14px] text-[#757373]'>APT</h6>
                  <img className='w-5' src="shuttle/calander.png" alt="" />
                  <p className='text-[#757373]'>Friday, 24 Mar 2023 - Saturday, 25 mar 2023</p>
                </div>

                <div className='flex gap-2 h-12 items-center'>
                  <img className='w-5' src="shuttle/user.png" alt="" />
                  <h6 className='text-[14px] text-[#757373]'>1 Adult</h6>
                </div>  

                <div className='flex gap-2 h-12 items-center'>
                  <img className='w-5' src="shuttle/child.png" alt="" />
                  <h6 className='text-[14px] text-[#757373]'>1 Child</h6>
                </div> 

                <div className='flex gap-2 h-12 items-center'>
                  <img className='w-5' src="shuttle/infant.png" alt="" />
                  <h6 className='text-[14px] text-[#757373]'>1 Infant</h6>
                </div> 
              </div>

              <div onClick={() => handleModifySearch()} className='flex items-center gap-2 cursor-pointer mt-3'>
                <p className='text-secondary font-[600]'>Modify your search</p>
                <img className='h-5' src={`shuttle/${modifySearch ? 'arrowTop.png' : 'arrowleftright.png' }`} alt="" />
              </div>
            </div>

            {/* Input Modify Search  */}
            <InputModifySearch />

          </div>
        </Container>
      </div>
      {/* End Bar Search  */}

      {numberTheScreen === 0 && (
          <TableShuttle obj={obj} setNumberTheScreen={setNumberTheScreen} />
      )}

      {numberTheScreen === 1 && (
          <LuggageDetails setNumberTheScreen={setNumberTheScreen} />
      )}

      {numberTheScreen === 2 && (
          <PassengerDetailsModal setNumberTheScreen={setNumberTheScreen} />
      )}

      {numberTheScreen === 3 && (
          <PayCards />
      )}
    </div>
  )
}

export default Index