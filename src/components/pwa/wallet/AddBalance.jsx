import Loading from "@/components/globalComponents/Loading";
import AxiosInstance from "@/helper/AxiosInstance";
import React , { useState , memo } from "react";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";


const AddBalance = ({ showAddBalance , handelToogelShowBalance }) => {
  // add money in wallet
  const [price, setPrice] = useState("");
  const [sendAddLoading, setSendAddLoading] = useState(false);

  function insertZeros(array) { 
    while (array.length < 4) { array.unshift(0); } 
    if (array.length > 4) { array.length = 4; } 
    return array; 
  } 

  const handelAddBalance = (e) => {
    e.preventDefault();

    const arrayPrice = price.split("");
    const modifiedArray = insertZeros(arrayPrice)
    const numArr = modifiedArray.map(Number).join("");

    setPrice(numArr)

    if(numArr > 0) {
    
      setSendAddLoading(true);
      setTimeout(()=> {
        AxiosInstance.post("wallet/", { amount: price })
          .then((res) => {
            if(res.data.message == "Payment intent created successfully"){
              window.open(res.data.payment_url).focus()
              handelToogelShowBalance()
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("Somthing Happend Please try again Later");
          })
          .finally(() => setSendAddLoading(false));


      }, [2000])


    } else {
      toast.error("Please Enter Valid Amount");
    }

  };

  return (
    <>
      {showAddBalance && (
        <div
          onClick={handelToogelShowBalance}
          className="animate__animated animate__fadeIn absolute top-0 left-0 bg-gray-600 bg-opacity-50 w-full h-full z-[52]"
        />
      )}
      <div
        className={`absolute animate__animated animate__slideInUp bottom-0 duration-500 left-0 w-full bg-white rounded-t-2xl py-4 z-[55] h-1/2`}
      >
        <form
          onSubmit={handelAddBalance}
          className="flex flex-col items-center gap-y-4 w-full h-full justify-evenly"
        >
          <h2 className="text-[#103A10] font-semibold text-center">
            Add your balance
          </h2>
          <span className="text-[#A6ADB7] text-sm text-center border-b-2 pb-3 px-2 w-full">
            <p>Can&apos;t add funds without a payment methods. </p>
            <p>add payment methods to add to your balance.</p>
          </span>

          <div className="flex justify-between items-center px-1">
            <OTPInput
              value={price}
              inputType="number"
              onChange={setPrice}
              numInputs={4}
              renderInput={(props) => <input {...props}  />}
              inputStyle="m-1 h-[35px] !w-[35px] !border-2 rounded-md !border-[#00F38D] focus:outline-none focus:!border-[#00F38D] focus:!border-2 "
            />
            <span className="text-[#103A10] font-semibold border-l-2 h-[35px] flex justify-center items-center pl-4">
              EUR
            </span>
          </div>

          <button disabled={sendAddLoading} className="bg-mobileMain rounded-lg text-sm py-2 mt-4 px-1 w-[90%] text-white min-w-[122px] min-h-[45px]">
            {sendAddLoading ? (
              <Loading width="27px" height="27px" />
            ) : (
              "Confirm"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default memo(AddBalance)