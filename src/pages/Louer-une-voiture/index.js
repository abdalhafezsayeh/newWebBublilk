import Container from '@/components/globalComponents/Container';
import React, { useEffect, useState } from 'react'
import { BsPatchQuestion, BsPatchQuestionFill } from 'react-icons/bs';
import { IoCarSport } from 'react-icons/io5';
import { GiSurferVan } from 'react-icons/gi';
import { GrServices } from 'react-icons/gr';
import { Ri24HoursLine } from 'react-icons/ri';
import { TbNotesOff } from 'react-icons/tb';
import { MdOutlineDesignServices } from 'react-icons/md';
import PageHead from '@/components/globalComponents/PageHead';
import { useRouter } from 'next/router';


const imageUrl = [
    {
        url : 'dispostion/one.jpg'
    },
    {
        url : 'dispostion/two.jpg'
    }
]

const Index = () => {

    const router = useRouter()

    const [currentNumberImage, setCurrentNumberImage]  = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentNumberImage(currentNumberImage => (currentNumberImage + 1) % 2);
    }, 2000);
    
    return () => clearInterval(interval);
    }, []);



return (
    <>
        <PageHead title="MISE À DISPOSITION – KiroTravel VTC TAXI Pays De Gex" 
            description="MISE À DISPOSITION Nos mises à disposition sont destinées autant aux entreprises qu'à une clientèle privée et touristique. Le véhicule et son chauffeur sont à votre service cela peut aller d'une heure à plusieurs jours. Laissez-vous transporter par notre professionnalisme. question DEVIS Selon vos besoins, vous pouvez également opter pour une mise à disposition véhicule"
        />
        <div>
            {/* Header  */}
            <div
                style={{ backgroundImage: `url(${imageUrl[currentNumberImage].url})` }}
                className='w-full bg-center bg-cover duration-500 h-screen '
            >
                
                {/* write over lay  */}
                <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10 '></div>    
                

                {/* Title Slider  */}
                <div className='absolute w-full lg:w-[70%] top-[30%] lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] z-20 text-white'>
                    <div className='text-center bg-[#0000004f] py-1 lg:py-4 px-1 lg:px-10 '>
                        <h1 className='uppercase mb-4 text-3xl lg:text-5xl font-bold -tracking-2'>MISE À DISPOSITION</h1>
                        <p className=' text-sm lg:text-2xl font-bold'>Nos mises à disposition sont destinées autant aux entreprises qu&apos;à une clientèle privée et touristique.
                        Le véhicule et son chauffeur sont à votre service cela peut aller d&apos;une heure à plusieurs jours.
                        Laissez-vous transporter par notre professionnalisme.</p>
                        <div className='flex justify-center gap-4'>
                            {/* one  */}
                            <div onClick={() => router.push('contact-us')} className='text-white  hover:bg-white  hover:text-main duration-300 uppercase justify-center items-center cursor-pointer bg-main py-2 px-2 mt-10 w-40 flex gap-2'>
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


            {/* Content  */}
            <div>
                <Container>
                    <div>
                        {/* Title Section  */}
                        <div className='text-center leading-8 py-6'>
                            <p className='font-extrabold text-[20px] '>Selon vos besoins, vous pouvez également opter pour une mise à disposition véhicule + chauffeur, pouvant aller d&apos;1 heure à plusieurs jours.</p>
                            <p className='text-[#444]'>Votre chauffeur vous sera exclusivement réservé, pendant le temps qu&apos;il faudra.</p>
                            <p className='text-[#444]'>Nos services de limousines avec chauffeur sont destinés autant aux entreprises qu&apos;à une clientèle privée et touristique.</p>
                            <p className='text-[#444]'>Notre service de mise à disposition est accessible dans toute la région, jour et nuit.</p>
                            <p className='text-[#444]'>Après une première prise de contact et l&apos;analyse de vos besoins, nous vous envoyons rapidement un devis précis.</p>
                            
                            <p className='text-[#444]'>Exemples : <span className='text-main font-medium'>anniversaire,tournage vidéo, réunions d&apos;affaires, congrès et séminaires, délégation officielle ou excursion touristique, afin de faire vos courses </span>: nous répondons aux besoins d&apos;une clientèle exigeante.</p>
                        </div>

                        <div className='flex flex-wrap justify-center lg:justify-between'>
                            {/* one  */}
                            <div className='mb-10 lg-mt-0'>
                                <div className='flex justify-center'>
                                    <span className='text-main border-[1px] border-secondary rounded-full shadow-2xl p-2 inline-block my-1'><BsPatchQuestion color='' size={35} /></span>
                                </div>
                                <p className='text-[15px] lg:text-[20px] text-[#111] font-medium my-1'>Que signifie une location de voiture à l&apos;heure ?</p>
                                <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>Ce service met une voiture de location avec chauffeur à votre entière disposition pour une utilisation illimitée. Vous pouvez par exemple en profiter lors d&apos;un voyage d&apos;affaires pour vous déplacer entre vos nombreux rendez-vous, pour une visite touristique accompagnée d&apos;un guide, ou simplement pour voyager en voiture en choisissant votre propre itinéraire.</p>
                            </div>
                            {/* Two  */}
                            <div>
                                <span className='flex justify-center'>
                                    <span className='text-main border-[1px] border-secondary rounded-full shadow-2xl p-2 inline-block my-1'><BsPatchQuestion color='' size={35} /></span>
                                </span>
                                <p className='text-[15px] lg:text-[20px] text-[#111] font-medium my-1'>Comment passer correctement une commande de location à l&apos;heure ?</p>
                                <p className='capitalize text-[12px] lg:text-[17px] text-[#666]'>Choisissez simplement le nombre d&apos;heures requises et le moyen de transport, et spécifiez les informations utiles pour le chauffeur dans le champ commentaire de la commande. Le nombre d&apos;arrêts sur le parcours, leur lieu et l&apos;heure, ainsi que les préférences supplémentaires au sujet de la voiture et du chauffeur — toutes ces informations nous seront nécessaires pour vous apporter la meilleure option en satisfaisant votre demande et calculer au mieux le prix de votre voyage.</p>
                            </div>
                        </div>                  
                    </div>
                </Container>
            </div>



            <div 
                className='relative my-10 bg-cover object-cover min-h-[300px]'
                style={{ backgroundImage: "url(dispostion/salary.jpg)",backgroundAttachment: "fixed" }}
                >
                {/* overLay  */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/50 z-10"></div>

                <div className='relative z-20 p-5 pt-5 lg:pt-10 '>
                    <p className=' pl-2 mb-5 text-[16px] lg:text-[20px] font-bold text-white bg-[#0f0e0ecc] py-2 rounded-lg'>TARIFS :</p>
                    <div className='mb-4 mt-4 bg-[#b080bcd6] px-2 rounded-lg'>
                        <div className='py-2'>
                            <div className='py-1 text-white text-[13px] lg:text-[16px] flex items-center gap-2'>
                                <span><IoCarSport size={25} /></span>
                                <span className='font-bold'>Berline : 80 € par Heure</span>
                            </div>
                        </div>
                        <div className='py-2'>
                            <div className='py-1 text-white text-[13px] lg:text-[16px] flex items-center gap-2'>
                                <span><GiSurferVan size={25} /></span>
                                <span className='font-bold'>Van : 110 € par Heure</span>
                            </div>
                        </div>
                    </div>



                    <p className='pl-2 mb-5 text-[16px] lg:text-[20px] font-bold text-white bg-[#0f0e0ecc] py-2 rounded-lg'>Notre offre Mise à disposition comprend :</p>
                    <div className=' mt-4 bg-[#b080bcd6] px-2 rounded-lg'>
                        <div className='py-2'>
                            <div className='py-1 text-white text-[13px] lg:text-[16px]'>Berline ou Van avec chauffeur privé,</div>
                        </div>
                        <div className='py-2'>
                            <div className='py-1 text-white text-[13px] lg:text-[16px]'>Forfait au nombre de kilomètres inclus</div>
                        </div>
                    </div>                
                </div>
            </div>


            {/* Steps */}
            <div>
                <Container>
                    {/* One Services  */}
                    <div className='border-b border-[#EEE] pb-5'>
                        <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>
                            <div className='lg:w-[20%] text-center'>
                                <span className='inline-block'><GrServices size={50} /></span>
                            </div>
                            <div className='lg:w-[80%]'>
                                <p className=' text-[#666] text-[16px] lg:text-[25px] font-extrabold underline'>Services à bord</p>
                                <ul className='list-disc ml-5 lg:ml-10 mt-3 text-[#333]'>
                                    <li>Climatisation,</li>
                                    <li>Wi-fi,</li>
                                    <li>Chargeur USB Android & Apple,</li>
                                    <li>Bouteille d&apos;eau fraîche,</li>
                                    <li>Confiseries.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 24 hours  */}
                    <div className='border-b border-[#EEE] pb-5'>
                        <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>

                            <div className='lg:w-[20%] text-center'>
                                <span className='inline-block'><Ri24HoursLine size={50} /></span>
                            </div>

                            <div className='lg:w-[80%]'>
                                <p className=' text-[#666] text-[16px] lg:text-[25px] font-extrabold underline'>Sur demande 24h en avance minimum et sans frais supplémentaire :</p>
                                <ul className='list-disc ml-5 lg:ml-10 mt-3 text-[#333]'>
                                    <li>Siège-auto bébé,</li>
                                    <li>Marque de boissons soda/jus,</li>
                                    <li>Presse du jour</li>
                                    <li>Arrêts sur demande au chauffeur</li>
                                    <li>Les assurances, le carburant, les péages</li>
                                    <li>L&apos; accueil personnalisé en aéroport ou gare,</li>
                                    <li>Le transport des bagages</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* L&apos;offre   */}
                    <div className='border-b border-[#EEE] pb-5'>
                        <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>

                            <div className='lg:w-[20%] text-center'>
                                <span className='inline-block'><TbNotesOff size={50} /></span>
                            </div>

                            <div className='lg:w-[80%]'>
                                <p className=' text-[#666] text-[16px] lg:text-[25px] font-extrabold underline'>L&apos;offre ne comprend pas :</p>
                                <ul className='list-disc ml-5 lg:ml-10 mt-3 text-[#333]'>
                                    <li>Les suppléments kilométriques de 1 euro TTC/km</li>
                                    <li>Les Repas, dépenses personnelles,</li>
                                    <li>Entrées payantes monuments/musées etc (à régler sur place)</li>
                                    <li>Stationnements et lieux payants demandés par le client</li>
                                    <li>Visite avec un guide officiel (sur demande et en complément)</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div className='border-b border-[#EEE] pb-5'>
                        <div className='flex flex-wrap justify-center flex-col lg:flex-row lg:justify-between items-center rounded-lg'>

                            <div className='lg:w-[20%] text-center'>
                                <span className='inline-block'><MdOutlineDesignServices size={50} /></span>
                            </div>

                            <div className='lg:w-[80%]'>
                                <p className=' text-[#666] text-[16px] lg:text-[25px] font-extrabold underline'>Dans le cadre d&apos;un circuit sur-mesure,</p>
                                <p>nous pouvons vous proposer des activités complémentaires auprès de partenaires qualifiés, reconnus et au tarif négocié :</p>
                                <ul className='list-disc ml-5 lg:ml-10 mt-3 text-[#333]'>
                                    <li>Initiation ou perfectionnement au golf</li>
                                    <li>Spas & massages</li>
                                    <li>Balade à cheval</li>
                                    <li>Location de bateau</li>
                                    <li>Activités nautiques et sports aquatiques</li>
                                    <li>Restaurants</li>
                                    <li>etc</li>
                                </ul>
                            </div>

                        </div>
                    </div>                

                </Container>
            </div>      

            <p className='text-center py-4 text-[#333]'>Dans ce cadre, pour obtenir de plus amples informations, merci de nous contacter <a onClick={() => router.push('/contact-us')} className='text-main font-bold cursor-pointer'>ICI.</a> </p>
            
        </div>
    </>
)
}

export default Index