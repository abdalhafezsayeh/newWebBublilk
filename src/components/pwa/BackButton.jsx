import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

function BackButton({onClick}) {
  const router = useRouter()

  const handelBack = ()=>{
    onClick ?
      onClick()
    : router.push("/")
  }
  return (
    <button
      onClick={handelBack}
      className="bg-[#EEE] z-40 text-xl p-[6px] rounded-md flex sm:hidden cursor-pointer items-center justify-center fixed top-4 right-4"
    >
      <AiOutlineHome />
    </button>
  );
}

export default React.memo(BackButton);
