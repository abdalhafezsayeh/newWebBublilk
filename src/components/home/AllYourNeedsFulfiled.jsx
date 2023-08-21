import React from "react";
import { FaHandshake } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { HiUserGroup, HiOutlineCurrencyPound } from "react-icons/hi";
import { GrShieldSecurity } from "react-icons/gr";
import Container from "../globalComponents/Container";
import { AiOutlineEuro } from "react-icons/ai";
const AllYourNeedsFulfiled = () => {
  return (
    <div className="mt-[80px] hidden sm:block">
      <div className="flex justify-center flex-col">
        <p className="text-[18px] p-[10px] md:text-[35px] align-middle text-center font-bold">
          Votre chauffeur vtc taxi sur-mesure
        </p>
      </div>
      <Container className="flex flex-col justify-center items-center gap-2 flex-wrap lg:items-start lg:flex-row mt-5">
        <div className="w-full lg:w-[calc(100%/3.3)] min-w-[calc(100%/3.3)] text-box-border my-[10px] p-[1%] mx-auto md:mx-[1%] flex flex-col justify-center items-center">
          <FaHandshake className="text-[60px] md:text-[80] mb-5" />
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold">ENGAGEMENT</p>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-center text-gray-500">
            Nous avons un engagement envers notre client et celui-ci passe avant
            tout le reste.
          </p>
        </div>
        <div className="w-full lg:w-[calc(100%/3.3)] min-w-[calc(100%/3.3)] text-box-border my-[10px] p-[1%] mx-auto md:mx-[1%] flex flex-col justify-center items-center">
          <BsClock className="text-[60px] md:text-[80] mb-5" />
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold">ACCESSIBLE</p>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-center text-gray-500">
            Service de réservation en ligne accessible 24h/24 7j/7 depuis votre
            ordinateur, tablette ou mobile.
          </p>
        </div>


        <div className="w-full lg:w-[calc(100%/3.2)] min-w-[calc(100%/3.2)] text-box-border p-[1%] mx-auto md:mx-[1%] flex flex-col justify-center items-center">
          <GrShieldSecurity className="text-[60px] md:text-[80] mb-5" />
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-center">SÉCURISÉ</p>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-center text-gray-500">
            Paiement en ligne sécurisé ou bien à bord. Nous travaillons avec des
            partenaires de confiance (Stripe et SumUp) - CB ACCEPTÉ
          </p>
        </div>


        <div className="w-full lg:w-[calc(100%/3.3)] min-w-[calc(100%/3.3)] text-box-border my-[10px] p-[1%] mx-auto md:mx-[1%] flex flex-col justify-center items-center">
          <AiOutlineEuro className="text-[60px] md:text-[80] mb-5" />
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-center">SANS SURPRISES</p>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-center text-gray-500">
            Tous nos prix incluent les taxes, péages et frais de carburant. Nos
            prix sont fiables et pas soumis à des modifications soudaines. PRIX
            TOUT COMPRIS
          </p>
        </div>


        <div className="w-full lg:w-[calc(100%/3.3)] min-w-[calc(100%/3.3)] text-box-border my-[10px] p-[1%] mx-auto md:mx-[1%] flex flex-col justify-center items-center">
          <HiUserGroup className="text-[60px] md:text-[80] mb-5" />
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-center">
            CHAUFFEURS PROFESSIONNELS
          </p>
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-center text-gray-500">
            Tous nos chauffeurs sont des professionnels expérimentés, possédant
            tous les permis nécessaires, et ayant des véhicules en excellent
            état.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AllYourNeedsFulfiled;
