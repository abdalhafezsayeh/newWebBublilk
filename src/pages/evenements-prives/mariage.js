import Container from '@/components/globalComponents/Container'
import PageHead from '@/components/globalComponents/PageHead'
import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {

  const router = useRouter()


  return (
    <>
      <PageHead title="Mariage – KiroTravel VTC TAXI Pays De Gex" 
        description="MARIAGE Voulez-vous passer le plus beau jour de votre vie sans stress ?… KiroTravel vous propose ses services, en passant par le transport, l&apos;organisation, la recherche du lieu parfait pour vous et d&apos;un hébergement qui saura répondre à vos attentes. Une seule entreprise, un seul interlocuteur pour une organisation hors pair de votre mariage en vous"
      />
      <div>

          {/* Header  */}
          <div 
              style={{ backgroundImage: "url(/events/two.jpg)",backgroundAttachment: "fixed" }}
              className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
          >

            {/* overLay  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>   

            {/* Content Header  */}
              <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                <div className=''>
                  <div className='bg-[#000000de] py-6 px-2 lg:px-16 text-center'>
                      <p className='text-[18px] lg:text-[30px] font-bold mb-3'>MARIAGE</p>
                      <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Voulez-vous passer le plus beau jour de votre vie sans stress ?…</p>
                  </div>
                </div>
              </div>

          </div>

          {/* Title Sections  */}
          <div>
            <Container>
              <div className='pt-10'>
                  <h2 className='text-[16px] lg:text-[20px] text-center font-bold mb-0'>KiroTravel vous propose ses services, en passant par le transport,  l&apos;organisation, la recherche du lieu parfait pour vous et d&apos;un hébergement qui saura répondre à vos attentes.</h2>
              </div>
              <div className='pt-5 lg:pt-10 leading-6 lg:leading-10'>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Une seule entreprise, un seul interlocuteur pour une organisation hors pair de votre mariage en vous trouvant les meilleurs tarifs  pour l&apos;hôtel, le restaurant,  la salle, la société de Wedding planner local,…etc, grâce à notre expérience et nos collaborations avec des professionnels dans divers domaines.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>KiroTravel saura rendre ce jour exceptionnel Notre société sera l&apos;un des prestataires incontournables de votre mariage, grâce à la location d&apos;une voiture avec chauffeur pour ce jour spécial et à notre implication dans son organisation si besoin.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>KiroTravel a mis en place une charte de qualité auprès de ses chauffeurs pour offrir des services inégalés pour tous vos événements tels que votre mariage. </p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Tous nos chauffeurs sont en costume et possèdent la carte de transport professionnel. Ils sauront vous séduire par leur professionnalisme et leur discrétion.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Vous serez accompagnés en toute sérénité jusqu&apos;à votre lieu de célébration puis jusqu&apos;à votre lieu de réception.</p>
              
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Nos chauffeurs se mettront en accord avec le thème de votre mariage et vous pourrez choisir entre une berline ou bien un Van en ce jour si spécial.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Nous pouvons également assurer votre retour ainsi que celui de vos invités avec un budget défini à l&apos;avance. </p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Nos véhicules sont de type berline ou van. Ils  ne disposent pas de lumineux taxi. Ceux-ci répondent aux normes légales pour les gammes VTC et donnent une image plus sobre et luxueuse pour animer un événement privé.</p>

              
              
                <p className='py-3 mb-10 text-[#444] text-[13px] lg:text-[16px]'>N&apos;hésitez pas à nous contacter <a onClick={() => router.push('/contact-us')} className='font-bold text-main cursor-pointer'>ICI</a>   pour de plus amples informations et/ou pour l&apos;établissement d&apos;un devis avec les prestations choisies pour votre mariage. Le jour le plus exceptionnel de votre vie!</p>
              </div>
            </Container>
        </div>
      </div>
    </>
  )
}

export default Index