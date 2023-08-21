import PageHead from '@/components/globalComponents/PageHead'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowRight, BsPatchQuestionFill } from 'react-icons/bs'

const Index = () => {

    const router = useRouter()

  return (

    <>
        <PageHead title="Voyage, déplacement professionnel - Services de Taxi - Plus de flexibilité" 
            description="Vous gagnerez du temps et vous serez sûr d&apos;arriver à l&apos;heure pour votre destination. Déplacement professionnel- Vtc Taxi, Hôtel Aéroport Gare"
        />
        <div>
            {/* Header  */}
            <div 
                style={{ backgroundImage: "url(bus/head.jpg)",backgroundAttachment: "fixed" }}
                className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
            >

                {/* overLay  */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>


                <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                    {/* <Container> */}
                        <div className=''>
                            <div className='bg-[#000000de] py-6 px-2 lg:px-16'>
                                <p className='text-[18px] lg:text-[25px] font-semibold mb-3'>BUSINESS & SOLUTIONS ENTREPRISE</p>
                                <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Vous gagnerez du temps et vous serez sûr d&apos;arriver à l&apos;heure pour votre destination.</p>
                                <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Vous aurez accès à une prestation soignée.</p>
                                <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Confiez-nous votre transfert, afin que vos déplacements ne soient pas source de stress ou de fatigue.</p>
                                <div onClick={() => router.push('/contact-us')} className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-40 flex gap-2'>
                                    <span>question</span>
                                    <span><BsPatchQuestionFill size={18} /></span>
                                </div>
                            </div>
                        </div>
                    {/* </Container> */}
                </div>
            </div>
            {/* Content  */}
            <div>
                {/* One  */}
                <div
                    style={{ backgroundImage: "url(bus/business.webp)",backgroundAttachment: "fixed" }}
                    className="relative bg-cover object-cover min-h-[300px] bg-black sm:pt-[40px] flex items-center justify-center"
                >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

                    <div className='relative z-20 bg-[#0000009c] py-4 px-2 lg:px-10' >
                        <p className='text-white font-bold text-[18px] lg:text-[30px]'>Déplacements Professionnels</p>
                        <p className='text-[#EEE] text-[13px] lg:text-[16px]'>Notre objectif : offrir une efficacité professionnelle dans vos déplacements qui allie confort et liberté.</p>
                        <Link href="/transport-business-solutions-entreprise/taxi-pour-deplacements-professionnels" className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-48 flex gap-2'>
                            <span>EN SAVOIR PLUS</span>
                            <span><BsArrowRight size={18} /></span>
                        </Link>
                    </div>
                </div>

                {/* Two */}
                <div
                    style={{ backgroundImage: "url(bus/car.webp)",backgroundAttachment: "fixed" }}
                    className="relative bg-cover object-cover min-h-[300px] bg-black  sm:pt-[40px] flex items-center justify-center"
                >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

                    <div className='relative z-20 bg-[#0000009c] py-4  px-2 lg:px-10' >
                        <p className='text-white font-bold text-[18px] lg:text-[30px]'>Navette Entreprise</p>
                        <p className='text-[#EEE]'>Notre objectif : offrir une efficacité professionnelle dans vos déplacements qui allie confort et liberté.</p>
                        <Link href="/transport-business-solutions-entreprise/taxi-navette-entreprise" className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-48 flex gap-2'>
                            <span>EN SAVOIR PLUS</span>
                            <span><BsArrowRight size={18} /></span>
                        </Link>
                    </div>
                </div>  


                {/* Three */}
                <div
                    style={{ backgroundImage: "url(bus/hand.webp)",backgroundAttachment: "fixed" }}
                    className="relative bg-cover object-cover min-h-[300px] bg-black sm:pt-[40px] flex items-center justify-center"
                >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

                    <div className='relative z-20 bg-[#0000009c] py-4 px-2 lg:px-10' >
                        <p className='text-white font-bold text-[18px] lg:text-[30px]'>SEMINAIRES & CONGRÈS</p>
                        <p className='text-[#EEE]'>KiroTravel, une équipe de professionnel à votre service pour l&apos;organisation de vos événements.</p>
                        <Link href="/transport-business-solutions-entreprise/taxi-seminaires-congres" className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-48 flex gap-2'>
                            <span>EN SAVOIR PLUS</span>
                            <span><BsArrowRight size={18} /></span>
                        </Link>
                    </div>
                </div>  


            </div>
        </div>
    </>
  )
}

export default Index