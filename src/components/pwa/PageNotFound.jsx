import Link from "next/link";
import React from "react";

function PageNotFound() {
  return (
    <div className="h-screen w-full hidden sm:flex flex-col gap-y-4 justify-center items-center bg-black text-white">
      <span className="flex gap-x-3">
        <p className="border-r-2 pr-3 font-semibold">Error 404</p>
        <p>Page Not Found</p>
      </span>

      <Link
        href="/"
        className="py-2 px-4 flex justify-center items-center rounded-lg bg-main  border duration-300 hover:bg-transparent hover:border-main min-w-[122px] min-h-[45px]"
      >
        Back To Home
      </Link>
    </div>
  );
}

export default PageNotFound;
