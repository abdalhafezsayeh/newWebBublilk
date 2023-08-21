import Container from '@/components/globalComponents/Container'
import PageHead from '@/components/globalComponents/PageHead'
import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {

  const router = useRouter()

  return (
    <>
      <PageHead title="Organiser un baptême ou une fête de naissance dans le Pays de Gex" 
        description="KiroTravel vous propose le transport, l&apos;organisation, et l&apos;hébergement si nécessaire qui saura répondre à vos attentes."
      />
      <div>

          {/* Header  */}
          <div 
              style={{ backgroundImage: "url(/events/three.jpg)",backgroundAttachment: "fixed" }}
              className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
          >

            {/* overLay  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>   

            {/* Content Header  */}
              <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                <div className=''>
                  <div className='bg-[#000000de] py-6 px-2 lg:px-16 text-center'>
                      <p className='text-[18px] lg:text-[30px] font-bold mb-3'>BAPTÊME</p>
                      <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Le baptême de votre enfant, c&apos;est également recevoir de la famille, des amis, les parrains, marraines…</p>
                  </div>
                </div>
              </div>

          </div>

          {/* Title Sections  */}
          <div>
            <Container>
              <div className='pt-10'>
                  <h2 className='text-[16px] lg:text-[20px] text-center font-bold mb-0'>Pour tout cela, il faut un minimum de place et d&apos;organisation. <strong>Comment faire pour installer tout ce petit monde ?</strong> </h2>
              </div>
              <div className='pt-5 lg:pt-10 leading-6 lg:leading-10'>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'><strong>KiroTravel</strong> vous propose ses services, en passant par le transport,  l&apos;organisation, et l&apos;hébergement si nécessaire qui saura répondre à vos attentes.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Une seule entreprise, un seul interlocuteur pour l&apos;organisation du baptême de votre “petit monde”, en vous trouvant les meilleurs tarifs  pour le transport,  l&apos;hôtel si nécessaire, le restaurant,  la salle, etc…, grâce à notre expérience et nos collaborations avec des professionnels dans divers domaines.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'><strong>KiroTravel</strong> a mis en place une charte de qualité auprès de ses chauffeurs pour offrir des services inégalés pour tous vos événements tels que le baptême de votre enfant, qu&apos;il soit religieux, civil ou laïc.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'><strong>Nos véhicules sont de type berline ou van</strong>. Ils  ne disposent pas de lumineux taxi. Ceux-ci répondent aux normes légales pour les gammes VTC et donnent une image plus sobre et luxueuse pour animer un événement privé.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Tous nos chauffeurs sont en costume et possèdent la carte de transport professionnelle VTC. Ils sauront vous séduire par leur professionnalisme et leur discrétion.</p>
              
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Vous serez accompagnés en toute sérénité jusqu&apos;au lieu de célébration puis jusqu&apos;au lieu de réception.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Vous pourrez choisir les types de véhicules pour ce jour si spécial, ce choix s&apos;adapte aux nombres de personnes que vous souhaitez transporter.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Nous pouvons également assurer votre retour ainsi que celui de vos invités avec un budget défini à l&apos;avance et avec des tarifs abordables.</p>

              
            
                <p className='py-3 mb-10 text-[#444] text-[13px] lg:text-[16px]'>N&apos;hésitez pas à nous contacter <a onClick={() => router.push('/contact-us')} className='font-bold text-main cursor-pointer'>ICI</a> et nous expliquer toutes les prestations que vous souhaitez pour le baptême.</p>
              </div>
            </Container>
        </div>
      </div>
    </>
  )
}

export default Index