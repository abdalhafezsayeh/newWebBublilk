/* eslint-disable @next/next/no-img-element */
import Container from '@/components/globalComponents/Container'
import PageHead from '@/components/globalComponents/PageHead'
import { useRouter } from 'next/router'
import React from 'react'
import { BsPatchQuestionFill } from 'react-icons/bs'

const Index = () => {

    const router = useRouter()

  return (
    <>
        <PageHead title="Déplacements Professionnels – KiroTravel VTC TAXI Pays De Gex" 
            description="Déplacements Professionnels Notre objectif : offrir une efficacité professionnelle dans vos déplacements qui allie confort et liberté question KiroTravel, votre Chauffeur privé VTC, sera à votre entière disposition lors de vos déplacements professionnels : Depuis la gare, l&apos;aéroport ou tout autre point de départ Durant tous vos déplacements et les différents lieux où vous vous"
        />
        <div>
            
            {/* Header  */}
            <div 
                style={{ backgroundImage: "url(/bus/business.webp)",backgroundAttachment: "fixed" }}
                className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
            >

                {/* overLay  */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>


                <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                    <div className=''>
                        <div className='bg-[#000000de] py-6 px-2 lg:px-16 text-center'>
                            <p className='text-[18px] lg:text-[30px] font-bold mb-3'>DÉPLACEMENTS PROFESSIONNELS</p>
                            <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Notre objectif : offrir une efficacité professionnelle dans vos déplacements qui allie confort et liberté</p>
                            <div onClick={() => router.push('/contact-us')} className='text-white  hover:bg-white m-auto hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
                                <span>question</span>
                                <span><BsPatchQuestionFill size={18} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   


            {/* Title Section  */}
            <div>
                <Container>
                    <div className='pt-10'>
                        <h2 className='text-[16px] lg:text-[20px] text-center font-bold mb-0'>KiroTravel, votre Chauffeur privé VTC, sera à votre entière disposition lors de vos déplacements professionnels :</h2>
                    </div>

                    <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center rounded-lg mb-4 lg:mb-0'>
                        <div className='lg:w-[50%]'>
                            <p className='font-bold text-[14px] lg:text-[20px]'>Depuis la gare, l&apos;aéroport ou tout autre point de départ</p>
                            <p className='text-[13px] lg:text-[16px]'>Durant tous vos déplacements et les différents lieux où vous vous rendrez</p>
                        </div>
                        <div className='w-[50%]'>
                            <img className='mix-blend-darken lg:w-[60%] lg:ml-auto' src="/airport/person.jpg" alt='24 hours services Woods hotel cab taxi Taxi val thoiry Taxi thoiry Thoiry cab' />
                        </div>
                    </div> 


                    {/* Steps  */}
                    <div>
                        {/* Step One */}
                        <div className='border-b border-[#EEE] pb-5'>
                            <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='lg:w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>01</span>
                                </p>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>Un chauffeur</strong> vous emmènera à l&apos;aéroport et à la gare de votre choix, en fonction des horaires de votre train ou votre vol.</p>
                            </div>
                        </div>

                        {/* Step Two */}
                        <div className='border-b border-[#EEE] pb-5'>
                            <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>Notre chauffeur</strong> vous attendra entre les déplacements et connaît parfaitement la ville, cela vous permettra d&apos;arriver sans stress sur votre lieu de rendez-vous. Remettez-vous à lui et profitez du voyage.</p>
                                <p className='lg:w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>02</span>
                                </p>
                            </div>
                        </div>


                        {/* Step Three */}
                        <div className='border-b border-[#EEE] pb-5'>
                            <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>
                                <p className='lg:w-[30%] text-center '>
                                    <span className='text-[50px] lg:text-[80px] font-extrabold text-main opacity-50'>03</span>
                                </p>
                                <p className='lg:w-[70%] text-[#666] text-[13px] lg:text-[16px]'><strong>Vous gagnerez</strong> du temps et vous serez sûr d&apos;arriver à l&apos;heure pour votre train ou votre avion , que le départ soit de jour ou de nuit, qu&apos;il pleuve, qu&apos;il vente ou qu&apos;il neige. Vous aurez accès à une prestation soignée, un chauffeur qui vous aidera à porter vos bagages.</p>
                            </div>
                        </div>
                    
                    </div>

                    <div className='flex flex-wrap justify-center flex-col-reverse lg:flex-row lg:justify-between items-center mt-4 bg-[#e2e1ff]  px-2 rounded-lg mb-5'>
                        <div className='lg:w-[75%]'>
                            <p className='font-bold text-[13px] lg:text-[18px]'>Confiez-nous votre transfert, afin que votre voyage ne soit pas source de stress ou de fatigue.</p>
                            <p className='text-[13px] lg:text-[16px] pb-2 lg:pb-2'>Fini de patienter, d&apos;attendre votre tour pour trouver un taxi, ou encore de perdre du temps à rejoindre votre destination.</p>
                            <p className='text-[13px] lg:text-[16px] pb-2 lg:pb-2'>Réservez-le, et vous serez libre de toute contrariété. Vous pourrez continuer votre travail durant le trajet, notre discrétion est notre fer de lance.</p>
                            <p className='text-[13px] lg:text-[16px] pb-2 lg:pb-2'>Dans ce cadre, pour obtenir un devis, merci de nous contacter <a onClick={() => router.push('/contact')} className='cursor-pointer text-main font-extrabold underline'>ICI</a>.</p>
                    
                        </div>
                        <div className='sm:w-[25%]'>
                            <img className='mix-blend-darken w-[100%]  ml-auto' src="/airport/kids.jpg" alt='24 hours services Van Taxi Minibus Taxi Taxi famille Siege enfant Siege bebe Rehausseur Taxi adadgio Taxi wood' />
                        </div>
                    </div>                
                </Container>
            </div>       

                
        </div>
    </>
  )
}

export default Index