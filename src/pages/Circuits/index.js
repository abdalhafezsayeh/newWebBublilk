import PageHead from "@/components/globalComponents/PageHead";
import { useRouter } from "next/router";
import React from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import MovingText from "react-moving-text";


const Index = () => {

  const router = useRouter()

  return (
    <>
      <PageHead title="CIRCUITS TOURISTIQUES" 
          description="Envie de vivre le Tourisme à votre image ? Les excursions en groupe ce n&apos;est pas votre fort?"
      />
      <div>
        <div
          style={{
            backgroundImage: "url(./circuits/circuits.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
          className="h-screen relative"
        >

          {/* overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

          <div className="absolute text-center bg-[#0000004f] py-1 lg:py-4 px-1 lg:px-10  z-30  top-[30%] left-[0%] w-full lg:top-[40%] lg:w-[60%] lg:left-[20%] flex flex-col justify-center">
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
                CIRCUITS TOURISTIQUES
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
                Envie de vivre le Tourisme à votre image ? Les excursions en
                groupe ce n&apos;est pas votre fort?
              </p>
            </MovingText>
            <div className='flex justify-center gap-4'>
                {/* one  */}
                <div onClick={() => router.push('/contact-us')} className='text-white  hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
                    <span>question</span>
                    <span><BsPatchQuestionFill size={18} /></span>
                </div>
                {/* Two  */}
                <div className='text-white hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
                    <span>DEVIS</span>
                    <span><BsPatchQuestionFill size={18} /></span>
                </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] my-[30px] mx-auto">
          <p className="mt-[30px] text-[gray]">
            Nous vous proposons des circuits touristiques, mais pas en autobus
            non… Mais en ayant à votre service un chauffeur privé qui vous fera
            découvrir les coins de France ou d&apos;Europe.{" "}
          </p>
          <p className="mt-[40px] text-[gray]">
            Des excursions, ou des parcours touristiques personnalisés. Vous
            souhaitez vivre cette expérience, contactez-nous ICI et nous vous
            créons votre parcours sur-mesure à un prix avantageux.
          </p>
          <p className="mt-[40px] text-[gray]">
            Si vous ne savez pas quoi faire ou quoi voir, vous pouvez opter pour
            un de nos circuits touristiques.
          </p>
          <p className="mt-[40px] text-[gray]">
            Si cela ne vous convient pas indiquez-nous un budget maximum, la
            durée de votre séjour, si vous venez entre amis ou en famille avec
            vos enfants et nous adapterons notre offre en conséquence.
          </p>
          <p className="mt-[40px] text-[gray]">
            <span className="font-bold text-black">
              Vous êtes maîtres de votre voyage et de votre rythme
            </span>
            , quelle que soit l&apos;option que vous avez choisie. Nous sommes à
            votre entière disposition lors de votre séjour et nous vous
            attendons autant de temps que vous le souhaitez. C&apos;est en fonction
            de vos envies !
          </p>

          <ul className="list-disc ml-[3em] mt-[40px]">
            <li>Une séance shopping ?</li>
            <li>Une photo ?</li>
            <li>Une petite faim?</li>
            <li>Un arrêt imprévu ?</li>
          </ul>
          <p className="text-[20px] lg:text-[30px] mt-[50px] font-bold">
            Découvrez des lieux incontournables et magiques qui composent la
            richesse de la France et la Suisse, à bord de véhicules confortables
            ! Et le plus important à votre rythme
          </p>

          <div className="flex justify-center items-center mt-[40px]">
            <div
              style={{
                backgroundImage: "url(./circuits/fran-suis.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-[45%] sm:w-[25%] md:w-[15%] h-[100px] md:h-[150px] m-[10px]"
            ></div>
            <div
              style={{
                backgroundImage: "url(./circuits/uefa.webp)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-[45%] sm:w-[25%] md:w-[15%] h-[100px] md:h-[150px] m-[10px]"
            ></div>
          </div>

          <div className="flex justify-center items-center mt-5">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XlnWtyT2vJU?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="overflow-hidden rounded-lg"
            ></iframe>
          </div>

        </div>
      </div>
    </>
  );
};

export default Index;
