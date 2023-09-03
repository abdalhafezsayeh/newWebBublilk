/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Container from '../globalComponents/Container'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import StarRatings from 'react-star-ratings'

const feedback = [
  {
    name: 'Ahmned',
    rating: 2.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: 'Saad',
    rating: 3.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: 'Moaz',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },

]

function OurCustomerFeedback() {

  const slider = useRef(null);
  const slides = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideWidth = slider.current.clientWidth;
    const slidesContainer = slides.current;
    slidesContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
  }, [currentSlide]);

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < feedback.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };


  return (
    <div className='py-[60px] bg-[#00bfb30a] relative'>
      <p className='text-[20px] font-[600] text-main text-center mb-0'>What’s our customer saying</p>
      <p className="text-center text-[40px] font-[700] text-[#1E1E1E] mb-6">Our Customer Feedback</p>
      <Container>
        <div className='flex flex-col lg:flex-row gap-3 mt-10'>

          <div className='w-[100%] lg:w-[60%]'>
            <img className='w-[100%]' src="customer.png" alt="" />
          </div>

          {/* User Rating  */}
          <div ref={slider} className='overflow-hidden p-5 w-[100%] lg:w-[40%] mt-8 h-fit relative flex flex-col gap-6'>
            {/* User Head  */}

            <div ref={slides} className='flex gap-10 flex-row duration-500'>
              {feedback.map((item, index) => (
                <div key={index} className='slide bg-white shadow-lg rounded-lg'>
                  <div className='flex gap-2 items-center'>
                    <span><BiUserCircle size={40} className='opacity-70' /></span>
                    <span className='flex flex-col'>
                      <span className='capitalize font-[600]'>{item.name}</span>
                      <span className='-mt-2'>
                        <StarRatings
                          rating={2.403}
                          starRatedColor={'#FFD700'}
                          starDimension="12px"
                          name='rating'
                          starSpacing={'0px'}
                        />
                      </span>
                    </span>
                  </div>

                  {/* User Body  */}
                  <p className='mt-8 text-[16px] text-[#1B1B1C]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.</p>
                </div>
              ))}
            </div>
            
            {/* Control */}
            <div className='flex gap-2 justify-center'>
              {/* prev */}
              <span onClick={handlePrevSlide} className={`${currentSlide == 0 ? "text-main bg-[#00bfb34d] cursor-not-allowed" : "text-white bg-main cursor-pointer" } drop-shadow-[0_10px_8px_#00BFB380] w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'`}>
                <MdOutlineArrowBackIosNew />
              </span>
              {/* next */}
              <span onClick={handleNextSlide} className={`${currentSlide == feedback.length - 1  ? "text-main bg-[#00bfb34d] cursor-not-allowed" : "text-white bg-main cursor-pointer" } drop-shadow-[0_10px_8px_#00BFB380] w-8 h-8 rounded-full flex justify-center items-center`}>
                <MdOutlineArrowForwardIos />
              </span>
            </div>

          </div>




        </div>
        
      </Container>
  
        
    </div>
  )
}

export default OurCustomerFeedback