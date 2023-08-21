import PageHead from '@/components/globalComponents/PageHead'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowRight, BsPatchQuestionFill } from 'react-icons/bs'

const Index = () => {

    const router = useRouter()

  return (
    <>
        <PageHead title="EVENEMENTS PRIVÉS – KiroTravel VTC TAXI Pays De Gex" 
            description="EVENEMENTS PRIVÉS Une seule entreprise, un seul interlocuteur pour une organisation hors pair de vos évènements Vous aurez accès à une prestation soignée. Confiez-nous votre transfert, afin que vos évènements ne soient pas source de stress ou de fatigue. question Anniversaire Vous venez fêter votre anniversaire dans le Pays de Gex, et vous souhaitez une"
        />
        <div>
            {/* Header  */}
            <div 
                style={{ backgroundImage: "url(events/headerevents.jpg)",backgroundAttachment: "fixed" }}
                className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
            >

                {/* overLay  */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>


                <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                    {/* <Container> */}
                        <div className=''>
                            <div className='bg-[#000000de] py-6 px-2 lg:px-16'>
                                <p className='text-[18px] lg:text-[25px] font-semibold mb-3'>EVENEMENTS PRIVÉS</p>
                                <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Une seule entreprise, un seul interlocuteur pour une organisation hors pair de vos évènements.</p>
                                <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Vous aurez accès à une prestation soignée.</p>
                                <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Confiez-nous votre transfert, afin que vos évènements ne soient pas source de stress ou de fatigue.</p>
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
                    style={{ backgroundImage: "url(events/one.jpg)",backgroundAttachment: "fixed" }}
                    className="relative bg-cover object-cover min-h-[300px] bg-black sm:pt-[40px] flex items-center justify-center"
                >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

                    <div className='relative z-20 bg-[#0000009c] py-4 px-2 lg:px-10' >
                        <p className='text-white font-bold text-[18px] lg:text-[30px]'>Anniversaire</p>
                        <p className='text-[#EEE] text-[13px] lg:text-[16px]'>Vous venez fêter votre anniversaire dans le Pays de Gex, et vous souhaitez une bonne organisation ?</p>
                        <div className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-48 flex gap-2'>
                            <Link href='/evenements-prives/anniversaire'>EN SAVOIR PLUS</Link>
                            <span><BsArrowRight size={18} /></span>
                        </div>
                    </div>
                </div>

                {/* Two */}
                <div
                    style={{ backgroundImage: "url(events/two.jpg)",backgroundAttachment: "fixed" }}
                    className="relative bg-cover object-cover min-h-[300px] bg-black  sm:pt-[40px] flex items-center justify-center"
                >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

                    <div className='relative z-20 bg-[#0000009c] py-4  px-2 lg:px-10' >
                        <p className='text-white font-bold text-[18px] lg:text-[30px]'>Mariage</p>
                        <p className='text-[#EEE]'>Voulez-vous passer le plus beau jour de votre vie sans stress ?…</p>
                        <div className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-48 flex gap-2'>
                            <Link href='/evenements-prives/mariage'>EN SAVOIR PLUS</Link>

                            <span><BsArrowRight size={18} /></span>
                        </div>
                    </div>
                </div>  


                {/* Three */}
                <div
                    style={{ backgroundImage: "url(events/three.jpg)",backgroundAttachment: "fixed" }}
                    className="relative bg-cover object-cover min-h-[300px] bg-black sm:pt-[40px] flex items-center justify-center"
                >
                    {/* overLay  */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

                    <div className='relative z-20 bg-[#0000009c] py-4 px-2 lg:px-10' >
                        <p className='text-white font-bold text-[18px] lg:text-[30px]'>Baptême</p>
                        <p className='text-[#EEE]'>Le baptême de votre enfant, c&apos;est également recevoir de la famille, des amis, les parrains, marraines…</p>
                        <div className='text-white hover:bg-white hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-5 w-48 flex gap-2'>
                            <Link href='/evenements-prives/bapteme'>EN SAVOIR PLUS</Link>

                            <span><BsArrowRight size={18} /></span>
                        </div>
                    </div>
                </div>  

            </div>
        </div>
    </>
  )
}

export default Index