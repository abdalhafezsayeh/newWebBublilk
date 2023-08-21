import Loading from "@/components/globalComponents/Loading";
import AxiosInstance from "@/helper/AxiosInstance";
import { useState } from "react";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-number-input";

function TransferToAnotherWallet({ showTransfer, handelToogelTransfer }) {
  const [price, setPrice] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [swapBetweenScreen, setSwapBetweenScreen] = useState(false);

  const [sendAddLoading, setSendAddLoading] = useState(false);
  const handelToAnthorrWallet  = (e) => {
    e.preventDefault();

    const amountAndPhone = {
      amount: price,
      receiver_phone: phoneNumber
    }

    setSendAddLoading(true);
    AxiosInstance.post("wallet/transfer/", amountAndPhone)
      .then((res) => {
        // console.log()
        if(res.status == 200) {
          console.log("convert To Otp")
          setSwapBetweenScreen(true)
        }
        // if(res.data.message == "Payment intent created successfully"){
        //   handelToogelShowBalance()
        // }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Somthing Happend Please try again Later");
      })
      .finally(() => setSendAddLoading(false));
  };



  const handelToAnthorrWalletConfirm  = (e) => {
    e.preventDefault();

    const confirmTransfer = {
      amount: price,
      receiver_phone: phoneNumber,
      otp
    }

    setSendAddLoading(true);
    AxiosInstance.put("wallet/transfer/", confirmTransfer)
      .then((res) => {
        // console.log(res)
        if(res.status == 200){
          handelToogelTransfer()
          toast.success("Transfer Successfully")
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Somthing Happend Please try again Later");
      })
      .finally(() => setSendAddLoading(false));
  };

  return (
    <>

      {showTransfer && (
        <div
          onClick={handelToogelTransfer}
          className={`animate__animated animate__fadeIn absolute top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-full z-[52]`}
        />
      )}
      <div
        className={`absolute animate__animated animate__slideInUp bottom-0 duration-500 left-0 w-full bg-white rounded-t-2xl py-4 z-[55] h-1/2`}
      >
        {!swapBetweenScreen && ( 
          <form
            onSubmit={handelToAnthorrWallet}
            className="flex flex-col items-center gap-y-4 w-full h-full justify-evenly"
          >
            <h2 className="text-[#103A10] font-semibold text-center">
              Transfer To Another Wallet
            </h2>


            <PhoneInput
              defaultCountry="FR"
              international={true}
              numberInputProps={{ required: true, style:{border:"1px solid #A6ADB7", borderRadius:"6px", padding:"10px"}  }}
              onChange={setPhoneNumber}
              value={phoneNumber}
              className="edit w-[90%] text-[14px] bg-white focus:ring-0 outline-none focus:outline-none gap-x-3"
            />

            <div className="flex justify-between items-center px-1">
              <OTPInput
                required
                value={price}
                inputType="number"
                onChange={setPrice}
                numInputs={4}
                renderInput={(props) => <input {...props} required />}
                inputStyle="m-1 h-[35px] !w-[35px] !border-2 rounded-md !border-[#00F38D] focus:outline-none focus:!border-[#00F38D] focus:!border-2 "
              />
              <span className="text-[#103A10] font-semibold border-l-2 h-[35px] flex justify-center items-center pl-4">
                EUR
              </span>
            </div>          

            <button className="bg-mobileMain rounded-lg text-sm py-2 mt-4 px-1 w-[90%] text-white min-w-[122px] min-h-[45px]">
              {sendAddLoading ? (
                <Loading width="27px" height="27px" />
              ) : (
                "Confirm"
              )}
            </button>
          </form>

        )}




      {swapBetweenScreen && ( 
          <form
            onSubmit={handelToAnthorrWalletConfirm}
            className="flex flex-col items-center gap-y-4 w-full h-full justify-evenly"
          >
            <h2 className="text-[#103A10] font-semibold text-center">
              Confirm Transfer To Another Wallet
            </h2>
            <span className="text-[#666]">Enter OTP</span>


            <div className="flex justify-between items-center px-1">
              <OTPInput
                required
                value={otp}
                inputType="number"
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} required />}
                inputStyle="m-1 h-[35px] !w-[35px] !border-2 rounded-md !border-[#00F38D] focus:outline-none focus:!border-[#00F38D] focus:!border-2 "
              />
            </div>          

            <button className="bg-mobileMain rounded-lg text-sm py-2 mt-4 px-1 w-[90%] text-white min-w-[122px] min-h-[45px]">
              {sendAddLoading ? (
                <Loading width="27px" height="27px" />
              ) : (
                "Transfer Confirmation" 
              )}
            </button>
          </form>

        )}        

      </div>
            
    </>
  )
}

export default TransferToAnotherWallet;
