/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AutoCompletee from "./AutoComplete";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-hot-toast";
import AxiosInstance from "@/helper/AxiosInstance";
import ModalCom from "../globalComponents/Modal";
import OTPInput from "react-otp-input";
import Loading from "../globalComponents/Loading";
import { UserData } from "../../context/userContext";
import Image from "next/image";
import { MultiSelect } from "react-multi-select-component";


const options = [
  { label: "pet", value: "pet" },
  { label: "ski", value: "ski" },
  { label: "Bicycle", value: "Bicycle" },
  { label: "baby seat", value: "baby seat" },
  { label: "Wheelchair", value: "Wheelchair" },
];

function BookingForm() {

  const [selected, setSelected] = useState([]);
  const [selectTypeCar, setSelectTypeCar] = useState('sedan');

  const [formIndex, setFormIndex] = useState(1);
  const [animate, setAnimate] = useState("");
  const { data: userData, setUserData, handelSetFlagUserNotLoginInDesktop } = useContext(UserData);
  // start booking form
  const {
    handleSubmit,
    register,
    getValues: getBookingValue,
    reset: resetBookingValues,
  } = useForm({
    defaultValues: {
      departure: "",
      date: "",
      time: "",
      arrival: "",
      seats: "",
      luggage: "",
    },
  });

  const sendBookingRequest = (data, token) => {
    setUserLoading(true);
    const sendData = {
      ...data,
      payment: paymentType ? paymentType : "cash",
      round_trip: goAndBack ? goAndBack : false,
      car: selectTypeCar,
      specialPet: selected.some(item => item.value === 'pet'),
      specialSki: selected.some(item => item.value === 'ski'),
      specialBike: selected.some(item => item.value === 'Bicycle'),
      specialBabySeat: selected.some(item => item.value === 'baby seat'),
      specialWheelchair: selected.some(item => item.value === 'Wheelchair'),
    };
    const headers = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : null;
    return AxiosInstance.post("ride-request/", sendData, headers);
  };

  const [successModal, setSuccessModal] = useState(false);
  const onSubmit = (values) => {
    if (userData) {
      const data = { ...values, user: userData.id };
      sendBookingRequest(data)
        .then((res) => {
          // console.log(res)
          if (
            (res.data.message = "Trip request created successfully")
          ) {
            setSuccessModal(true);
            resetBookingValues();
          }
        })
        .catch(() => {
          toast.error("Somthing Happened Try Again Later");
        })
        .finally(() => setUserLoading(false));
    } else {
      // handelNavigatBetweenForm("next");
      handelSetFlagUserNotLoginInDesktop()
    }
  };

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

  // const onUserSubmit = ({ full_name, email, phone }) => {
  //   const sendData = { full_name, email, phone, password: "none" };
  //   if (!phone) {
  //     return toast.error("The Phone Input Is Requird");
  //   }
  //   setUserLoading(true);
  //   AxiosInstance.post("register/?method=register", sendData)
  //     .then((res) => {
  //       if (res.data.message == "User registered successfully") {
  //         setShowOtpModal(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       if (err.response.status == 500) {
  //         toast.error("Something Error Please Re-Enter a Valid Number");
  //       } else if (
  //         err.response.data.phone == "user with this phone already exists."
  //       ) {
  //         toast.error("The Phone Number is already exists.");
  //       } else {
  //         toast.error("Somthing Happened Try Again Later");
  //       }
  //     })
  //     .finally(() => setUserLoading(false));
  // };
  // #endregion
  // End register User

  // Start Verfiy Numper
  // #region
  const { handleSubmit: formVerfiySubmit } = useForm();
  const [verfiyLoading, setVerfiyLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");

  const onVerfiySubmit = () => {
    const sendData = { phone: getValues("phone"), otp };
    setVerfiyLoading(true);
    AxiosInstance.post("register/?method=verify", sendData)
      .then((res) => {
        if (res.data.message == "User verified successfully") {
          resetUserValues();
          localStorage.setItem(
            "KiroTravel_User",
            JSON.stringify(res.data.access)
          );
          setUserData(res.data);
          toast.success("User Verified Successfully");
          const bookingData = {
            departure: getBookingValue("departure"),
            date: getBookingValue("date"),
            time: getBookingValue("time"),
            arrival: getBookingValue("arrival"),
            seats: +getBookingValue("seats"),
            luggage: +getBookingValue("luggage"),
            user: res.data.id,
          };
          sendBookingRequest(bookingData, res.data.access)
            .then((res) => {
              if ((res.data.message = "Trip request created successfully")) {
                setShowOtpModal(false);
                setSuccessModal(true);
                resetBookingValues();
              }
            })
            .catch((err) => {
              toast.error(
                "Error when your Booking Recived please try again later"
              );
            })
            .finally(() => setUserLoading(false));
        }
      })
      .catch((err) => toast.error("Somthing Happened Try Again Later"))
      .finally(() => setVerfiyLoading(false));
  };
  // #endregion
  // End Verfiy number

  // const handelNavigatBetweenForm = (type) => {
  //   if (type == "next") {
  //     setFormIndex(2);
  //     setAnimate("animate__slideInRight");
  //   } else {
  //     setFormIndex(1);
  //     setAnimate("animate__slideInLeft");
  //   }
  // };

  // start go and back button
  const [goAndBack, setGoAndBack] = useState();
  const handelGoAndBackSelect = (e, val) => {
    e.preventDefault();
    goAndBack == val ? setGoAndBack("") : setGoAndBack(val);
  };

  // payment type
  const [paymentType, setPaymentType] = useState();
  const handelPaymentTypeSelect = (e, val) => {
    e.preventDefault();
    paymentType == val ? setPaymentType("") : setPaymentType(val);
  };

  return (
    <> {/** overflow-hidden */}
      <div className="bg-[#ffffff24] lg:backdrop-blur-[15px]  py-4 px-2 lg:px-6 w-full shadow-lg rounded-lg">
        <div className="w-full">
          <div className="w-full flex flex-col items-center gap-y-3 mb-5 z-20">
            <h2 className="text-center font-bold text-main text-2xl lg:text-3xl">
              RÉSERVER VOTRE TRAJET
            </h2>
            <p className="underline font-semibold text-center text-white text-[13px] lg:text-[16px]">
              La réservation en avance est recommandée (Minimum 1 heure)
            </p>
            <p className="font-semibold text-center text-white">
              Paiement à Bord
            </p>
          </div>

          <section className="flex w-full  gap-x-5"> {/* overflow-hidden */}
            {/* form 1 */}
            {formIndex == 1 && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className={`min-w-full animate__animated ${animate} flex flex-col justify-center gap-y-5 items-center`}
              >

                {/* Start Type Car  */}
                <div className=''>
                  <div className='flex items-center justify-around'>
                      <span onClick={() => setSelectTypeCar('van')} className={`${selectTypeCar == 'van' ? 'bg-[#e5e7eb96] rounded-md' : 'bg-transparent'} cursor-pointer w-[110px] rounded-lg`}><img className='w-full rounded-[20px] px-3 py-1 m-auto overflow-hidden' src='mobilescreen/van.png' alt='Hotel taxi Taxi hotel' /></span>
                      <span onClick={() => setSelectTypeCar('sedan')} className={`${selectTypeCar == 'sedan' ? 'bg-[#e5e7eb96] rounded-md' : 'bg-transparent'} cursor-pointer w-[110px] rounded-full`}><img className='w-full rounded-[20px] px-3 py-1 m-auto overflow-hidden mix-blend-darken' src='mobilescreen/sedan.png' alt='Book hotel Geneve ' /></span>
                  </div>
                </div>

                {/* pick up */}
                <div className="w-full flex flex-col gap-y-2">
                  <label className="text-white text-[14px]">
                    ADRESSE DE DÉPART / DEPARTURE ADDRESS
                  </label>
                  <AutoCompletee
                    placeholder={"Enter a Location"}
                    register={{
                      ...register("departure", {
                        required: { value: true },
                      }),
                    }}
                  />
                </div>
                {/* drop of */}
                <div className="w-full flex flex-col gap-y-2">
                  <label className="text-white text-[14px]">
                    ADRESSE D&apos;ARRIVEÉ / ARRIVAL ADDRESS
                  </label>
                  <AutoCompletee
                    placeholder={"Enter a Location"}
                    register={{
                      ...register("arrival", {
                        required: { value: true },
                      }),
                    }}
                  />
                </div>

                {/* date & time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2  w-full items-end">
                  <div className="w-full flex flex-col gap-y-2">
                    <label className="text-white text-[14px]">
                      Date départ / Departure date
                    </label>
                    <input
                      type="date"
                      required
                      {...register("date")}
                      className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-y-2">
                    <label className="text-white text-[14px]">
                      Heure du départ / Departure time
                    </label>
                    <input
                      type="time"
                      required
                      {...register("time")}
                      className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                    />
                  </div>
                </div>

                {/* persons */}
                <div className="grid grid-cols-2 gap-2  w-full items-end">
                  <div className="w-full flex flex-col gap-y-2">
                    <label className="text-white text-[14px]">
                      Nombre de personnes / Number of persons
                    </label>
                    <input
                      type="number"
                      required
                      {...register("seats")}
                      className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-y-2">
                    <label className="text-white text-[14px]">
                      Nombre de Bagages / Number of luggage
                    </label>
                    <input
                      type="number"
                      required
                      {...register("luggage")}
                      className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 items-center sm:grid-cols-2 content-center gap-2 w-full sm:items-end">
                  {/* go & back */}
                  <div className="w-full flex flex-col gap-y-2">
                    <label className="text-white">
                      Aller & Retour / Round Trip
                    </label>
                    <div className="flex gap-x-2">
                      <button
                        onClick={(e) => handelGoAndBackSelect(e, true)}
                        className={`py-2 px-3 lg:border rounded-md hover:bg-black hover:text-white duration-300 ${
                          goAndBack ? "bg-black text-white" : "bg-white"
                        } `}
                      >
                        OUI
                      </button>

                      <button
                        onClick={(e) => handelGoAndBackSelect(e, false)}
                        className={`py-2 px-3 lg:border rounded-md hover:bg-black hover:text-white duration-300 ${
                          goAndBack == false
                            ? "bg-black text-white"
                            : "bg-white"
                        }`}
                      >
                        NON
                      </button>
                    </div>
                  </div>

                  {/* payment Type */}
                  <div className="w-full flex flex-wrap flex-col gap-y-2">
                    <label className="text-white">Paiement / Payment</label>
                    <div className="flex gap-x-3">
                      <button
                        onClick={(e) => handelPaymentTypeSelect(e, "cash")}
                        className={`py-2 px-2 border rounded-md hover:bg-black hover:text-white duration-300 ${
                          paymentType == "cash"
                            ? "bg-black text-white"
                            : "bg-white"
                        } `}
                      >
                        Espèces / Cash
                      </button>

                      <button
                        onClick={(e) => handelPaymentTypeSelect(e, "card")}
                        className={`py-2 px-2 border rounded-md hover:bg-black hover:text-white duration-300 ${
                          paymentType == "card"
                            ? "bg-black text-white"
                            : "bg-white"
                        } `}
                      >
                        CB
                      </button>
                    </div>
                  </div>

                </div>

                  <div className="w-full cursor-pointer">
                    <label className="text-white">Special Luggage</label>
                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Special Luggage"
                      className="mt-1"
                    />
                  </div>
                
                <div className="w-full flex justify-center">
                  <button 
                    disabled={userLoading}
                    type="submit"
                    className="py-2 px-4 rounded-lg bg-main text-white sm:w-1/3 border border-transparent duration-300 hover:bg-transparent hover:border-main "
                  >
                  {userLoading ? <div>Loading...</div> : "SUIVANT" }  
                  </button>
                </div>
              </form>
            )}

            {/* register form 2 */}
            {/* {formIndex == 2 && (
              <form
                onSubmit={formUserSubmit(onUserSubmit)}
                className={`min-w-full animate__animated ${animate} flex flex-col justify-center gap-y-5 items-center`}
              >
          
                <div className="w-full flex flex-col gap-y-2">
                  <label className="text-white">Nom</label>
                  <input
                    type="text"
                    required
                    {...registerUser("full_name")}
                    className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                  />
                </div>
                
                <div className="w-full flex flex-col gap-y-2">
                  <label className="text-white">
                    Numéro de téléphone / Phone number
                  </label>
                  <PhoneInput
                    defaultCountry="FR"
                    numberInputProps={{ required: true }}
                    onChange={(e) => setUserValue("phone", e)}
                    value={getValues("phone")}
                    className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                  />
                </div>

              
                <div className="w-full flex flex-col gap-y-2">
                  <label className="text-white">Email</label>
                  <input
                    type="email"
                    required
                    {...registerUser("email")}
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
                  />
                </div>

                <div className="flex gap-x-3 items-baseline">
                  <input
                    type="checkbox"
                    {...registerUser("privacyPolicy")}
                    required
                  />
                  <label className="text-white text-sm">
                    En soumettant ce formulaire, j&apos;accepte que les
                    informations saisies soient exploitées dans le cadre de la
                    demande d&apos;une estimation et de la relation commerciale
                    qui peut en découler. J&apos;accepte la politique de
                    confidentialité.
                    <Link href="#" className="text-blue-500">
                      Politique de confidentialité *
                    </Link>
                  </label>
                </div>

                <div className="flex justify-between flex-col sm:flex-row gap-y-4 gap-x-2 w-full items-end">
                  <div className="w-full flex flex-wrap gap-y-4 justify-center sm:justify-between gap-x-2">
                    <button
                      onClick={(e) => handelNavigatBetweenForm(e, "prev")}
                      className="py-2 px-4 rounded-lg bg-main text-white border duration-300 hover:bg-transparent hover:border-main "
                    >
                      PRÉCÉDENT
                    </button>

                    <button
                      disabled={userLoading}
                      type="submit"
                      className="py-2 px-4 flex justify-center items-center rounded-lg bg-main text-white border duration-300 hover:bg-transparent hover:border-main min-w-[122px] min-h-[45px]"
                    >
                      {userLoading ? (
                        <Loading width="27px" height="27px" />
                      ) : (
                        "SUIVANT"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )} */}
          </section>
        </div>
      </div>

      {/* Modal Get Otp */}
      <ModalCom
        visible={showOtpModal}
        closeOnBackDroupPress={true}
        showHeader={true}
        onClose={() => setShowOtpModal(false)}
      >
        <form
          onSubmit={formVerfiySubmit(onVerfiySubmit)}
          className={`bg-white rounded-b-2xl text-center py-3`}
        >
          <div className="flex flex-col items-center justify-center gap-5 w-32 sm:w-40 m-auto mb-3">
            <img src="/otp.jpg" alt={"Reserver hotel Geneve"} />
          </div>
          <h2 className="text-[18px] font-[600] text-[#1C293E]">
            Please Enter <span className="text-[#E4BCDA]">OTP</span>
          </h2>
          <div className="flex justify-center items-center gap-1 m-auto w-[240px] mt-3">
            <OTPInput
              value={otp}
              inputType="number"
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} required />}
              inputStyle="m-2 h-[40px] w-[40px!important] !border !border-slate-300 rounded-[10px] focus:outline-none"
            />
          </div>
          <p className="text-[#828282] text-[12px] mt-2">
            Resend Code <span>01:02</span>
          </p>
          <div className="w-[100%] px-4 h-[40px] sm:h-[48px] my-2 sm:my-4">
            <button
              disabled={verfiyLoading}
              type="submit"
              className="text-white bg-main hover:bg-[#8b88d7] duration-200 rounded-[10px] flex items-center justify-center w-full h-full"
            >
              {verfiyLoading ? (
                <Loading width="27px" height="27px" />
              ) : (
                "Verify"
              )}
            </button>
          </div>
        </form>
      </ModalCom>

      {/* Modal Succes Booking */}
      <ModalCom
        visible={successModal}
        closeOnBackDroupPress={false}
        showHeader={false}
      >
        <div className="p-10 flex justify-center bg-white rounded-lg shadow-md">
          <div>
            {/* Start Gif  */}
            <div className="w-[220px] h-[220px] m-auto bg-slate-400 rounded-full overflow-hidden">
              <Image
                src={"/successAnimation.gif"}
                alt="success Animation Geneva hotel"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            {/* Start Title  */}
            <div className="text-center text-[13px] text-main mt-20">
              <p>Votre demande a été transmise avec succés</p>
            </div>
            {/* Start Button  */}
            <div className="mt-5 flex justify-center">
              <button
                onClick={() => setSuccessModal(false)}
                className="py-2 px-4 flex justify-center items-center rounded-lg bg-main text-white border duration-300 hover:bg-transparent hover:border-main hover:text-main min-w-[122px] min-h-[45px]"
              >
                de Retour à la Maison
              </button>
            </div>
          </div>
        </div>
      </ModalCom>
    </>
  );
}

export default BookingForm;
