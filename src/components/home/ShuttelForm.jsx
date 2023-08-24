/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import AutoCompletee from "./AutoComplete";
import { HiArrowsRightLeft, HiShoppingBag } from "react-icons/hi2";
import { FaUser , FaChildren } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { useRouter } from "next/router";


function ShuttelForm() {

  const router = useRouter()

  const [ showRightContent , setShowRightContent ] = useState(false)
  const [ typeRightContent , setTypeRightContent ] = useState("luggegs")

  const handelShowRightContent = (type) => {
    !showRightContent && setShowRightContent(true)
    setTypeRightContent(type)
  }
  const [luggegs, setLuggegs] = useState({
    handbag: 0,
    ski: 0,
    special: "",
    adults:0,
    infant:0,
    child:0,
  });

  const handelLugges = (e, type, value) => {
    e.preventDefault();
    if(type != "special"){
      setLuggegs((prev) => {
        const newVal = {...prev};
        type == "decrement"
          ? newVal[value] == 0
            ? null
            : (newVal[value] = prev[value] - 1)
          : (newVal[value] = prev[value] + 1);
        return newVal
      });
    }
    else{
      setLuggegs((prev) => {
        const newVal = {...prev};
        newVal[value] = e.target.value
        return newVal
      });
    }
  }

  const { register, handleSubmit } = useForm({
    defaultValues:{
      arrival: "",
      departure: "",
      promCode: "",
      round_trip:"oneWay" 
    }
  });

  const onSubmit = (values) => {
    console.log(values);
    router.push('/resultShuttle')
    
  };

  return (
    <div className="w-full h-full relative ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full p-3 flex flex-col text-text gap-8 justify-center animate__animated animate__fadeIn"
      >
        {/* Round Trip */}
        <div className="flex gap-4">
          <label htmlFor="field-rain" className="flex gap-2 items-center">
            <input
              {...register("round_trip")}
              type="radio"
              value="oneWay"
              id="field-rain"
              className="accent-secondary w-4 h-5"
            />
            One Way
          </label>

          <label htmlFor="field-wind" className="flex gap-2 items-center">
            <input
              {...register("round_trip")}
              type="radio"
              value="roundTrip"
              id="field-wind"
              className="accent-secondary w-4 h-5"
            />
            Round Trip
          </label>
        </div>

        {/* from & to */}
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
            <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">From</label>
            <AutoCompletee
              placeholder=""
              register={{
                ...register("departure", {
                  required: { value: true },
                }),
              }}
            />
          </div>

          <span>
            <HiArrowsRightLeft size={22} />
          </span>
          <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
            <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">To</label>
            <AutoCompletee
              placeholder=""
              register={{
                ...register("arrival", {
                  required: { value: true },
                }),
              }}
            />
          </div>
        </div>

        {/* depart & passengers */}
        <div className="grid grid-cols-2 gap-11">
          <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
            <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">Depart</label>
            <input
              type="date"
              className="w-full bg-transparent py-1 focus:ring-0 focus:outline-none"
            />
          </div>

          <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md" onClick={()=> handelShowRightContent("passengers")}>
            <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">Passengers</label>
            <div className="w-full bg-transparent py-1 flex gap-1 items-center">
              <FaUser size={25} />
              <input
                disabled
                type="number"
                className="w-full focus:ring-0 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Luggages & promo code */}
        <div className="grid grid-cols-2 gap-11">
          <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md"
            onClick={()=> handelShowRightContent("luggegs")}
          >
            <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">Luggage&apos;s</label>
            <input
              type="number"
              disabled
              className="w-full bg-transparent py-1 focus:ring-0 focus:outline-none"
            />
          </div>

          <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
            <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">Promo Code</label>
            <input
              {...register("promCode")}
              type="text"
              className="w-full bg-transparent py-1 focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
        {/* submit button */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-1/2 py-2 text-white rounded-lg bg-secondary border border-secondary hover:bg-transparent hover:text-secondary duration-300"
          >
            Search
          </button>
        </div>
      </form>

      <div className={`absolute top-0 duration-300 ${showRightContent ? "left-[110%]" : "left-0"} -z-10 w-[90%] lg:w-full h-full bg-white rounded flex flex-col items-center pt-12 p-3`}>
        <span
          className={`absolute top-[14%] right-full border-[15px] border-transparent border-r-white duration-500`}
        />

        {/* passengers */}
        {typeRightContent == "passengers" && <>
          <div className="w-full flex flex-col gap-5 h-3/5 animate__animated animate__fadeIn">
            {/* Adults */}
            <div className="flex justify-between items-center">
              <span className="flex gap-3 font-medium">
                <FaUser className="text-secondary text-2xl" />
                <span className="flex flex-col text-black gap-1 text-sm">
                  <strong>Adults</strong>
                  Age 12 and over
                </span>
              </span>

              <div className="flex items-center gap-4 font-bold">
                <button
                  onClick={(e) => handelLugges(e, "decrement", "adults")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  -
                </button>
                {luggegs.adults}
                <button
                  onClick={(e) => handelLugges(e, "increment", "adults")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
            {/* Infant */}
            <div className="flex justify-between items-center">
              <span className="flex gap-3 font-medium">
                <img
                  src="/home/infant.png"
                  className="object-contain px-1"
                  alt="taxi kero travel"
                />
                <span className="flex flex-col text-black gap-1 text-sm">
                  <strong>Infant</strong>
                  Age 0-2
                </span>
              </span>

              <div className="flex items-center gap-4 font-bold">
                <button
                  onClick={(e) => handelLugges(e, "decrement", "infant")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  -
                </button>
                {luggegs.infant}
                <button
                  onClick={(e) => handelLugges(e, "increment", "infant")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
            {/* child */}
            <div className="flex justify-between items-center">
              <span className="flex gap-3 font-medium">
                <img
                  src="/home/child.png"
                  className="object-contain px-1"
                  alt="taxi kero travel"
                />
                <span className="flex flex-col text-black gap-1 text-sm">
                  <strong>Child</strong>
                  Age 3-10
                </span>
              </span>

              <div className="flex items-center gap-4 font-bold">
                <button
                  onClick={(e) => handelLugges(e, "decrement", "child")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  -
                </button>
                {luggegs.child}
                <button
                  onClick={(e) => handelLugges(e, "increment", "child")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </>}

        {/* luggegs */}
        { typeRightContent == "luggegs" && <>
          <div className="w-full flex flex-col gap-5 h-3/5 animate__animated animate__fadeIn">
            {/* hand bag */}
            <div className="flex justify-between items-center">
              <span className="flex gap-3 font-medium">
                <HiShoppingBag className="text-secondary text-2xl" />
                Hand Bag
              </span>

              <div className="flex items-center gap-4 font-bold">
                <button
                  onClick={(e) => handelLugges(e, "decrement", "handbag")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  -
                </button>
                {luggegs.handbag}
                <button
                  onClick={(e) => handelLugges(e, "increment", "handbag")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
            {/* SKI Luggage */}
            <div className="flex justify-between items-center">
              <span className="flex gap-3 font-medium">
                <GiSchoolBag className="text-secondary text-2xl" />
                SKI Luggage
              </span>

              <div className="flex items-center gap-4 font-bold">
                <button
                  onClick={(e) => handelLugges(e, "decrement", "ski")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  -
                </button>
                {luggegs.ski}
                <button
                  onClick={(e) => handelLugges(e, "increment", "ski")}
                  className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
            {/* Special Luggage */}
            <div className="flex justify-between items-center">
              <span className="flex gap-3 font-medium">
                <img
                  src="/home/travelBag.png"
                  className="object-contain px-1"
                  alt="taxi kero travel"
                />
                Special Luggage
              </span>

              <input 
                onChange={(e)=> handelLugges(e , "special" , "special")}
                value={luggegs.special}
                className="py-1 px-2 border border-secondary rounded-lg bg-transparent focus:ring-0 focus:outline-none w-28" />
            </div>
          </div>
        </>}

        <button
          onClick={()=> setShowRightContent(false)}
          type="button"
          className="px-8 py-2 text-white rounded-lg bg-secondary border border-secondary hover:bg-transparent hover:text-secondary duration-300"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default ShuttelForm;
