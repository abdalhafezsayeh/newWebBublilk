/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Container from "../globalComponents/Container";
import { TbBus } from "react-icons/tb";
import { BsTaxiFrontFill } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";
import ShuttelForm from "./ShuttelForm";

const images = [
  "/home/hero-1.png",
  "/home/hero-2.png",
  "/home/hero-3.png",
  "/home/hero-4.png",
]

const Header = () => {
  const [travelType , setTravelType] = useState("shuttel")
  const [index , setIndex ] = useState(0)

  useEffect(()=>{
    let interval = setInterval(() => {
      setIndex(prev => prev == 3 ? 0 : prev + 1)
    }, 5000);

    return()=>{
      clearInterval(interval)
    }
  },[])
  
  const handelType = (type) =>{
    setTravelType(type)
  }

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="min-h-screen h-screen max-h-max flex duration-700"
        style={{
          transform:`translate3d(-${index * 100}%, 0px, 0px)`
        }}
      >
        {images.map((item)=>(
          <img 
            key={item}
            src={item}
            alt="Taxi saint julien en genevois Cab saint julien en genevois Hopital saint julien en genevois"
            className={"min-w-full min-h-full h-full w-full object-cover animate__animated animate__fadeIn"}
          />
        ))}
      </div>

      {/* start form */}
      <Container className="absolute top-1/2 z-10 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[90%] flex gap-3">
        <div className="w-[35%] min-w-[450px] grid grid-cols-[22%_auto] gap-2 bg-white rounded ">
          
          <div className="w-full flex flex-col justify-around items-center gap-px relative">
            <button onClick={()=> handelType("shuttel")} className="rounded-tl flex flex-col items-center justify-center bg-main w-full gap-2 text-white font-medium tracking-wider h-[calc(100%/3)]">
              <TbBus size={30}/>
              Shuttle
            </button>
            <button onClick={()=> handelType("taxi")} className="flex flex-col items-center justify-center bg-main w-full gap-2 text-white font-medium tracking-wider h-[calc(100%/3)]">
              <BsTaxiFrontFill size={30}/>
              Taxi
            </button>
            <button onClick={()=> handelType("hireCar")} className="rounded-bl flex flex-col items-center justify-center bg-main w-full gap-2 text-white font-medium tracking-wider h-[calc(100%/3)]">
              <FaShuttleVan size={30} style={{transform:"rotateY(180deg)"}}/>
              Hire Car
            </button>
            <span className={`absolute ${travelType == "shuttel" ? "top-[15%]" : travelType == "hireCar" ? "top-[80%]" : "top-1/2 -translate-y-1/2"} left-full border-[15px] border-transparent border-l-main duration-500`} />
          </div>

          {/* form */}
          <div className="w-full">
            <ShuttelForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
