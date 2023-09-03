/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import { loadGoogleMapsScript } from "@/components/globalComponents/LoadScripting";
import Loading from "@/components/globalComponents/Loading";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import { Autocomplete } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BiCommentDots } from "react-icons/bi";
import { MdAddLocation } from "react-icons/md";

const formValues = {
  car: "",
  arrival: "",
  departure: "",
  date: "",
  time: "",
  seats: "",
  luggage: "",
  special_luggage: "",
  comment: "",
  round_trip: "",
  payment: "",
  trip_distance: "",
  trip_duration: "",
  return_date: "",
  return_time: "",
  source: "",
};
const today = new Date();
function EditRequest() {
  const router = useRouter();
  const { data: userData } = useContext(UserData);
  const [selectTypeCar, setSelectTypeCar] = useState("sedan");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [isLoadedData, setIsLoadedData] = useState(true);
  const [isLoadedMap, setIsLoadedMap] = useState(false);
  const [trips, setTrips] = useState(false);
  /** @type React.MutableRefObject<HTML.inputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTML.inputElement> */
  const destiationRef = useRef();
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      ...formValues,
      user: userData?.id,
    },
  });

  useEffect(() => {
    AxiosInstance.get("ride-request/detail/", {
      params: { request_id: router.query.id },
    })
      .then(({ data }) => {
        if (data.message == "Request retrieved successfully") {
          setSelectTypeCar(data?.data?.car);
          for (let i in formValues) {
            setValue(i, data.data[i]);
          }
          setLuggagesAndSeatsAndSpecial((prev) => {
            return {
              ...prev,
              seats: data?.data?.seats,
              luggage: data?.data?.luggage,
            };
          });
          setTrips(data?.data?.round_trip);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadedData(false));
  }, [router, setValue]);

  // load map script
  useEffect(() => {
    loadGoogleMapsScript("AIzaSyBqB6CgEEbTrE5b2LV_xC4DLOtag9wBPaQ", ["places"])
      .then(() => {
        setIsLoadedMap(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  // Handel Click Travel Mode
  async function calculateRoute() {
    if (originRef.current.value == "" || destiationRef.current.value == "") {
      return;
    }
    const dirctionServices = new google.maps.DirectionsService();
    const results = await dirctionServices.route({
      origin: originRef.current.value,
      destination: destiationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setValue("trip_distance", results.routes[0].legs[0].distance.text);
    setValue("trip_duration", results.routes[0].legs[0].duration.text);
  }

  const onSubmit = (values) => {
    setSubmitLoading(true)
    const sendData = {
      ...values,
      departure: originRef.current.value,
      arrival: destiationRef.current.value,
      car:selectTypeCar,
      round_trip:trips,
      seats:luggagesAndSeatsAndSpecial.seats,
      luggage:luggagesAndSeatsAndSpecial.luggage,
      request_id: +router.query?.id,
    };
    AxiosInstance.patch("ride-request/modify-after-accepting-offer/", sendData)
      .then(({ data }) => {
        toast.success("The Request has been Updated Successfuly")
        router.back()
      })
      .catch((err) => toast.error("Somthing happend Please try again Later"))
      .finally(()=> setSubmitLoading(false))
  };

  if (!isLoadedMap || isLoadedData) {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-white">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );
  }

  return (
    <>
      <div className="sticky top-0 w-full p-4 bg-white z-30 flex">
        <div
          onClick={() => router.back()}
          className="bg-[#EEE] p-[6px] w-fit text-xl rounded-md flex sm:hidden cursor-pointer items-center justify-center "
        >
          <img
            src="/offers/arrow.png"
            alt="reload Offers Kiro Travel"
            width="20"
            height="20"
          />
        </div>

        <h3 className="z-40 text-lg w-fit font-medium text-center sm:hidden absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-[6px]">
          Edit Request
        </h3>
      </div>

      <div className="bg-white h-[55%] rounded-t-xl pt-2 pb-4 w-full overflow-y-auto">
        <Container>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2 w-full"
          >
            {/* Start Type Car  */}
            <div className="">
              <div className="flex items-center justify-around gap-x-4">
                <span
                  onClick={() => setSelectTypeCar("van")}
                  className={`shadow-[0px_4px_12px_rgba(0,0,0,0.1)] ${
                    selectTypeCar == "van"
                      ? "border-mobileMain"
                      : "border bg-transparent"
                  } rounded-xl border-[2px] cursor-pointer w-1/2`}
                >
                  <img
                    className="w-[80%] px-3 py-1 m-auto overflow-hidden mix-blend-darken object-contain"
                    src="mobilescreen/van.png"
                    alt="Taxiproxi Montransport Transport pays de gex Transport ferney voltaire Taxi saint genis pouilly Saint genis pouilly cab Vtc taxi"
                  />
                </span>
                <span
                  onClick={() => setSelectTypeCar("sedan")}
                  className={`shadow-[0px_4px_12px_rgba(0,0,0,0.1)] ${
                    selectTypeCar == "sedan"
                      ? "border-mobileMain"
                      : "border bg-transparent"
                  } rounded-xl border-[2px] cursor-pointer w-1/2`}
                >
                  <img
                    className="w-[80%] px-3 py-1 m-auto overflow-hidden mix-blend-darken object-contain"
                    src="mobilescreen/sedan.png"
                    alt="Taxi uber Taxi pas cher Rent a car Louer une voiture Panne Voiture en panne"
                  />
                </span>
              </div>
            </div>
            {/* End Type Car  */}

            {/* Start Time And Date  */}
            <div className="flex items-center justify-between w-full">
              <div className=" border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                <input
                  min={today.toISOString().substr(0, 10)}
                  {...register("date", { required: true })}
                  defaultValue={watch("date")}
                  required
                  className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                  type="date"
                />
              </div>
              <div className=" border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                <input
                  {...register("time", { required: true })}
                  defaultValue={watch("time")}
                  required
                  className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                  type="time"
                />
              </div>
            </div>
            {/* End Time And Date */}

            {/* Start From & to  */}
            <div>
              {/* Start From  */}
              <Autocomplete>
                <div className="bg-mobileMain rounded-lg bg-opacity-10 mb-1 flex items-center overflow-hidden justify-center py-1 px-3">
                  <span className="opacity-70">
                    <MdAddLocation className="text-mobileMain" />
                  </span>
                  <input
                    required
                    ref={originRef}
                    defaultValue={watch("departure")}
                    onBlur={calculateRoute}
                    className="w-full text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                    type="text"
                    placeholder="departure"
                  />
                </div>
              </Autocomplete>
              {/* End From  */}
              {/* Start To  */}
              <Autocomplete>
                <div className="bg-mobileMain rounded-lg bg-opacity-10 mb-1 flex items-center overflow-hidden justify-center py-1 px-3">
                  <span className="opacity-70">
                    <MdAddLocation className="text-mobileMain" />
                  </span>
                  <input
                    required
                    ref={destiationRef}
                    onBlur={calculateRoute}
                    defaultValue={watch("arrival")}
                    className="w-full text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                    type="text"
                    placeholder="arrival"
                  />
                </div>
              </Autocomplete>
              {/* End To  */}
            </div>
            {/* End From & to  */}

            {/* Start personnes And Bagages  */}
            {/* Personnes */}
            <div className="flex items-center justify-between w-full mb-1">
              <div className="">
                <p className="text-center font-semibold text-[12px]">
                  Personnes
                </p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => handelLugges(e, "decrement", "seats")}
                    className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                  >
                    -
                  </button>
                  <span className="rounded-xl w-10 h-8 text-center leading-8 bg-white">
                    {luggagesAndSeatsAndSpecial.seats}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handelLugges(e, "increment", "seats")}
                    className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bagages */}
              <div className="">
                <p className="text-center font-semibold text-[12px]">Bagages</p>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => handelLugges(e, "decrement", "luggage")}
                    className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                  >
                    -
                  </button>
                  <span className="rounded-xl w-10 h-8 text-center leading-8 bg-white">
                    {luggagesAndSeatsAndSpecial.luggage}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handelLugges(e, "increment", "luggage")}
                    className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* End personnes And Bagages  */}

            {/* special luggaegs */}
            <div>
              <p className="text-[#444] capitalize my-2 font-bold">
                special luggage
              </p>

              <div className="flex justify-between gap-3 mt-3">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-2">
                    <p>Bicycle</p>
                    <p>Wheelchair</p>
                    <p>baby seat</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 my-1">
                      <button
                        onClick={(e) =>
                          handelLugges(e, "decrement", "specialBike")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </button>
                      <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                        {luggagesAndSeatsAndSpecial.specialBike}
                      </span>
                      <button
                        onClick={(e) =>
                          handelLugges(e, "increment", "specialBike")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-1 my-1">
                      <button
                        onClick={(e) =>
                          handelLugges(e, "decrement", "specialWheelchair")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </button>
                      <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                        {luggagesAndSeatsAndSpecial.specialWheelchair}
                      </span>
                      <button
                        onClick={(e) =>
                          handelLugges(e, "increment", "specialWheelchair")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-1 my-1">
                      <button
                        onClick={(e) =>
                          handelLugges(e, "decrement", "specialBabySeat")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </button>
                      <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                        {luggagesAndSeatsAndSpecial.specialBabySeat}
                      </span>
                      <button
                        onClick={(e) =>
                          handelLugges(e, "increment", "specialBabySeat")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 mt-1">
                    <p>Pet</p>
                    <p>Ski</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 my-1">
                      <button
                        onClick={(e) =>
                          handelLugges(e, "decrement", "specialPet")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </button>
                      <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                        {luggagesAndSeatsAndSpecial.specialPet}
                      </span>
                      <button
                        onClick={(e) =>
                          handelLugges(e, "increment", "specialPet")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-1 my-1">
                      <button
                        onClick={(e) =>
                          handelLugges(e, "decrement", "specialSki")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </button>
                      <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                        {luggagesAndSeatsAndSpecial.specialSki}
                      </span>
                      <button
                        onClick={(e) =>
                          handelLugges(e, "increment", "specialSki")
                        }
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* round trips */}
            <div className="mb-3">
              <p className="text-center text-[#444] capitalize my-4 font-bold">
                Round-Trips
              </p>
              <div className="flex justify-evenly mt-3">
                <label
                  onClick={() => setTrips(false)}
                  className="inline-flex items-center cursor-pointer"
                >
                  <input
                    required
                    type="radio"
                    defaultChecked={!trips}
                    className="form-radio text-indigo-600"
                    name="round_trip"
                    value="false"
                  />
                  <span className="ml-2">One Way</span>
                </label>
                <label
                  onClick={() => setTrips(true)}
                  className="inline-flex items-center ml-6 cursor-pointer"
                >
                  <input
                    type="radio"
                    defaultChecked={trips}
                    className="form-radio text-indigo-600"
                    name="round_trip"
                    value="true"
                  />
                  <span className="ml-2">Round Trip</span>
                </label>
              </div>

              {trips && (
                <div className="mt-2">
                  <div className="cursor-pointer border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                    <input
                      min={today.toISOString().substr(0, 10)}
                      {...register("return_date")}
                      defaultValue={watch("return_date")}
                      required
                      className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                      type="date"
                      placeholder="oragin"
                    />
                  </div>
                  <div className="cursor-pointer border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                    <input
                      {...register("return_time")}
                      defaultValue={watch("return_time")}
                      className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                      type="time"
                      required
                      placeholder="oragin"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* comment */}
            <div className="mt-1">
              <div className="border border-slate-400 rounded-lg mb-1 flex items-center p-1 px-3 overflow-hidden justify-center h-12">
                <span className="opacity-80 text-xl">
                  <BiCommentDots />
                </span>
                <input
                  {...register("comment")}
                  defaultValue={watch("comment")}
                  className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                  type="text"
                  placeholder="Write a Comment"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-mobileMain rounded-md w-full text-white min-h-[42px] flex justify-center items-center"
            >
              {submitLoading ? <Loading width="24px" height="24px" /> : "Save"}
            </button>
          </form>
        </Container>
      </div>
    </>
  );
}

export default EditRequest;

EditRequest.getLayout = function getLayout(page) {
  return <>{page}</>;
};
