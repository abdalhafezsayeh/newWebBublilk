import Image from "next/image";
import Link from "next/link";

function PaymentFaild() {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* Start Modal Success */}
      <div className="p-10 flex justify-center">
        <div>
          {/* Start Gif  */}
          <div className="w-[250px] h-[250px] m-auto bg-slate-400 rounded-full ">
          <div className="w-[250px] h-[250px] m-auto bg-slate-400 rounded-full overflow-hidden ">
            <Image
              src={"/PaymentFailed.gif"}
              alt="success Animation TAXI01550 TAXI Collonges TAXI Farges"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          </div>
          {/* Start Title  */}
          <div className="text-center text-[14px] sm:text-[19px] text-main mt-20">
            <p>Your payment did not complete successfully</p>
            <p>Please try again, thank you</p>
          </div>
          {/* Start Button  */}
          <div className="mt-5 flex justify-center">
            <Link
              href="/"
              className="bg-main m-auto rounded-lg py-2 px-5 border border-transparent text-white hover:bg-transparent hover:border-main hover:text-main duration-200"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentFaild;

PaymentFaild.getLayout = function getLayout(page){
  return(
    <>
      {page}
    </>
  )
}