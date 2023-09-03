/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import Pusher from "pusher-js";
import { useContext, useEffect } from "react";
import { BiArrowBack, BiTimeFive } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import Loading from "../globalComponents/Loading";
import { Puff } from "react-loader-spinner";
import { useRouter } from "next/router";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import ModalCom from "../globalComponents/Modal";
import Link from "next/link";

function DriversRequests() {
  const {
    reqId,
    setFlagWhenUserSendBookingFindDriver,
    setDataTheOfferFromDriverWhenUserClickAccept,
  } = useContext(UserData);
  const [offerStatus, setOfferStatus] = useState([]);
  const [loadingCancel, setLoadingCancel] = useState(false);

  // console.log(reqId)

  useEffect(() => {
    // console.log('subscribed DriversRequests')
    // initialize Pusher with your app key and cluster
    const pusher = new Pusher("3f793d158f437cb59363", {
      cluster: "eu",
    });

    // subscribe to the private channel for the authenticated user
    const channel = pusher.subscribe(`offers_${reqId}`);

    // bind to the event triggered by the server
    channel.bind("new-offer", (data) => {
      // setDataTheOfferFromDriverWhenUserClickAccept(data)
      if (data) {
        setOfferStatus((prevState) => {
          // filter the previous state array by removing the object with the same offer_id as the new data object
          const filteredState = prevState.filter(
            (item) => item.offer_id !== data.offer_id
          );

          // compare the new data object with the filtered previous state
          if (
            JSON.stringify(data) ===
            JSON.stringify(filteredState[filteredState.length - 1])
          ) {
            return prevState; // no need to update state
          } else {
            // update the state with the new data object
            const newState = [...filteredState, data];
            // sort the new state array based on the price property
            newState.sort((a, b) => a.price - b.price);
            return newState;
          }
        });

        setTimeout(() => {
          setFlagWhenUserSendBookingFindDriver(reqId);
        }, 500);
      }
    });

    // cleanup function
    // return () => {
    //   channel.unbind_all();
    //   channel.unsubscribe();
    //   console.log('unSubscribed DriversRequests')
    //   pusher.unsubscribe(`offers_${reqId}`);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reqId]);

  const handleCancelRide = (e) => {
    e.preventDefault();
    setLoadingCancel(true);
    AxiosInstance.delete("ride-request/cancel/", {
      data: { request_id: reqId },
    })
      .then((res) => {
        if (res.status == 200) {
          setOfferStatus([]);
          setFlagWhenUserSendBookingFindDriver(null);
        }
      })
      .catch((err) => {
        // console.log(err)
      })
      .finally(() => setLoadingCancel(false));
  };

  const handleCloseWating = () => {
    setFlagWhenUserSendBookingFindDriver(null);
  };

  // console.log(offerStatus)

  return (
    <>
      {reqId && (
        <div className="w-full svh z-50 fixed top-0 left-0 bg-black/80 backdrop-blur-sm flex flex-col gap-y-3 py-3 px-4">
          <div className="overflow-y-auto mt-10">
            {offerStatus.length > 0 &&
              offerStatus.map((item, index) => (
                <div key={index} className="my-2">
                  <DriverCard
                    item={item}
                    setOfferStatus={setOfferStatus}
                    offerStatus={offerStatus}
                  />
                </div>
              ))}

            {offerStatus.length == 0 && (
              <>
                <div className="flex justify-center items-center h-[80vh] z-30">
                  <div className="flex flex-col justify-center items-center gap-y-3">
                    <Puff
                      height="80"
                      width="80"
                      radius={1}
                      color="#02bf02"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                    <h2 className="text-white text-center">
                      En attente des offres de conducteurs
                    </h2>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-[30px]"></div>
          <div className="fixed bottom-0 left-0 w-full h-[60px] mt-9 bg-[#FFF]  p-1 shadow-[0px_0px_20px_rgba(0,0,0,0.2)] flex justify-between items-center gap-3">
            <button
              onClick={(e) => handleCancelRide(e)}
              className="w-[90%] py-2 tracking-wider bg-[#DC453D] text-white rounded-lg font-medium capitalize"
            >
              {loadingCancel ? (
                <Loading width="27px" height="27px" />
              ) : (
                "cancel ride"
              )}
            </button>

            <button 
              onClick={() => handleCloseWating()} 
              className="w-full py-2 tracking-wider text-center text-mobileMain rounded-lg font-medium bg-transparent border border-[#DEE2E7]">
              Home
            </button>

          </div>

          <div
            onClick={() => handleCloseWating()}
            className={`fixed top-4 left-5 cursor-pointer bg-white rounded-md p-1.5 shadow-[0px_0px_20px_rgba(0,0,0,0.2)] flex justify-center items-center`}
          >
            <BiArrowBack />
          </div>
        </div>
      )}

      {!reqId && <div></div>}
    </>
  );
}

export default React.memo(DriversRequests);

export const DriverCard = ({ item, setOfferStatus, offerStatus, shwoFromTo = false }) => {

  const [distance, setDistance] = useState(null)
  const [duration, setDuration] = useState(null)
  const [formattedDataTheToday, setFormattedDataTheToday] = useState(null)
  const [showDoneSchedule, setShowDoneSchedule] = useState(false)
  const [showInsufficientDriverFunds, setShowInsufficientDriverFunds] = useState(false)

  const {
    walletPrice,
    setFlagWhenUserSendBookingFindDriver,
    dataTripeFromFindRide,
  } = useContext(UserData);
  const router = useRouter();
  const [loadingButtonAccept, setLoadingButtonAccept] = useState(false);
  const [loadingButtonReject, setLoadingButtonReject] = useState(false);
  const [theTripSchedule, setTheTripSchedule] = useState(false);

  // Handel Show Time Way Between User And Driver
  async function calculateRoute() {
    if (!item?.driver_lang || !item?.driver_lat) {
      return null;
    } else {
      const dirctionServices = new google.maps.DirectionsService();
      const results = await dirctionServices.route({
        origin: {
          lat: parseFloat(item?.driver_lat),
          lng: parseFloat(item?.driver_lang)
        },
        destination:item?.request_departure ? item.request_departure : item?.departure,
        travelMode: "DRIVING",
      });

        setDistance(results.routes[0].legs[0].distance.text);
        setDuration(results.routes[0].legs[0].duration.text)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      calculateRoute()
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    setFormattedDataTheToday(formattedDate)

    if (dataTripeFromFindRide.date < formattedDate) return;
    if (dataTripeFromFindRide.date == formattedDate) return;

    if (dataTripeFromFindRide.date > formattedDate) {
      setTheTripSchedule(true);
    }
  }, [dataTripeFromFindRide]);

  // console.log(dataTripeFromFindRide?.payment)

  const handleAccept = (e, id, objectTheDriver) => {
    e.preventDefault();

      console.log("accept")
          handlePayMethodsWhenUserClickAccept(id, objectTheDriver) 
            // if (theTripSchedule) {
  
            //   const dataTrip = {
            //     summary: `${dataTripeFromFindRide?.departure} To ${dataTripeFromFindRide?.arrival}}`,
            //     location: `${dataTripeFromFindRide?.departure}`,
            //     description: `${dataTripeFromFindRide?.departure} To ${dataTripeFromFindRide?.arrival}} distance ${dataTripeFromFindRide?.trip_distance} ${dataTripeFromFindRide?.trip_duration} `,
            //     start: {
            //       dateTime:
            //         dataTripeFromFindRide?.date +
            //         "T" +
            //         dataTripeFromFindRide?.time,
            //       timeZone: "IST",
            //     },
            //     end: {
            //       dateTime:
            //         dataTripeFromFindRide?.date +
            //         "T" +
            //         dataTripeFromFindRide?.time,
            //       timeZone: "IST",
            //     },
            //     recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
            //     sendNotifications: true,
            //     attendees: [
            //       {
            //         email: `${item?.driver_email}`,
            //       },
            //     ],
            //   };
  
            //   AxiosInstance.post('https://v1.nocodeapi.com/selim/calendar/bdIkLsmfjZeytEAn/event', dataTrip )
            //   .then((response) => {
            //       console.log(response)
            //       if(response.status == 200) {
            //         setFlagWhenUserSendBookingFindDriver(null)
            //         setOfferStatus([])
            //         router.push('/scheduleAfterAccept');
            //       }
            //   })
            //   .catch((err) => {
            //       console.log(err)
            //   })
            //   .finally(() => {setLoadingButtonAccept(false)})
  
            //   setFlagWhenUserSendBookingFindDriver(null);
            //   setOfferStatus([]);
            //   router.push("/scheduleAfterAccept");
            // } else {
            //   setDataTheOfferFromDriverWhenUserClickAccept(objectTheDriver);
            //   setFlagWhenUserSendBookingFindDriver(null);
            //   setOfferStatus([]);
            // }

    
  };

  const handelPayWithCash = (id, objectTheDriver)=>{
    console.log(objectTheDriver)
    return AxiosInstance.post("wallet/pay-trip/cash/", { offer_id: id })
        .then((res) => {
          console.log(res.data.trip.date)
          console.log(formattedDataTheToday)
          if(res?.data?.trip?.date > formattedDataTheToday) {
            console.log('apoointment')
            setShowDoneSchedule(true)
          } else {
            console.log("not apoointment")
            localStorage.setItem('dataTheOfferFromDriverWhenUserClickAccept', JSON.stringify(objectTheDriver))
            router.push(`/acceptOffer`);
            setFlagWhenUserSendBookingFindDriver(null);
          }
        })
        .catch((err) => {
          console.log(err);
        })
  }

  const handelPayWithCard = (id, objectTheDriver)=>{
    setLoadingButtonAccept(true)
    return AxiosInstance.post("wallet/pay-trip/card/", { offer_id: id })
      .then(({ data }) => {
        console.log(data)
        if (data.message == "Payment intent created successfully") {
          localStorage.setItem("visapay", data.client_secret);
          window.open(data?.payment_url);
          router.push("/");
          setOfferStatus([]);
          setFlagWhenUserSendBookingFindDriver(null)
          // setDataTheOfferFromDriverWhenUserClickAccept(objectTheDriver);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {setLoadingButtonAccept(false)})
  }

  const [showNoMonyeInWallet, setShowNoMonyeInWallet] = useState(false); 
  const handelWalletPay = (id, objectTheDriver)=>{
    if (item?.price * 0.1 + item?.price > walletPrice) {
      setLoadingButtonAccept(false)
      setShowNoMonyeInWallet(true);
    } else {
      return AxiosInstance.post("wallet/pay-trip/", { offer_id: id })
        .then((res) => {
          console.log(res)
          if(res?.data?.trip?.date > formattedDataTheToday) {
            console.log('apoointment')
            setShowDoneSchedule(true)
           } else {
             localStorage.setItem('dataTheOfferFromDriverWhenUserClickAccept', JSON.stringify(objectTheDriver))
             router.push(`/acceptOffer`);
             setFlagWhenUserSendBookingFindDriver(null);
           }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message == "Insufficient User funds") {
            toast.error("Insufficient funds");
            router.push("/wallet");
            setFlagWhenUserSendBookingFindDriver(null);
          } 

          if(err.response.data.message == "Insufficient Driver funds") {
            toast.error("Insufficient Driver funds");
            setShowInsufficientDriverFunds(true)
          }
        })
    }
  }

  const handlePayMethodsWhenUserClickAccept = (id, objectTheDriver) => {


    if(objectTheDriver?.payment_method) {

        if(objectTheDriver?.payment_method == "cash") {
          return handelPayWithCash(id, objectTheDriver)
        } else if (objectTheDriver?.payment_method == "card") {
          return handelPayWithCard(id, objectTheDriver)
        } else if (objectTheDriver?.payment_method == "wallet") {
          return handelWalletPay(id, objectTheDriver)
        }

    } else {

        if (dataTripeFromFindRide?.payment == "cash") {
          return handelPayWithCash(id, objectTheDriver)
        } else if (dataTripeFromFindRide?.payment == "card") {
          return handelPayWithCard(id, objectTheDriver)
        } else if (dataTripeFromFindRide?.payment == "wallet") {
          return handelWalletPay(id, objectTheDriver)
        }

    }

  };

  const handleReject = (e, id) => {
    e.preventDefault();
    const obj = {
      offer_id: id,
      action: "reject",
    };
    setLoadingButtonReject(true);
    AxiosInstance.put("driver/offer/action/", obj)
      .then((response) => {
        // console.log(response)
        if (response.data.message == "Offer rejected successfully") {
          if (offerStatus.length > 1) {
            setOfferStatus((prev) => {
              let offerStatus = [...prev].filter(
                (item) => item?.offer_id !== id
              );
              return offerStatus;
            });
          } else {
            setFlagWhenUserSendBookingFindDriver(null);
            setOfferStatus([]);
          }
        } else {
          // console.log('broblems rejecting the offer')
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoadingButtonReject(false));
  };


  const handleCloseMoadalAndNavigateToTrips = (e) => {
    e.preventDefault();
    router.push('/trips');
    setShowDoneSchedule(false);
  }

  return (
    <>
      <div className="bg-white rounded-md shadow-[rgba(0,0,0,0.1)_0px_0px_12px] py-3 px-4 flex flex-col gap-y-4 animate__animated animate__backInDown">
        {/* from & to */}
        {shwoFromTo && (
          <div className=" flex items-center justify-between gap-x-1 flex-wrap">
            <span className="max-w-full flex items-center gap-x-px text-mobileMain">
              From:
              <p className="text-[#666666] truncate">{item?.departure}</p>
            </span>
            <span className="max-w-full flex items-center gap-x-px text-mobileMain">
              To:
              <p className="text-[#666666] truncate">{item?.arrival}</p>
            </span>
          </div>
        )}

        {/* name & rate */}
        <div className="flex flex-row justify-between items-center">
          <h3 className="font-semibold text-lg text-[#103A10] truncate capitalize">
            {item?.driver_name}
          </h3>
          <span className="flex items-center gap-x-1">
            {item?.driver_rate?.toFixed(1)}
            <BsStarFill color="#DFB300" />
          </span>
        </div>

        <div className="flex justify-between flex-wrap">
          {/* car Details */}
          <div className="flex flex-col gap-y-1">
            <h4 className="font-semibold text-lg text-[#103A10] truncate capitalize">
              {item?.driver_car ? item?.driver_car : item?.driver_car_model}
            </h4>
            <p className="text-[#a1a1a1]">
              {item?.car_plate_no
                ? item?.car_plate_no
                : item?.driver_car_number}
            </p>
            <p className="text-[#a1a1a1] capitalize">
              {item?.car_color ? item?.car_color : item?.driver_car_color}
            </p>
          </div>

          {/* price & KM & time */}
          <div className="flex flex-col gap-y-3 text-[#103A10] ">
            <h3 className="font-bold text-lg flex justify-end">
              {item?.price}€
            </h3>
            <span className="flex items-center justify-end gap-x-2 text-[#103A10]">
              <p className="text-[#a1a1a1]">{distance}</p>

              <span className="w-5 h-5 p-1 text-[8px] font-semibold rounded-full border-2 text-mobileMain border-mobileMain flex items-center justify-center">
                KM
              </span>
            </span>

            <div className="flex gap-1">
              <span className="flex gap-1 items-end text-sm text-[#103A10]">
                <p className="text-[#a1a1a1]">{duration}</p>

                {/* <p className="text-[#a1a1a1]">
                  42 <strong>sec</strong>
                </p> */}
              </span>
              <span className="text-2xl text-mobileMain">
                <BiTimeFive strokeWidth={0.5} />
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-2">
          <button
            disabled={loadingButtonReject}
            onClick={(e) => handleReject(e, item?.offer_id)}
            className="py-2 w-full rounded-md bg-transparent text-[#DC453D] border border-[#DC453D] duration-300 hover:bg-[#DC453D] hover:text-white min-h-[45px] flex justify-center items-center"
          >
            {loadingButtonReject ? (
              <Loading width="27px" height="27px" />
            ) : (
              "Decline"
            )}
          </button>

          <button
            disabled={loadingButtonAccept}
            onClick={(e) => handleAccept(e, item?.offer_id, item)}
            className="py-2 w-full rounded-md bg-mobileMain text-white border border-mobileMain duration-300 hover:bg-transparent hover:text-mobileMain min-h-[45px] flex justify-center items-center"
          >
            {loadingButtonAccept ? (
              <Loading width="27px" height="27px" />
            ) : (
              "Accept"
            )}
          </button>
        </div>
      </div>

      {/* modal Insufficient User funds */}
      <ModalCom
        visible={showNoMonyeInWallet}
        showHeader={true}
        closeOnBackDroupPress={true}
        onClose={() => setShowNoMonyeInWallet(false)}
      >
        <div className="bg-white p-4 rounded-b-lg flex flex-col justify-center gap-y-4 items-center">
          <div className="m-auto">
            <img
              src="sadFace.gif"
              className="m-auto"
              alt="sad face kiro travel taxi"
            />
          </div>
          <h2 className="font-semibold text-center">Insufficient Funds</h2>
          <p className="text-center text-[13px]">
            please Choose Another Payment Method Or Add Funds In your Wallet And
            try Again
          </p>

          <Link
            href="/wallet"
            className="py-2 w-full text-center rounded-md bg-mobileMain text-white border border-mobileMain duration-300 hover:bg-transparent hover:text-mobileMain"
          >
            Go To Wallet
          </Link>
        </div>
      </ModalCom>


      <ModalCom visible={showDoneSchedule} showHeader={false} >
        <div className="bg-white p-3 rounded-md flex flex-col">
          <img className="w-2/4 m-auto" src="/isScheduled.gif" alt="" />
          <p className="text-center text-[#333] py-6 border-b-2 text-[14px]">This request has been accepted. You can proceed to the trips page, and you can continue the journey on the appropriate day.</p>
          <button onClick={(e) => handleCloseMoadalAndNavigateToTrips(e)} className="mt-5 bg-mobileMain text-white text-[12px] px-3 py-2 rounded-md">Go Page Trips</button>
        </div>
      </ModalCom>

      <ModalCom visible={showInsufficientDriverFunds} showHeader={false} >
        <div className="bg-white p-3 rounded-md flex flex-col">
          <img className="w-100  m-auto" src="/animation_lluyoifj_small.gif" alt="" />
          <p className="text-center text-[#333] py-6 border-b-2 text-[16px]">Insufficient Driver funds.</p>
          <button onClick={() => setShowInsufficientDriverFunds(false)} className="mt-5 bg-mobileMain text-white text-[12px] px-3 py-2 rounded-md">Ok</button>
        </div>
      </ModalCom>

    </>
  );
};
