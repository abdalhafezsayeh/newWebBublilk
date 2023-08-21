/* eslint-disable @next/next/no-img-element */
import CityDescription from "@/components/destinations/CityDescription";
import HeroSection from "@/components/destinations/HeroSection";
import HotelsCard from "@/components/destinations/HotelsCard";
import Container from "@/components/globalComponents/Container";
import PageHead from "@/components/globalComponents/PageHead";
import { Accordion } from "flowbite-react";
import Link from "next/link";

function DivonneLesBains() {
  return (
    <>
      <PageHead title="VTC TAXI DIVONNE LES BAINS – KiroTravel VTC TAXI Pays De Gex" 
        description="Réserver un vtc taxi Divonne-Les-Bains La réservation en avance est recommandée 24/7 RÉSERVER VOTRE VTC - Cherchez-vous un Chauffeur privé, un taxi ou un Uber sur Divonne les Bains…"
        keyWords="réservation taxi Divonne-les-Bains, taxi domaine de divonne, taxi casino divonne, réserver un taxi à Sauverny, réservation d’un taxi Grilly"
      />
      <HeroSection
        image={"/destinations/DivonneLesBains.webp"}
        title="Réserver un vtc taxi Divonne-Les-Bains"
        description="La réservation en avance est recommandée (Minimum 1 heure)"
      />
      <Container className="flex flex-col gap-y-6 my-8">
        <p className="text-lg">
          Cherchez-vous un Chauffeur privé, un taxi ou un Uber sur Divonne les
          Bains et dans le Pays de Gex pratiquant des prix fixes ?
        </p>

        <p className="text-lg">
          Sans aucun
          <strong>frais, aucune majoration.</strong>
        </p>
        <p className="text-lg">
          Le paiement se fait à bord, directement au chauffeur par{" "}
          <strong>CB</strong> ou en espèces.
        </p>

        <h2 className="text-center text-2xl font-bold  font-mono oldstyle-nums leading-9 text-secondary my-4">
          Ci-dessous, questions-réponses les plus fréquemment posées et quelques
          informations utiles sur la ville, des restaurants à Divonne les Bains,
          des hôtels Si vous ne trouvez pas l&apos;information recherchée,
          contactez-nous et nous vous apporterons une réponse précise.
        </h2>

        <Accordion className="">
          {/* 1 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Quel est le prix d&apos;un vtc - taxi pour le trajet Divonne Les Bains
              - la Gare SNCF de Bellegarde sur Valserine ? (Avenue de la Gare
              01200 Valserhône)
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le tarif pour ce trajet est à partir de <strong>110 €</strong>{" "}
                  (tarif forfaitaire du jour ), <strong>144 €</strong> (tarif
                  forfaitaire du jour ).
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
                  Distance: <strong>61 km</strong> Durée: <strong>51 mn</strong>{" "}
                  <Link
                    href="https://www.google.fr/maps/dir/Gare+de+Bellegarde,+Valserh%C3%B4ne/01220+Divonne-les-Bains/@46.2086592,5.7120752,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c833b265695e5:0x413f343a937bdbb7!2m2!1d5.8259449!2d46.1108981!1m5!1m1!1s0x478c5dfbbafffb21:0x66660117b41e4eea!2m2!1d6.13604!2d46.358168!3e0"
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
              De Divonne-les-Bains jusqu&apos;à Annecy, quelle est la tarification
              d&apos;un taxi ou un vtc?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le prix est à partir de <strong>140 €</strong> (Tarif du jour)
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
                  Distance: <strong>61 km</strong> Durée: <strong>54 mn</strong>{" "}
                  <Link
                    href="https://www.google.fr/maps/dir/Annecy/01220+Divonne-les-Bains/@46.1273471,5.5595486,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478b8ffa1c0551c9:0x42781681620534ba!2m2!1d6.129384!2d45.899247!1m5!1m1!1s0x478c5dfbbafffb21:0x66660117b41e4eea!2m2!1d6.13604!2d46.358168!3e0"
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
              Une course de taxi ou d&apos;un vtc entre Divonne-Les-Bains et Aéroport
              de Genève (GVA) international airport of Geneva, quel en serait le
              coût ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le coût d&apos;un taxi VTC est à partir de <strong>50 €</strong>{" "}
                  (Tarif du jour)
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
                  Distance: <strong>21.5 km</strong> Durée:{" "}
                  <strong>28 mn</strong>{" "}
                  <Link
                    href="https://www.google.fr/maps/dir/Geneva+Airport%D8%8C+Terminal+1,+Le+Grand-Saconnex,+Suisse%E2%80%AD/01220+Divonne-les-Bains/@46.2931512,5.9952917,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c650bdb8daa9d:0xbdcc9659a5d3c73d!2m2!1d6.1080521!2d46.2305083!1m5!1m1!1s0x478c5dfbbafffb21:0x66660117b41e4eea!2m2!1d6.13604!2d46.358168!3e0"
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
              Pour un taxi de Divonne-Les-Bains à Ferney-Voltaire, quelle
              tarification?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Un taxi ou un VTC pour ce parcours à une tarification à partir
                  de <strong>48 €</strong> (Tarif du jour)
                </p>
                <p>
                  Si vous êtes un particulier ou un professionnel et vous faites
                  un trajet fréquemment, merci de nous en tenir informer car
                  nous vous proposerons des tarifs spéciaux.
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
              Quel est le prix d&apos;un taxi de Divonne-Les-Bains à
              Saint-Julien-en-Genevois ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  La meilleure tranche tarifaire d&apos;un taxi ou d&apos;un VTC pour ce
                  trajet est à partir de <strong>82 €</strong> (Tarif du jour)
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
                  <strong>85 € (Sans attente)</strong>
                </p>
                <p>
                  Attente = à partir de{" "}
                  <strong>25 € par heure d&apos;attente</strong>
                </p>

                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>

                <p>
                  Si vous faites un trajet fréquemment, merci de nous en tenir
                  informer car nous vous proposerons des tarifs spéciaux.
                </p>
                <p>
                  Si vous souhaitez faire une demande de groupe, merci de
                  demander un devis
                </p>
                <p>
                  Distance: <strong>36.4 km</strong> Durée:{" "}
                  <strong>64 mn</strong>{" "}
                  <Link
                    href="https://www.google.fr/maps/dir/01220+Divonne-les-Bains/Saint-Julien-en-Genevois/@46.2521191,5.957018,11z/data=!4m15!4m14!1m5!1m1!1s0x478c5dfbbafffb21:0x66660117b41e4eea!2m2!1d6.13604!2d46.358168!1m5!1m1!1s0x478c7bf6b0ce5d47:0x408ab2ae4ba9890!2m2!1d6.081338!2d46.144516!3e0!5i2"
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
              Pour un taxi de Divonne-Les-Bains à Annemasse, quel est le prix ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Communément, le tarif d&apos;un taxi ou d&apos;un taxi vtc est à partir
                  de <strong>100 €</strong> (Tarif du jour) ,{" "}
                  <strong>125 €</strong> (Tarif du jour)
                </p>
                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>
                <p>
                  Avez-vous un rendez vous ou une consultation à l&apos;hôpital
                  privée d&apos;Annemasse (Hôpital privé Pays de Savoie – Ramsay
                  Santé) et vous souhaitez qu&apos;on vous attende ={" "}
                  <strong>pas de soucis</strong>
                </p>
                <p>
                  Aller + Retour = à partir de{" "}
                  <strong>100 € (Sans attente)</strong>
                </p>
                <p>
                  Attente = à partir de{" "}
                  <strong>25 € par heure d&apos;attente</strong>
                </p>

                {/* line */}
                <span className="w-[40%] h-[2px] bg-slate-300"></span>

                <p>
                  Si vous faites un trajet fréquemment, merci de nous en tenir
                  informer car nous vous proposerons des tarifs spéciaux.
                </p>
                <p>
                  Si vous souhaitez faire une demande de groupe, merci de
                  demander un devis
                </p>
                <p>Voir moins</p>
                <p>
                  Distance: <strong>42.9 km</strong> Durée:{" "}
                  <strong>48 mn</strong>{" "}
                  <Link
                    href="https://www.google.fr/maps/dir/01220+Divonne-les-Bains/Annemasse/@46.2450712,6.0146799,11z/data=!4m15!4m14!1m5!1m1!1s0x478c5dfbbafffb21:0x66660117b41e4eea!2m2!1d6.13604!2d46.358168!1m5!1m1!1s0x478c6e2a0aae266b:0x9c5b0362feb46ded!2m2!1d6.234158!2d46.193253!3e0!5i2"
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

        <h2 className="text-center text-2xl font-bold  font-mono oldstyle-nums leading-9 text-secondary my-4">
          Vtc Taxi Divonne-Les-Bains. Tarifs spéciaux pour les longues distances
          + de 50KM demandez un Devis et comparez les prix. (Départ de
          Divonne-Les-Bains)
        </h2>
      </Container>

      {/* City */}
      <CityDescription
        title="Divonne-Les-Bains"
        image="/destinations/DivonneLesBainsCity.webp"
      >
        <p>
          Divonne-Les-Bains est une ville thermale faisant partie du Grand
          Genève. C&apos;est une ville frontalière française qui se trouve dans le
          Pays de Gex. On peut y trouver plus de 90 nationalités, ce qui en fait
          une ville internationale, avec une distance de 15 km de Genève, et pas
          plus d&apos;une vingtaine de minutes des stations du Mont-Jura.
        </p>
        <p>
          Cette ville se trouve dans un écrin de verdure, avec une vue
          imprenable sur les montagnes.
        </p>

        <div className="flex flex-col gap-y-4 w-full ml-2">
          <Link
            target="_blank"
            href="http://www.divonnelesbains.fr"
            className="font-semibold text-lg text-main"
          >
            Site ville de Divonne
          </Link>
          <Link
            target="_blank"
            href="http://www.domainedivonne.com"
            className="font-semibold text-lg text-main"
          >
            Casino de Divonne
          </Link>
          <Link
            target="_blank"
            href="https://www.thermes-divonnelesbains.fr"
            className="font-semibold text-lg text-main"
          >
            Thermes de Divonne <br />{" "}
            <p className="font-normal ml-2 text-black">
              Lieu de détente et de soin. C&apos;est un incontournable
            </p>
          </Link>
          <Link
            target="_blank"
            href="https://www.hippodromedivonnelesbains.com"
            className="font-semibold text-lg text-main"
          >
            Hippodrome <br />{" "}
            <p className="font-normal ml-2 text-black">
              Des courses sont organisées mais également des événements autres
            </p>
          </Link>
        </div>
        <div>
          <h5 className="font-bold mb-2">Lac de Divonne :</h5>
          <p className="indent-7 ml-2">
            Lac artificiel créé en 1964 par une idée de Génie de M.Jean Debeau,
            qui voulait que sa ville soit également connue en dehors des
            chasseurs et des pêcheurs pour ses marais. Celui-ci fait 5 Ha,
            entouré d&apos;une piste cyclable et des écuries pour l&apos;hippodrome. Il y
            a également des activités estivales, telles que le Canoë, etc…
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Les marais de Divonne :</h5>
          <p className="indent-7 ml-2">
            Le marais des Bidonnes, une petite randonnée dans un espace vert
            très agréable, qui permet de découvrir un patrimoine naturel, très
            bien entretenu et respecté. En période estivale très appréciable
            nichée au cœur des arbres c&apos;est un lieu frais.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Activité familiale : </h5>
          <ul className="list-disc ml-8">
            <li>
              <Link
                href="https://www.forestland.fr/"
                className="text-main font-semibold"
                target="_blank"
              >
                Forestland
              </Link>
            </li>
            <li>
              <Link
                href="https://www.cinemadivonne.com/"
                className="text-main font-semibold"
                target="_blank"
              >
                Cinéma
              </Link>
            </li>
            <li>
              <Link
                href="https://www.france-voyage.com/balades/divonne-les-bains-commune-990.htm"
                className="text-main font-semibold"
                target="_blank"
              >
                Randonnée
              </Link>
            </li>
          </ul>
        </div>
      </CityDescription>

      {/* Hotels */}
      <Container className="flex flex-col gap-y-8 items-center mb-4">
        <h2 className="text-4xl text-center pb-2 font-bold relative w-fit after:absolute after:bottom-0 after:left-1/2 after:w-[80%] after:h-[2px] after:bg-main after:-translate-x-1/2">
          Hotels à Divonne-Les-Bains
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-x-3 gap-y-4 justify-center">
          <HotelsCard
            link={"https://www.domainedivonne.com/"}
            image={"/destinations/DivonneLesBainsHotel1.webp"}
            title={"Domaine De Divonne"}
            typeHotel={"Hôtel de tourisme 4 étoiles"}
            descripthion={"Av. des Thermes, 01220 Divonne-les-Bains"}
          />
          <HotelsCard
            link={
              "https://www.lavilladulac.com/?utm_source=Fastbooking&utm_medium=cpc&utm_campaign=fb_branding%3FHotelnames%3DFRVACHTLVLac&campaign=CA002702&campaignb&d=30d-xppc&partner=FB-PACK-PPC-15&campaignId=624481393%7C33583024514%7Ckwd-kwd-6235760581%7CCA002702%7C&device=c&network=google&gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpdukM-z8NLmQWOocLabzTPg611kEZxHLzzRSeczekJGYXs7w1qRwXQaAsZcEALw_wcB"
            }
            image={"/destinations/DivonneLesBainsHotel2.webp"}
            title={"Hôtel & Résidence La Villa du Lac"}
            typeHotel={"Hôtel de tourisme 3 étoiles"}
            descripthion={"93 Chem. du Châtelard, 01220 Divonne-les-Bains"}
          />
          <HotelsCard
            link={
              "https://www.zenitude-hotel-residences.com/fr_FR/residence/divonne-les-bains/115"
            }
            image={"/destinations/DivonneLesBainsHotel3.webp"}
            title={"Zenitude Hôtel-Résidences L'Orée du Parc"}
            typeHotel={"Résidence de tourisme 3 étoiles"}
            descripthion={"237 Av. des Thermes, 01220 Divonne-les-Bains"}
          />
          <HotelsCard
            link={"https://europe.huttopia.com/"}
            image={"/destinations/DivonneLesBainsHotel4.webp"}
            title={"Les Présidents - Domaine de Divonne"}
            typeHotel={"Av. des Thermes, 01220 Divonne-les-Bains"}
            descripthion={"Téléphone : 04 50 40 34 34"}
          />
        </div>
      </Container>

      {/* Resturant */}
      <Container className="flex flex-col gap-y-8 items-center my-8">
        <h2 className="text-4xl text-center pb-2 font-bold relative w-fit after:absolute after:bottom-0 after:left-1/2 after:w-[80%] after:h-[2px] after:bg-main after:-translate-x-1/2">
          Restaurants et Bars à Divonne-Les-Bains
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-x-3 gap-y-4 justify-center">
          <HotelsCard
            link={"https://restaurant-lac-divonne.com/"}
            image={"/destinations/DivonneLesBainsResturant1.webp"}
            title={"Le Rectiligne"}
            descripthion={
              "Ce restaurant sert une cuisine moderne haut de gamme avec une terrasse avec vue sur lac"
            }
            address={"2981 Rue Tour du Lac, 01220 Divonne-les-Bains"}
            telephone={"04 50 20 06 13"}
          />
          <HotelsCard
            link={"https://www.restaurant-lasuite.fr/"}
            image={"/destinations/DivonneLesBainsResturant2.webp"}
            title={"Restaurant La Suite"}
            address={"21 Rue de Vigny, 01220 Divonne-les-Bains"}
            telephone={"04 50 20 58 06"}
          />
          <HotelsCard
            link={"https://www.laterrassefleurie.fr/"}
            image={"/destinations/DivonneLesBainsResturant3.webp"}
            title={"Restaurant La Terrasse Fleurie"}
            address={"315 Rue Fontaine, 01220 Divonne-les-Bains"}
            telephone={"04 50 20 06 32"}
          />
          <HotelsCard
            link={"https://europe.huttopia.com/"}
            image={"/destinations/DivonneLesBainsResturant4.webp"}
            title={"Les Présidents - Domaine de Divonne"}
            address={"Av. des Thermes, 01220 Divonne-les-Bains"}
            telephone={"04 50 40 34 34"}
          />
        </div>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-[45%_auto] gap-x-5 gap-y-4 my-10">
        <div className="flex flex-col gap-y-4">
          <h5 className="text-secondary font-semibold text-xl">
            Commander un vtc taxi à Divonne-Les-Bains en ligne
          </h5>
          <h5 className="text-black font-semibold text-lg">
            Souhaitez-Vous prendre un vtc au départ de Divonne-Les-Bains ou
            voulez-vous vous rendre ?
          </h5>
          <h5 className="text-secondary font-semibold text-xl">
            Nous sommes disponibles 24/7, de jour comme de nuit pour vous
            conduire partout en France et même en Europe.
          </h5>
          <h4 className="text-black font-bold text-lg">
            La commande d&apos;un VTC ou taxi est très simple pour aller à l&apos;aéroport
            :
          </h4>
          <ul className="list-disc ml-10">
            <li>Aéroport de Lyon Saint Exupéry</li>
            <li>Aéroport de Grenoble Isère</li>
            <li>Aéroport de Chambery Savoie</li>
            <li>Altiport de Megève</li>
          </ul>
          <h4 className="text-secondary font-semibold text-xl">
            Appeler ou commander TOUT DE SUITE OU L&apos;IMMÉDIAT
          </h4>
          <h4 className="text-secondary font-semibold text-lg">
            Il est fortement recommandé d&apos;effectuer votre réservation 1 HEURE EN
            AVANCE. Pour être certain de la présence de votre VTC. Les
            chauffeurs fonctionnent par réservation, cela garantit leur
            ponctualité
          </h4>
          <h4 className="text-black font-semibold text-xl">
            Système de réservation SIMPLE & RAPIDE
          </h4>
        </div>
        <div>
          <img
            alt="saint genis polliy Taxi uber ibis budget Taxi airport ibis Taxi ibis rouge Taxi challex Challex cab"
            src={"/destinations/DivonneLesBainsCity2.webp"}
            width={100}
            height={100}
            className="object-cover w-full "
            loading="lazy"
          />
        </div>
      </Container>
    </>
  );
}

export default DivonneLesBains;
