import AxiosInstance from "@/helper/AxiosInstance";
import React, { useEffect, useState } from "react";
import TripCard from "../pwa/TripCard";
import Image from "next/image";
import Loading from "./Loading";

let dataFromEndpoint = [];
const Trips = ({ setShowModalTrips }) => {
  const [loading, setLoading] = useState(true);
  const [dataTrips, setDataTrips] = useState();
  const [statusTrip, setStatusTrip] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await AxiosInstance.get("trips/");
        dataFromEndpoint = response.data.data;
        setStatusTrip("pending");
      } catch (error) {
        console.error(error);
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
          const aftreFilter = pendingObjects.filter(
            (obj) => obj.status == "pending" || obj.status == "arrived" || obj.status == "ongoing" || obj.status == "accepted"
          );
          const rearrangementDate = aftreFilter.sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateB - dateA;
          });
          setDataTrips(rearrangementDate);
        } else if (statusTrip === "completed") {
          const pendingObjects = dataFromEndpoint;
          const aftreFilter = pendingObjects.filter(
            (obj) => obj.status == "completed"
          );
          const rearrangementDate = aftreFilter.sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateB - dateA;
          });
          setDataTrips(rearrangementDate);

        } else if (statusTrip === "canceled") {

            AxiosInstance.get("ride-request/cancelled/")
            .then((response) => {
              const pendingObjects = response?.data?.data;
              const rearrangementDate = pendingObjects.sort((a, b) => {
                const dateA = new Date(`${a.date} ${a.time}`);
                const dateB = new Date(`${b.date} ${b.time}`);
                return dateB - dateA;
              });
              setDataTrips(rearrangementDate);
              console.log(rearrangementDate)
            })
            .catch((err) => {
              console.log(err)
            })

        } else {

          AxiosInstance.get("ride-request/pending/")
          .then((response) => {
            const pendingObjects = response?.data?.data;
            const rearrangementDate = pendingObjects.sort((a, b) => {
              const dateA = new Date(`${a.date} ${a.time}`);
              const dateB = new Date(`${b.date} ${b.time}`);
              return dateB - dateA;
            });
            setDataTrips(rearrangementDate);
            console.log(rearrangementDate)
          })
          .catch((err) => {
            console.log(err)
          })
        }
    })();
  }, [statusTrip]);

  return (
    <div className="bg-white p-2 min-w-[481px] rounded-b-xl min-h-[68vh] max-h-[68vh] overflow-y-auto">
      {loading && (
        <div className="w-full h-screen flex justify-center items-center">
          <Loading width={"50px"} height={"50px"} />
        </div>
      )}
      <div>
        <div className="flex z-40 gap-[1px] justify-between items-center w-full  pb-2 text-white">
          <button
            onClick={() => setStatusTrip("pending")}
            className={`${
              statusTrip == "pending" ? "bg-mobileMain" : "bg-[#999]"
            } rounded-l-md py-2 flex-1 text-[12px] duration-200`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatusTrip("arrived")}
            className={`${
              statusTrip == "arrived" ? "bg-mobileMain" : "bg-[#999]"
            } py-2 flex-1 text-[12px] duration-200`}
          >
            confirmed
          </button>

          <button
            onClick={() => setStatusTrip("completed")}
            className={`${
              statusTrip == "completed" ? "bg-mobileMain" : "bg-[#999]"
            }  py-2 flex-1 text-[12px] duration-200`}
          >
            completed
          </button>
          <button
            onClick={() => setStatusTrip("canceled")}
            className={`${
              statusTrip == "canceled" ? "bg-mobileMain" : "bg-[#999]"
            } rounded-r-md py-2 flex-1 text-[12px] duration-200`}
          >
            cancelled
          </button>
        </div>
      </div>

      {dataTrips && dataTrips?.length > 0 && (
        <div className="overflow-y-auto ">
          <div className=" flex flex-col gap-y-3">
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
          </div>
        </div>
      )}

      {dataTrips && dataTrips?.length == 0 && (
        <div className="flex flex-col justify-center items-center gap-y-6">
          <Image
            alt="Ebace taxi Ebace cab Taxi palexpo TAXI01630"
            src="/notFound.gif"
            width={100}
            height={100}
            className="object-contain w-[70%]"
          />
          <h3 className="font-bold text-lg">Sorry Not Found Any Trips yet</h3>
        </div>
      )}
    </div>
  );
};

export default Trips;
