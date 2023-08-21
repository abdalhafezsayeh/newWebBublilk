import Container from "@/components/globalComponents/Container";
import Login from "@/components/globalComponents/Login";
import BackButton from "@/components/pwa/BackButton";
import PageNotFound from "@/components/pwa/PageNotFound";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function SignIn() {
  const router = useRouter()

  useEffect(() => {


    window.localStorage.removeItem("KiroTravel_User")
    

  },[])


  return (
    <>
      {/* <BackButton /> */}
      <Container className="svh flex justify-center items-center sm:hidden">
        <Login
          handelNext={()=> location.replace("/")}
          ButtonClassName="py-2 px-4 flex justify-center items-center rounded-lg w-full bg-mobileMain text-white hover:text-mobileMain  border duration-300 hover:bg-transparent hover:border-mobileMain min-w-[122px] min-h-[45px]"
          inputClassName="w-full text-[14px] text-black bg-white !border-b-2 !border-b-slate-300 focus:ring-0 outline-none p-3 focus:outline-none focus:!border-transparent focus:!border-b-2 focus:!border-b-slate-300"
          contentClassName="!flex flex-col h-full text-center px-4 pt-3 pb-3  justify-evenly"
          parentClassName="h-full w-full"
          parentOtpClassName="h-full w-full py-5 flex flex-col justify-evenly"
          inputOtpClassName="m-2 h-[40px] !w-[40px] !border-2 !border-slate-300 rounded-lg focus:outline-none focus:!border-2 focus:!border-slate-400"
        />
      </Container>

      <PageNotFound />
    </>
  );
}

export default SignIn;
