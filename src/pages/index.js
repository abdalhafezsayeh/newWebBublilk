import Header from "@/components/home/Header";
import AllYourNeedsFulfiled from "@/components/home/AllYourNeedsFulfiled";
import HowItWorks from "@/components/home/HowItWorks";
import PageHead from "@/components/globalComponents/PageHead";
import MapInMobile from "@/components/pwa/MapInMobile";
import DriversRequests from "@/components/pwa/DriversRequests";
import { useContext, useEffect, useState } from "react";
import { UserData } from "@/context/userContext";
import BoardingScreen from "@/components/pwa/BoardingScreen";
import WelcomeScreen from "@/components/pwa/WelcomeScreen";
import OurCustomerFeedback from "@/components/home/OurCustomerFeedback";

export default function Home() {
  const {reqId} = useContext(UserData)

  const [loginOrNot, setLoginOrNot] = useState('');
  const [showBoarding , setShowBoarding ] = useState("")
  useEffect(()=>{
    const isFirstVisit = localStorage.getItem("visit")
    setShowBoarding(isFirstVisit ? "" : true)
    setLoginOrNot(localStorage.getItem("KiroTravel_User"))
  },[])

  const handelHideBoarding = ()=>{
    localStorage.setItem("visit", true)
    setShowBoarding(false)
  }

  console.log("%cBe careful!", "color: red; font-size:20px");
  console.log("%cThis browser feature is intended for developers. If someone asks you to copy and paste anything here to enable a feature on KIRO_Travel or 'hack' someone else's account, it is a fraudulent attempt and will grant them access to your KIRO_Travel account.!", "color: white; font-weight: bold; font-size: 18px");
  // Comparateur taxi, VTC, et autocar en taxi ferney voltaire ,Cab ferney voltaire, Uber ferney voltaire, France. Meilleur prix
  return (
    <>
      <PageHead
        title="Taxi ferney aeroport, votre taxi sur l'aéroport de genève, pays de gex. paiement CB, 7j7 - 24h24"
        description="Comparez et réservez un Taxi, VTC ou Bus avec les meilleures offres et comparatifs de différents chauffeurs en ferney voltaire, Aeroport geneve, saint genis pouilly, (France). Commencez les enchères."
        keyWords="Comparateur Chauffeur, Comparateur Taxi, Taxi VTC, Taxi Vélo, Transfert Taxi Paris, Taxi Paris, Limo Paris, Voiture Prestige, Taxi ferney voltaire, Cab ferney voltaire, Uber ferney voltaire, Aeroport geneve, saint genis pouilly, Aeroport geneve, Geneva airport, Parking Genève, Taxi ferney, Taxi ferney voltaire Cab ferney voltaire, axi Pays de gex, Taxiproxi Montransport, Transport pays de gex Transport ferney voltaire Taxi saint genis pouilly, Saint genis pouilly cab, Kirotravel, Kiro travel
        réserver VTC en ligne, réserver taxi en ligne,  location voiture, taxi gare de bellegarde, taxi pays de gex, service de taxi pays de gex, taxi gare aeroport de geneve, taxi gare de bellegarde, taxi hôpital saint julien en genevois, service de taxi hôpital d’annemasse, kiro limo taxi pays de gex, kiro limo circuit genève, kiro limo circuit haute savoie, kiro limo location , kiro limo taxi station, kiro limo taxi jura, taxi covid, taxi attestation de déplacement, vtc covid, taxi attestation covid, taxi pas cher , cab, uber cab, reserve a taxi, taxi visiter genève, kiro limo taxi voyage genève, kiro limo taxi assistance, taxi voiture en panne, taxi anima-vet, taxi office de tourisme pays de gex, taxi fête, taxi restaurant pays de gex, taxi easyjet, taxi jet privé, taxi tag aviation, taxi globalia, taxi balexert, taxi ikea geneve, taxi casino geneva, taxi palexpo geneva, taxi onu, taxi migros suisse, taxi organisation internationale, taxi geneva, taxi lac de genève, cab geneva lake
        "
      />
      
      <div className={`relative z-50 md:hidden animate__animated ${showBoarding === true ? "animate__bounceInDown" : showBoarding === false ? "animate__bounceOutUp" : "hidden"}`}>
        <BoardingScreen hidePage={handelHideBoarding} />
      </div>

      {!loginOrNot && <WelcomeScreen /> }

      {loginOrNot && <>
        {reqId && (
          <div className="md:hidden block">
            <DriversRequests />
          </div>
          )}
        <div className="md:hidden block">
        <MapInMobile />
        </div>
      </>}
      <div className="hidden md:block">
        <Header />
        {/* <AllYourNeedsFulfiled /> */}
        <HowItWorks />
        <OurCustomerFeedback />
      </div>
    </>
  );
}
