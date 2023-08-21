import PageHead from "@/components/globalComponents/PageHead";
import { useRouter } from "next/router";
import React from "react";
import { BsPatchQuestionFill, BsQuestionCircleFill } from "react-icons/bs";
import MovingText from "react-moving-text";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <PageHead
        title="CHAUFFEUR POUR VOTRE ENFANT"
        description="Un abonnement adapté à vos besoins et ceux de vos enfants @ 6 ans et plus"
      />
      <div>
        <div
          style={{
            backgroundImage: "url(./chauffeurs/enfants.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
          className="h-screen relative"
        >
          {/* overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

          <div className="absolute text-center bg-[#0000004f] py-1 lg:py-4 px-1 lg:px-10  z-30 top-[40%] left-[0%] lg:top-[40%] w-full lg:w-[60%] lg:left-[20%] flex flex-col justify-center">
            <MovingText
              type="fadeInFromTop"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
              className="animate-div"
            >
              <p className="text-[30px] lg:text-[35px] font-bold text-white text-center">
                CHAUFFEUR POUR VOTRE ENFANT
              </p>
            </MovingText>
            <MovingText
              type="fadeInFromBottom"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease-in-out"
              iteration="1"
              fillMode="none"
              className="animate-div"
            >
              <p className="text-white mt-[20px] text-[18px] font-[500] text-center">
                {" "}
                Un abonnement adapté à vos besoins et ceux de vos enfants @ 6
                ans et plus
              </p>
            </MovingText>
            <div className="flex justify-center gap-4">
              {/* one  */}
              <div
                onClick={() => router.push("/contact-us")}
                className="text-white  hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2"
              >
                <span>question</span>
                <span>
                  <BsPatchQuestionFill size={18} />
                </span>
              </div>
              {/* Two  */}
              <div className="text-white  hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2">
                <span>DEVIS</span>
                <span>
                  <BsPatchQuestionFill size={18} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="w-[90%] my-[20px] mx-auto text-[25px] md:text-[40px] font-bold text-center">
            COMMENT FONCTIONNE LE TRANSPORT DE VOTRE ENFANT (à partir de 6 ans)
            ?
          </p>

          <div
            className="w-[80%] h-[50vh] md:h-[150vh] my-[20px] mx-auto px-5"
            style={{
              backgroundImage: "url(/chauffeurs/numbers.webp)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
        <hr className="w-[80%] my-[50px] mx-auto border border-gray-400" />
        <div
          className="w-[80%] h-[80vh] md:h-[150vh] mt-[100px] mx-auto"
          style={{
            backgroundImage: "url(/chauffeurs/Presentation.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </>
  );
};

export default Index;
