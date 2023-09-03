/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import Loading from "@/components/globalComponents/Loading";
import ModalCom from "@/components/globalComponents/Modal";
import BackButton from "@/components/pwa/BackButton";
import TripCard from "@/components/pwa/TripCard";
import AxiosInstance from "@/helper/AxiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

let dataFromEndpoint = [];

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [dataTrips, setDataTrips] = useState();
  const [statusTrip, setStatusTrip] = useState("");
  const [showModalCancel, setShowModalCancel] = useState(false);

  const handelFilteration = useCallback((type)=>{
    const pendingObjects = dataFromEndpoint;
    const aftreFilter = pendingObjects?.filter((obj) =>
      type === "arrived"
        ? obj.status != "completed"
        : obj.status == "completed"
    );
    const rearrangementDate = aftreFilter?.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });
    setDataTrips(rearrangementDate);
  } , []) 
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await AxiosInstance.get("trips/");
        dataFromEndpoint = response.data.data;
        setStatusTrip("arrived");
        handelFilteration("arrived")
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () =>{
      dataFromEndpoint = []
    }
  }, [handelFilteration]);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );

  return (
    <>
      <BackButton />
      <h3 className="z-40 text-lg w-fit font-medium text-center sm:hidden fixed top-4 left-1/2 -translate-x-1/2 p-[6px]">
        Bookings
      </h3>
      <Container>
        <div className="flex z-40 gap-[1px] justify-between items-center w-full  py-3 text-white mt-14">
          <button
            onClick={() => {setStatusTrip("arrived") , handelFilteration("arrived")}}
            className={`${
              statusTrip == "arrived" ? "bg-mobileMain" : "bg-[#999]"
            } py-2 rounded-l-md  flex-1 text-[12px] duration-200`}
          >
            confirmed
          </button>

          <button
            onClick={() => {setStatusTrip("completed") , handelFilteration("completed")}}
            className={`${
              statusTrip == "completed" ? "bg-mobileMain" : "bg-[#999]"
            }  py-2 rounded-r-md flex-1 text-[12px] duration-200`}
          >
            History
          </button>
        </div>
      </Container>

      {dataTrips && dataTrips?.length > 0 && (
        <div className="overflow-y-auto h-[calc(100vh-114px)]">
          <Container className=" flex flex-col gap-y-3">
            {dataTrips?.map((item, i) => (
              <TripCard
                key={i}
                date={item?.date}
                payment={item?.payment}
                time={item?.time}
                to={item?.arrival}
                from={item?.departure}
                price={item?.price}
                id={item?.id}
                isPay={item?.paid}
                status={item?.status}
                item={item}
                setShowModalCancel={setShowModalCancel}
              />
            ))}
          </Container>
        </div>
      )}

      {dataTrips && dataTrips?.length == 0 && (
        <Container className="h-[calc(100vh-114px)] max-h-screen flex flex-col justify-center items-center gap-y-6">
          <Image
            alt="Ebace taxi Ebace cab Taxi palexpo TAXI01630"
            src="/notFound.gif"
            width={100}
            height={100}
            className="object-contain w-[80%]"
          />
          <h3 className="font-bold text-lg text-center">
            Sorry Not Found Any Trips yet
          </h3>
          <Link
            href="/"
            className="py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]"
          >
            Back To Home
          </Link>
        </Container>
      )}

      <ModalCom
        visible={showModalCancel}
        showHeader={false}
        onClose={() => setShowModalCancel(false)}
        closeOnBackDroupPress={true}
      >
        <div className="w-[90%] bg-white p-4 m-auto rounded-lg relative">
          <span
            onClick={() => setShowModalCancel(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <AiOutlineCloseCircle size={20} />
          </span>
          <img
            width={500}
            src="suc.gif"
            className="m-auto w-full h-full"
            alt="success animation kiro travel taxi"
          />
          <p className="text-center text-[13px] font-semibold text-[#666] capitalize">
            Cancellation Request sent successfully , please wait for admin to
            reply
          </p>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={() => router.push("/")}
              className="bg-mobileMain p-2 rounded-md text-white text-[13px]"
            >
              Go To Home
            </button>
          </div>
        </div>
      </ModalCom>
    </>
  );
};

export default Index;
