import Container from "@/components/globalComponents/Container";
import Loading from "@/components/globalComponents/Loading";
import BackButton from "@/components/pwa/BackButton";
import TripCard from "@/components/pwa/TripCard";
import AxiosInstance from "@/helper/AxiosInstance";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

let dataFromEndpoint = [];

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [dataTrips, setDataTrips] = useState();
  const [statusTrip, setStatusTrip] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await AxiosInstance.get("trips/");
        dataFromEndpoint = response.data.data;
        console.log(dataFromEndpoint)
        setStatusTrip("arrived");
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    (async () => {
     if (statusTrip === "arrived") {
        const pendingObjects = dataFromEndpoint;
        const aftreFilter = pendingObjects?.filter(
          (obj) => obj.status == "pending" || obj.status == "arrived" || obj.status == "ongoing" || obj.status == "accepted"
        );
        const rearrangementDate = aftreFilter?.sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);
          return dateB - dateA;
        });
        setDataTrips(rearrangementDate);
      } else if (statusTrip === "completed") {
        const pendingObjects = dataFromEndpoint;
        const aftreFilter = pendingObjects?.filter(
          (obj) => obj.status == "completed"
        );
        const rearrangementDate = aftreFilter?.sort((a, b) => {
          const dateA = new Date(`${a.date} ${a.time}`);
          const dateB = new Date(`${b.date} ${b.time}`);
          return dateB - dateA;
        });
        setDataTrips(rearrangementDate);

      } 
    })();
  }, [statusTrip]);


  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );

  return (
    <>
      <BackButton />
      <Container>
        <div className="flex z-40 gap-[1px] justify-between items-center w-full  py-3 text-white mt-14">
          <button
            onClick={() => setStatusTrip("arrived")}
            className={`${
              statusTrip == "arrived" ? "bg-mobileMain" : "bg-[#999]"
            } py-2 rounded-l-md  flex-1 text-[12px] duration-200`}
          >
            confirmed
          </button>

          <button
            onClick={() => setStatusTrip("completed")}
            className={`${
              statusTrip == "completed" ? "bg-mobileMain" : "bg-[#999]"
            }  py-2 rounded-r-md flex-1 text-[12px] duration-200`}
          >
            History
          </button>
        </div>
      </Container>

      {dataTrips && dataTrips?.length > 0 && (
        <div className="overflow-y-auto h-[550px]">
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
              />
            ))}
          </Container>
        </div>
      )}

      {dataTrips && dataTrips?.length == 0 && (
        <Container className="h-screen max-h-screen flex flex-col justify-center items-center gap-y-6">
          <Image
            alt="Ebace taxi Ebace cab Taxi palexpo TAXI01630"
            src="/notFound.gif"
            width={100}
            height={100}
            className="object-contain w-[80%]"
          />
          <h3 className="font-bold text-lg">Sorry Not Found Any Trips yet</h3>
          <Link
            href="/"
            className="py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]"
          >
            Back To Home
          </Link>
        </Container>
      )}
    </>
  );
};

export default Index;
