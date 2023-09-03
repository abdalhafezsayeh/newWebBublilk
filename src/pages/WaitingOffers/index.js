/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import Loading from "@/components/globalComponents/Loading";
import { DriverCard } from "@/components/pwa/DriversRequests";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {/* header */}
      <div className="z-40 flex sm:hidden items-center justify-between sticky top-0 w-full p-4 bg-white">
        <div
          onClick={() => router.push("/")}
          className="bg-[#EEE] p-[6px] text-xl rounded-md flex sm:hidden cursor-pointer items-center justify-center"
        >
          <img src="offers/arrow.png" alt="reload Offers Kiro Travel" />
        </div>

        <h3 className="z-40 text-lg w-fit font-medium text-center sm:hidden ">
          Waiting Offers
        </h3>

        <div
          onClick={handleReloadClick}
          className="bg-[#EEE] p-[6px] text-xl rounded-md flex sm:hidden cursor-pointer items-center justify-center"
        >
          <img src="offers/reload.png" alt="reload Offers Kiro Travel" />
        </div>
      </div>

      <div className="pt-2 overflow-y-auto h-[calc(100vh-68px)]">
        {dataOffers?.length > 0 && (
          <Container className="flex flex-col gap-4 pb-4">
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
          <Container className="h-full max-h-screen flex flex-col justify-center items-center gap-y-6">
            <Image
              alt="Ebace taxi Ebace cab Taxi palexpo TAXI01630"
              src="/notFound.gif"
              width={100}
              height={100}
              className="object-contain w-[80%]"
            />
            <h3 className="font-bold text-lg text-center">
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
