import React from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import PageHead from "@/components/globalComponents/PageHead";
import { useRouter } from "next/router";

const Index = () => {

  const router = useRouter()


  return (
    <>
      <PageHead title="Navette Entreprise – KiroTravel VTC TAXI Pays De Gex" 
        description="NAVETTE ENTREPRISE Notre objectif : offrir une efficacité professionnelle dans vos déplacements qui allie confort et liberté question DEVIS KiroTravel, est spécialisé dans les services de transport de personnes pour les Entreprises, Associations et Clubs Sportifs. Nous pouvons assurer le transport pour : Les réunions d'affaires, Les événements, Les transferts pour les membres du personnel"
      />
      <div>
            {/* Header  */}
            <div
                style={{ backgroundImage: `url(/enterpriseBg.jpeg)` }}
                className='w-full bg-center bg-cover duration-500 h-screen '
            >
                
                {/* write over lay  */}
                <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10 '></div>    
                

                {/* Title Slider  */}
                <div className='absolute w-full lg:w-[70%] top-[30%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] z-20 text-white'>
                    <div className='text-center bg-[#0000004f] py-1 lg:py-4 px-1 lg:px-10 '>
                        <h1 className='uppercase mb-4 text-3xl lg:text-5xl font-bold -tracking-2'>NAVETTE ENTREPRISE</h1>
                        <p className=' text-sm lg:text-2xl font-bold'>Notre objectif : offrir une efficacité professionnelle dans vos déplacements qui allie confort et liberté.</p>
                        <div className='flex justify-center gap-4'>
                            {/* one  */}
                            <div onClick={() => router.push('/contact-us')} className='text-white  hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
                                <span>question</span>
                                <span><BsPatchQuestionFill size={18} /></span>
                            </div>
                            {/* Two  */}
                            <div className='text-white  hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
                                <span>DEVIS</span>
                                <span><BsPatchQuestionFill size={18} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    
        <div className="bg-white">
          <div className="w-[100%] p-[1em] mt-[30px] mx-auto">
            <p>
              <span className="font-bold">KiroTravel,</span> est spécialisé dans
              les services de transport de personnes pour les Entreprises,
              Associations et Clubs Sportifs.{" "}
            </p>

            <div className="flex flex-col  md:flex-row mt-[30px] py-[20px] items-center border-t-[1px] border-solid border-[gray] border-b-[1px]">
              <div
                style={{
                  backgroundImage: "url(./transport.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="h-[200px] w-[100%] md:w-[40%]"
              ></div>
              <div className="w-[100%] md:w-[60%]">
                <p className="font-bold text-[18px] underline ">
                Nous pouvons assurer le transport pour :


                </p>
                <ul
                  //</div>style={{listStyleType: "disc",marginLeft:"2em"}}
                  className="list-disc ml-[2em] mt-[10px]"
                >
                  <li>Les réunions d&apos;affaires, </li>
                  <li>Les événements, </li>
                  <li>
                  Les transferts pour les membres du personnel de direction ou toutes exigences corporatives sur mesure.
                  </li>
                  <li>
                  Nous répondons aux besoins des petites, moyennes ou grandes entreprises.
                  </li>
                </ul>
               
              </div>
            </div>
            <div className="flex flex-col  md:flex-row mt-[30px] items-center py-[20px]">
              <div
                style={{
                  backgroundImage: "url(./bus.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="h-[200px] w-[100%] md:w-[40%]"
              ></div>
              <div className="w-[100%] md:w-[60%]">
                <p className="font-bold text-[18px] underline ">
                Une offre de transport privée aux avantages multiples :


                </p>
                <ul
                  //</div>style={{listStyleType: "disc",marginLeft:"2em"}}
                  className="list-disc ml-[2em] mt-[10px]"
                >
                  <li>Transport de salariés vers et/ou au sein des sites de production industrielle </li>
                  <li>Dessertes internes sur des sites étendus et multipolaires</li>
                  <li>
                  Acheminement sur sites de personnes externes (visiteurs de l&apos;entreprise ou de parcs d&apos;activités tertiaires)
                  </li>
                  <li>
                  Déplacement de collaborateurs pour des manifestations occasionnelles (salons, congrès, événements commerciaux…)


                  </li>
                  <li>Améliorer l&apos;accessibilité de vos sites pour faciliter vos recrutement et fidéliser vos talents

</li>
                  <li>Maîtriser vos problématiques de stationnement en incitant un report modal de la voiture personnelle à la navette d&apos;entreprise</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row mt-[30px] py-[20px] items-center border-t-[1px] border-solid border-[gray] border-b-[1px]">
              <div
                style={{
                  backgroundImage: "url(./plant-transport.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="h-[200px] w-[100%] md:w-[40%]"
              ></div>
              <div className="w-[100%] md:w-[60%]">
                <p className="font-bold text-[18px] underline ">
                Nous sommes à votre écoute pour définir :
                </p>
                <ul
                  //</div>style={{listStyleType: "disc",marginLeft:"2em"}}
                  className="list-disc ml-[2em] mt-[10px]"
                >
                  <li>Un plan de mobilité adapté à votre entreprise </li>
                  <li>Des horaires de rotation</li>
                  <li>
                  Type et nombre de véhicules mis à disposition
                  </li>
                 
                </ul>

                <p className=" text-[18px] mt-[20px]">
                Nous mettons notre professionnalisme à votre service, et nous saurons satisfaire vos attentes.
                </p>
                <p className="text-[18px] mt-[20px]">
                Dans ce cadre, pour obtenir un devis, merci de nous contacter <a onClick={() => router.push('/contact-us')} className="font-bold cursor-pointer text-blue-700">ICI</a>
                </p>
              </div>
            </div>
            {/* <div className="flex mt-[30px] items-center border-b-[1px] border-solid border-[gray] ">
              <div
                style={{
                  backgroundImage: "url(./transport.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
                className="h-[200px] w-[40%]"
              ></div>
              <div className="w-[60%]">
                <p className="font-bold text-[18px]">
                  We can provide transport for:
                </p>
                <ul
                  //</div>style={{listStyleType: "disc",marginLeft:"2em"}}
                  className="list-disc ml-[2em] mt-[10px]"
                >
                  <li>business meetings, </li>
                  <li>The events,</li>
                  <li>
                    Transfers for executive staff members or any bespoke
                    corporate requirements.
                  </li>
                  <li>
                    We meet the needs of small, medium or large businesses.
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
