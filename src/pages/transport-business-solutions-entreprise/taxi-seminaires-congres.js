import PageHead from "@/components/globalComponents/PageHead";
import { useRouter } from "next/router";
import React from "react";
import { BsPatchQuestionFill } from "react-icons/bs";

const Index = () => {

  const router = useRouter()

  return (
    <>
      <PageHead title="SEMINAIRES & CONGRÈS – KiroTravel VTC TAXI Pays De Gex" 
        description="SEMINAIRES & CONGRÈS KiroLimo, une équipe de professionnel à votre service pour l'organisation de vos événements.qui allie confort et liberté question Le moment de la mise en route de l&apos;organisation d&apos;un événement professionnel quel qu'il soit est source de stress pour toutes les équipes. Il faut prévoir en amont la logistique, le contenu et la"
      />
      <div>
            {/* Header  */}
            <div 
                style={{ backgroundImage: "url(/bus/hand.webp)",backgroundAttachment: "fixed" }}
                className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
            >

                {/* overLay  */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>


                <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                    <div className=''>
                        <div className='bg-[#000000de] py-6 px-2 lg:px-16 text-center'>
                            <p className='text-[18px] lg:text-[30px] font-bold mb-3'>SEMINAIRES & CONGRÈS</p>
                            <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>KiroLimo, une équipe de professionnel à votre service pour l’organisation de vos événements.qui allie confort et liberté</p>
                            <div onClick={() => router.push('/contact-us')} className='text-white  hover:bg-white m-auto hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
                                <span>question</span>
                                <span><BsPatchQuestionFill size={18} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   



        <div className="bg-white">
          <div className="w-[100%] p-[1em] mt-[30px] mx-auto">
            <p>
              Le moment de la mise en route de l&apos;organisation d&apos;un événement
              professionnel quel qu&apos;il soit est source de stress pour toutes les
              équipes. Il faut prévoir en amont la logistique, le contenu et la
              promotion de celui-ci. Mais vous vous en doutez, les imprévus font
              alors leurs apparitions, et cela peut être un moment
              cauchemardesque autant pour vous, que vos partenaires ou vos
              participants.{" "}
            </p>
            <p className="mt-[50px]">
              Comment faire pour éviter tous ces désagréments ?.
              <span className="font-bold">“La Délégation”</span>
            </p>

            <div className="flex flex-col  md:flex-row mt-[30px] py-[20px] items-center border-t-[1px] border-solid border-[gray] border-b-[1px]">
              <div
                style={{
                  backgroundImage: "url(./save-time.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="h-[200px] w-[100%] md:w-[40%]"
              ></div>
              
              <div className="w-[100%] md:w-[60%]">
                <p className="font-bold text-[18px] underline ">
                  Pourquoi déléguer ?
                </p>
                <ul
                  className="list-disc ml-[2em] mt-[10px]"
                >
                  <li>
                    Gagner du temps pour se consacrer à des tâches plus
                    importantes,{" "}
                  </li>
                  <li>Avancer sur d&apos;autres projets</li>
                  <li>Être moins sous pression,…</li>
                </ul>

                <p className="mt-[30px]">
                  La délégation est l&apos;un des outils les plus importants du
                  management. Elle permet d&apos;augmenter la productivité, à
                  condition qu&apos;elle soit réussie.
                </p>
              </div>
            </div>
          
            <div className="flex flex-col  md:flex-row mt-[30px] items-center py-[20px]">
              <div
                style={{
                  backgroundImage: "url(./true.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="h-[200px] w-[100%] md:w-[40%]"
              ></div>
             
              <div className="w-[100%] md:w-[60%]">
                <p className="font-bold text-[18px] underline ">
                  Qui dit bon management dit confiance !
                </p>

                <p className="mt-[30px]">
                  Grâce à notre expérience et nos collaborations avec des
                  professionnels dans divers domaines, nous sommes devenus une
                  référence dans l&apos;organisation d&apos;événements. Des institutions
                  internationales font appel à nos services pour l&apos;organisation
                  de leurs séminaires, conseils d&apos;administration, congrès ou
                  réunions d&apos;affaires.
                </p>

                <p>
                  <span className="font-bold">KiroTravel</span> vous aide pour
                  l&apos;organisation de votre événement en vous trouvant les
                  meilleurs tarifs (hôtels, restaurants, salle séminaire…..etc.)
                </p>
                <ul
                  //</div>style={{listStyleType: "disc",marginLeft:"2em"}}
                  className="list-disc ml-[2em] mt-[10px]"
                >
                  <li>
                    Nos équipes ont l&apos;habitude de gérer des événements,
                    comprenant un important volume de transport.
                  </li>
                  <li>
                    Un manager désigné vous apportera un soutien précieux et
                    personnalisé, garantissant le bon déroulement logistique sur
                    place.
                  </li>
                </ul>

                <p className="mt-[30px] font-bold">
                  Merci de nous contacter{" "}
                  <a onClick={() => router.push("/contact-us")} className="font-bold text-main cursor-pointer">ICI</a> pour un
                  rendez-vous, nous pourrons à ce titre répondre au mieux à vos
                  attentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
