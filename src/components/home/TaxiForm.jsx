/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AutoCompletee from "./AutoComplete";
import { HiArrowsRightLeft, HiShoppingBag } from "react-icons/hi2";
import { FaUser, FaSkiing, FaBabyCarriage } from "react-icons/fa";
import { GiDiscGolfBag, GiSchoolBag } from "react-icons/gi";
import { BsBicycle } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { TbWheelchair } from "react-icons/tb";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import { toast } from "react-hot-toast";
import Loading from "../globalComponents/Loading";

function TaxiForm({ setShowSuccess, setReqId , setShowModalNotLogin}) {
  const { data: userData } = useContext(UserData);
  const [loadingSendRequest, setLoadingSendRequest] = useState(false);

  // right content
  const [typeRightContent, setTypeRightContent] = useState("luggages");
  const [showRightContent, setShowRightContent] = useState(false);

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
    adults: 0,
    infant: 0,
    child: 0,
    smallBag:0,
    mediumBag:0,
    bigBag:0,
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

  const currentDate = new Date();
  const { register, handleSubmit, getValues, watch , setValue , reset } = useForm({
    defaultValues: {
      arrival: "",
      departure: "",
      round_trip: "false",
      car: "sedan",
      comment: "",
      payment: "cash",
      source: "web",
      trip_distance: null,
      trip_duration: null,
      date: currentDate.toISOString().split("T")[0],
      time:
        currentDate.getHours().toString().padStart(2, "0") +
        ":" +
        currentDate.getMinutes().toString().padStart(2, "0"),
      return_date: undefined,
      return_time: undefined,
    },
  });

  async function calculateRoute(departure, arrival) {
    if (departure == "" || arrival == "") {
      return;
    }
    try {
      const dirctionServices = new google.maps.DirectionsService();
      const results = await dirctionServices.route({
        origin: departure,
        destination: arrival,
        travelMode: google.maps.TravelMode.DRIVING,
      });

      return {
        trip_distance: results.routes[0].legs[0].distance.text,
        trip_duration: results.routes[0].legs[0].duration.text,
      };
    } catch (err) {
      return {
        trip_distance: null,
        trip_duration: null,
      };
    }
  }
  
  const handelSpecialLuggages = ()=>{
    return `${
      luggagesAndSeatsAndSpecial.specialPet
        ? "pet " + luggagesAndSeatsAndSpecial.specialPet
        : ""
    } ${
      luggagesAndSeatsAndSpecial.specialSki
        ? "Ski " + luggagesAndSeatsAndSpecial.specialSki
        : ""
    } ${
      luggagesAndSeatsAndSpecial.specialBike
        ? "Bicycle " + luggagesAndSeatsAndSpecial.specialBike
        : ""
    } ${
      luggagesAndSeatsAndSpecial.specialBabySeat
        ? "Baby Seat " + luggagesAndSeatsAndSpecial.specialBabySeat
        : ""
    } ${
      luggagesAndSeatsAndSpecial.specialWheelchair
        ? "Wheelchair " + luggagesAndSeatsAndSpecial.specialWheelchair
        : ""
    }`
  }

  const sendRideRequest = (data)=>{
    AxiosInstance.post("ride-request/", data)
          .then(({ data }) => {
            if ((data.message = "Trip request created successfully")) {
              setReqId(data?.request?.id); // to handel if user click cancel ride
              setShowSuccess(true);
              reset()
              setLuggagesAndSeatsAndSpecial({
                seats: 0,
                luggage: 0,
                specialPet: 0,
                specialSki: 0,
                specialBike: 0,
                specialBabySeat: 0,
                specialWheelchair: 0,
                adults: 0,
                infant: 0,
                child: 0,
                smallBag:0,
                mediumBag:0,
                bigBag:0,
              })
              localStorage.removeItem("taxiFormData")
            }
          })
          .catch((err) => { console.log(err)})
          .finally(() => setLoadingSendRequest(false));
  }

  const onSubmit = async (values) => {
    setLoadingSendRequest(true);
    const calculateRide = await calculateRoute(
      values.departure,
      values.arrival
    );

    const obj = {
      ...values,
      ...calculateRide,
      user: userData?.id,
      round_trip: values.round_trip == "true" ? true : false,
      return_date: values.round_trip == "true" ? values.return_date : undefined,
      return_time: values.round_trip == "true" ? values.return_time : undefined,
      seats: luggagesAndSeatsAndSpecial.adults + luggagesAndSeatsAndSpecial.child + luggagesAndSeatsAndSpecial.infant,
      luggage: luggagesAndSeatsAndSpecial.smallBag + luggagesAndSeatsAndSpecial.mediumBag + luggagesAndSeatsAndSpecial.bigBag,
      special_luggage: handelSpecialLuggages(),
    };
    if(!userData) {
      localStorage.setItem("taxiFormData", JSON.stringify({...obj, round_trip: values.round_trip }))
      return (setShowModalNotLogin(true) , setLoadingSendRequest(false))
    }
    else{
      if (values.round_trip == "true") {
        if (values.return_date == "" || values.return_time == "") {
          return (
            setShowRightContent(true),
            setTypeRightContent("roundTrip"),
            setLoadingSendRequest(false)
          );
        }
        sendRideRequest(obj)
      } 
      else 
        sendRideRequest(obj)
    }
  };

  useEffect(() => {
    if (watch("round_trip") == "true") {
      setTypeRightContent("roundTrip");
      setShowRightContent(true);
    } else {
      if (showRightContent && typeRightContent == "roundTrip") {
        setTypeRightContent("");
        setShowRightContent(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("round_trip")]);

  // get data from local storage and set in form
  useEffect(()=>{
    const taxiData = JSON.parse(localStorage.getItem("taxiFormData"))
    if(taxiData){
      for (let i in taxiData) {
        setValue(i, taxiData[i]);
      }
    }
  },[setValue])

  return (
    <>
      <div className="w-full h-full relative animate__animated animate__fadeIn rounded">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full p-4 flex flex-col text-text gap-4 bg-white justify-center rounded"
        >
          {/* from & to */}
          <div className="grid grid-cols-[auto_10%] gap-2 items-center">

            <div className="flex flex-col gap-4">
              {/* from */}
              <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
                <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                  From
                </label>
                <AutoCompletee
                  placeholder=""
                  register={{
                    ...register("departure", {
                      required: { value: true },
                    }),
                  }}
                />
              </div>

              {/* to */}
              <div className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md">
                <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                  To
                </label>
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

            <span className="flex justify-center rotate-90">
              <HiArrowsRightLeft size={28} />
            </span>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md">
              <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                Date
              </label>
              <input
                {...register("date")}
                defaultValue={getValues("date")}
                type="date"
                className="w-full bg-transparent focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="flex gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md">
              <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                Time
              </label>
              <input
                {...register("time")}
                defaultValue={getValues("time")}
                type="time"
                className="w-full bg-transparent focus:ring-0 focus:outline-none"
              />
            </div>
          </div>

          {/* Luggages & passengers */}
          <div className="grid grid-cols-2 gap-4">
            <div
              className="flex items-center gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md"
              onClick={() => handelShowRightContent("luggegs")}
            >
              <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                Luggage&apos;s
              </label>
              <span>
              {luggagesAndSeatsAndSpecial.smallBag + luggagesAndSeatsAndSpecial.mediumBag + luggagesAndSeatsAndSpecial.bigBag}
              </span>
            </div>

            <div
              className="flex gap-2 relative border border-[#B4B4B4] py-2 px-2 rounded-md"
              onClick={() => handelShowRightContent("passengers")}
            >
              <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                Passengers
              </label>
              <div className="w-full bg-transparent py-1 flex gap-1 items-center">
                <FaUser size={25} />
                {luggagesAndSeatsAndSpecial.adults + luggagesAndSeatsAndSpecial.child + luggagesAndSeatsAndSpecial.infant}
              </div>
            </div>
          </div>

          {/* special luggags */}
          <div className="w-full">
            <div
              className="flex justify-center items-center cursor-pointer gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md"
              onClick={() => handelShowRightContent("specialLuggages")}
            >
              Special Luggage&apos;s
            </div>
          </div>
          
          <div className="flex flex-col gap-3 w-full">
            {/* Round Trip */}
            <div className="flex justify-between items-center">
              <label
                htmlFor="field-false"
                className="w-1/2 flex gap-2 items-center"
              >
                <input
                  {...register("round_trip")}
                  type="radio"
                  value="false"
                  id="field-false"
                  className="accent-secondary w-4 h-5"
                />
                One Way
              </label>

              <label
                htmlFor="field-true"
                className="w-1/2 flex gap-2 items-center"
              >
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
            <div className="flex justify-between items-center">
              <label
                htmlFor="field-sedan"
                className="w-1/2 flex gap-2 items-center"
              >
                <input
                  {...register("car")}
                  type="radio"
                  value="sedan"
                  id="field-sedan"
                  className="accent-secondary w-4 h-5"
                />
                Sedan
              </label>

              <label
                htmlFor="field-van"
                className="w-1/2 flex gap-2 items-center"
              >
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

            {/* payment */}
            <div className="flex justify-between items-center">
              <label htmlFor="field-cash" className="flex gap-2 items-center">
                <input
                  {...register("payment")}
                  type="radio"
                  value="cash"
                  id="field-cash"
                  className="accent-secondary w-4 h-5"
                />
                Cash
              </label>

              <label htmlFor="field-wallet" className="flex gap-2 items-center">
                <input
                  {...register("payment")}
                  type="radio"
                  value="wallet"
                  id="field-wallet"
                  className="accent-secondary w-4 h-5"
                />
                Wallet
              </label>

              <label htmlFor="field-visa" className="flex gap-2 items-center">
                <input
                  {...register("payment")}
                  type="radio"
                  value="visa"
                  id="field-visa"
                  className="accent-secondary w-4 h-5"
                />
                Online Payment
              </label>
            </div>
          </div>

          {/* submit button */}
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="w-1/2 py-2 text-white rounded-lg bg-secondary border border-secondary hover:bg-transparent hover:text-secondary duration-300 flex items-center justify-center"
            >
              {loadingSendRequest ? (
                <Loading width="22px" height="22px" />
              ) : (
                "Send Request"
              )}
            </button>
          </div>

          {/* Right Content */}
          <div
            className={`absolute top-0 duration-300 ${
              showRightContent ? "left-[110%]" : "left-4"
            } -z-10 w-[90%] h-full bg-white rounded flex flex-col items-center gap-4 pt-12 p-3`}
          >
            <span
              className={`absolute top-[14%] right-full border-[15px] border-transparent border-r-white duration-500`}
            />

            {typeRightContent == "specialLuggages" && (
              <div className="w-full flex flex-col gap-5 animate__animated animate__fadeIn">
                {/* bicycle */}
                <div className="flex justify-between items-center">
                  <span className="flex gap-3 font-medium">
                    <BsBicycle className="text-secondary text-2xl" />
                    Bicycle
                  </span>

                  <div className="flex items-center gap-4 font-bold">
                    <button
                      onClick={(e) =>
                        handelLugges(e, "decrement", "specialBike")
                      }
                      className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                    >
                      -
                    </button>
                    {luggagesAndSeatsAndSpecial.specialBike}
                    <button
                      onClick={(e) =>
                        handelLugges(e, "increment", "specialBike")
                      }
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
                      onClick={(e) =>
                        handelLugges(e, "decrement", "specialPet")
                      }
                      className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                    >
                      -
                    </button>
                    {luggagesAndSeatsAndSpecial.specialPet}
                    <button
                      onClick={(e) =>
                        handelLugges(e, "increment", "specialPet")
                      }
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
                      onClick={(e) =>
                        handelLugges(e, "decrement", "specialWheelchair")
                      }
                      className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                    >
                      -
                    </button>
                    {luggagesAndSeatsAndSpecial.specialWheelchair}
                    <button
                      onClick={(e) =>
                        handelLugges(e, "increment", "specialWheelchair")
                      }
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
                      onClick={(e) =>
                        handelLugges(e, "decrement", "specialSki")
                      }
                      className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                    >
                      -
                    </button>
                    {luggagesAndSeatsAndSpecial.specialSki}
                    <button
                      onClick={(e) =>
                        handelLugges(e, "increment", "specialSki")
                      }
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
                      onClick={(e) =>
                        handelLugges(e, "decrement", "specialBabySeat")
                      }
                      className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                    >
                      -
                    </button>
                    {luggagesAndSeatsAndSpecial.specialBabySeat}
                    <button
                      onClick={(e) =>
                        handelLugges(e, "increment", "specialBabySeat")
                      }
                      className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>
            )}

            {typeRightContent == "roundTrip" && (
              <div className="w-full flex flex-col gap-8 mb-10 animate__animated animate__fadeIn">
                {/* return Date */}
                <div className="w-full flex gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md">
                  <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                    Return Date
                  </label>
                  <input
                    {...register("return_date")}
                    required
                    defaultValue={getValues("return_date")}
                    type="date"
                    className="w-full bg-transparent focus:ring-0 focus:outline-none"
                  />
                </div>

                {/* return Time */}
                <div className="w-full flex gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md">
                  <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                    Return Time
                  </label>
                  <input
                    {...register("return_time")}
                    required
                    defaultValue={getValues("return_time")}
                    type="time"
                    className="w-full bg-transparent focus:ring-0 focus:outline-none"
                  />
                </div>

                {/* flight num */}
                {/* <div className="w-full flex gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md">
                  <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                    Flight Number <span className="text-black/60 text-sm font-light">(optional)</span>
                  </label>
                  <input
                    {...register("flight_num")}
                    defaultValue={getValues("flight_num")}
                    className="w-full bg-transparent focus:ring-0 focus:outline-none"
                  />
                </div> */}
                
                {/* train num */}
                {/* <div className="w-full flex gap-2 relative border border-[#B4B4B4] py-3 px-2 rounded-md">
                  <label className="absolute left-3 top-[calc(0px-12px)] px-1 bg-white">
                    Train Number <span className="text-black/60 text-sm font-light">(optional)</span>
                  </label>
                  <input
                    {...register("train_num")}
                    defaultValue={getValues("train_num")}
                    className="w-full bg-transparent focus:ring-0 focus:outline-none"
                  />
                </div> */}

                {/* comment */}
                <div className="flex flex-col gap-2">
                  <label>Comment</label>
                  <textarea
                    {...register("comment")}
                    placeholder="Ex: flight , train no."
                    rows={4}
                    className="w-full border p-2 border-[#B4B4B4] rounded-lg min-h-[50px] max-h-[100px] focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* passengers */}
            {typeRightContent == "passengers" && (
              <>
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
                      {luggagesAndSeatsAndSpecial.adults}
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
                      {luggagesAndSeatsAndSpecial.infant}
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
                      {luggagesAndSeatsAndSpecial.child}
                      <button
                        onClick={(e) => handelLugges(e, "increment", "child")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* luggegs */}
            {typeRightContent == "luggegs" && (
              <>
                <div className="w-full flex flex-col gap-5 h-3/5 animate__animated animate__fadeIn">
                  {/* small bag */}
                  <div className="flex justify-between items-center">
                    <span className="flex gap-3 font-medium">
                      <HiShoppingBag className="text-secondary text-2xl" />
                      Small Bag
                    </span>

                    <div className="flex items-center gap-4 font-bold">
                      <button
                        onClick={(e) => handelLugges(e, "decrement", "smallBag")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        -
                      </button>
                      {luggagesAndSeatsAndSpecial.smallBag}
                      <button
                        onClick={(e) => handelLugges(e, "increment", "smallBag")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* medium Luggage */}
                  <div className="flex justify-between items-center">
                    <span className="flex gap-3 font-medium">
                      <GiSchoolBag className="text-secondary text-2xl" />
                      Medium Bag
                    </span>

                    <div className="flex items-center gap-4 font-bold">
                      <button
                        onClick={(e) => handelLugges(e, "decrement", "mediumBag")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        -
                      </button>
                      {luggagesAndSeatsAndSpecial.mediumBag}
                      <button
                        onClick={(e) => handelLugges(e, "increment", "mediumBag")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* big Luggage */}
                  <div className="flex justify-between items-center">
                    <span className="flex gap-3 font-medium">
                      <img
                        src="/home/travelBag.png"
                        className="object-contain px-1"
                        alt="taxi kero travel"
                      />
                      Big bag
                    </span>

                    <div className="flex items-center gap-4 font-bold">
                      <button
                        onClick={(e) => handelLugges(e, "decrement", "bigBag")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        -
                      </button>
                      {luggagesAndSeatsAndSpecial.bigBag}
                      <button
                        onClick={(e) => handelLugges(e, "increment", "bigBag")}
                        className="w-8 h-8 rounded-full border-2 border-secondary text-secondary font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            <button
              onClick={() => {
                setShowRightContent(false);
                setTypeRightContent("");
              }}
              type="button"
              className="px-8 py-2 text-white rounded-lg bg-secondary border border-secondary hover:bg-transparent hover:text-secondary duration-300"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TaxiForm;
