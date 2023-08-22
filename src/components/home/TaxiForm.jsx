/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AutoCompletee from "./AutoComplete";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { FaUser , FaSkiing, FaBabyCarriage } from "react-icons/fa";
import { GiDiscGolfBag } from "react-icons/gi";
import { BsBicycle } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { TbWheelchair } from "react-icons/tb";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import { toast } from "react-hot-toast";

function TaxiForm() {
  const { data: userData } = useContext(UserData);
  const [showRightContent, setShowRightContent] = useState(false);
  const [typeRightContent, setTypeRightContent] = useState("luggegs");

  const handelShowRightContent = (type) => {
    !showRightContent && setShowRightContent(true);
    setTypeRightContent(type);
  };
  const [luggagesAndSeatsAndSpecial, setLuggagesAndSeatsAndSpecial] = useState({
    seats: 0,
    luggage: 0,
    specialPet: 0,
    specialSki: 0,
    specialBike: 0,
    specialBabySeat: 0,
    specialWheelchair: 0,
  });

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

  const currentDate = new Date()
  const { register, handleSubmit , getValues } = useForm({
    defaultValues: {
      user:userData?.id,
      arrival: "",
      departure: "",
      round_trip: "false",
      car:"sedan",
      comment:"",
      source: "web",
      trip_distance:null,
      trip_duration:null,
      date: currentDate.toISOString().split('T')[0],
      time: currentDate.getHours().toString().padStart(2, '0') + ':' + currentDate.getMinutes().toString().padStart(2, '0'),
    },
  });

  const onSubmit = (values) => {
    // console.log(values);
    const obj = {
      ...values,
      seats: luggagesAndSeatsAndSpecial.seats,
      luggage: luggagesAndSeatsAndSpecial.luggage,
      special_luggage:`${luggagesAndSeatsAndSpecial.specialPet ? "pet " + luggagesAndSeatsAndSpecial.specialPet : ''} ${luggagesAndSeatsAndSpecial.specialSki ? "Ski " + luggagesAndSeatsAndSpecial.specialSki : ''} ${luggagesAndSeatsAndSpecial.specialBike ? "Bicycle " + luggagesAndSeatsAndSpecial.specialBike : ''} ${luggagesAndSeatsAndSpecial.specialBabySeat ? "Baby Seat " + luggagesAndSeatsAndSpecial.specialBabySeat : ''} ${luggagesAndSeatsAndSpecial.specialWheelchair ? "Wheelchair " + luggagesAndSeatsAndSpecial.specialWheelchair : ''}`,
      payment: "cash",
      return_date: undefined,
      return_time : undefined,
    } 
    AxiosInstance.post("ride-request/", obj)
      .then(({data})=>{
        if ((data.message = "Trip request created successfully")) {
          toast.success("Trip request created successfully");
        }
      }).catch((err)=> {
        console.log(err)
        if(err?.response?.status === 401) {
          toast.error("Please Login First And Try Again");
        }
      })
  };

  return (
    <div className="w-full h-full relative animate__animated animate__fadeIn">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full p-3 flex flex-col text-text gap-5 bg-white justify-center"
      >
        {/* from & to */}
        <div className="flex justify-between items-center gap-2 w-full">
          <div className="flex flex-col gap-2">
            <label>From</label>
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
          <div className="flex flex-col gap-2">
            <label>To</label>
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

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-11">
          <div className="flex flex-col gap-2">
            <label>Date</label>
            <input
              {...register("date")}
              defaultValue={getValues("date")}
              type="date"
              className="w-full bg-transparent border-b border-b-text py-1 focus:ring-0 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Time</label>
            <input
              {...register("time")}
              defaultValue={getValues("time")}
              type="time"
              className="w-full bg-transparent border-b border-b-text py-1 focus:ring-0 focus:outline-none"
            />
          </div>
        </div>

        {/* depart & luggags */}
        <div className="grid grid-cols-2 gap-11">
          <div
            className="flex flex-col gap-2"
            onClick={() => handelShowRightContent("luggegs")}
          >
            <label>Luggage&apos;s</label>
            <input
              type="number"
              disabled
              className="w-full bg-transparent border-b border-b-text py-1 focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
        
        {/* Round Trip */}
        <div className="flex gap-4">
          <label htmlFor="field-false" className="flex gap-2 items-center">
            <input
              {...register("round_trip")}
              type="radio"
              value="false"
              id="field-false"
              className="accent-secondary w-4 h-5"
            />
            One Way
          </label>

          <label htmlFor="field-true" className="flex gap-2 items-center">
            <input
              {...register("round_trip")}
              type="radio"
              value="true"
              id="field-true"
              className="accent-secondary w-4 h-5"
            />
            Round Trip
          </label>
        </div>

        {/* car type */}
        <div className="flex gap-4">
          <label htmlFor="field-sedan" className="flex gap-2 items-center">
            <input
              {...register("car")}
              type="radio"
              value="sedan"
              id="field-sedan"
              className="accent-secondary w-4 h-5"
            />
            Sedan
          </label>

          <label htmlFor="field-van" className="flex gap-2 items-center">
            <input
              {...register("car")}
              type="radio"
              value="van"
              id="field-van"
              className="accent-secondary w-4 h-5"
            />
            Van
          </label>
        </div>

        {/* persones */}
        <div className="flex justify-between items-center">
          <span className="flex gap-3 font-medium">
            <FaUser className="text-secondary text-2xl" />
            <span className="flex flex-col text-black gap-1 text-sm">
              Persones
            </span>
          </span>

          <div className="flex items-center gap-4 font-bold">
            <button
              onClick={(e) => handelLugges(e, "decrement", "seats")}
              className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
            >
              -
            </button>
            {luggagesAndSeatsAndSpecial.seats}
            <button
              onClick={(e) => handelLugges(e, "increment", "seats")}
              className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
            >
              +
            </button>
          </div>
        </div>

        {/* baggages */}
        <div className="flex justify-between items-center">
          <span className="flex gap-3 font-medium">
            <GiDiscGolfBag className="text-secondary text-2xl" />
            <span className="flex flex-col text-black gap-1 text-sm">
              Bagages
            </span>
          </span>

          <div className="flex items-center gap-4 font-bold">
            <button
              onClick={(e) => handelLugges(e, "decrement", "luggage")}
              className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
            >
              -
            </button>
            {luggagesAndSeatsAndSpecial.luggage}
            <button
              onClick={(e) => handelLugges(e, "increment", "luggage")}
              className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
            >
              +
            </button>
          </div>
        </div>


        {/* submit button */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="w-1/2 py-2 text-white rounded-lg bg-secondary border border-secondary hover:bg-transparent hover:text-secondary duration-300"
          >
            Send Request
          </button>
        </div>
      </form>

      <div
        className={`absolute top-0 duration-300 ${
          showRightContent ? "left-[110%]" : "left-0"
        } -z-10 w-[90%] lg:w-full h-full bg-white rounded flex flex-col items-center gap-4 pt-12 p-3`}
      >
        <span
          className={`absolute top-[14%] right-full border-[15px] border-transparent border-r-white duration-500`}
        />

        <div className="w-full flex flex-col gap-5 animate__animated animate__fadeIn">

          {/* bicycle */}
          <div className="flex justify-between items-center">
            <span className="flex gap-3 font-medium">
              <BsBicycle className="text-secondary text-2xl" />
              Bicycle
            </span>

            <div className="flex items-center gap-4 font-bold">
              <button
                onClick={(e) => handelLugges(e, "decrement", "specialBike")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                -
              </button>
              {luggagesAndSeatsAndSpecial.specialBike}
              <button
                onClick={(e) => handelLugges(e, "increment", "specialBike")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Pet */}
          <div className="flex justify-between items-center">
            <span className="flex gap-3 font-medium">
              <MdPets className="text-secondary text-2xl" />
              Pet
            </span>

            <div className="flex items-center gap-4 font-bold">
              <button
                onClick={(e) => handelLugges(e, "decrement", "specialPet")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                -
              </button>
              {luggagesAndSeatsAndSpecial.specialPet}
              <button
                onClick={(e) => handelLugges(e, "increment", "specialPet")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* WhellChair */}
          <div className="flex justify-between items-center">
            <span className="flex gap-3 font-medium">
              <TbWheelchair className="text-secondary text-2xl" />
              WhellChair
            </span>

            <div className="flex items-center gap-4 font-bold">
              <button
                onClick={(e) => handelLugges(e, "decrement", "specialWheelchair")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                -
              </button>
              {luggagesAndSeatsAndSpecial.specialWheelchair}
              <button
                onClick={(e) => handelLugges(e, "increment", "specialWheelchair")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* ski */}
          <div className="flex justify-between items-center">
            <span className="flex gap-3 font-medium">
              <FaSkiing className="text-secondary text-2xl" />
              Ski
            </span>

            <div className="flex items-center gap-4 font-bold">
              <button
                onClick={(e) => handelLugges(e, "decrement", "specialSki")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                -
              </button>
              {luggagesAndSeatsAndSpecial.specialSki}
              <button
                onClick={(e) => handelLugges(e, "increment", "specialSki")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Baby Seat */}
          <div className="flex justify-between items-center">
            <span className="flex gap-3 font-medium">
              <FaBabyCarriage className="text-secondary text-2xl" />
              Baby Seat
            </span>

            <div className="flex items-center gap-4 font-bold">
              <button
                onClick={(e) => handelLugges(e, "decrement", "specialBabySeat")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                -
              </button>
              {luggagesAndSeatsAndSpecial.specialBabySeat}
              <button
                onClick={(e) => handelLugges(e, "increment", "specialBabySeat")}
                className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* comment */}
          <div className="flex flex-col gap-2">
            <label>Comment</label>
            <textarea 
              {...register("comment")}
              rows={2}
              className="w-full border border-secondary rounded-lg min-h-[50px] max-h-[80px]"
            />
          </div>
        </div>

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

export default TaxiForm;
