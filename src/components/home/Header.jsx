/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Container from "../globalComponents/Container";
import { TbBus } from "react-icons/tb";
import { BsTaxiFrontFill } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";
import ShuttelForm from "./ShuttelForm";
import TaxiForm from "./TaxiForm";
import Loading from "../globalComponents/Loading";
import AxiosInstance from "@/helper/AxiosInstance";
import { toast } from "react-hot-toast";

const images = [
  "/home/hero-1.png",
  "/home/hero-2.png",
  "/home/hero-3.png",
  "/home/hero-4.png",
]

const Header = () => {
  const [travelType , setTravelType] = useState("taxi")
  const [index , setIndex ] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false);
  const [reqId, setReqId] = useState(0);
  const [loadingCancel, setLoadingCancel] = useState(false);

  useEffect(()=>{
    let interval
    if(process.env.NODE_ENV !== "development"){
      interval = setInterval(() => {
        setIndex(prev => prev == 3 ? 0 : prev + 1)
      }, 5000);
    }

    return()=>{
      clearInterval(interval)
    }
  },[])

  useEffect(()=>{
    showSuccess ? 
      document.body.classList.add('overflow-y-hidden') 
      : 
      document.body.classList.remove('overflow-y-hidden');
  },[showSuccess])

  const handleCancelRide = () => {
    setLoadingCancel(true);
    AxiosInstance.delete("ride-request/cancel/", {
      data: { request_id: reqId },
    })
      .then((res) => {
        if (res.status == 200) {
          toast.success("The Ride is Canceld Successfuly")
          setShowSuccess(false)
        }
      })
      .catch((err) => {})
      .finally(() => setLoadingCancel(false));
  };
  
  const handelType = (type) =>{
    setTravelType(type)
  }

  return (
    <div id="addRequest" className="w-full overflow-hidden relative">
      <div
        className="min-h-fit h-[600px] max-h-max flex duration-700"
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
        <div className="w-[57%] lg:w-[40%] lg:min-w-[450px] grid grid-cols-[20%_auto] lg:grid-cols-[22%_auto] bg-white rounded ">
          {/* choose form */}
          <div className="w-full z-[11] flex flex-col justify-around items-center gap-px relative">
            <button onClick={()=> handelType("taxi")} className="rounded-tl flex flex-col items-center justify-center bg-main w-full gap-2 text-white font-medium tracking-wider h-[calc(100%/3)]">
              <BsTaxiFrontFill size={30}/>
              Taxi
            </button>
            <button onClick={()=> handelType("shuttel")} className="flex flex-col items-center justify-center bg-main w-full gap-2 text-white font-medium tracking-wider h-[calc(100%/3)]">
              <TbBus size={30}/>
              Shuttle
            </button>
            <button onClick={()=> handelType("hireCar")} className="rounded-bl flex flex-col items-center justify-center bg-main w-full gap-2 text-white font-medium tracking-wider h-[calc(100%/3)]">
              <FaShuttleVan size={30} style={{transform:"rotateY(180deg)"}}/>
              Hire Car
            </button>
            <span className={`absolute z-20 ${travelType == "taxi" ? "top-[15%]" : travelType == "hireCar" ? "top-[80%]" : "top-1/2 -translate-y-1/2"} left-full border-[15px] border-transparent border-l-main duration-500`} />
          </div>

          {/* form */}
          <div className="w-full rounded">
            {(travelType == "shuttel" || travelType == "hireCar") && <ShuttelForm />}
            {travelType == "taxi" && <TaxiForm setReqId={setReqId} setShowSuccess={setShowSuccess} />}
          </div>
        </div>
      </Container>

      {showSuccess && <div className="absolute z-50 top-0 left-0 w-full h-full flex justify-center items-center animate__animated animate__fadeIn">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-40" />
        <div className="flex flex-col justify-center items-center gap-5 p-5 z-[45] bg-white w-[380px] h-fit z-1 rounded-lg">
          <img 
            src="/home/successRideRequest.gif"
            alt="success Ride Request Taxi ferney voltaire kiro travel taxi"
            className="object-contain"
          />

          <p className="font-semibold tracking-wider text-center">
            We received Your Request Successfully , Admin or Driver Will Make An Offer ASAP
          </p>

          <div className="w-full flex justify-between items-center gap-3">
            <button
              onClick={()=> setShowSuccess(false)}
              type="button"
              className="w-full py-2 text-white rounded-lg bg-secondary border border-secondary hover:bg-transparent hover:text-secondary duration-300"
            >
              Done
            </button>

            <button
              onClick={handleCancelRide}
              type="button"
              className="w-full py-2 rounded-lg bg-transparent border text-secondary border-secondary hover:bg-secondary hover:text-white duration-300 flex items-center justify-center"
            >
              {loadingCancel ? <Loading width="20px" height="20px" /> : "Cancel Ride"}
            </button>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Header;
