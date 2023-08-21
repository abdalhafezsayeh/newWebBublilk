import Container from '@/components/globalComponents/Container'
import PageHead from '@/components/globalComponents/PageHead'
import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {

  const router = useRouter()

  return (
    <>
      <PageHead title="Un seul interlocuteur pour une organisation votre anniversaire" 
        description="KiroTravel vous propose, le transport, l&apos;organisation, la recherche du lieu parfait pour vous et d&apos;un hébergement - Anniversaire Pays de Gex"
      />
      <div>

          {/* Header  */}
          <div 
              style={{ backgroundImage: "url(/events/one.jpg)",backgroundAttachment: "fixed" }}
              className="relative bg-cover object-cover min-h-screen bg-black pt-[10px] sm:pt-[40px] flex items-center justify-center"
          >

            {/* overLay  */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>   

            {/* Content Header  */}
              <div className='relative z-20 mt-10 text-white lg:w-[80%]'>
                <div className=''>
                  <div className='bg-[#000000de] py-6 px-2 lg:px-16 text-center'>
                      <p className='text-[18px] lg:text-[30px] font-bold mb-3'>ANNIVERSAIRE</p>
                      <p className='text-[13px] lg:text-[15px] font-semibold opacity-90 mb-2'>Vous venez fêter votre anniversaire dans le Pays de Gex, et vous souhaitez une bonne organisation ?</p>
                  </div>
                </div>
              </div>

          </div>

          {/* Title Sections  */}
          <div>
            <Container>
              <div className='pt-10'>
                  <h2 className='text-[16px] lg:text-[20px] text-center font-bold mb-0'>KiroTravel vous propose ses services, en passant par le transport,  l&apos;organisation, la recherche du lieu parfait pour vous et d&apos;un hébergement qui saura répondre à vos attentes. </h2>
              </div>
              <div className='pt-5 lg:pt-10 leading-6 lg:leading-10'>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Une seule entreprise, un seul interlocuteur pour une organisation hors pair de votre anniversaire en vous trouvant les meilleurs tarifs (hôtels, restaurants, salle…..etc.), grâce à notre expérience et nos collaborations avec des professionnels dans divers domaines</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'><strong>KiroTravel</strong>, des professionnels à votre écoute afin de vous apporter tout le soutien nécessaire pour que vous puissiez fêter votre anniversaire sans anicroche.</p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'><strong>KiroTravel</strong>, se sont des chauffeurs possédant leurs cartes professionnelles de transport. Vous serez transporté par leur professionnalisme et leur discrétion. Nous vous transporterons aussi bien à l&apos;aller qu&apos;au retour de votre soirée. Nous vous proposons des berlines tout confort pouvant accueillir 4 personnes mais aussi des vans pouvant recevoir 7 passagers. </p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Afin d&apos;effectuer votre réservation, il vous suffit d&apos;indiquer le nombre de personnes qui participeront à votre trajet pour que nous vous proposions le véhicule adéquat. Grâce aux renseignements de l&apos;adresse de départ et d&apos;arrivée, vous obtiendrez directement un devis sur notre site indiquant le tarif de vos trajets. </p>
                <p className='border-b-[2px] border-[#EEE] py-2 text-[#333] text-[13px] lg:text-[16px]'>Nos véhicules sont de type berline ou van. Ils  ne disposent pas de lumineux taxi. Ceux-ci répondent aux normes légales pour les gammes VTC et donnent une image plus sobre et luxueuse pour animer un événement privé.</p>
                <p className='font-extrabold py-2 text-[#444]'>Vous payez uniquement les prestations choisies.</p>
                <p className='font-extrabold py-2 text-[#333]'>(Pas de frais cachés)</p>
                <p className='py-3 mb-10 text-[#444] text-[13px] lg:text-[16px]'>Alors merci de nous contacter <a onClick={() => router.push('/contact-us')} className='text-main font-bold cursor-pointer'>ICI</a>, pour un premier échange. Après celui-ci nous mettrons tout en œuvre pour que cette journée soit inoubliable pour vous et vos invités.</p>
              </div>
            </Container>
        </div>
      </div>
    </>
  )
}

export default Index