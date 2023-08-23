/* eslint-disable @next/next/no-img-element */
import Container from '@/components/globalComponents/Container'
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
  const [numberIndex, setNumberIndex] = useState(0)

  const handleModifySearch = () => {
    setModifySearch(!modifySearch)
  }


  const slider = useRef(null);
  const slides = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideWidth = slider.current.clientWidth;
    const slidesContainer = slides.current;
    slidesContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }, [currentSlide]);

  const handlePrevSlide = () => {
    console.log('prev slide')
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if(obj.length / 5 == currentSlide + 1) return
    if (currentSlide < obj.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };


  const handleActiveButton = (number_index) => {
    console.log(number_index)
    setNumberIndex(number_index)
  
  }

  return (
    <div className='py-10'>
      {/* Start Option In Top  */}
      <div className='bg-[#EAEAEA] h-20'>
        <Container>
          <div className='flex justify-center gap-14 items-center relative -top-8 '>
            {/* One  */}
            <div className='flex flex-col items-center gap-2'>
              <span className='w-[60px] h-[60px] rounded-full bg-secondary flex justify-center items-center cursor-pointer'>
                <MdOutlineAirportShuttle size={35} className='text-white'/>
              </span>
              <h3 className='text-secondary capitalize'>Choose a Trip time</h3>
            </div>
            
            {/* Two */}
            <div className='flex flex-col items-center gap-2'>
              <span className='w-[60px] h-[60px] rounded-full bg-[#EAEAEA] flex justify-center items-center cursor-pointer'>
                <MdOutlineLuggage size={35} className='text-main'/>
              </span>
              <h3 className='text-[#757373] capitalize'>Luggage Details</h3>
            </div>

            {/* Three */}
            <div className='flex flex-col items-center gap-2'>
              <span className='w-[60px] h-[60px] rounded-full bg-[#EAEAEA] flex justify-center items-center cursor-pointer'>
                <img src="shuttle/passenger_Details.png" alt="" />
              </span>
              <h3 className='text-[#757373] capitalize'>Passenger Details</h3>
            </div>

            {/* Foure */}
            <div className='flex flex-col items-center gap-2'>
              <span className='w-[60px] h-[60px] rounded-full bg-[#EAEAEA] flex justify-center items-center cursor-pointer'>
                <img src="shuttle/pay.png" alt="" />
              </span>
              <h3 className='text-[#757373] capitalize'>Pay</h3>
            </div>

          </div>
        </Container>
      </div>
      {/* End Option In Top  */}

      {/* Start Bar Search  */}
      <div className='mt-7'>
        <Container>
          <div className={`border-[1px] border-[#B4B4B4] px-5 rounded-lg ${modifySearch ? 'h-48' : 'h-12' } duration-300 overflow-hidden `}>

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
            <p>test</p>

          </div>
        </Container>
      </div>
      {/* End Bar Search  */}


      {/* Result Search Shuttle  */}
      <div className='mt-7'>
        <Container>
          <div className='bg-secondary p-3'>
            <p className='text-white'>Outbound ٍShuttle : My Hotel to Private Airport</p>
          </div>
          {/* Body  */}
          <div className='bg-[#EAEAEA] p-3 pb-0 flex items-center border-b-[1px] border-secondary'>
            {/* Left   */}
            <div className='w-[10%] flex justify-center items-center'>
              <span onClick={handlePrevSlide} className='bg-[#FFF] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer'><MdOutlineArrowBackIosNew size={25} /></span>
            </div>
            {/* Center  */}
            <div ref={slider} className='w-[90%] overflow-hidden'>
              <div ref={slides} className='flex duration-500'>

                {obj.map((item, index) => (
                  <div onClick={() => handleActiveButton(index)} key={index} className={`${numberIndex === index ? 'rounded-t-md bg-white border border-b-white border-secondary' : 'border-transparent'} flex flex-col  items-center p-4 slide_two cursor-pointer`}>
                    <span className='text-[14px] font-[600]'>{item.title}</span>
                    <span className='text-[15px] font-[700]'>{item.date}</span>
                  </div>
                ))}

              </div>


            </div>
            {/* Right  */}
            <div className='w-[10%] flex justify-center items-center'>
              <span onClick={handleNextSlide} className='bg-[#FFF] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer'><MdOutlineArrowForwardIos size={25} /></span>
            </div>
          </div>
        </Container>
      </div>



    </div>
  )
}

export default Index