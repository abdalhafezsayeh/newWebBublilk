/* eslint-disable @next/next/no-img-element */
import CityDescription from "@/components/destinations/CityDescription";
import HeroSection from "@/components/destinations/HeroSection";
import HotelsCard from "@/components/destinations/HotelsCard";
import Container from "@/components/globalComponents/Container";
import PageHead from "@/components/globalComponents/PageHead";
import { Accordion } from "flowbite-react";
import Link from "next/link";

function SaintGenisPouilly() {
  return (
    <>
      <PageHead title="Réserver Vtc Taxi Saint-Genis-Pouilly – 24/24 - 7/7" 
        description="Réservation d'un vtc sur Saint-Genis-Pouilly - Trajets Toutes Destinations - Aéroport, Gare - +33644915310 - French, English"
        keyWords="Réserver taxi à Saint-Genis-Pouilly, kirolimo taxi vtc saint genis pouilly, kiro limo saint genis pouilly, taxi aéroport de geneve saint genis pouilly, taxi aeroport gare de genève,  taxi gare saint genis pouilly, Réserver taxi à Péron, commander un taxi à Sergy, Réserver taxi Saint-Jean-de-Gonville, Réserver taxi à Challex, taxi le plus proche, transport saint genis pouilly, taxi enfant saint genis pouilly, périscolaire, transport taxi eglise saint pierre de pouilly, réservation taxi technoparc saint genis pouilly, taxi hotel Séjours & Affaires,taxi ibis budget Saint-Genis-Pouilly Genève, taxi Hôtel initial by balladins Genève, taxi Hôtel Kyriad Genève Pouilly, taxi Hôtel Première Classe Genève Saint genis pouilly, taxi Best Western Park Hotel, taxi ibis, taxi Aparthotel Adagio Genève Saint-Genis-Pouilly, taxi pays de gex, taxi airbnb saint genis pouilly, taxi 01630, louer un appartement saint genis pouilly, kiro limo uber saint genis pouilly, service de taxi saint genis pouilly, taxi Hôtel Kyriad Genève Pouilly, taxi Hôtel Première Classe Genève Saint Genis Pouilly, Réserver taxi à Thoiry, taxi aeroport Thoiry, taxi gare Thoiry, Réserver taxi à Thoiry, commander un taxi à Thoiry, taxi enfant thoiry, transport entreprise thoiry, taxi valthoiry, kirolimo taxi vtc thoiry, kiro limo thoiry, louer un appartement à thoiry, kiro limo uber thoiry, taxi 01710, uber thoiry
        01170
        Réserver taxi à Ségny, kirolimo taxi vtc saint genis pouilly Gex, taxi aéroport à Gex, taxi gare cornavin Gex, tax col de la faucille, taxi mainaz, Réserver taxi Vesancy, Réserver taxi Échenevex, Réserver taxi Crozet, taxi jiva hill, service de taxi jivahill, transfert de taxi de jivahill, commander un taxi jivahill, réserver un taxi jivahill, réservation uber jivahill, Réservation taxi Chevry, Réserver taxi Cessy  "
      />
      <HeroSection
        image={"/destinations/SaintGenisPouilly.webp"}
        title="Réserver un vtc taxi saint-genis-pouilly"
        description="La réservation en avance est recommandée (Minimum 1 heure)"
      />

      <Container className="flex flex-col gap-y-6 my-8">
        <p className="text-lg">
          Vous recherchez un Chauffeur privé, un taxi ou un Uber sur Saint Genis
          Pouilly et dans le Pays de Gex pratiquant des prix fixes, sans aucun
          frais, aucune majoration. Le paiement se fait à bord, directement au
          chauffeur par CB ou en espèces.
        </p>

        <p className="text-lg">
          Ci-dessous, questions-réponses les plus fréquemment posées et quelques
          informations utiles sur la ville,
          <strong>des restaurants à Saint Genis Pouilly</strong> , des hôtels Si
          vous ne trouvez pas l&apos;information recherchée,
          <strong><Link href="/contact-us"> contactez-nous</Link></strong> et nous vous apporterons une réponse
          précise.
        </p>

        <Accordion className="">
          {/* 1 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Quel est le prix d&apos;un vtc - taxi pour le trajet
              Saint-Genis-Pouilly - la Gare SNCF de Bellegarde sur Valserine ?
              (Avenue de la Gare 01200 Valserhône)
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le tarif pour ce trajet est à partir de <strong>60 €</strong>{" "}
                  (Tarif du jour), <strong>80 €</strong> (Tarif du nuit)
                </p>
                <p>
                  Si vous faites un trajet fréquemment, merci de nous en tenir
                  informer car nous vous proposerons des tarifs spéciaux.
                </p>
                <p>
                  Si vous souhaitez faire une demande de groupe, merci de
                  demander un devis
                </p>
                <p>
                  Distance: <strong>30 km</strong> Durée: <strong>30 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Saint-Genis-Pouilly,+01630/Gare+de+Bellegarde,+Valserh%C3%B4ne/@46.1673383,5.7891746,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c62697a1fc077:0x408ab2ae4c20490!2m2!1d6.02513!2d46.2437479!1m5!1m1!1s0x478c833b265695e5:0x413f343a937bdbb7!2m2!1d5.8259449!2d46.1108981!3e0"
                    className="text-main"
                  >
                    Voir le trajet sur la carte
                  </Link>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          {/* 2 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              De Saint-Genis-Pouilly jusqu&apos;à Annecy, quelle est la tarification
              d&apos;un taxi ou un vtc?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le prix est à partir de <strong>120 €</strong> (Tarif du jour)
                </p>
                <p>
                  Si vous faites un trajet fréquemment, merci de nous en tenir
                  informer car nous vous proposerons des tarifs spéciaux.
                </p>
                <p>
                  Si vous souhaitez faire une demande de groupe, merci de
                  demander un devis
                </p>
                <p>
                  Distance: <strong>49 km</strong> Durée: <strong>51 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Saint-Genis-Pouilly,+01630/Annecy/@46.1673383,5.7891746,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c62697a1fc077:0x408ab2ae4c20490!2m2!1d6.02513!2d46.2437479!1m5!1m1!1s0x478b8fe55861febb:0x6a90ac32b5ab892b!2m2!1d6.1295411!2d45.8990887!3e0"
                    className="text-main"
                  >
                    Voir le trajet sur la carte
                  </Link>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>

          {/* 3 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Une course de taxi ou d&apos;un vtc entre Saint-Genis-Pouilly et
              Aéroport de Genève (GVA) international airport of Geneva, quel en
              serait le coût ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le coût d&apos;un taxi ou un VTC est à partir de{" "}
                  <strong>120 €</strong> (Tarif du jour)
                </p>
                <p>
                  Si vous faites un trajet fréquemment, merci de nous en tenir
                  informer car nous vous proposerons des tarifs spéciaux.
                </p>
                <p>
                  Si vous souhaitez faire une demande de groupe, merci de
                  demander un devis
                </p>
                <p>
                  Distance: <strong>12.5 km</strong> Durée:{" "}
                  <strong>17 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Saint-Genis-Pouilly,+01630/D%C3%A9pose+Minute,+1215+Le+Grand-Saconnex,+Suisse/@46.1673383,5.7891746,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c62697a1fc077:0x408ab2ae4c20490!2m2!1d6.02513!2d46.2437479!1m5!1m1!1s0x478c64848bce2a4d:0x3c5d41837d71ea7e!2m2!1d6.1086909!2d46.2305313!3e0"
                    className="text-main"
                  >
                    Voir le trajet sur la carte
                  </Link>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          {/* 4 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Pour un taxi de Saint-Genis-Pouilly à Ferney-Voltaire, quelle
              tarification?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Un taxi ou un VTC pour ce parcours à une tarification à partir
                  de <strong>38 €</strong> (Tarif du jour)
                </p>
                <p>
                  Si vous faites un trajet fréquemment, merci de nous en tenir
                  informer car nous vous proposerons des tarifs spéciaux.
                </p>
                <p>
                  Si vous souhaitez faire une demande de groupe, merci de
                  demander un devis
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          {/* 5 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Quel est le prix d&apos;un taxi de Saint-Genis-Pouilly à
              Saint-Julien-en-Genevois ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  La meilleure tranche tarifaire d&apos;un taxi ou d&apos;un VTC pour ce
                  trajet est à partir de <strong>75 €</strong> (Tarif du jour)
                </p>
                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>
                <p>
                  Avez-vous un rendez vous ou une consultation à l&apos;hôpital de
                  Saint-Julien-en-Genevois et vous souhaitez qu&apos;on vous attende
                  = <strong>pas de soucis</strong>
                </p>
                <p>
                  Aller + Retour = à partir de{" "}
                  <strong>70 € (Sans attente)</strong>
                </p>
                <p>
                  Attente = à partir de{" "}
                  <strong>25 € par heure d&apos;attente</strong>
                </p>

                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>

                <p>Si vous faites un trajet fréquemment,  merci de nous en tenir informer car nous vous proposerons des tarifs spéciaux.</p>
                <p>Si vous souhaitez faire une demande de groupe, merci de demander un devis</p>
                <p>
                  Distance: <strong>24.6 km</strong> Durée: <strong>35 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Saint-Genis-Pouilly,+01630/H%C3%B4pital+Intercommunal+Sud+L%C3%A9man+Valserine,+Saint-Julien-en-Genevois/@46.1999448,6.0040823,12z/data=!4m15!4m14!1m5!1m1!1s0x478c62697a1fc077:0x408ab2ae4c20490!2m2!1d6.02513!2d46.2437479!1m5!1m1!1s0x478c7c74541b895f:0xca1cd82c4a1d980b!2m2!1d6.0798131!2d46.146768!3e0!5i2"
                    className="text-main"
                  >
                    Voir le trajet sur la carte
                  </Link>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          {/* 6 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Pour un taxi de Saint-Genis-Pouilly à Annemasse, quel est le prix ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                Communément, le tarif d&apos;un taxi ou d&apos;un vtc est à partir de <strong>80 €</strong> (Tarif du jour) , <strong>110 €</strong> (Tarif du jour)
                </p>
                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>
                <p>
                Avez-vous un rendez vous ou une consultation à l&apos;hôpital privée d&apos;Annemasse (Hôpital privé Pays de Savoie – Ramsay Santé) et vous souhaitez qu&apos;on vous attende = <strong>pas de soucis</strong>
                </p>
                <p>
                Aller + Retour = à partir de{" "}
                  <strong>80 € (Sans attente)</strong>
                </p>
                <p>
                Attente = à partir de{" "}
                  <strong>25 € par heure d&apos;attente</strong>
                </p>

                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>

                <p>Si vous faites un trajet fréquemment,  merci de nous en tenir informer car nous vous proposerons des tarifs spéciaux.</p>
                <p>Si vous souhaitez faire une demande de groupe, merci de demander un devis</p>
                <p>Voir moins</p>
                <p>
                  Distance: <strong>30 km</strong> Durée: <strong>46 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Saint-Genis-Pouilly,+01630/Annemasse,+74100/@46.18773,6.0595313,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c62697a1fc077:0x408ab2ae4c20490!2m2!1d6.02513!2d46.2437479!1m5!1m1!1s0x478c6e2a0aae266b:0x9c5b0362feb46ded!2m2!1d6.234158!2d46.193253!3e0"
                    className="text-main"
                  >
                    Voir le trajet sur la carte
                  </Link>
                </p>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>

        {/* header */}

        <h2 className="text-center text-2xl font-bold  font-mono oldstyle-nums leading-9 text-secondary my-4">Tarifs spéciaux pour les longues distances + de 50KM demandez un Devis et comparez les prix. (Départ de Saint-Genis-Pouilly)</h2>
      </Container>



      <CityDescription
        title="Saint-Genis-Pouilly"
        image="/destinations/SaintGenisPouillyCity.webp"
        content={[
          "Saint-Genis-Pouilly est une commune française, située dans le département de l'Ain et la région Auvergne-Rhône-Alpes.",
          "Elle se trouve dans le pays de Gex. Bordant la frontière suisse, elle fait partie de l'agglomération transfrontalière de Genève.",
          `Saint-Genis-Pouilly accueille sur son territoire une grande partie des installations de physique des particules du CERN, l'Organisation européenne pour la recherche nucléaire, haut-lieu de la recherche fondamentale mondiale.`,
          "Les origines de Saint-Genis-Pouilly remontent à l'époque gallo-romaine. La colonie romaine Colonia Iulia Equestris fondée par Jules César. s&apos;étendait jusqu&apos;à Thoiry et englobait donc le territoire qui devait devenir Saint-Genis-Pouilly. La grande villa de Pouilly est située aux alentours de l&apos;actuelle église de Pouilly, était habitée par une famille riche, comme en témoignent les bijoux, bagues et bracelets qui y ont été retrouvés.",
        ]}
      />

      {/* Hotels */}
      <Container className="flex flex-col gap-y-8 items-center mb-4">
        <h2 className="text-4xl text-center pb-2 font-bold relative w-fit after:absolute after:bottom-0 after:left-1/2 after:w-[80%] after:h-[2px] after:bg-main after:-translate-x-1/2">
          Hotels à Saint-Genis-Pouilly
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-x-3 gap-y-4 justify-center">
          <HotelsCard
            link={
              "https://www.myresidhome.com/st-genis-pouilly/sejours-affaires-saint-genis/reservez-votre-sejour.html/date_arrivee=06-05-2021&date_depart=07-05-2021&nb_adulte=2&utm_source=adwords&utm_medium=hotelads&utm_campaign=lancement_test"
            }
            image={"/destinations/SaintGenisPouillyHotel1.webp"}
            title={"Séjours & Affaires Hotel"}
            typeHotel={"Résidence de tourisme 2 étoiles"}
            descripthion={"73 Rue Blaise Pascal, 01630 Saint-Genis-Pouilly"}
          />
          <HotelsCard
            link={
              "https://www.kyriad.com/rooms/?kameleoonEnabled=false&searchType=rooms&sr=METAGHACOM&arrival=2021-05-06&departure=2021-05-07&resortCode=FRA22466&rooms[0][adult]=2&rooms[0][child]=0&utm_source=google&utm_medium=HAC&utm_campaign=FRA22466&utm_content=hpa_06_05_2021_1_localuniversal_FRA22466_FR_desktop_default_9652129183__2&gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRi6YzMgr1vAek5naT8KQO2YJlhF4gUlZvzsRdaXteWHctdFJjzSeOkaAkihEALw_wcB"
            }
            image={"/destinations/SaintGenisPouillyHotel2.webp"}
            title={"Hôtel Kyriad Genève Pouilly"}
            typeHotel={"Hôtel de tourisme 3 étoiles"}
            descripthion={"85 Rue de la Faucille, 01630 Saint-Genis-Pouilly"}
          />
          <HotelsCard
            link={
              "https://www.bestwestern.fr/fr/hotel-Thoiry-Best-Western-Park-Hotel-Geneve-Thoiry-93861?sob=A1278"
            }
            image={"/destinations/SaintGenisPouillyHotel3.webp"}
            title={"Best Western Park Hotel"}
            typeHotel={"4 étoiles"}
            descripthion={"185 Avenue du Mont Blanc, 01710 Thoiry"}
          />
          <HotelsCard
            link={
              "https://www.adagio-city.com/fr/hotel-9779-aparthotel-adagio-geneve-saint-genis-pouilly/index.shtml?merchantid=ppc-adg-mar-goo-fr-fr-sear&sourceid=bp-cen&utm_source=google&utm_medium=cpc&utm_campaign=ppc-adg-mar-goo-fr-fr-fr-exa-sear-bp&utm_term=mar&utm_content=fr-fr-FR-V116104&gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRjVetD4Bpm31cqV1NPX2NurT2KWDbvP52xsazdhYE2nWpFNLmkmbloaAogXEALw_wcB"
            }
            image={"/destinations/SaintGenisPouillyHotel4.webp"}
            title={"Aparthotel Adagio Genève Saint-Genis-Pouilly"}
            typeHotel={"Résidence de tourisme 4 étoiles"}
            descripthion={"67 Avenue du Mont Blanc, 01710 Thoiry"}
          />

          <HotelsCard
            link={
              "https://all.accor.com/ssr/app/accor/rates/7377/index.fr.shtml?dateIn=2021-05-06&nights=1&compositions=2&stayplus=false&gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRi1SkqetZcLq8eeZ-7PTj_6bKGcz22N3TAEOlCALNYFLLJU2eb_gGkaAghgEALw_wcB&utm_campaign=7377-FR-cpc-desktop-default-0--localuniversal-10315734617-0-0-1&utm_medium=partenariats&utm_source=Google%20Hotel%20Ads"
            }
            image={"/destinations/SaintGenisPouillyHotel5.webp"}
            title={"Ibis"}
            typeHotel={"Hôtel de tourisme 3 étoiles"}
            descripthion={
              "Technoparc Du Pays De Gex, 95 Rue Louis et Auguste Lumière, 01630 Saint-Genis-Pouilly"
            }
          />
          <HotelsCard
            link={
              "https://all.accor.com/ssr/app/accor/rates/A9U8/index.fr.shtml?dateIn=2021-05-06&nights=1&compositions=2&stayplus=false&utm_campaign=A9U8-FR-cpc-desktop-default-0--localuniversal--0-0-0&utm_medium=partenariats&utm_source=seo_meta_google"
            }
            image={"/destinations/SaintGenisPouillyHotel6.webp"}
            title={"ibis budget Saint-Genis-Pouilly Genève"}
            typeHotel={"Hôtel de tourisme 2 étoiles"}
            descripthion={
              "40 Rue Henri De France Technoparc Du Pays De Gex, 01630 Saint-Genis-Pouilly"
            }
          />
          <HotelsCard
            link={
              "https://www.balladins.com/fr/mon-hotel/geneve-saint-genis-pouilly/?gclid=Cj0KCQjw4cOEBhDMARIsAA3XDRi4UlF56zE3HMgHRgxTGEsfF_uURVljF2ULDu70RDfsEsPkiXqU4ZUaAlnuEALw_wcB"
            }
            image={"/destinations/SaintGenisPouillyHotel7.webp"}
            title={"Hôtel initial by balladins Genève / St-Genis-Pouilly"}
            typeHotel={"Hôtel de tourisme 2 étoiles"}
            descripthion={
              "Technoparc Pays de Gex, 70 Rue Auguste Piccard, 01630 Saint-Genis-Pouilly"
            }
          />
          <HotelsCard
            link={"https://www.jivahill.com/"}
            image={"/destinations/SaintGenisPouillyHotel8.webp"}
            title={"Jiva Hill Resort"}
            typeHotel={"Hôtel de tourisme 5 étoiles"}
            descripthion={"Route d'Harée, 01170 Crozet"}
          />
        </div>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-[45%_auto] gap-x-5 gap-y-4 my-10">
        
        <div className="flex flex-col gap-y-4">
          <h5 className="text-secondary font-semibold text-xl">Commander un vtc taxi à Saint-Genis-Pouilly en ligne</h5>
          <h5 className="text-black font-semibold text-lg">Vous souhaitez prendre un vtc au départ de Saint-Genis-Pouilly ou voulez-vous vous rendre ?</h5>
          <h5 className="text-secondary font-semibold text-xl">Nous sommes disponibles 24h sur 24 et 7 jours sur 7, de jour comme de nuit pour vous conduire partout en France et même en Europe.</h5>
          <h4 className="text-black font-bold text-lg">La commande d&apos;un VTC ou taxi est très simple pour aller à l&apos;aéroport :</h4>
          <ul className="list-disc ml-10">
            <li>Aéroport de Lyon Saint Exupéry</li>
            <li>Aéroport de Grenoble Isère</li>
            <li>Aéroport de Chambery Savoie</li>
            <li>Altiport de Megève</li>
          </ul>
          <h4 className="text-secondary font-semibold text-xl">Appeler ou commander TOUT DE SUITE OU L&apos;IMMÉDIAT</h4>
          <h4 className="text-secondary font-semibold text-lg">Il est fortement recommandé d&apos;effectuer votre réservation 1 HEURE EN AVANCE. Pour être certain de la présence de votre VTC. Les chauffeurs fonctionnent par réservation, cela garantit leur ponctualité</h4>
          <h4 className="text-black font-semibold text-xl">Système de réservation SIMPLE & RAPIDE</h4>
        </div>
        <div>
          <img 
            alt="saint genis polliy Taxi divonne les bains Ambassador geneve Limousine taxi"
            src={'/destinations/saintGenisPouilly2.webp'}
            width={100}
            height={100}
            className="object-cover w-full "
          />
        </div>
      </Container>
    </>
  );
}

export default SaintGenisPouilly;
