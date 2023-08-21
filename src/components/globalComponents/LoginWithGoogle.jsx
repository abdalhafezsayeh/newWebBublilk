/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import AxiosInstance from "@/helper/AxiosInstance";
import ModalCom from "./Modal";
import Loading from "./Loading";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyB7foYPkLkACPYG3G5jviFn8nrKac5Gkhk",
  authDomain: "kiro-travel.firebaseapp.com",
  projectId: "kiro-travel",
  storageBucket: "kiro-travel.appspot.com",
  messagingSenderId: "895270619799",
  appId: "1:895270619799:web:86fe83c6aec7455c1177d2",
  measurementId: "G-EG4VZ6Q5GW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function LoginWithGoogle({
  setSwapBetween,
  setTimeLeft,
  setPhoneNumber,
  phoneNumber,
}) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [userData, setUserData] = useState({});
  const [modalGetPhoneNum, setModalGetPhoneNum] = useState(false);
  const [sendNumberLoading, setSendNumberLoading] = useState(false);

  const handelSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log("result", result);
        if (user.phoneNumber) {
          const sendData = {
            full_name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
            password: "none",
          };
          AxiosInstance.post("register/?method=register", sendData)
            .then((res) => {
              if (res.data.message == "User registered successfully") {
                setSwapBetween(2);
                setPhoneNumber(user.phoneNumber);
                setTimeLeft(30);
              }
            })
            .catch((err) => {
              if (err.response.status == 500) {
                toast.error("Something Error Please Re-Enter a Valid Number");
              } else if (err.response.data.phone) {
                if (
                  err.response.data?.phone[0] ==
                  "user with this phone already exists."
                ) {
                  toast.error("The Phone Number is already exists.");
                } else {
                  toast.error("Somthing Happened Try Again Later");
                }
              } else {
                toast.error("Somthing Happened Try Again Later");
              }
            })
        } else {
          setUserData(user);
          setModalGetPhoneNum(true);
        }

      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const SendPnoneNumberToBack = (e) => {
    e.preventDefault()
    setSendNumberLoading(true)
    const sendData = {
      full_name: userData.displayName,
      email: userData.email,
      phone: phoneNumber,
      password: "none",
    };
    AxiosInstance.post("register/?method=register", sendData)
      .then((res) => {
        if (res.data.message == "User registered successfully") {
          setModalGetPhoneNum(false)
          setSwapBetween(2);
          setTimeLeft(30);
        }
      })
      .catch((err) => {
        if (err.response.status == 500) {
          toast.error("Something Error Please Re-Enter a Valid Number");
        } else if (err.response.data.phone) {
          if (
            err.response.data?.phone[0] ==
            "user with this phone already exists."
          ) {
            toast.error("The Phone Number is already exists.");
          } else {
            toast.error("Somthing Happened Try Again Later");
          }
        } else {
          toast.error("Somthing Happened Try Again Later");
        }
      })
      .finally(() => setSendNumberLoading(false));
  };

  return (
    <>
      <div
        onClick={handelSignInWithGoogle}
        className="flex gap-2 items-center rounded-lg cursor-pointer py-1 px-1 w-full justify-center bg-[#4285f4] duration-300 hover:shadow-[0_0_6px_#4285f4]"
      >
        <div className="w-8 h-8 bg-white rounded-sm flex justify-center items-center">
          <img
            className="object-contain w-5 h-5"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google logo"
          />
        </div>
        <p className="text-white font-medium tracking-wider ">
          Sign in with google
        </p>
      </div>

      <ModalCom
        visible={modalGetPhoneNum}
        onClose={() => setModalGetPhoneNum(false)}
        closeOnBackDroupPress={false}
        showHeader={true}
      >
        <div className={`text-center p-4 pb-6 bg-white w-full rounded-b-2xl flex flex-col gap-y-5`}>
          <div className="flex flex-col items-center justify-center gap-5 w-36 sm:w-40 mx-auto mb-3">
            <img src="/loucked.gif" alt={"Parking Geneve Geneva parking"} />
          </div>
          <div>
            <p className="text-[13px] sm:text-[20px] font-[600] mb-3">
              This account does not have a phone number. Please enter the phone
              number to complete the registration
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

          <div
            onClick={SendPnoneNumberToBack}
            className="w-[100%] h-[40px] sm:h-[48px] mt-2 sm:my-4"
          >
            <button
              className={
                "py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]"
              }
            >
              {sendNumberLoading ? (
                <Loading width="27px" height="27px" />
              ) : (
                "SUIVANT"
              )}
            </button>
          </div>
        </div>
      </ModalCom>
    </>
  );
}

export default LoginWithGoogle;
