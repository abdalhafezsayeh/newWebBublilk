/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import Loading from "@/components/globalComponents/Loading";
import BackButton from "@/components/pwa/BackButton";
import PageNotFound from "@/components/pwa/PageNotFound";
import { UserData } from "@/context/userContext";
import AxiosInstance from "@/helper/AxiosInstance";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-number-input";
import LoginWithGoogle from "./LoginWithGoogle";
import axios from "axios";

let timerId
function SignUp({classInDesktop, hiddenElement}) {

  const [swapBetween, setSwapBetween] = useState(1);
  // Start Register User
  // #region
  const [userLoading, setUserLoading] = useState(false);
  const {
    handleSubmit: formUserSubmit,
    register: registerUser,
    getValues,
    setValue: setUserValue,
    reset: resetUserValues,
  } = useForm({
    defaultValues: {
      full_name: "",
      phone: "",
      email: "",
      privacyPolicy: "",
    },
  });

  const onUserSubmit = ({ full_name, email, phone }) => {
    const sendData = { full_name, email, phone, password: "none" };
    // console.log(sendData);
    if (!phone) {
      return toast.error("The Phone Input Is Requird");
    }
    setUserLoading(true);
    axios.post("https://kiro-public.herokuapp.com/register/?method=register", sendData)
      .then((res) => {
        if (res.data.message == "User registered successfully") {
          setSwapBetween(2);
          setTimeLeft(30)
          
        }
      })
      .catch((err) => {
        if (err.response.status == 500) {
          toast.error("Something Error Please Re-Enter a Valid Number");
        } else if (err.response.data.phone) {
          if(err.response.data?.phone[0] == "user with this phone already exists."){
            toast.error("The Phone Number is already exists.");
          }
          else{
            toast.error("Somthing Happened Try Again Later");
          }
        } else {
          toast.error("Somthing Happened Try Again Later");
        }
      })
      .finally(() => setUserLoading(false));
  };
  // #endregion
  // End register User

  // Start Verfiy Numper
  // #region
  const router = useRouter();
  const { handleSubmit: formVerfiySubmit } = useForm();
  const [phoneNumber, setPhoneNumber] = useState(false);
  const [verfiyLoading, setVerfiyLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const onVerfiySubmit = () => {
    const sendData = { phone: getValues("phone") || phoneNumber , otp };
    setVerfiyLoading(true);
    axios.post("https://kiro-public.herokuapp.com/register/?method=verify", sendData)
      .then((res) => {

        if (res.data.message == "User verified successfully") {
          resetUserValues();
          // setSwapBetween(1);
          setOtp("")
          localStorage.setItem(
            "KiroTravel_User",
            JSON.stringify(res.data.access)
          );

          toast.success("User Verified Successfully");
          window.location.replace("/");
        }
      })
      .catch((err) => toast.error("Somthing Happened Try Again Later"))
      .finally(() => setVerfiyLoading(false));
  };
  // #endregion
  // End Verfiy number

  
  const [ showResendOtp , setShowResendOtp ] = useState(false)

  const [timeLeft, setTimeLeft] = useState();

  const tick = useCallback(() => {
    if(timeLeft == 0){
      clearInterval(timerId)
      setShowResendOtp(true)
    }
    else{
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }
  },[timeLeft])

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  const onResendCode = () => {
    setUserLoading(true)
    AxiosInstance.post("resend-code/", {phone: getValues("phone")})
      .then((res) => {
        if(res.data.message == "OTP sent successfully"){
          toast.success("OTP sent successfully")
          setShowResendOtp(false)
          setTimeLeft(30)
        }
      })
      .catch((err) => toast.error("Somthing Happened Try Again Later"))
      .finally(()=> setUserLoading(false))
  };

  useEffect(() => {
    if(timeLeft == 0 ){
      clearInterval(timerId)
      setShowResendOtp(true)
    }
    if(swapBetween == 2 ){
      timerId = setInterval(() => tick(), 1000);
    }
    else clearInterval(timerId)
    return () => clearInterval(timerId);
  },[swapBetween, tick, timeLeft]);


  useEffect(() => {


    window.localStorage.removeItem("KiroTravel_User")
    

  },[])

  return (
    <>
      {/* <BackButton /> */}
      <Container className={`${classInDesktop ? classInDesktop : 'svh flex sm:hidden justify-center items-center pt-5'} `}>
        <form
          onSubmit={formUserSubmit(onUserSubmit)}
          className={` ${swapBetween == 1 ? "flex" : 'hidden'} min-w-full animate__animated flex-col justify-center gap-y-5 items-center`}
        >
          <div className="">
            <p className="text-mobileMain md:text-main text-lg sm:text-[20px] font-[600] mb-3">
              For Your better experience
            </p>
            <p className="text-[#1E1E1E] text-lg font-bold mb-3">
              Welcome To{" "}
              <span className="text-mobileMain md:text-main text-xl font-bold">
                KIRO TRAVEL
              </span>
            </p>
          </div>
          {/* Name */}
          <div className="w-full flex flex-col gap-y-1 relative border border-[#A6ADB7] rounded-md bg-white py-2 px-2">
            <label className="absolute top-[calc(0px-14px)] left-4 bg-white px-1">Nom</label>
            <input
              type="text"
              placeholder="Entrez le nom complet"
              required
              {...registerUser("full_name")}
              className="w-full text-[14px] focus:ring-0 outline-none p-1 focus:outline-none"
              autoFocus
            />
          </div>
          {/* Phone */}
          <div className="w-full flex flex-col gap-y-1">
            <PhoneInput
              defaultCountry="FR"
              international='true'
              numberInputProps={{ required: true ,style:{border:"1px solid #A6ADB7", borderRadius:"6px", padding:"10px"} }}
              onChange={(e) => setUserValue("phone", e)}
              smartCaret
              value={getValues("phone")}
              className="edit w-full text-[14px] bg-white focus:ring-0 outline-none focus:outline-none gap-x-3"
            />
          </div>

          {/* Email */}
          <div className="w-full flex flex-col gap-y-1 relative border border-[#A6ADB7] rounded-md bg-white py-2 px-2">
            <label className="absolute top-[calc(0px-14px)] left-4 bg-white px-1">Email</label>
            <input
              type="email"
              placeholder="Entrez l'e-mail"
              required
              {...registerUser("email")}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="w-full text-[14px] focus:ring-0 outline-none p-1 focus:outline-none"
            />
          </div>
          {/* privacy policy */}
          <div className="flex gap-x-3 w-full items-baseline">
            <input
              type="checkbox"
              {...registerUser("privacyPolicy")}
              required
            />
            <label className=" text-sm">
              J&apos;accepte les conditions{" "}
              <Link href="/conditions-dutilisations" className="text-[#999] text-[12px] underline">
                d&apos;utilisation et la politique
              </Link>
            </label>
          </div>

          <div className="flex justify-between flex-col gap-y-4 gap-x-2 w-full items-end">
            <div className="w-full flex flex-wrap gap-y-4 justify-center sm:justify-between gap-x-2">
              <button
                disabled={userLoading}
                type="submit"
                className="py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain md:bg-secondary text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]"
              >
                {userLoading ? (
                  <Loading width="27px" height="27px" />
                ) : (
                  "SUIVANT"
                )}
              </button>
            </div>
            
            <LoginWithGoogle phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setSwapBetween={setSwapBetween} setTimeLeft={setTimeLeft} />
          </div>

          {/* Route To Sign In */}
          {!hiddenElement && (
            // <span onClick={() => router.push("/signIn")} className='text-[#888] cursor-pointer'>Login</span>
        
            <Link href="/signIn" className="bg-transparent border border-mobileMain text-mobileMain duration-200 rounded-lg w-full h-[40px] flex justify-center items-center">
            Login
          </Link>
        )}
        </form>

        {/* Otp */}
      <form
        onSubmit={formVerfiySubmit(onVerfiySubmit)}
        className={`${swapBetween === 2 ? "block" : "hidden"} h-full w-full py-5 flex flex-col justify-evenly text-center `}
      >
        <div className="flex flex-col items-center justify-center gap-5 w-32 sm:w-40 mx-auto mb-3">
          <img src="/otp2.gif" alt={"img signup Ski station Cab Transfert station ski Taxi bit Taxi salon de l'automobile Motor show taxi"} />
          <h2 className="text-[18px] font-[600] text-[#1C293E]">
            Please Enter <span className="text-mobileMain">OTP</span>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-1 mx-auto w-[240px] mt-3">
          <OTPInput
            value={otp}
            inputType="number"
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} required />}
            inputStyle="m-2 h-[40px] !w-[40px] !border-b-2 !border-b-slate-300 focus:outline-none focus:!border-transparent focus:!border-b-2 focus:!border-b-slate-300"
          />
        </div>
        <p className="text-[#828282] text-[12px] mt-2">
          Resend Code <span>{formatTime(timeLeft)}</span>
        </p>

        {showResendOtp && <div className="w-[100%] animate__animated animate__fadeInDown px-4 h-[40px] sm:h-[48px] my-2 sm:my-4 flex flex-col gap-y-3">
          <button type="button" onClick={() => onResendCode() } className={`bg-transparent border border-mobileMain text-mobileMain duration-200 rounded-[10px] w-full h-[40px]`}>
            {userLoading ? <Loading width="27px" height="27px" /> :"Resend Code"}
          </button>
        </div>}

        <div className="w-[100%] px-4 h-[40px] sm:h-[48px] my-2 sm:my-4 flex flex-col gap-y-3">
          <button type="submit" className="py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]">
            {verfiyLoading ? <Loading width="27px" height="27px" /> :"Verify"}
          </button>
        </div>
      </form>
      </Container>

      {/* <PageNotFound /> */}
    </>
  );
}

export default SignUp;


SignUp.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}