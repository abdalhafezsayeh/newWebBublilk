/* eslint-disable @next/next/no-img-element */
import AxiosInstance from "@/helper/AxiosInstance";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-hot-toast";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-number-input";
import Loading from "./Loading";
import { UserData } from "../../context/userContext";
import { useRouter } from "next/router";
import Link from "next/link";
import ModalCom from "./Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";

let timerId;

const Login = ({
  handelNext,
  inputClassName,
  inputOtpClassName,
  ButtonClassName,
  contentClassName,
  parentClassName,
  parentOtpClassName,
  hiddenElement,
}) => {
  const router = useRouter();

  const { data, setUserData } = useContext(UserData);

  const [otp, setOtp] = useState("");
  const [swapBetween, setSwapBetween] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendNumberLoading, setSendNumberLoading] = useState(false);
  const [verfiyLoading, setVerfiyLoading] = useState(false);
  const [showModalWhenUserNotAccount, setShowModalWhenUserNotAccount] =
    useState(false);

  const SendPnoneNumberToBack = () => {
    setSendNumberLoading(true);
    axios.post("https://kiro-public.herokuapp.com/login/?method=login", { phone: phoneNumber })
      .then((res) => {
        // console.log(res)
        if (res.data.message == "OTP sent successfully") {
          toast.success("OTP sent successfully");
          setSwapBetween(2);
          setShowResendOtp(false);
          setTimeLeft(30);
        } else {
          setShowModalWhenUserNotAccount(true);
        }
      })
      .catch((err) => {
        // console.log(err)
        setShowModalWhenUserNotAccount(true);
        // toast.error("Somthing Happened Try Again Later")
      })
      .finally(() => setSendNumberLoading(false));
  };

  const SendOtp = () => {
    setVerfiyLoading(true);
    axios.post("https://kiro-public.herokuapp.com/login/?method=verify-login", {
      phone: phoneNumber,
      otp: otp,
    })
      .then((res) => {
        if (res.data.message == "User logged in successfully") {
          localStorage.setItem(
            "KiroTravel_User",
            JSON.stringify(res.data.token)
          );
          setUserData(res.data.user);
          toast.success("User Verified Successfully");
          handelNext();
        }
      })
      .catch((err) => {
        toast.error("Somthing Happened Try Again Later");
      })
      .finally(() => setVerfiyLoading(false));
  };

  const [showResendOtp, setShowResendOtp] = useState(false);

  const [timeLeft, setTimeLeft] = useState(30);

  const tick = useCallback(() => {
    if (timeLeft == 0) {
      clearInterval(timerId);
      setShowResendOtp(true);
    } else {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }
  }, [timeLeft]);

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  useEffect(() => {
    if (timeLeft == 0) {
      clearInterval(timerId);
      setShowResendOtp(true);
    }
    if (swapBetween == 2) {
      timerId = setInterval(() => tick(), 1000);
    } else clearInterval(timerId);
    return () => clearInterval(timerId);
  }, [swapBetween, tick, timeLeft]);

  return (
    <div className={`bg-white rounded-b-xl ${parentClassName}`}>
      {/* Phone Number */}
      <div
        className={`${
          swapBetween === 1 ? `${contentClassName} block` : "hidden"
        } text-center px-4 pt-3 pb-3 `}
      >
        <div className="hidden md:flex flex-col items-center justify-center gap-5 w-36 sm:w-40 mx-auto mb-3">
          <img src="/louckedd.gif" alt={"Parking Geneve Geneva parking"} />
        </div>
        <div className="md:hidden flex flex-col items-center justify-center gap-5 w-36 sm:w-40 mx-auto mb-3">
          <img src="/loucked.gif" alt={"Parking Geneve Geneva parking"} />
        </div>
        <div className="mb-14">
          <p className="text-mobileMain md:text-main text-[13px] sm:text-[20px] font-[600] mb-3">
            For Your better experience
          </p>
          <p className="text-[#1E1E1E] text-[13px] sm:text-[20px] font-[700] mb-3">
            Welcome To{" "}
            <span className="text-mobileMain md:text-main text-[20px] font-[700]">
              KIRO TRAVEL
            </span>
          </p>
        </div>

        <PhoneInput
          defaultCountry="FR"
          international={true}
          numberInputProps={{
            required: true,
            style: {
              border: "1px solid #A6ADB7",
              borderRadius: "6px",
              padding: "10px",
            },
          }}
          onChange={setPhoneNumber}
          value={phoneNumber}
          className="edit w-full text-[14px] bg-white focus:ring-0 outline-none focus:outline-none gap-x-3"
        />
        <div className="px-4 mt-2">
          <p className="text-[10px] sm:text-[12px] text-[#1C293E]">
            We&apos;ll call or text you to confirm your number. Standard message
            and data rates apply.
          </p>
          <Link href="/politique-de-confidentialite" className="text-[10px] sm:text-[12px] text-[#E4BCDA]">
            Privacy Policy
          </Link>
        </div>
        <div
          onClick={() => SendPnoneNumberToBack()}
          className="w-[100%] h-[40px] sm:h-[48px] mt-2 sm:my-4"
        >
          <button
            className={`${
              ButtonClassName
                ? ButtonClassName
                : "text-white bg-secondary hover:bg-[#8b88d7] duration-200 rounded-[10px] w-full h-full"
            }`}
          >
            {sendNumberLoading ? (
              <Loading width="27px" height="27px" />
            ) : (
              "Log in"
            )}
          </button>
        </div>
        {/* Route To SignUp */}

        {!hiddenElement && (
          <Link
            href="/signUp"
            className="bg-transparent border border-mobileMain text-mobileMain duration-200 rounded-lg w-full h-[40px] flex justify-center items-center"
          >
            Creat Account
          </Link>
        )}
      </div>

      {/* Otp */}
      <div
        className={`${
          swapBetween === 2
            ? `${parentOtpClassName ? parentOtpClassName : "block"}`
            : "hidden"
        } text-center pb-3`}
      >
        <div className="flex flex-col items-center justify-center gap-5 w-32 sm:w-40 mx-auto mb-3">
          <img
            src="/otp2.gif"
            alt={"Secteur france Aeroport p20 Aeroport p40 Taxi "}
          />
          <h2 className="text-[18px] font-[600] text-[#1C293E]">
            Please Enter <span className="text-main">OTP</span>
          </h2>
        </div>
        <div className="flex justify-center items-center gap-1 mx-auto w-[240px] mt-3">
          <OtpInput
            value={otp}
            inputType="number"
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={`${
              inputOtpClassName
                ? inputOtpClassName
                : "m-2 h-[40px] inputOtpLogin w-[40px!important] border-[1px] border-borderInput rounded-[10px] focus:outline-none"
            }`}
          />
        </div>
        <p className="text-[#828282] text-[12px] mt-2">
          Resend Code <span>{formatTime(timeLeft)}</span>
        </p>

        {showResendOtp && (
          <div className="w-[100%] animate__animated animate__fadeInDown px-4 h-[40px] sm:h-[48px] my-2 sm:my-4 flex flex-col gap-y-3">
            <button
              onClick={() => SendPnoneNumberToBack()}
              className={`bg-transparent border border-mobileMain text-mobileMain duration-200 rounded-[10px] w-full h-[40px]`}
            >
              {sendNumberLoading ? (
                <Loading width="27px" height="27px" />
              ) : (
                "Resend Code"
              )}
            </button>
          </div>
        )}

        <div className="w-[100%] px-4 h-[40px] sm:h-[48px] my-2 sm:my-4 flex flex-col gap-y-3">
          <button
            onClick={() => SendOtp()}
            className={`${
              ButtonClassName
                ? ButtonClassName
                : "text-white bg-secondary duration-200 rounded-[10px] w-full h-full"
            }`}
          >
            {verfiyLoading ? <Loading width="27px" height="27px" /> : "Verify"}
          </button>
        </div>
      </div>

      <ModalCom visible={showModalWhenUserNotAccount} showHeader={false}>
        <div className="w-[90%] md:w-[300px] bg-white p-4 m-auto rounded-lg relative">
          <span
            onClick={() => setShowModalWhenUserNotAccount(false)}
            className="absolute top-3 right-3 cursor-pointer"
          >
            <AiOutlineCloseCircle size={25} />
          </span>
          <img
            src="/noAccount.gif"
            className="m-auto"
            alt="taxi ferny voltair"
          />
          <p className="text-center text-[14px] font-bold">
            There is no account for this number, please create an account
          </p>
          {!hiddenElement && (
            <Link
              href="/signUp"
              className="bg-transparent border mt-4 border-mobileMain text-mobileMain duration-200 rounded-lg w-full h-[40px] flex justify-center items-center"
            >
              Creat Account
            </Link>
          )}
        </div>
      </ModalCom>
    </div>
  );
};

export default Login;
