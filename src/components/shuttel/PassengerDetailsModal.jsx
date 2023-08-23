import React from "react";
import { useForm } from "react-hook-form";

function PassengerDetailsModal({handelClose = ()=>{}}) {
  const { register , handleSubmit } = useForm({
    defaultValues:{
      room_num:"",
      flight_num:""
    }
  })

  const onSubmit = (values)=>{
    console.log(values)
  }
  return (
    <div className="animate__animated animate__fadeIn fixed top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center z-[90]">
      <div className="bg-white flex flex-col gap-5 rounded-md w-[500px] py-5">
        <div className="w-full text-center relative">
          <strong className="tracking-wider">Complete Data</strong>

          <button type="button" onClick={handelClose} className="absolute top-1/2 -translate-y-1/2 left-4 bg-text/40 rounded-md flex justify-center items-center w-6 h-6">
            <p className="m-0 p-0 text-sm text-black font-bold">X</p>
          </button>
        </div>

        <hr className="w-full h-px bg-line" />

        <p className="text-text-secoundry px-4 text-center">
          Please complete the required information, if it exists. If it is not
          available, please click next to proceed to the payment stage.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full px-4 flex flex-col gap-6">
          <input
            {...register("room_num")}
            required
            placeholder="Room number"
            className="w-full p-2 placeholder:text-text-secoundry bg-transparent border border-line rounded-md focus:ring-0 focus:outline-none"
          />

          <input
            {...register("flight_num")}
            required
            placeholder="Flight number"
            className="w-full p-2 placeholder:text-text-secoundry bg-transparent border border-line rounded-md focus:ring-0 focus:outline-none"
          />

          <button type="submit" 

            className="w-full flex justify-center items-center py-2 text-white bg-secondary border border-secondary rounded-md hover:bg-transparent hover:text-secondary">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default PassengerDetailsModal;
