/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import Container from "../globalComponents/Container";
import { GiDiscGolfBag } from "react-icons/gi";


const dateLocal = [12,1,2,3,4,5,6,7,8,9,10,11]
const dataShuttle = [
  {
    from: 'Tokyo',
    to: 'New York',
    time: '12:00 AM',
    price: '500',
  },
  {
    from: 'london',
    to: 'my Hotel',
    time: '3:00 AM',
    price: '500',
  },
  {
    from: 'Tokyo',
    to: 'New York',
    time: '12:00 AM',
    price: '500',
  },
  {
    from: 'Tokyo',
    to: 'New York',
    time: '12:00 AM',
    price: '500',
  },
  {
    from: 'Tokyo',
    to: 'New York',
    time: '12:00 AM',
    price: '500',
  },  
]


const TableShuttle = ({obj, setNumberTheScreen}) => {


  const slider = useRef(null);
  const slides = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numberIndex, setNumberIndex] = useState(0)
  const [numberIndexTime, setNumberIndexTime] = useState(0)
  const [luggagesAndSeatsAndSpecial, setLuggagesAndSeatsAndSpecial] = useState({
    seats: 0,
  });
  
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
    setNumberIndex(number_index)
  }
  

  const handleActiveTime = (number_index) => {
    setNumberIndexTime(number_index)
  }

  const handelLugges = (e, type, value) => {
    e.preventDefault();
    setLuggagesAndSeatsAndSpecial((prev) => {
      const newVal = { ...prev };
      type == "decrement"
        ? newVal[value] == 0
          ? null
          : (newVal[value] = prev[value] - 1)
        : (newVal[value] = prev[value] + 1);
      return newVal;
    });
  };

  return (
    <>
      {/* Result Search Shuttle  */}
      <div className="mt-7">
        <Container>
          <div className="bg-secondary p-3">
            <p className="text-white">
              Outbound ٍShuttle : My Hotel to Private Airport
            </p>
          </div>
          {/* Body  */}
          <div className="bg-[#EAEAEA] h-[88px] pt-3 pb-0 flex items-center">
            {/* Left   */}
            <div className="w-[10%] flex justify-center items-center h-[103%] border-b-[1px] border-secondary">
              <span
                onClick={handlePrevSlide}
                className="bg-[#FFF] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
              >
                <MdOutlineArrowBackIosNew size={25} />
              </span>
            </div>
            {/* Center  */}
            <div ref={slider} className="w-[90%] overflow-hidden ">
              <div ref={slides} className="flex duration-500">
                {obj.map((item, index) => (
                  <div
                    onClick={() => handleActiveButton(index)}
                    key={index}
                    className={`${
                      numberIndex === index
                        ? "rounded-t-md bg-white border border-b-white border-secondary"
                        : " border-b-secondary"
                    } flex flex-col border duration-500 items-center p-4 slide_two cursor-pointer`}
                  >
                    <span className="text-[14px] font-[600]">{item.title}</span>
                    <span className="text-[15px] font-[700]">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right  */}
            <div className="w-[10%]  flex justify-center items-center h-[103%] border-b-[1px] border-secondary">
              <span
                onClick={handleNextSlide}
                className="bg-[#FFF] w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
              >
                <MdOutlineArrowForwardIos size={25} />
              </span>
            </div>
          </div>

          {/* Time Option  */}
          <div className="mt-7 flex gap-2 overflow-x-auto customScroll py-2">
            {dateLocal.map((item, index) => (
              <span onClick={() => handleActiveTime(index)} key={index} className={`${numberIndexTime === index ? 'bg-secondary text-white' : 'border-[1px] border-secondary bg-white'} uppercase rounded-2xl inline-block text-center min-w-[96px] h-fit py-1 font-[600] text-[15px] cursor-pointer`}>{item} am</span>
            ))}
          </div>

          {/* Data Shuttle  */}
          <div className="mt-7 flex gap-2 overflow-x-auto customScroll_shuttle py-2 pb-6">

            {dataShuttle.map((item, index) => (

                <div onClick={() => setNumberTheScreen(1)} key={index} className="bg-[#F2F2F2] cursor-pointer p-3 rounded-xl min-w-[400px]">
                  <div className="flex justify-center items-center gap-1 mb-4"> 
                    <h5 className="capitalize">my hotel</h5>
                    <img src="shuttle/line.png" alt="" />
                    <h5 className="capitalize">private airport</h5>
                  </div>
                  <div className="flex gap-4">
                    <img src="shuttle/timer.png" alt="" />
                    <h5>12:00 AM</h5>
                  </div>
                  <div className="flex justify-between items-center my-4">
                    <div>
                      <div className="flex gap-4 items-center">
                        <img src="shuttle/seat.png" alt="" />
                        <h5>Available Seat (6)</h5>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4 font-bold">
                          <button
                            onClick={(e) => handelLugges(e, "decrement", "seats")}
                            className="text-secondary border-[1px] border-secondary w-7 h-7 text-center leading-[10px] rounded-full font-bold text-2xl"
                          >
                            -
                          </button>
                          {luggagesAndSeatsAndSpecial.seats}
                          <button
                            onClick={(e) => handelLugges(e, "increment", "seats")}
                            className="text-secondary border-[1px] border-secondary w-7 h-7 text-center leading-7 rounded-full font-bold text-2xl"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-4">
                    <div>
                      <div className="flex gap-4 items-center">
                        <img src="shuttle/price.png" alt="" />
                        <h5>Total price Seat</h5>
                      </div>
                    </div>
                    <div>1000 EUR</div>
                  </div>
                </div>

            ))}

          </div>

        </Container>
      </div>

    </>
  );
};

export default TableShuttle;
