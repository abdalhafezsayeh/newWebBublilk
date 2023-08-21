/* eslint-disable @next/next/no-img-element */
import { UserData } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

function SidePar() {
  const router = useRouter()
  const {data , setUserData} = useContext(UserData)
  // start Side par
  const [showSidePar, setShowSidePar] = useState(false);
  const [sowTripList ,setSowTripList] = useState(false);
  const toogelSidePar = () => {
    setShowSidePar((prev) => !prev);
  };
  const handelLogOut = ()=>{
    localStorage.removeItem("KiroTravel_User")
    localStorage.removeItem("request_id")
    location.reload()
    window.location.href = '/';
    setUserData(false)
  }

  const tripRoute = router.pathname == '/trips'
  const WaitingOffersRouter = router.pathname == '/WaitingOffers'
  const walletRoute = router.pathname == '/wallet'
  const signInRoute = router.pathname == '/signIn'
  const signUpRoute = router.pathname == '/signUp'
  const offresRoute = router.pathname == '/offers'
  const homeRoute = router.pathname == '/'

  return (
    <>
      <span
        onClick={toogelSidePar}
        className="bg-[#EEE] z-40 text-xl p-[6px] rounded-md flex sm:hidden cursor-pointer items-center justify-center fixed top-4 left-4"
      >
        <AiOutlineMenu />
      </span>

      {showSidePar && (
        <div
          onClick={toogelSidePar}
          className="fixed w-full h-screen bg-black/50 top-0 left-0 z-40"
        />
      )}

      <div
        className={`w-[80%] py-4 svh max-h-screen flex sm:hidden flex-col gap-y-4 justify-between bg-white fixed top-0 rounded-r-2xl duration-500 z-50 ${
          showSidePar ? "left-0" : "left-[-100%]"
        }`}
      >
        {/* logo */}
        {data && 
        <Link href="/profile" 
          onClick={()=> setShowSidePar(false)}
          className="w-full flex items-center px-2 justify-between gap-x-2 border-b-2 pb-3">
          <span className="flex items-center gap-x-3">
            <span className="bg-slate-500 p-2 rounded-full text-xl text-black">
              <FaUser />
            </span>
            <span className="flex flex-col gap-y-1">
              <h2 className="text-black text-base font-semibold text-left">{data?.full_name ? data?.full_name : "user"}</h2>
              {data && <p className="text-sm opacity-80">{data?.phone}</p>}
            </span>
          </span>
          {/* name */}
          <span className="text-lg">
            <IoIosArrowForward />
          </span>
        </Link>}

        {!data && <div className="w-full flex items-center px-2 gap-x-3 border-b-2 pb-3">
          <Link href="/" className="cursor-pointer w-16 h-16 flex justify-center">
            <img className="w-full h-full object-contain" src="/logo.webp" alt="Long ldistance Credit card Taxi Taxi carte bancaire Taxi lyon Taxigenevelyon" />
          </Link>
          <h2 className="font-bold text-sm">
            Welcom To Kiro Travel
          </h2>
        </div>}

        {/* content  */}
        <div className="w-full h-full flex flex-col gap-y-3">
          {data && <>
            <Link href="/" 
              onClick={()=> setShowSidePar(false)}
              className={`w-full ${homeRoute && "bg-[#99999957]"} px-2 flex items-center gap-x-3 py-3 text-lg font-semibold`}>
              <img src="./sidbar/home.png" alt="home Kiro Travel" />
              Home
            </Link>
            <div className="overflow-hidden">
              <span 
                onClick={() => setSowTripList(!sowTripList)}
                className={`w-full cursor-pointer px-2 flex items-center justify-between py-3 text-lg font-semibold`}>
                  <div className="flex items-center gap-x-3">
                    <img src="./sidbar/trips.png" alt="trips Kiro Travel" />
                    <span>Trips</span>  
                  </div>
                 {sowTripList ? <IoIosArrowDown size={16} /> : <IoIosArrowForward size={16} />}     
              </span>

              <div className={`w-full ${sowTripList ? 'opacity-100 h-[98px]' : 'h-0'} duration-300  px-2 flex-col  gap-x-3 text-lg font-semibold`}>
                <Link href='/trips' onClick={()=> setShowSidePar(false)} className={`flex items-center ${tripRoute && "bg-[#99999957]"} gap-x-3 px-2 py-2 my-1`}>
                  <span><TbBrandBooking /></span>
                  <span className="text-[12px]">My Bookings</span>  
                </Link>
                <Link href='/WaitingOffers' onClick={()=> setShowSidePar(false)} className={`flex items-center ${WaitingOffersRouter && "bg-[#99999957]"} gap-x-3 px-2 py-2`}>
                  <span><MdOutlinePendingActions /></span>
                  <span className="text-[12px]">Waiting Offers</span>  
                </Link>
              </div>

            </div>
            <Link href="/wallet" 
              onClick={()=> setShowSidePar(false)}
              className={`w-full ${walletRoute && "bg-[#99999957]"} px-2 flex items-center gap-x-3 py-3 text-lg font-semibold`}>
              <img src="./sidbar/wallet.png" alt="instagram Kiro Travel" />
              Wallet
            </Link>
          </>}

          {/* <button className="w-full px-2 flex items-center gap-x-3 py-3 text-lg font-semibold">
            <img src="./sidbar/setting.png" alt="instagram Kiro Travel" />
            Settings
          </button> */}

          {!data && <>
            <Link href="/signIn" 
              onClick={()=> setShowSidePar(false)}
              className={`${signInRoute && "bg-[#99999957]"} w-full px-2 flex items-center gap-x-3 py-3 text-lg font-semibold`}>
              <img src="./sidbar/signin.png" alt="signin Kiro Travel" />
              Sign In
            </Link>

            <Link href="/signUp" 
              onClick={()=> setShowSidePar(false)}
              className={`${signUpRoute && "bg-[#99999957]"} w-full px-2 flex items-center gap-x-3 py-3 text-lg font-semibold`}>
              <img src="./sidbar/singup.png" alt="singup Kiro Travel" />
              Sign Up
            </Link>
          </>}


          {data && 
            <button
              onClick={handelLogOut} 
              className="w-full px-2 flex items-center gap-x-3 py-3 text-lg font-semibold">
              <img src="./sidbar/logout.png" alt="logout Kiro Travel" />
              Log Out
            </button>
          }
        </div>

        {/* footer  */}
        <div className="border-t-2 pt-4 px-2 flex flex-col items-center gap-y-3">

          {/* <div className="cursor-pointer w-14 h-14 flex justify-center">
            <img className="w-full h-full" src="/logo.webp" alt="Voiture en panne Assitance vehicule Longue trajet Taxi haute savoie Taxi annemasse Vtc annemasse" />
          </div> */}

          <div className="w-full flex justify-center gap-x-4 items-center">
            <Link
              href="https://www.facebook.com/kirolimovtctaxi"
              target="_blank"
            >
              <img src="./sidbar/facebook.png" alt="facebook Kiro Travel" />
            </Link>

            <Link href="https://twitter.com/KIROLIMOVTCTAXI" target="_blank">
              <img src="./sidbar/twitter.png" alt="twitter Kiro Travel" />
            </Link>

            <Link
              href="https://www.instagram.com/kirotravelpaysdegex/"
              target="_blank"
            >
              <img src="./sidbar/instagram.png" alt="instagram Kiro Travel" />
            </Link>

            <Link
              href="https://www.google.com/maps/place/data=!4m2!3m1!1s0x478c631ba08f7e29:0x7f1e07502c1cfd0d?source=g.page.m"
              target="_blank"
            >
              <img src="./sidbar/google.png" alt="google Kiro Travel" />
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=%2B33644915310&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <img src="./sidbar/whatsapp.png" alt="whatsapp Kiro Travel" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidePar;
