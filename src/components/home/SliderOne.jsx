/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import Container from '../globalComponents/Container'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'


const feedback = [
  {
    name: '1',
    rating: 2.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '2',
    rating: 3.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '3',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '4',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '5',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '6',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '7',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '8',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '9',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '10',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '11',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },
  {
    name: '12',
    rating: 4.403,
    Comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab, molestiae architecto sed molestias id ipsa possimus iure? Quibusdam, necessitatibus.'
  },

]

function SliderOne() {

  const [activeSlide, setActiveSlide] = useState(0)
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
    if(feedback.length / 4 == currentSlide + 1) return

    if (currentSlide < feedback.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className='py-20'>
      <Container>
        {/* Header  */}
        <div className='border-b-[1px] border-main flex relative'>
          <span className='absolute right-0 bottom-2'>
              <button className='w-fit px-8 h-[35px] bg-secondary rounded-2xl text-white'>Find the best Paris</button>
          </span>

          <span onClick={() => setActiveSlide(0)} className={`relative ${activeSlide === 0 ? '-bottom-[1px] border-main text-main animate__animated animate__bounce' : 'border-transparent'}  rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-32 text-center h-12 leading-[44px]`}>paris</span>
          <span onClick={() => setActiveSlide(1)}  className={`relative ${activeSlide === 1 ? '-bottom-[1px] border-main text-main animate__animated animate__bounce' : 'border-transparent'} rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-32 text-center h-12 leading-[44px]`}>Bordeaux</span>
          <span onClick={() => setActiveSlide(2)} className={`relative ${activeSlide === 2 ? '-bottom-[1px] border-main text-main animate__animated animate__bounce' : 'border-transparent'} rounded-t-md duration-100 border-t-[1px] border-r-[1px] border-l-[1px] cursor-pointer bg-white w-32 text-center h-12 leading-[44px]`}>Lyon</span>
        </div>


        {/* Slider  */}
        <div className='mt-20 flex gap-3'>
          {/* Start Left */}
          <div onClick={handlePrevSlide} className='w-[5%] relative '>
            <MdArrowBackIosNew size={40} className='m-auto text-main font-bold cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
          </div>
          {/* End Left */}

          <div ref={slider} className='w-[90%] overflow-hidden'>
            <div ref={slides} className='flex justify-between  gap-7 duration-500'>

              {feedback.map((item, index) => (

                <div key={index} className='rounded-2xl overflow-hidden relative slide_one '>
                  <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                  <img className='w-full' src="/bg.png" alt="" />
                  <div className='flex flex-col w-full z-20 absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white font-bold text-[16px] leading-[20px]'>
                    <span className='capitalize font-[700] text-[30px]'>{item.name}</span>
                    <span className='text-[22px] font-[400] mt-3 capitalize'>from</span>
                    <span className='text-[22px] font-[700] mt-3 capitalize'>Eur 315.68</span>
                    <span className='text-[20px] font-[500] mt-3 capitalize'>On way/Economy</span>
                    <span className='mt-3'>
                      <button className='w-[140px] h-[35px] bg-secondary rounded-2xl'>Book Now</button>
                    </span>
                  </div>
                </div>

              ))}

            </div>
          </div>

          {/* Right */}
          <div onClick={handleNextSlide} className='w-[5%] relative'>
            <MdArrowForwardIos size={40} className='m-auto text-main font-bold cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
          </div>
          {/* End Right */}
        </div>

      </Container>

        {/* Dots  */}
        <div className='mt-10 m-auto flex justify-center items-center w-fit'>
          <span className={`${currentSlide === 0 ? 'w-4 h-4 inline-block bg-main ' : 'w-2 h-2 bg-black' } duration-500 rounded-full m-1`}></span>
          <span className={`${currentSlide === 1 ? 'w-4 h-4 inline-block bg-main ' : 'w-2 h-2 bg-black' } duration-500 rounded-full m-1`}></span>
          <span className={`${currentSlide === 2 ? 'w-4 h-4 inline-block bg-main ' : 'w-2 h-2 bg-black' } duration-500 rounded-full m-1`}></span>
        </div>

    </div>
  )
}

export default SliderOne