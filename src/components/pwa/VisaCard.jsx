/* eslint-disable @next/next/no-img-element */

import AxiosInstance from "@/helper/AxiosInstance";
import { useEffect, useState } from "react";
import Loading from "../globalComponents/Loading";
import { useRouter } from "next/router";


function VisaCard({tripId}) {
  const [loading , setLoading] = useState(true)
  const router = useRouter()
  useEffect(()=>{
    setLoading(true)
    AxiosInstance.post("wallet/pay-trip/card/",{trip_id:tripId})
      .then(({data})=>{
        // console.log(data)
        if(data.message == "Payment intent created successfully"){
          localStorage.setItem("visapay",data.client_secret)
          window.open(data.payment_url)
          router.push("/")
        }
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[tripId])
  
  return (
    <div className="animate__animated animate__fadeIn absolute top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 z-[56] flex justify-center items-center">
      {loading && 
        <div className="w-full h-screen flex justify-center items-center">
          <Loading width={"50px"} height={"50px"} />
        </div>
      }
    </div>
  );
}

export default VisaCard;
