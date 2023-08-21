import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { UserData } from "../context/userContext";
import Link from "next/link";
import AxiosInstance from "@/helper/AxiosInstance";
import Loading from "@/components/globalComponents/Loading";

function PaymentSuccess() {
  const { data } = useContext(UserData);
  // console.log(data)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const payIntent = localStorage.getItem("visapay")
    AxiosInstance.post("trip/stripe-status/" , {"secret-key":payIntent})
      .then(function (response) {
        // console.log(response)
        setError(false);
      })
      .catch(function (error) {
        if (error.response.data.message == "Payment failed") {
          setError(true);
        }
      })
      .finally(() => setLoading(false));
  }, [data]);


  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading width={"50px"} height={"50px"} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        {/* Start Modal Success */}
        <div className="p-10 flex justify-center">
          <div>
            {/* Start Gif  */}
            <div className="w-[250px] h-[250px] m-auto bg-slate-400 rounded-full ">
              <div className="w-[250px] h-[250px] m-auto bg-slate-400 rounded-full overflow-hidden ">
                <Image
                  src={"/PaymentFailed.gif"}
                  alt="success Animation"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
            {/* Start Title  */}
            <div className="text-center text-[14px] sm:text-[19px] mt-20">
              <p>Your payment did not complete successfully</p>
              <p>Please try again, thank you</p>
            </div>
            {/* Start Button  */}
            <div className="mt-5 flex justify-center">
              <Link
                href="/"
                className="bg-mobileMain m-auto rounded-lg py-2 px-5 border border-transparent text-white hover:bg-transparent hover:border-mobileMain hover:text-mobileMain duration-200"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-10 flex justify-center">
        <div>
          {/* Start Gif  */}
          <div className="w-[250px] h-[250px] m-auto bg-slate-400 rounded-full overflow-hidden ">
            <Image
              src={"/successAnimation.gif"}
              alt="success Animation"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          {/* Start Title  */}
          <div className="text-center text-[14px] sm:text-[19px] text-mobileMain mt-20">
            <p>
              Congratulations, your payment had been made completed successfully
            </p>
          </div>
          {/* Start Button  */}
          <div className="mt-5 flex justify-center">
            <Link
              href="/"
              className="bg-mobileMain m-auto rounded-lg py-2 px-5 border border-transparent text-white hover:bg-transparent hover:border-mobileMain hover:text-mobileMain duration-200"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;

PaymentSuccess.getLayout = function getLayout(page) {
  return <>{page}</>;
};
