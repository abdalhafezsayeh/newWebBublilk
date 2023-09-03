/* eslint-disable @next/next/no-img-element */

import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { loadGoogleMapsScript } from '../globalComponents/LoadScripting';
import { GoogleMap, Autocomplete , DirectionsRenderer, Data, MarkerF } from '@react-google-maps/api';
import { FaLocationArrow } from 'react-icons/fa';
import Container from '../globalComponents/Container';
import { BiCommentDetail, BiCommentDots, BiCurrentLocation } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import AxiosInstance from '@/helper/AxiosInstance';
import { UserData } from '@/context/userContext';
import Loading from '../globalComponents/Loading';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { MdAddLocation, MdRestartAlt } from 'react-icons/md';
import ModalCom from '../globalComponents/Modal';
import ButtonSwper from '../globalComponents/ButtonSwper';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import axios from 'axios';
import Link from 'next/link';


const center = {lat: 46.227638, lng: 2.213749}


const MapInMobile = () => {

    const router = useRouter();
    const [modalPwa, setModalPwa] = useState(true);
    const [payUser, setPayUser] = useState(false);
    const [chooseWallet, setChooseWallet] = useState(false);
    const [methodPay, setMethodPay] = useState("");
    const [noMonyInWellet, setNoMonyInWellet] = useState(false);
    const [platForm, setPlatForm] = useState('')
    const [dateTheAppointment, setDateTheAppointment] = useState(null)
    const [flagWhenRequistAppointment, setFlagWhenRequistAppointment] = useState(false)

    const [countPersonAndBagages, setCountPersonAndBagages] = useState({
      person:0,
      bagages:0
    });

    const handlePersonsAndBagages = (type, action, e) => {
      e.preventDefault();
      setCountPersonAndBagages((prevState) => {
        let updateState = {...prevState};
        if(action === 'increment') {
          updateState[type] = prevState[type] + 1
        } else if (action === 'decrement') {
            if(prevState[type] > 0) {
              updateState[type] = prevState[type] - 1
            }
        }
        return updateState;
      })
    }

    const [specialLuggageState, setSpecialLuggageState] = useState({
      bicycle:0,
      wheelchair:0,
      baby_seat:0,
      pet:0,
      ski:0
    });

    const handleSpecialLuggageState = (type, action, e) => {
      e.preventDefault();
      setSpecialLuggageState((prevState) => {
        let updatedState = { ...prevState };
        if (action === 'increment') {
          updatedState[type] = prevState[type] + 1;
        } else if (action === 'decrement') {
          if (prevState[type] > 0) {
            updatedState[type] = prevState[type] - 1;
          }
        }
        return updatedState;
      });
    };

    const { setWalletPrice ,data: userData, setFlagWhenUserSendBookingFindDriver, handelsetDataTripeFromFindRide } = useContext(UserData);
    

    /** @type React.MutableRefObject<HTML.inputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTML.inputElement> */
    const destiationRef = useRef()


    const [optionAndComments, setOptionAndComments] = useState('')
    const [trips, setTrips] = useState(false)
    const [payment, setPayment] = useState('cash')


    const [optionAndComment, setOptionAndComment] = useState(false);
    const [selectTypeCar, setSelectTypeCar] = useState('sedan');
    const [isLoaded, setIsLoaded] = useState(false);
    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    
    const [directionResponse, setDirectionResponse] = useState(null);
    const [distance , setDistance] = useState('');
    const [duration , setDuration] = useState('');

    const [typeTime , setTypeTime] = useState('now')

    const [verfiyLoading, setVerfiyLoading] = useState(false)

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() + 1);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);


    const today = new Date();
    today.setDate(today.getDate() );


    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
            defaultValues: {
                date: tomorrow.toISOString().substr(0, 10),
                time: tomorrow.toISOString().substr(11,5),
                return_date: today.toISOString().substr(0, 10),
                return_time: today.toISOString().substr(11,5)
            },
    });

    const todayComairAppointment = new Date();
    const year = todayComairAppointment.getFullYear();
    const month = String(todayComairAppointment.getMonth() + 1).padStart(2, "0");
    const day = String(todayComairAppointment.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const onSubmit = data => {
        let { date, time, return_date, return_time } = data;
        if(typeTime == "now"){
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getSeconds()).padStart(2, '0');
            const microseconds = String(currentDate.getMilliseconds()).padStart(6, '0');
            date = `${year}-${month}-${day}`
            time = `${hours}:${minutes}:${seconds}.${microseconds}`
        }
        const obj = {
          car: selectTypeCar,
          arrival: destiationRef.current.value,
          departure: originRef.current.value,
          date,
          time,
          seats: countPersonAndBagages.person,
          luggage: countPersonAndBagages.bagages,
          special_luggage:`${specialLuggageState.pet ? "pet " + specialLuggageState.pet : ''} ${specialLuggageState.ski ? "Ski " + specialLuggageState.ski : ''} ${specialLuggageState.bicycle ? "Bicycle " + specialLuggageState.bicycle : ''} ${specialLuggageState.baby_seat ? "Baby Seat " + specialLuggageState.baby_seat : ''} ${specialLuggageState.wheelchair ? "Wheelchair " + specialLuggageState.wheelchair : ''}`,
          comment : optionAndComments,
          user:userData?.id,
          round_trip:trips,
          payment: methodPay,
          trip_distance:distance,
          trip_duration:duration,
          return_date: trips ? return_date : undefined,
          return_time : trips ? return_time : undefined,
          source: platForm
        } 

        setVerfiyLoading(true)
        AxiosInstance.get("me/")
        .then((res) => {
          setWalletPrice(res?.data["wallet_amount"]);
          AxiosInstance.post("ride-request/", obj)
          .then((res) => {
            if ((res.data.message = "Trip request created successfully")) {
              setPayUser(false);
              localStorage.removeItem('dataFindDriver');
              toast.success("Trip request created successfully", {style:{fontSize:'12px'}});
              reset();
              setCountPersonAndBagages({person:0, bagages:0});
              setOptionAndComments('');
              setTrips(false);
              setPayment('cash')
              setSpecialLuggageState({
                bicycle:0,
                wheelchair:0,
                baby_seat:0,
                pet:0,
                ski:0
              })
            }
            setDateTheAppointment(res?.data?.request.date)

            if(res.data.request.date > formattedDate) {
              setFlagWhenRequistAppointment(true)
              handelsetDataTripeFromFindRide(res?.data?.request)
            } else {
              setFlagWhenUserSendBookingFindDriver(res?.data?.request?.id);
              handelsetDataTripeFromFindRide(res?.data?.request)
              setFlagWhenRequistAppointment(false)
            }
          })
          .catch((err) => {
            if(err?.response?.status === 401) {
                router.push('/signIn')
            } else if (err?.response.data.error == "{'payment': [ErrorDetail(string='\"\" is not a valid choice.', code='invalid_choice')]}") {
                toast.error("Choose Payment Method");
            } else {
                toast.error("Somthing Happened Try Again Later");
            }
          })
          .finally(() => setVerfiyLoading(false));
        })
        .catch((err) => {
          console.log(err);
          localStorage.setItem(
            "dataFindDriver",
            JSON.stringify({
              ...obj,
              pet: specialLuggageState.pet,
              ski: specialLuggageState.ski,
              bicycle: specialLuggageState.bicycle,
              baby_seat: specialLuggageState.baby_seat,
              wheelchair: specialLuggageState.wheelchair
            })
          );
          if (err.response.status == 401) {
            router.push("/signIn");
          }
        });

    };


    const [ myDataWhenUserFindNotLogin , setMyDataWhenUserFindNotLogin] = useState({})

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const myData = localStorage.getItem('dataFindDriver');

        if (myData) {
          const parsedMyData = JSON.parse(myData);
          setMyDataWhenUserFindNotLogin(parsedMyData)
        }
      }
    }, []);


    // Get Data When User Not Login 
    useEffect(() => {
      setCountPersonAndBagages({
        person: myDataWhenUserFindNotLogin.seats ? myDataWhenUserFindNotLogin.seats : 0,
        bagages: myDataWhenUserFindNotLogin.luggage ? myDataWhenUserFindNotLogin.luggage : 0,
      })
      setSpecialLuggageState({
        bicycle: myDataWhenUserFindNotLogin.bicycle ? myDataWhenUserFindNotLogin.bicycle : 0,
        wheelchair: myDataWhenUserFindNotLogin.wheelchair ? myDataWhenUserFindNotLogin.wheelchair : 0,
        baby_seat:myDataWhenUserFindNotLogin.baby_seat ? myDataWhenUserFindNotLogin.baby_seat : 0, 
        pet:myDataWhenUserFindNotLogin.pet ? myDataWhenUserFindNotLogin.pet : 0,
        ski:myDataWhenUserFindNotLogin.ski ? myDataWhenUserFindNotLogin.ski : 0,
      });
      setOptionAndComments(myDataWhenUserFindNotLogin.comment);
      setTrips(myDataWhenUserFindNotLogin.round_trip ? myDataWhenUserFindNotLogin.round_trip : false);
      setSelectTypeCar(myDataWhenUserFindNotLogin.car ? myDataWhenUserFindNotLogin.car : 'sedan');
      setValue("return_date", myDataWhenUserFindNotLogin.return_date);
      setValue("return_time", myDataWhenUserFindNotLogin.return_time);
      setDuration(myDataWhenUserFindNotLogin.trip_duration);
      setDistance(myDataWhenUserFindNotLogin.trip_distance);

      setTimeout(() => {
        myDataWhenUserFindNotLogin.trip_distance ? calculateRoute() : null
      }, 1000);
      
    },[myDataWhenUserFindNotLogin])


    useEffect(() => {
      loadGoogleMapsScript('AIzaSyBqB6CgEEbTrE5b2LV_xC4DLOtag9wBPaQ', ['places'])
        .then(() => {
          setIsLoaded(true);
        })
        .catch((error) => {
          console.error(error);
        });


      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.platform)) {
        setPlatForm('app')
      } else {
        setPlatForm('web')
      }

    }, []);  
    

    // Handel Click Travel Mode 
    async function calculateRoute() {
        if(originRef.current.value == '' || destiationRef.current.value == '') {
            return
        }
        const dirctionServices = new google.maps.DirectionsService();
        const results = await dirctionServices.route({
            origin: originRef.current.value,
            destination: destiationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    // Handel Click Clear Travel Mode 
    function clearRoute () {
        setDirectionResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destiationRef.current.value = ''
    }
        
    const handelCloseOptionsAndComments = (_) =>  {
        event.preventDefault();
        setOptionAndComment(!optionAndComment)
        // Reset Data 
        setSpecialLuggageState({
          bicycle:0,
          wheelchair:0,
          baby_seat:0,
          pet:0,
          ski:0
        })
        setOptionAndComments('');
        setTrips(false);
        setPayment('cash')
    }


    const handleDoneOptionsAndCommments = (e) => {
      e.preventDefault()
      setOptionAndComment(!optionAndComment)
    }

    // get th user location
    const [userLocation , setUserLocation ] = useState(center)
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth <= 768; // set your breakpoint here
        const isDownloaded = localStorage.getItem("userDownloadApp")
          if (!isMobile || isDownloaded ) {
              setModalPwa(false);
          }
          else if(window.matchMedia('(display-mode: standalone)').matches){
              setModalPwa(false);
          }

          navigator.geolocation.getCurrentPosition((position)=>{
              const loc = {lat: position.coords.latitude , lng: position.coords.longitude}
              setUserLocation(loc)
          })
      }
    }, []);


    let deferredPrompt;
    if (typeof window !== 'undefined') {
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
        });
    }

    

    const handleInstallClick = (_) => {
        if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                localStorage.setItem("userDownloadApp", "true")
                // console.log('User accepted the A2HS prompt');
            } else {
                // console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
        toggleModalPwa()
        } else {
            setModalPwa(false);
        }
    };

    const toggleModalPwa = () => {
        setModalPwa(!modalPwa)
    }

    const handleChoosePaymentMethod = (typeMethod) => {
    setMethodPay(typeMethod);
    };

    const handlePayWithWallet = () => {
      AxiosInstance.post("wallet/pay-trip/", { trip_id: tripId })
        .then((res) => {
            // Show Modal
            // console.log(res)
            setShowModalSucsess(true);
        })
        .catch((err) => {
            // console.log(err)
            if (err.response.data.message == "Insufficient User funds") {
            setNoMonyInWellet(true);
            }
        })
        .finally(() => {
            console.log("finally");
        });
    };


    const handleRequstMeReturnWalletUnmount = (e) => {
      e.preventDefault();
      setPayUser(true);
    };

    const handelGetCurrentLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
          axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBqB6CgEEbTrE5b2LV_xC4DLOtag9wBPaQ`)
            .then((res)=>{
                console.log(res)
                originRef.current.value = res.data.results[2].formatted_address
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    }

    


    if (!isLoaded) {
        return (
            <div className="flex justify-center items-center h-[100vh] bg-white">
                <Loading width={"50px"} height={"50px"} />
            </div>
        ) 
    }

    return (
      <>
        <div className="relative svh overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="h-full">
            {/* Start Map  */}
            <div className="relative h-[45%]">
              <div className="w-full h-full">
                <GoogleMap
                  center={userLocation}
                  zoom={10}
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                  options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                  onLoad={(map) => setMap(map)}
                >
                  <MarkerF
                    position={userLocation}
                    icon={{
                      url: "https://i.ibb.co/2t2vdJ8/Group-38247.png",
                    }}
                  />
                  {directionResponse && (
                    <DirectionsRenderer directions={directionResponse} />
                  )}
                </GoogleMap>
              </div>
              <div
                onClick={() => map.panTo(center)}
                className="absolute bottom-5 left-1 rounded-full cursor-pointer w-[35px] h-[35px] bg-[#02bf02] text-white flex justify-center items-center"
              >
                <FaLocationArrow />
              </div>
              <div
                onClick={clearRoute}
                className="absolute bottom-5 left-12 rounded-full cursor-pointer w-[35px] h-[35px] bg-[#02bf02] text-white flex justify-center items-center"
              >
                <MdRestartAlt size={20} />
              </div>
              {distance && (
                <div className="absolute bottom-5 text-[11px] right-28 rounded-md cursor-pointer w-fit px-1 h-[35px] bg-[#02bf02] text-white flex justify-center items-center">
                  {distance}
                </div>
              )}
              {duration && (
                <div className="absolute bottom-5 text-[11px] right-1 rounded-md cursor-pointer w-fit px-1 h-[35px] bg-[#02bf02] text-white flex justify-center items-center">
                  {duration}
                </div>
              )}
            </div>

            {/* Start Search Inputs  absolute left-0 bottom-5*/}
            <div className="bg-white h-[55%] rounded-t-xl pt-2 pb-4 w-full shadow-md overflow-y-auto">
              <Container className="flex flex-col gap-y-2">
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
                <div className="flex items-center gap-x-4 justify-around w-full">
                  <div className="flex items-center gap-x-2 py-2 justify-center bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] w-1/2 rounded-lg">
                    <input
                      onClick={(e) => setTypeTime(e.target.value)}
                      required
                      defaultChecked={typeTime == "now"}
                      type="radio"
                      id="now"
                      className="w-4 h-4 accent-[#26a926]"
                      name="type-time"
                      value="now"
                    />
                    <label htmlFor="now">Now</label>
                  </div>
                  <div className="flex items-center gap-x-2 py-2 justify-center bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] w-1/2 rounded-lg">
                    <input
                      onClick={(e) => setTypeTime(e.target.value)}
                      required
                      type="radio"
                      id="appointment"
                      className="w-4 h-4 accent-[#26a926]"
                      name="type-time"
                      value="appointment"
                    />
                    <label htmlFor="appointment">Appointment</label>
                  </div>
                </div>
                {typeTime == "appointment" && (
                  <div className="animate__animated animate__fadeIn flex items-center justify-between w-full">
                    <div className=" border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                      <input
                        min={yesterday.toISOString().substr(0, 10)}
                        {...register("date", { required: true })}
                        className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                        type="date"
                        placeholder="oragin"
                      />
                    </div>
                    <div className=" border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                      <input
                        {...register("time", { required: true })}
                        className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                        type="time"
                        placeholder="oragin"
                      />
                    </div>
                  </div>
                )}
                {/* End Time And Date */}

                {/* Start Inputs Search Location  */}
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
                        defaultValue={myDataWhenUserFindNotLogin?.departure}
                        className="w-full text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                        type="text"
                        placeholder="departure"
                      />
                      <span
                        onClick={handelGetCurrentLocation}
                        className="cursor-pointer opacity-70"
                      >
                        <BiCurrentLocation />
                      </span>
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
                        defaultValue={myDataWhenUserFindNotLogin?.arrival}
                        onBlur={calculateRoute}
                        className="w-full text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                        type="text"
                        placeholder="arrival"
                      />
                    </div>
                  </Autocomplete>
                  {/* End To  */}
                </div>
                {/* End Inputs Search Location  */}

                {/* Start personnes And Bagages  */}
                <div className="flex items-center justify-between w-full mb-1">
                  <div className="">
                    <p className="text-center font-semibold text-[12px]">
                      Personnes
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        onClick={(e) => handlePersonsAndBagages('person', 'decrement', e)}
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </span>
                      <span className="rounded-xl w-10 h-8 text-center leading-8 bg-white">
                        {countPersonAndBagages.person}
                      </span>
                      <span
                        onClick={(e) => handlePersonsAndBagages('person', 'increment', e)}
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-center font-semibold text-[12px]">
                      Bagages
                    </p>
                    <div className="flex items-center gap-1">
                      <span
                        onClick={(e) => handlePersonsAndBagages('bagages', 'decrement', e)}
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                      >
                        -
                      </span>
                      <span className="rounded-xl w-10 h-8 text-center leading-8 bg-white">
                        {countPersonAndBagages.bagages}
                      </span>
                      <span
                        onClick={(e) => handlePersonsAndBagages('bagages', 'increment', e)}
                        className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-8 h-8 text-center leading-8 font-bold cursor-pointer rounded-md"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
                {/* End personnes And Bagages  */}
                {/* Start Options And Comments  */}
                <div
                  onClick={() => setOptionAndComment(!optionAndComment)}
                  className="p-2 mb-2 cursor-pointer bg-[#F5FFF6]"
                >
                  <div className="flex items-center gap-2 w-full">
                    <span className="text-mobileMain">
                      <BiCommentDetail />
                    </span>
                    <span>Options And Comments</span>
                  </div>
                </div>
                {/* End Options And Comments  */}

                <div>
                  <button
                    type="button"
                    onClick={(e) => handleRequstMeReturnWalletUnmount(e)}
                    className="w-full h-9 pt-1 bg-[#02bf02] text-white rounded-lg"
                  >
                    Find a driver
                  </button>
                </div>
              </Container>
            </div>

            {/* Over Lay When Complete Trip  */}
            {optionAndComment && (
              <div
                onClick={() => setOptionAndComment(!optionAndComment)}
                className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-10"
              />
            )}
            {payUser && (
              <div
                onClick={() => setPayUser(!payUser)}
                className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"
              ></div>
            )}
            <div>
              <div
                className={`bg-white z-30 border-t-[1px] shadow-2xl ${
                  optionAndComment ? "bottom-0" : "-bottom-[600px]"
                } w-full h-fit absolute duration-500 rounded-t-xl p-2 pt-4`}
              >
                <div>
                  <p className="text-center text-[#444] capitalize border-b-[1px] pb-2 font-bold">
                    special luggage
                  </p>

                  <div className="flex justify-evenly gap-3 mt-3">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col gap-2">
                        <p>Bicycle</p>
                        <p>Wheelchair</p>
                        <p>baby seat</p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1 my-1">
                          <button
                            disabled={specialLuggageState.bicycle == 0}
                            onClick={(e) => handleSpecialLuggageState("bicycle", "decrement", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            -
                          </button>
                          <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                            {specialLuggageState.bicycle}
                          </span>
                          <button
                            onClick={(e) => handleSpecialLuggageState("bicycle", "increment", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-1 my-1">
                          <button
                            disabled={specialLuggageState.wheelchair == 0}
                            onClick={(e) => handleSpecialLuggageState("wheelchair", "decrement", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            -
                          </button>
                          <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                            {specialLuggageState.wheelchair}
                          </span>
                          <button
                            onClick={(e) => handleSpecialLuggageState("wheelchair", "increment", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-1 my-1">
                          <button
                            disabled={specialLuggageState.baby_seat == 0}
                            onClick={(e) => handleSpecialLuggageState("baby_seat", "decrement", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            -
                          </button>
                          <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                            {specialLuggageState.baby_seat}
                          </span>
                          <button
                            onClick={(e) => handleSpecialLuggageState("baby_seat", "increment", e)}
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
                            disabled={specialLuggageState.pet == 0}
                            onClick={(e) => handleSpecialLuggageState("pet", "decrement", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            -
                          </button>
                          <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                            {specialLuggageState.pet}
                          </span>
                          <button
                            onClick={(e) => handleSpecialLuggageState("pet", "increment", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-1 my-1">
                          <button
                            disabled={specialLuggageState.ski == 0}
                            onClick={(e) => handleSpecialLuggageState("ski", "decrement", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            -
                          </button>
                          <span className="rounded-xl w-5 h-5 text-center leading-5 bg-white">
                            {specialLuggageState.ski}
                          </span>
                          <button
                            onClick={(e) => handleSpecialLuggageState("ski", "increment", e)}
                            className="bg-mobileMain bg-opacity-25 text-[#A6ADB7] w-5 h-5 text-center leading-5 font-bold cursor-pointer rounded-md"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Trips  */}
                <div className="mb-3">
                  <p className="text-center text-[#444] capitalize border-b-[1px] mt-4 font-bold border-t-[1px] pb-2 pt-2">
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
                        name="radio-group-one"
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
                        className="form-radio text-indigo-600"
                        name="radio-group-one"
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
                          // defaultValue={myDataWhenUserFindNotLogin?.return_date}
                          className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                          type="date"
                          placeholder="oragin"
                        />
                      </div>
                      <div className="cursor-pointer border border-mobileMain rounded-lg mb-1 flex items-center p-1 overflow-hidden justify-center h-9">
                        <input
                          {...register("return_time")}
                          className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                          type="time"
                          placeholder="oragin"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-1">
                  <div className="border border-slate-400 rounded-lg mb-1 flex items-center p-1 px-3 overflow-hidden justify-center h-12">
                    <span className="opacity-80 text-xl">
                      <BiCommentDots />
                    </span>
                    <input
                      value={optionAndComments}
                      onChange={(e) => setOptionAndComments(e.target.value)}
                      className="w-full test text-[13px] border-none focus:ring-0 outline-none bg-transparent border-2 p-2 rounded-md"
                      type="text"
                      placeholder="Write a Comment"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-1 pt-2">
                  <button
                    onClick={() => handelCloseOptionsAndComments()}
                    className="text-[#FFF] bg-[#A6ADB7] w-[160px] h-[40px] rounded-[6px]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => handleDoneOptionsAndCommments(e)}
                    className="text-[#FFF] bg-mobileMain w-[160px] h-[40px] rounded-[6px]"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>

            {/* Start Pay Methods  */}
            <div
              className={`bg-white z-20 border-t-[1px] shadow-[0_0_5px_#ccc] ${
                payUser ? "bottom-0" : "-bottom-[1000px]"
              } w-full h-fit absolute duration-500 rounded-t-3xl p-2 pt-4`}
            >
              <div className="px-2">
                {!chooseWallet && (
                  <div>
                    <p className="text-center mb-5">Select payment method</p>

                    {/* Start Pay With Visa */}
                    <div
                      onClick={() => handleChoosePaymentMethod("card")}
                      className={`px-2 bg-[#02BF0208] border ${
                        methodPay == "card"
                          ? "border-mobileMain "
                          : "border-transparent"
                      }  hover:border-mobileMain duration-200 rounded-md cursor-pointer mb-2`}
                    >
                      <div className="flex items-center gap-4 py-2">
                        <span>
                          <img
                            src="pay/visa.png"
                            alt="pay with visa In Kiro Travel"
                          />
                        </span>
                        <div className="leading-4">
                          <p>Online Payment</p>
                        </div>
                      </div>
                    </div>
                    {/* End Pay With Visa */}

                    {/* Start Pay With Wallet */}
                    <div
                      onClick={() => handleChoosePaymentMethod("wallet")}
                      className={`px-2 bg-[#02BF0208] border ${
                        methodPay == "wallet"
                          ? "border-mobileMain "
                          : "border-transparent"
                      } hover:border-[#02bf02] duration-200 rounded-md cursor-pointer mb-2`}
                    >
                      <div className="flex items-center gap-4 py-2">
                        <span>
                          <img
                            src="pay/wallet.png"
                            alt="pay with visa In Kiro Travel"
                          />
                        </span>
                        <div>
                          <p>Wallet</p>
                        </div>
                      </div>
                    </div>
                    {/* End Pay With Wallet */}

                    {/* Start Pay With Cash */}
                    {typeTime == "appointment" && 
                      <div
                        onClick={() => handleChoosePaymentMethod("cash")}
                        className={`px-2 bg-[#02BF0208] border ${
                          methodPay == "cash"
                            ? "border-mobileMain "
                            : "border-transparent"
                        }  hover:border-[#02bf02] duration-200 rounded-md cursor-pointer`}
                      >
                        <div className="flex items-center gap-4 py-2">
                          <span>
                            <img
                              src="pay/cash.png"
                              alt="pay with visa In Kiro Travel"
                            />
                          </span>
                          <div>
                            <p>Cash</p>
                          </div>
                        </div>
                      </div>
                    }
                    {/* End Pay With Cash */}
                    {/* Button Submit  */}
                    <div className="w-[90%] m-auto">
                      <button
                        type="submit"
                        disabled={verfiyLoading}
                        className="bg-[#02bf02] mt-4 w-full py-2 min-h-[40px] text-white rounded-md flex items-center justify-center"
                      >
                        {verfiyLoading ? (
                          <Loading width="20px" height="20px" />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {chooseWallet && (
                  <div className="flex flex-col items-center justify-center gap-4 relative">
                    {/* button back */}
                    <div
                      onClick={() => setChooseWallet(!chooseWallet)}
                      className="absolute top-0 left-0 bg-[#EEE] p-1 rounded-full cursor-pointer"
                    >
                      <AiOutlineArrowLeft />
                    </div>
                    {!noMonyInWellet && (
                      <>
                        <p className="font-medium text-[#555]">wallet</p>
                        <p className="text-[14px] text-center">
                          Swipe to pay{" "}
                          From Your
                          <br />
                          Wallet
                        </p>

                        <div className="w-[100%] m-auto">
                          <ButtonSwper payFunction={handlePayWithWallet} />
                        </div>
                      </>
                    )}

                    {noMonyInWellet && (
                      <>
                        <p className="font-medium text-[#555]">wallet</p>
                        <p className="text-[14px] text-center">
                          Insufficient User Funds
                        </p>

                        <div className="w-[90%] m-auto">
                          <div className="w-[90%] m-auto">
                            <button
                              onClick={() => handleRechargeWallet()}
                              className="bg-[#02bf02] mt-4 w-full py-2 text-white rounded-md"
                            >
                              Wallet Recharge
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </form>
          {/* End Pay Methods  */}

          {/* Modal Install Pwa  */}
          <ModalCom visible={modalPwa} showHeader={false}>
            <div className="bg-white p-4 rounded-lg">
              <div className="m-auto">
                <img src="ppwa.gif" className="m-auto" alt="pwa kirotravel taxi voltaire" />
              </div>
              <p className="text-center text-[13px]">
                For More Experience , You can add the website to home screen as
                an mobile app
              </p>
              <div className="flex gap-3 justify-center mt-4">
                <button
                  onClick={(e) => handleInstallClick(e)}
                  className="bg-mobileMain py-1 px-3 rounded-lg text-white"
                >
                  Yes
                </button>
                <button
                  onClick={() => toggleModalPwa()}
                  className="bg-mobileMain py-1 px-3 rounded-lg text-white"
                >
                  No
                </button>
              </div>
            </div>
          </ModalCom>

          <ModalCom visible={flagWhenRequistAppointment} showHeader={false}>
            <div className="bg-white p-4 rounded-lg">
              <div className="m-auto">
                <img src="cal.gif" className="m-auto" alt="Appointment Trips Kiro Travel taxi voltaire" />
              </div>
              <p className="text-center text-[13px] capitalize font-[400]">
                The reservation has been made on the date <strong>{dateTheAppointment}.</strong> 
                <br /> Please proceed to the Trips page to accept the appropriate request.
              </p>
              <Link
                href="WaitingOffers"
                className="bg-mobileMain py-1 px-3 rounded-lg text-white flex justify-center items-center m-auto mt-4"
              >
                Go To Offers
              </Link>
            </div>
          </ModalCom>

        </div>
      </>
    );
}

export default MapInMobile

