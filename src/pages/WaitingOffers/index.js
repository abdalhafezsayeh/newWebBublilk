/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import Loading from "@/components/globalComponents/Loading";
import { DriverCard } from "@/components/pwa/DriversRequests";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";


const Index = () => {
  const router = useRouter();

  const [loadingState, SetLoadingState] = useState(true);
  const [dataOffers, setDataOffers] = useState([]);
  const [shouldReloadData, setShouldReloadData] = useState(false);
  const { data } = useContext(UserData);

  useEffect(() => {
    const payIntent = localStorage.getItem("visapay")
    // console.log(data)
    AxiosInstance.post("trip/stripe-status/" , {"session_id":payIntent})
      .then(function (response) {
        // console.log(response)
        if(response?.data.message == "Trip created successfully and payment verified") {
          router.push(`/acceptOffer?reqId=${response?.data.trip.id}`)
        }
      })
      .catch(function (error) {
        console.log(error)
        if (error?.response.data.message == "Payment failed") {
          // console.log(error)
        }
      });
  }, []);

  useEffect(() => {
    SetLoadingState(true);
    const signal = new AbortController();
    AxiosInstance.get("/offers", { signal: signal.signal })
      .then((res) => {
        // console.log(res);
        setDataOffers((prevDataOffers) => {
          const sortedDataOffers = [...res.data.data];
          sortedDataOffers.sort((a, b) => a.price - b.price);
          return sortedDataOffers;
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => SetLoadingState(false));

    return () => {
      signal.abort();
    };
  }, [shouldReloadData]);

  function handleReloadClick() {
    setShouldReloadData(!shouldReloadData);
  }

  if (loadingState)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );


  return (
    <>
      <div
        onClick={() => router.push("/")}
        className="bg-[#EEE] z-40 text-xl p-[6px] rounded-md flex sm:hidden cursor-pointer items-center justify-center fixed top-4 left-4"
      >
        <img src="offers/arrow.png" alt="reload Offers Kiro Travel" />
      </div>

      <div
        onClick={handleReloadClick}
        className="bg-[#EEE] z-40 text-xl p-[6px] rounded-md flex sm:hidden cursor-pointer items-center justify-center fixed top-4 right-4"
      >
        <img src="offers/reload.png" alt="reload Offers Kiro Travel" />
      </div>

      <div className="mt-16 overflow-y-auto h-[550px]">
        {dataOffers?.length > 0 && (
          <Container>
            {dataOffers.map((item, index) => (
              <DriverCard
                key={index}
                item={item}
                setOfferStatus={setDataOffers}
                offerStatus={dataOffers}
                shwoFromTo={true}
              />
            ))}
          </Container>
        )}

        {!loadingState && dataOffers?.length == 0 && (
          <Container className="h-screen max-h-screen flex flex-col justify-center items-center gap-y-6">
            <Image
              alt="Ebace taxi Ebace cab Taxi palexpo TAXI01630"
              src="/notFound.gif"
              width={100}
              height={100}
              className="object-contain w-[80%]"
            />
            <h3 className="font-bold text-lg">
              Sorry Not Found Any Offers yet
            </h3>
            <Link
              href="/"
              className="py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]"
            >
              Back To Home
            </Link>
          </Container>
        )}
      </div>
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page) {
  return <>{page}</>;
};
