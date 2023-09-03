/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import ModalCom from "@/components/globalComponents/Modal";
import AxiosInstance from "@/helper/AxiosInstance";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

const CancelRide = () => {

  const router = useRouter()
  const [loadingRequest, setLoadingRequest] = useState(true);
  const [loadingSendOffer, setLoadingSendOffer] = useState(false);
  const [showModalWhenSucsess, setShowModalWhenSucsess] = useState(false)
  const [showModalWhenFaild, setShowModalWhenFaild] = useState(false)
  const [dataOffer, setDataOffer] = useState(null);
  const [valuePrice, setValuePrice] = useState('');
  const [refundOrNo, setRefundOrNo] = useState(true)

  const query = router.query
  
  console.log(query)
  

  useEffect(() => {
    setLoadingRequest(true);
    AxiosInstance.get(`driver/offer/temporary?id=${query?.id}`)
      .then((res) => {
        setDataOffer(res?.data?.request);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingRequest(false);
      });
  }, [query]);




  const handleAccept = (e) => {
    e.preventDefault();

  const  obj = {
      refund:valuePrice ? valuePrice : '0',
      agreement:refundOrNo,
      request_id:query?.id
    }
    
    if(!obj?.refund) return

    setLoadingSendOffer(true)
    AxiosInstance.post('ride-request/cancellation-agreement/', obj)
    .then((response) => {
      console.log(response)
      setShowModalWhenSucsess(true)
      // reset all useState 
      setValuePrice('')
    })
    .catch((err) => {
      if(err.response.data.error) {
        setShowModalWhenFaild(true)
      }
    })
    .finally(() => setLoadingSendOffer(false))
  }


  if (loadingRequest) {
    return (
      <div className="flex h-screen justify-center items-center bg-black/30">
        Loading....
      </div>
    );
  }

  return (
    <div className="flex py-4 min-h-screen justify-center items-center bg-black/30">
      {/* Name And Des */}
      <div className="w-[90%] shadow-2xl ">
        <div className="p-5 rounded-t-2xl bg-white">
          <div className="flex gap-2 items-center">
            <span className="text-[#02bf02]">
              <img
                src="/acceptOffer/user.png"
                alt="Hotel proche Geneve Book Hotel near Geneva Genevra Taxi"
              />
            </span>
            <p className="capitalize font-bold">{dataOffer?.user_full_name}</p>
          </div>
          <div className="pl-7 -mt-2">
            <span className="text-[#999] text-[11px]">
              {dataOffer?.trip_distance} | {dataOffer?.trip_duration}
            </span>
          </div>

          {/* location  */}
          <div className=" pt-4">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <span>
                  <img src="do.png" alt="" />
                </span>
                <div className="border-b border-[#EEE] pb-2">
                  <p className="text-[#999] text-[11px]">Pickup</p>
                  <p className="text-[14px]">{dataOffer?.departure}</p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <span>
                  <img src="pin.png" alt="" />
                </span>
                <div className="border-b border-[#EEE] pb-2">
                  <p className="text-[#999] text-[11px]">Drop-off</p>
                  <p className="text-[14px]">{dataOffer?.arrival}</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <span>
                  <BsFillCalendar2CheckFill className="text-mobileMain" />
                </span>
                <div>
                  <p className="text-[#999] text-[11px]">Date</p>
                  <sapn className='text-sm'>{dataOffer?.date}</sapn>
                </div>
              </div>
            </div>
          </div>

          {/* Things */}
          {!dataOffer?.special_luggage && (
            <div className="flex flex-wrap justify-between pt-5">
              <div className="flex w-[30%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">Bicycle</span>
                <span className="text-[14px]">0</span>
              </div>
              <div className="flex w-[30%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">Pet</span>
                <span className="text-[14px]">0</span>
              </div>
              <div className="flex w-[30%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">Ski</span>
                <span className="text-[14px]">0</span>
              </div>
              <div className="flex w-[45%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">Wheelchair</span>
                <span className="text-[14px]">0</span>
              </div>
              <div className="flex w-[45%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">baby seat</span>
                <span className="text-[14px]">0</span>
              </div>
              <div className="flex w-[45%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">Personnes</span>
                <span className="text-[14px]">0</span>
              </div>
              <div className="flex w-[45%]  justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
                <span className="text-[14px]">Bagages</span>
                <span className="text-[14px]">0</span>
              </div>
            </div>
          )}
          {dataOffer?.seats && (
            <div className="flex justify-between text-[#999] py-3 border-t-[1px] border-[#eeeeeea1] mt-3">
              <span className="text-[11px] capitalize">{dataOffer?.seats} seats - {dataOffer?.luggage} luggage</span>
            </div>
          )}
          {dataOffer?.special_luggage && (
            <div className="flex justify-between text-[#999] py-1 border-b-[1px] border-[#eeeeeea1]">
              <span className="text-[11px]">{dataOffer?.special_luggage}</span>
            </div>
          )}

        </div>

        {/* Forms  */}
        <div className="border-t-[10px] border-[#eee] rounded-b-2xl  bg-white">
          {/* Start Some Option  */}
          <div className="w-[90%] m-auto py-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <img src="/acceptOffer/car2.png" alt="Taxi ferney Voiture" />
                <p className="text-[#999] text-[8px]">Type Car</p>
                <p className="capitalize text-[13px] font-bold text-[#103A10]">
                  {dataOffer?.car}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/acceptOffer/method.png"
                  alt="Taxi ferney Voiture kiro travel "
                />
                <p className="text-[#999] text-[8px]">Type Method</p>
                <p className="capitalize text-[13px] font-bold text-[#103A10]">
                  {dataOffer?.payment}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/acceptOffer/timer.png"
                  alt="Taxi ferney Voiture kiro travel "
                />
                <p className="text-[#999] text-[8px]">Time Request</p>
                <p className="capitalize text-[13px] font-bold text-[#103A10]">
                  {dataOffer?.time}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/acceptOffer/trip.png"
                  alt="Taxi ferney Voiture kiro travel "
                />
                <p className="text-[#999] text-[8px]">Type Trip</p>
                <p className="capitalize text-[13px] font-bold text-[#103A10]">
                  {dataOffer?.round_trip ? "Round Trip" : "One Way"}
                </p>
              </div>
            </div>
          </div>
          {/* End Some Option  */}
          <div className="px-5 border-t-[10px] border-[#eee] pt-3">
            <h3 className="text-center pb-3">Cancellation agreement</h3>
            <div className="flex gap-4 justify-center">
              <button onClick={() => setRefundOrNo(true)} className={`px-6 py-1 rounded-md ${refundOrNo ? 'bg-mobileMain text-white' : 'text-mobileMain border-[1px] border-mobileMain bg-white'} duration-100`}>Yes</button>
              <button onClick={() => setRefundOrNo(false)} className={`px-6 py-1 rounded-md  ${refundOrNo ? 'text-mobileMain border-[1px] border-mobileMain bg-white' : 'bg-mobileMain text-white'} duration-100`}>No</button>
            </div>
          </div>

            <div className="p-5">
              {refundOrNo && (
                <input
                  required
                  value={valuePrice}
                  onChange={(e) => setValuePrice(e.target.value)}
                  type="number"
                  className="my-1 pl-3 border-[1px] border-[#999] outline-none leading-[38px] rounded-lg text-[12px] w-[100%] h-[38px]"
                  placeholder="Enter Refund"
                  />
                )}
              <button
                disabled={loadingSendOffer}
                onClick={(e) => handleAccept(e)}
                className="bg-mobileMain text-white w-[100%] h-[40px] rounded-lg mt-3"
              >
                {loadingSendOffer ? "Loading..." : "Confirm"}
              </button>
            </div>

        </div>
        

        <div className="bg-white rounded-2xl mt-2 p-4 ">
          <div className="flex flex-row gap-2 items-center">
            <img src="/acceptOffer/comment.png" alt="taxi ferney voltaire" />
            <p className="overflow-auto max-h-[60px] text-[13px]">
              {dataOffer?.comment ? dataOffer?.comment : "No Comment"}
            </p>
          </div>
        </div>

        <ModalCom visible={showModalWhenSucsess} showHeader={false}>
          <div className="w-[90%] bg-white p-4 m-auto rounded-lg">
            <img src="suc.gif" className="m-auto" alt="" />
            <p className="text-center text-[14px] font-bold">
              The trip has been canceled
            </p>
          </div>
        </ModalCom>

        <ModalCom visible={showModalWhenFaild} showHeader={false}>
          <div className="w-[90%] bg-white p-4 m-auto rounded-lg relative">
            <span
              onClick={() => setShowModalWhenFaild(false)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              <AiOutlineCloseCircle size={20} />
            </span>
            <img src="err.gif" className="m-auto" alt="" />
            <p className="text-center text-[14px] font-bold">
              Request ID Not Exist
            </p>
          </div>
        </ModalCom>
      </div>
    </div>
  );
};

export default CancelRide;

CancelRide.getLayout = function getLayout(page) {
  return <>{page}</>;
};