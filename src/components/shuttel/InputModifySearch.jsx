/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { HiArrowsRightLeft, HiShoppingBag } from 'react-icons/hi2'
import AutoCompletee from '../home/AutoComplete'
import { useForm } from 'react-hook-form'
import { FaUser } from 'react-icons/fa'
import { GiSchoolBag } from 'react-icons/gi'

const typeWay = [
  {
    title: 'One Way'
  },
  {
    title: 'Round Trip'
  }
]

function InputModifySearch() {
  const [way, setWay] = useState(0)
  const [luggegs, setLuggegs] = useState({
    handbag: 0,
    ski: 0,
    special: "",
    adults:0,
    infant:0,
    child:0,
  });

const handelActiveWay = (index) => {
  setWay(index)
}

const { register, handleSubmit } = useForm({
  defaultValues:{
    arrival: "",
    departure: "",
    promCode: "",

  }
});

const onSubmit = (values) => {
  console.log(values);
  
};

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

  return (
    <div className='h-[430px] relative'>
      {/* Way The Shuttl */}
      <div className='my-2'>
        {typeWay.map((item, index) => (
          <span onClick={() => handelActiveWay(index)} key={index} className={`${way === index ? 'bg-secondary text-white' : 'bg-white'} border-[1px] border-[#B4B4B4] inline-block w-28 text-center text-[14px] rounded-lg py-1 font-[600] cursor-pointer mx-1 text-[#666]`}>{item.title}</span>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
          {/* from & to */}
          <div className="flex justify-between items-center gap-6 w-fit">
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

            <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
              <label label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">Depart</label>
              <input
                type="date"
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

          <div className='flex gap-6 mt-7'>
              <div className='border border-[#B4B4B4] mt-5 relative py-10 px-5 rounded-md w-[41%]'>
                
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

                <p className='bg-white absolute -top-4 left-3 w-32 h-8 text-center text-[18px]'> Luggages</p>
              </div>
              {/* passengers */}
              <div className='border border-[#B4B4B4] mt-5 relative py-10 px-5 rounded-md w-[35%]'>
                <div className="flex flex-col gap-5 h-3/5">
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

                <p className='bg-white absolute -top-4 left-3 w-32 h-8 text-center text-[18px]'>Passengers</p>
              </div>

          </div>
 
        <div className=' mt-1 absolute bottom-0 right-1'>
          <button type='submit' className='bg-main px-2 pt-1 capitalize text-white rounded-md'>modify your search</button>
        </div>
        </form>

    </div>
  )
}

export default InputModifySearch