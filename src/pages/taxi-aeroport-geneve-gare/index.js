/* eslint-disable @next/next/no-img-element */
import Container from '@/components/globalComponents/Container';
import PageHead from '@/components/globalComponents/PageHead';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsPatchQuestion } from 'react-icons/bs';

const imageUrl = [
    {
        url : 'airport/one.jpg'
    },
    {
        url : 'airport/two.jpg'
    },
    {
        url : 'airport/three.jpg'
    },
    {
        url : 'airport/foure.jpg'
    },
]

const Index = () => {

    const [currentNumberImage, setCurrentNumberImage]  = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentNumberImage(currentNumberImage => (currentNumberImage + 1) % 4);
        }, 2000);
      
        return () => clearInterval(interval);
      }, []);




  return (
    <>
        <PageHead title="VTC Taxi à l'Aéroport ou à la Gare - Tarif compétitif- 24/7" 
            description={"Vtc Taxi Aéroport - Gare – Réserver un vtc taxi en ligne en 2 Min – Tarif Compétitif – Pays de Gex – Toutes distances +33644915310 – Chauffeur VTC - 24/7"}
            linkImage='https://www.abctaxis.fr/wp-content/uploads/2019/02/Professionnel-ferney-abctaxis.fr_.jpg'
        />
        <div className=''>
            <div
                style={{ backgroundImage: `url(${imageUrl[currentNumberImage].url})` }}
                className='w-full bg-center bg-cover duration-500 h-screen '
            >

            {/* write over lay  */}
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10 '></div>

            {/* Slider  */}
            <div className='absolute top-[30%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] z-20 text-white'>
                <div className='text-center bg-[#0000004f] py-1 lg:py-4 px-1 lg:px-10 '>
                    <h1 className='uppercase mb-4 text-3xl lg:text-5xl font-bold -tracking-2'>VTC TAXI AÉROPORT & GARE Genève et france</h1>
                    <p className=' text-xl lg:text-2xl font-bold'>Notre société de transport vtc taxi effectue tout trajet et toute distance, que ce soit local, vers toute la France ou L&apos;Europe! Réserver VTC en ligne – Prix correct</p>
                </div>
            </div>
            </div>
            {/* Content  */}
            <div className='py-10'>
                <Container>
                    <h2 className='text-[16px] lg:text-[28px] text-center font-bold mb-10'>Réserver un chauffeur Vtc Taxi – Aéroport – Gare – France – Genève</h2>
                    <div className='flex flex-wrap justify-center lg:justify-between'>
                        {/* one  */}
                        <div className='mb-10 lg-mt-0'>
                            <div className='flex justify-center'>
                                <span className='text-main border-[1px] border-secondary rounded-full shadow-2xl p-2 inline-block my-1'><BsPatchQuestion color='' size={35} /></span>
                            </div>
                            <p className='text-[15px] lg:text-[20px] text-[#111] font-medium my-1'>Vous arrivez ou vous souhaitez prendre un train:</p>
                            <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>à la Gare de Cornavin ou Bellegarde sur Valserine ?</p>
                            <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>Ou dans l&apos;une des gares SNCF de la région ?</p>
                            <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>A l&apos;aéroport d&apos;Annecy – NCY</p>
                        </div>
                        {/* Two  */}
                        <div>
                            <span className='flex justify-center'>
                                <span className='text-main border-[1px] border-secondary rounded-full shadow-2xl p-2 inline-block my-1'><BsPatchQuestion color='' size={35} /></span>
                            </span>
                            <p className='text-[15px] lg:text-[20px] text-[#111] font-medium my-1'>Arrivez-vous ou vous souhaitez prendre un vol ?</p>
                            <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>A l&apos;aéroport Cointrin Genève – GVA</p>
                            <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>A l&apos;aéroport de Lyon Saint-Exupéry – LYS</p>
                            <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>A l&apos;aéroport de Lyon – Bron – LYN</p>
                        </div>
                    </div>

                    {/* 24 hours  */}
                    <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center mt-10 bg-[#f2f2f2] lg:px-2 rounded-lg'>
                        <div className='px-3 lg:px-0 pb-3 lg:pb-0 lg:w-[80%]'>
                            <p className='text-[12px] lg:text-[16px]'> <strong>KiroTravel</strong>  est à votre service de taxi, pour faciliter vos transferts du Pays de Gex et les alentours vers les gares et aéroports de Rhône-Alpes et de la Suisse. Notre service est réputé fiable, nous vous emmenons, ou nous vous récupérons <strong>24h/24 et 7j/7</strong> .</p>
                        </div>
                        <div className='w-[20%]'>
                            <img className='mix-blend-darken' src="/airport/h.jpg" alt='24 hours services Taxi Hotel novotel Taxi la reserve Taxi odalys' />
                        </div>
                    </div>

                    {/* Your personal driver */}
                    <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center rounded-lg mb-4 lg:mb-0'>
                        <div className='lg:w-[50%]'>
                            <p className='font-bold text-[14px] lg:text-[20px]'>L&apos;Attente d&apos;un VTC TAXI à l&apos;AÉROPORT ou à la GARE:</p>
                            <p className='text-[13px] lg:text-[16px]'>Votre chauffeur personnel vous attendra directement à votre arrivée. Il vous accompagnera jusqu&apos;au véhicule stationné dans une zone à proximité.</p>
                        </div>
                        <div className='w-[50%]'>
                            <img className='mix-blend-darken lg:w-[60%] lg:ml-auto' src="/airport/person.jpg" alt='24 hours services Taxi resid etude Taxi sejour affaire Taxi campanile Taxi appart city Taxi residence Taxi m3' />
                        </div>
                    </div>
                    {/* Steps */}
                    <div>
                        {/* Step One */}
                        <div className='border-b border-[#EEE] pb-5'>
                            <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='lg:w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>01</span>
                                </p>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>Nous</strong>  autorisons un temps d&apos;attente gratuit de 30 minutes dans les aéroports. Tous les autres déplacements offrent 10 minutes gratuites. (temps d&apos;attente avant la prise en charge)</p>
                            </div>
                        </div>
                        {/* Step Two  */}
                        <div  className='border-b border-[#EEE] py-5'>
                            <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>De plus</strong>, pour votre retour, nous vous prenons en charge à votre hôtel, votre entreprise ou votre résidence. Et nous vous transporterons de façon fiable.</p>
                                <p className='w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>02</span>
                                </p>
                            </div>
                        </div>
                        {/* Step Three  */}
                        <div  className='border-b border-[#EEE] py-5'>
                            <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>03</span>
                                </p>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>Vous gagnerez</strong> du temps et vous serez sûr d&apos;arriver à l&apos;heure pour votre train ou votre avion. Que le départ soit de jour ou de nuit, qu&apos;il pleuve, qu&apos;il vente ou qu&apos;il neige. Vous aurez accès à une prestation soignée, un chauffeur qui vous aidera à porter vos bagages.</p>
                            </div>
                        </div>
                        {/* Step Foure  */}
                        <div className='pt-5'>
                            <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>Confiez-nous votre transfert afin d&apos;éviter que votre voyage ne soit source de stress ou de fatigue</strong>. 
                                Fini de patienter, d&apos;attendre votre tour pour trouver un taxi, ou encore de perdre du temps à rejoindre votre destination.
                                Prenez place dans une belle berline, propre et confortable :
                                Pour vous relaxer ou gérer vos affaires en toute confidentialité avec des tarifs plus que corrects.</p>
                                <p className='w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>04</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Kids Option  */}
                    <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center mt-4 bg-[#d3d8e0]  px-2 rounded-lg'>
                        <div className='lg:w-[70%]'>
                            <p className='font-bold text-[14px] lg:text-[20px]'>Tous nos véhicules sont équipés pour les enfants (Siège bébé ,Cosy, rehausseur…).</p>
                            <p className='text-[13px] lg:text-[16px] pb-2 lg:pb-0'>Merci de préciser cela dans votre commande <a  className='cursor-pointer text-main font-extrabold underline'>ICI</a> </p>
                        </div>
                        <div className='sm:w-[30%]'>
                            <img className='mix-blend-darken w-[100%]  ml-auto' src="/airport/kids.jpg" alt='24 hours services Geneva airport bus transportation Voyage professionnel Taxi facture' />
                        </div>
                    </div>

                </Container>
                {/* communication  */}
                <div 
                    className='relative my-10 bg-cover object-cover min-h-[600px]'
                    style={{ backgroundImage: "url(airport/con2.jpg)",backgroundAttachment: "fixed" }}
                    >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/50 z-10"></div>
                    <div className='relative z-20 p-5 pt-5 lg:pt-20'>
                        <p className=' pl-2 mb-5 text-[16px] lg:text-[20px] font-bold text-white bg-[#0f0e0ecc] py-2 rounded-lg'>Transport en liaison permanente avec les informations</p>
                        <div className=' mt-4 bg-main px-2 rounded-lg'>
                            <div className='py-2'>
                                <p className='py-1 text-white text-[13px] lg:text-[16px]'>des vols de Genève Aéroport GVA,  de Lyon Saint-Exupéry LYS</p>
                                <p className='py-1 text-white text-[13px] lg:text-[16px]'>des trains SNCF pour les gares d&apos;Annecy, d&apos;Annemasse, de Saint-Julien-en-Genevois et de Bellegarde-sur-Valserine.</p>
                                <p className='py-1 text-white text-[13px] lg:text-[16px]'>Des trains CFF, pour la Gare de Genève-Cornavin,</p>
                            </div>
                        </div>
                        <p className='pl-2 my-5 text-[16px] lg:text-[20px] font-bold text-white bg-[#0f0e0ecc] py-2 rounded-lg'>Nos chauffeurs sauront vous accueillir ponctuellement dès l&apos;atterrissage de votre avion Swiss Air, Air France,EasyJet, etc…ou l&apos;entrée en gare de votre train pour vous emmener où vous le désirez :</p>
                        <div className=' mt-4 bg-main px-2 rounded-lg'>
                            <div className='py-2'>
                                <p className='py-1 text-white text-[13px] lg:text-[16px]'>à votre hôtel dans le Pays de Gex, Annemasse, Annecy ou Chamonix-Mont-Blanc</p>
                                <p className='py-1 text-white text-[13px] lg:text-[16px]'>Vers toutes les Stations de ski Auvergne-Rhône-Alpes vous garantissant ainsi un départ rapide et sécurisé.</p>
                            </div>
                        </div>
                    </div>
                </div>

                    <Container>
                        <div  className='flex justify-center'>
                            <div>
                                <p className='text-[14px] lg:text-[25px] font-bold underline pb-3'>Pour toute réservation de Vtc Taxi :</p>
                                <ul className='list-disc pl-2 lg:pl-10 leading-7 lg:leading-8'>
                                    <li className='text-[12px] lg:text-[16px]'>Merci de réserver au minimum une heure en avance</li>
                                    <li className='text-[12px] lg:text-[16px]'><strong>24H</strong> en avance, vous bénéficiez d&apos;une réduction de <strong>4%</strong> </li>
                                    <li className='text-[12px] lg:text-[16px]'><strong>48H</strong> en avance et plus , vous bénéficiez d&apos;une réduction de <strong>8%</strong></li>
                                </ul>
                            </div>
                        </div>
                    </Container>

            </div>
        </div>
    </>
  )
}

export default Index