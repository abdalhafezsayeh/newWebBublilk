/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import { loadGoogleMapsScript } from "@/components/globalComponents/LoadScripting";
import Loading from "@/components/globalComponents/Loading";
import Pusher from "pusher-js";
import { UserData } from "@/context/userContext";
import React, { useContext, useEffect, useState } from "react";
import AddRating from "@/components/pwa/AddRating";
import AxiosInstance from "@/helper/AxiosInstance";
import Timer from "@/components/globalComponents/Timer";
import { useRouter } from "next/router";
import { MdSupportAgent, MdWifiCalling3 } from "react-icons/md";
import SelectMapMobile from "@/components/globalComponents/SelectMapMobile";
import Link from "next/link";
import { CallData } from "@/context/callContext";

const Index = () => {
  const router = useRouter();
  const { reqId } = router.query;
  const {
    reqId: reqIdFromMe,
    data,
    // dataOfferAcceptDriverFromUser,
  } = useContext(UserData);


  const [dataOfferAcceptDriverFromUser, setDataOfferAcceptDriverFromUser] = useState({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const myData = localStorage.getItem('dataTheOfferFromDriverWhenUserClickAccept');
      
      if (myData) {
        const parsedMyData = JSON.parse(myData);

        if(parsedMyData.request_departure) {
          setDataOfferAcceptDriverFromUser(parsedMyData)
        } else {
          setDataOfferAcceptDriverFromUser({
            ...parsedMyData,
            request_departure: parsedMyData.departure,
            request_arrival: parsedMyData.arrival,
            car_color: parsedMyData.driver_car_color,
            driver_car: parsedMyData.driver_car_model,
            car_plate_no: parsedMyData.driver_car_number,
          });
        }
      }
    }

    return () => {
      if(tripId) {
          localStorage.removeItem('dataTheOfferFromDriverWhenUserClickAccept')
      }
    };
  }, []);


  // console.log(data)
  // console.log(dataOfferAcceptDriverFromUser)

  const [isLoaded, setIsLoaded] = useState(false);
  const [dataDriverFromMe, setDataDriverFromMe] = useState("");
  const [responsePusher, setResponsePusher] = useState("default");
  const [optionAndComment, setOptionAndComment] = useState(false);
  const [tripId, setTripId] = useState(0);
  const [loading, setLoading] = useState(false);

  const { setCallNotifiData , handelCall } = useContext(CallData)
  useEffect(() => {
    if (reqId || reqIdFromMe) {
      setLoading(true);
      AxiosInstance.post("/trips/detail/", { trip_id: reqId })
        .then((response) => {
          setDataDriverFromMe(response?.data.data);
          if (response.data.data.status == "arrived") {
            setResponsePusher("arrived");
          } else if (response.data.data.status == "ongoing") {
            setResponsePusher("ongoing");
          } else if (
            response.data.data.status == "completed" &&
            response.data.data.paid == false
          ) {
            setResponsePusher("completed");
            // setPayUser(!payUser);
            setTripId(response.data.data.id);
          } else {
            console.log("error");
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    } else {
      setDataDriverFromMe(dataOfferAcceptDriverFromUser);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqId, reqIdFromMe]);


  useEffect(() => {
    if(tripId) {
      router.push(`/acceptOffer?reqId=${tripId}`)
    }
  },[tripId])

  useEffect(() => {
    // initialize Pusher with your app key and cluster
    const pusher = new Pusher("3f793d158f437cb59363", {
      cluster: "eu",
    });

    // subscribe to the private channel for the authenticated user
    const channel = pusher.subscribe(`user_${data?.id}`);
    // bind to the event triggered by the server
    channel.bind("trip-action", (data) => {
      setTripId(data?.trip_id);
      console.log(data)
      if (data && data.status == "arrived") {
        localStorage.removeItem('dataTheOfferFromDriverWhenUserClickAccept');
        setResponsePusher("arrived"); // i'm Here
      } else if (data && data.status == "ongoing") {
        setResponsePusher("ongoing"); // Start Trip
      } else {
        setResponsePusher("completed"); // Finshed trip
        // Rate Driver With User
        setOptionAndComment(!optionAndComment)
      }
    });

    // cleanup function
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      pusher.unsubscribe(`user_${data?.id}`);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    loadGoogleMapsScript("AIzaSyBqB6CgEEbTrE5b2LV_xC4DLOtag9wBPaQ", ["places"])
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [duration, setDuration] = useState(null);
  const [time, setTime] = useState(null);

  // Handel Show Time Way Between User And Driver
  async function calculateRoute() {
    if (dataDriverFromMe?.departure == "" || dataDriverFromMe?.arrival == "") {
      return null;
    } else if (
      dataOfferAcceptDriverFromUser.request_departure == "" ||
      dataOfferAcceptDriverFromUser.request_arrival == ""
    ) {
      return null;
    } else {
      const dirctionServices = new google.maps.DirectionsService();
      const results = await dirctionServices.route({
        origin: {
          lat: parseFloat(dataOfferAcceptDriverFromUser?.driver_lat ? dataOfferAcceptDriverFromUser?.driver_lat : dataDriverFromMe?.driver_latitude),
          lng: parseFloat(dataOfferAcceptDriverFromUser?.driver_lang ? dataOfferAcceptDriverFromUser?.driver_lang : dataDriverFromMe?.driver_longitude)
        },
        destination: dataDriverFromMe?.departure
          ? dataDriverFromMe?.departure
          : dataOfferAcceptDriverFromUser.request_departure,
        travelMode: "DRIVING",
      });

      setDuration(results.routes[0].legs[0].duration.value); // set the duration in seconds
      setTime(results.routes[0].legs[0].duration.value); // set the initial time in seconds
    }
  }

  useEffect(() => {
    if (duration !== null && time > 0) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [duration, time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };


  useEffect(() => {

    if(dataDriverFromMe?.departure || dataOfferAcceptDriverFromUser?.request_departure ) { 
      setTimeout(() => {
        
        calculateRoute()
      }, 1000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dataDriverFromMe, dataOfferAcceptDriverFromUser])

  const handelSendCall = async () =>{
  await  setCallNotifiData({
      caller_id: data?.id,
      caller_name: data?.full_name,
      receiver_id: dataDriverFromMe?.driver_id || dataOfferAcceptDriverFromUser?.driver_id,
      receiver_name: dataDriverFromMe?.driver_name || dataOfferAcceptDriverFromUser?.driver_name
    })

  await  handelCall({
      caller_id: data?.id,
      caller_name: data?.full_name,
      receiver_id: dataDriverFromMe?.driver_id || dataOfferAcceptDriverFromUser?.driver_id,
      receiver_name: dataDriverFromMe?.driver_name || dataOfferAcceptDriverFromUser?.driver_name
    }, data?.id, dataDriverFromMe?.driver_id || dataOfferAcceptDriverFromUser?.driver_id)

  }


  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-white">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );
  }


  if (loading)
    return (
      <div className="w-full svh flex justify-center items-center">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );

  return (
    <>
      <div >  
        <div className="pt-14 relative svh overflow-hidden ">
          {/* Start Map  */}
          <div className="w-full relative h-[calc(100vh-100px)] shadow-md">
            {/* Over Lay When Complete Trip  */}
            <div className="w-full h-full">
              <SelectMapMobile
                destiationRef={
                  dataDriverFromMe?.departure
                    ? dataDriverFromMe?.departure
                    : dataOfferAcceptDriverFromUser?.request_departure
                }
                originRef={
                  dataDriverFromMe?.arrival
                    ? dataDriverFromMe?.arrival
                    : dataOfferAcceptDriverFromUser?.request_arrival
                }
              />
            </div>
          </div>
          {/* End Map  */}
          {/* Start Dis */}
          <div className="absolute top-16 left-2 w-[95%] py-2 bg-white shadow-[0_0_5px_#ccc] rounded-lg z-20">
            <Container>
              <div>
                {responsePusher == "default" ? (
                  <div className="text-[#000] text-[14px] text-center">
                    <p>The driver&apos;s on the way.</p>
                    <div className="flex justify-center gap-4 mt-1">
                      <span className="text-[12px] text-[#B0B0B0]">
                        Please don&apos;t be late
                      </span>
                      {time != null && (
                        <span className="font-bold text-[#02bf02]">
                          {formatTime(time)}
                        </span>
                      )}
                    </div>
                  </div>
                ) : responsePusher == "arrived" ? (
                  <div className="text-[#555] text-[14px] text-center">
                    <p>The driver&apos;s Waiting For You</p>
                    <div className="flex justify-center gap-4 mt-1">
                      <span className="text-[12px] text-[#B0B0B0]">
                        Waiting Time
                      </span>
                      <span className="font-bold text-[#02bf02]">
                        <Timer />
                      </span>
                    </div>
                  </div>
                ) : responsePusher == "ongoing" ? (
                  <div className="text-[#555] text-[14px] text-center">
                    <p>Heading to the destination</p>
                    <p className="text-[12px] text-[#888] font-medium">
                      {dataDriverFromMe?.arrival
                        ? dataDriverFromMe?.arrival
                        : dataOfferAcceptDriverFromUser.request_arrival}
                    </p>
                  </div>
                ) : responsePusher == "completed" ? (
                  <p className="text-[#555] text-[14px] text-center capitalize">
                    hi , <strong>{data?.full_name}</strong> The Driver Ended The
                    Trip , Seems You Had Been Arrived You Destination
                  </p>
                ) : null}
              </div>
            </Container>
          </div>
          {/* End Dis  */}

          {/* Start Details Driver */}
          <div className="shadow-[0_0_5px_#ccc] bg-white absolute bottom-0 left-0 w-full p-2 rounded-t-xl">
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 items-center">
                <span className="text-[#02bf02]">
                  <img
                    src="/acceptOffer/user.png"
                    alt="Hotel proche Geneve Book Hotel near Geneva Genevra Taxi"
                  />
                </span>
                <p className="capitalize font-bold">
                  {dataDriverFromMe?.driver_name
                    ? dataDriverFromMe?.driver_name
                    : dataOfferAcceptDriverFromUser?.driver_name}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[#02bf02] cursor-pointer">
                  {/* <MdSupportAgent size={30} /> */}
                  <Link
                      href={`https://api.whatsapp.com/send/?phone=%2B33644915310&text=Name: ${data?.full_name}  Email: ${data?.email} From: ${dataOfferAcceptDriverFromUser?.request_departure} To: ${dataOfferAcceptDriverFromUser?.request_arrival} request_id: ${dataOfferAcceptDriverFromUser?.request_id} &type=phone_number&app_absent=0`}
                      target="_blank"
                    >
                    <MdSupportAgent size={30} />
                  </Link>
                </span>
                <button onClick={handelSendCall} className="w-8 h-8 rounded-md flex items-center justify-center text-xl text-mobileMain bg-[#F7F5FF]">
                  <MdWifiCalling3 />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#02bf02]">
                <img
                  src="/acceptOffer/car.png"
                  alt="Hotel proche Geneve Book Hotel near Geneva Genevra Taxi"
                />
              </span>
              <span className="capitalize">
                {dataDriverFromMe?.driver_car_color
                  ? dataDriverFromMe?.driver_car_color
                  : dataOfferAcceptDriverFromUser?.car_color}{" "}
                {dataDriverFromMe?.driver_car_model
                  ? dataDriverFromMe?.driver_car_model
                  : dataOfferAcceptDriverFromUser?.driver_car}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#02bf02]">
                <img
                  src="/acceptOffer/plate.png"
                  alt="Taxi Now Professional transport Group transport"
                />
              </span>
              <span className="capitalize">
                {dataDriverFromMe?.driver_car_number
                  ? dataDriverFromMe?.driver_car_number
                  : dataOfferAcceptDriverFromUser?.car_plate_no}
              </span>
            </div>
          </div>
          {/* End Details Driver */}

          <div
            className={`bg-white z-30 border-t-[1px] shadow-2xl ${
              optionAndComment ? "bottom-0" : "-bottom-[1500px]"
            } w-full h-fit absolute duration-500 rounded-t-xl p-2 pt-4`}
          >
            <AddRating
              driverName={
                dataDriverFromMe?.driver_name
                  ? dataDriverFromMe?.driver_name
                  : dataOfferAcceptDriverFromUser?.driver_name
              }
              driverCarModel={
                dataDriverFromMe?.driver_car_model
                  ? dataDriverFromMe?.driver_car_model
                  : dataOfferAcceptDriverFromUser?.driver_car
              }
              carNumber={
                dataDriverFromMe?.driver_car_number
                  ? dataDriverFromMe?.driver_car_number
                  : dataOfferAcceptDriverFromUser?.car_plate_no
              }
              trip_id={tripId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
