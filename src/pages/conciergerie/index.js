import PageHead from '@/components/globalComponents/PageHead'
import React, { useEffect, useRef } from 'react'

const Index = () => {

    const videoPlay = useRef()

    useEffect(() => {
        videoPlay.current.play()
    },[])

  return (
    <>
        <PageHead title="CONCIERGERIE – KiroTravel VTC TAXI Pays De Gex" 
            description="Nous lançons notre nouveau site web très prochainement We are launching our new website very soon https://kirotravel.com/wp-content/uploads/2021/04/production-ID_4276289.mp4"
        />
        <div 
        style={{ backgroundImage: "url(conclergerle/services.webp)",backgroundAttachment: "fixed" }}
        className="relative bg-cover object-cover min-h-screen bg-black pt-[80px] sm:pt-[40px] lg:mb-52 flex items-center justify-center"
        
        >
            {/* overLay  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

            <div className="custom-shape-divider-bottom-1686219026">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                </svg>
            </div>
            
            {/* Title  */}
            <div className='absolute z-20 top-36 text-white text-center'>
                <p className='text-[17px] lg:text-3xl mb-4'>Nous lançons notre nouveau site web très prochainement</p>
                <p className='text-[16px] lg:text-2xl text-[#EEE] opacity-90'>We are launching our new website very soon</p>
            </div>

            <div className='absolute bottom-16 lg:-bottom-32 z-30 text-white flex justify-center flex-col items-center'>
                <video ref={videoPlay} className='rounded-xl' width="820" height="440" controls>
                    <source src="./conciergerie.mp4" type="video/mp4" />
                    Error Message
                </video>
            </div>
            

        </div>
    </>
  )
}

export default Index