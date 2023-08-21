/* eslint-disable @next/next/no-img-element */
import CityDescription from "@/components/destinations/CityDescription";
import HeroSection from "@/components/destinations/HeroSection";
import HotelsCard from "@/components/destinations/HotelsCard";
import Container from "@/components/globalComponents/Container";
import PageHead from "@/components/globalComponents/PageHead";
import { Accordion } from "flowbite-react";
import Link from "next/link";
import React from "react";

function FerneyVoltaire() {
  return (
    <>
      <PageHead title="Taxi Ferney Voltaire – KiroTravel VTC TAXI Pays De Gex" 
        description="Réserver un vtc taxi Ferney-Voltaire La réservation en avance est recommandée (Minimum 1 heure) RÉSERVER VOTRE VTC APPELER Recherchez vous un Uber, un Chauffeur privé ou un taxi ou sur Ferney-Voltaire et dans le Pays de Gex ? Pratiquant des prix fixes, sans aucun frais, aucune majoration. Le paiement se fait à bord, directement au chauffeur Compare and book a taxi in Ferney-Voltaire in 3 clicks - 38 drivers compete to propose their best fixed rate."
        keyWords="taxi / cab, Ferney-Voltaire, ferney voltaire, taxi ferney voltaire, France driver, taxi, cab, limo, limousine, bus, coach, coaches, rickshaw, mototaxi, moto taxi, wheelchair taxis, best rate, low cost, cheapest Réserver taxi à Ferney-Voltaire, service de taxi Ferney-Voltaire, réservation d’un taxi Ferney-Voltaire, kiro limo ferney voltaire, taxi aeroport Ferney-Voltaire, taxi gare ferney voltaire, taxi uber Ferney-Voltaire, transport Ferney-Voltaire, kiro limo location Ferney-Voltaire, Réservation d'un taxi Versonnex, Réservation d'un taxi Ornex, taxi hotel m3, taxi hotel la reserve Ferney-Voltaire, réservation d’un taxi appart city Ferney-Voltaire, commander un taxi appart city odalys Ferney-Voltaire, taxi hotel de france Ferney-Voltaire, taxi hotel novotel Ferney-Voltaire, taxi, taxi Hôtel Première Classe Genève - Aéroport - Prévessin, taxi Hôtel Restaurant Campanile Genève Aéroport Palexpo, taxi Hôtel F1, taxi leclerc ferney voltaire"
        linkImage='/destinations/FerneyVoltaire.webp'
    />
      <HeroSection
        image={"/destinations/FerneyVoltaire.webp"}
        title="RÉSERVER UN VTC TAXI FERNEY-VOLTAIRE"
        description="La réservation en avance est recommandée (Minimum 1 heure)"
      />

      <Container className="flex flex-col gap-y-6 my-8">
        <p className="text-lg">
          Recherchez vous un Uber, un Chauffeur privé ou un taxi ou sur
          Ferney-Voltaire et dans le Pays de Gex ? Pratiquant des prix fixes,
          sans aucun frais, aucune majoration. Le paiement se fait à bord,
          directement au chauffeur par CB ou en espèces.
        </p>

        <p className="text-lg">
          Veuillez trouver Ci-dessous, questions-réponses les plus fréquemment
          posées et quelques informations utiles sur la ville,
          <strong>des restaurants à Ferney Voltaire</strong> , des hôtels Si vous
          ne trouvez pas l&apos;information recherchée,
          <strong><Link href="/contact-us"> contactez-nous</Link></strong> et nous vous apporterons une réponse
          précise.
        </p>

        <Accordion className="">
          {/* 1 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Une course de taxi ou d&apos;un vtc entre Ferney-Voltaire et Aéroport
              de Genève (GVA) international airport of Geneva, quel en serait le
              coût ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le coût d&apos;un taxi ou un VTC est à partir de{" "}
                  <strong>25 €</strong> (tarif forfaitaire du jour ).
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
          {/* 2 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              De Ferney-Voltaire jusqu&apos;à Annecy, quelle est la tarification d&apos;un
              taxi ou un vtc?
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
                  Distance: <strong>48 km</strong> Durée: <strong>44 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Ferney-Voltaire/Annecy/@46.0784944,5.7623149,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c6389fc95d58b:0x408ab2ae4c20f70!2m2!1d6.108669!2d46.257632!1m5!1m1!1s0x478b8fe55861febb:0x6a90ac32b5ab892b!2m2!1d6.1295411!2d45.8990887!3e0"
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
              Quel est le prix d&apos;un vtc - taxi pour le trajet Ferney-Voltaire -
              la Gare SNCF de Bellegarde sur Valserine ? (Avenue de la Gare
              01200 Valserhône)
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Le tarif pour ce trajet est à partir de <strong>80 €</strong>{" "}
                  (Tarif du jour) <strong>110 €</strong> (Tarif du nuit)
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
                  Distance: <strong>36 km</strong> Durée: <strong>32 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Ferney-Voltaire/Gare+de+Bellegarde,+Valserh%C3%B4ne/@46.1580348,5.831074,11z/data=!4m14!4m13!1m5!1m1!1s0x478c6389fc95d58b:0x408ab2ae4c20f70!2m2!1d6.108669!2d46.257632!1m5!1m1!1s0x478c833b265695e5:0x413f343a937bdbb7!2m2!1d5.8259449!2d46.1108981!3e0"
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
              Pour un taxi de Ferney-Voltaire à Saint-Genis-Pouilly, quelle
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
              Quel est le prix d&apos;un taxi de Ferney-Voltaire à
              Saint-Julien-en-Genevois ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  La meilleure tranche tarifaire d&apos;un taxi ou d&apos;un VTC pour ce
                  trajet est à partir de <strong>62 €</strong> (Tarif du jour)
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
                  <strong>62 € (Sans attente)</strong>
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
              </div>
            </Accordion.Content>
          </Accordion.Panel>
          {/* 6 */}
          <Accordion.Panel>
            <Accordion.Title className="!bg-transparent !text-black focus:!ring-main focus:!ring-2 ">
              Pour un taxi de Ferney-Voltaire à Annemasse, quel est le prix ?
            </Accordion.Title>
            <Accordion.Content className="!bg-transparent text-black">
              <div className="flex flex-col gap-y-4 ml-3">
                <p>
                  Communément, le tarif d&apos;un taxi ou d&apos;un vtc est à partir de{" "}
                  <strong>75 €</strong> (Tarif du jour) , <strong>110 €</strong>{" "}
                  (Tarif du jour)
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
                  <strong>75 € (Sans attente)</strong>
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
                  Distance: <strong>32 km</strong> Durée: <strong>30 mn</strong>{" "}
                  <Link
                    href="https://www.google.com/maps/dir/Ferney-Voltaire/Annemasse/@46.1948456,6.0146793,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x478c6389fc95d58b:0x408ab2ae4c20f70!2m2!1d6.108669!2d46.257632!1m5!1m1!1s0x478c6e2a0aae266b:0x9c5b0362feb46ded!2m2!1d6.234158!2d46.193253!3e0"
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
          Tarifs spéciaux pour les longues distances + de 50KM demandez un Devis
          et comparez les prix. (Départ de Ferney-Voltaire)
        </h2>
      </Container>

      <CityDescription
        title="Ferney-Voltaire"
        image="/destinations/FerneyVoltaireCity.webp"
        content={[
          "Ferney-Voltaire est une commune française, située dans le département de l'Ain et la région Auvergne-Rhône-Alpes.",
          "Elle se trouve dans le pays de Gex. Elle se situe aussi à côté de la frontière suisse, elle fait partie de l'agglomération transfrontalière de Genève.",
          "La première mention de Ferney apparaît dans  les registres bourguignons au XIVe siècle. Elle est alors orthographiée Fernex .",
          "La principale attraction touristique de Ferney est son château. Construit de 1758 à 1766, il a été classé monument historique. Voltaire choisit Ferney en 1759 pour sa proximité de la frontière, utile en cas de problème avec l'administration royale, et ce qui lui permettait de se mettre à l'abri.",
          "Le château comprend le bâtiment principal avec une reconstruction de la chambre de Voltaire, un jardin avec vue sur les Alpes et une église consacrée à Dieu. ",
          "On trouve à quelques mètres du château,  une maison construite en 1900 par Monsieur Lambert, qui servait à stocker des provisions et du vin pour le château.",
          "Dans le village, on trouve de nombreux bâtiments datant du XVIIIe siècle, mais aussi deux statues de Voltaire, l'une grandeur nature située au centre du village, sculptée par Monsieur Lambert, l'autre est un buste situé au dessus d'une fontaine.",
        ]}
      />

      {/* Hotels */}
      <Container className="flex flex-col gap-y-8 items-center mb-4">
        <h2 className="text-4xl text-center pb-2 font-bold relative w-fit after:absolute after:bottom-0 after:left-1/2 after:w-[80%] after:h-[2px] after:bg-main after:-translate-x-1/2">
          Hotels à Saint-Genis-Pouilly
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-x-3 gap-y-4 justify-center">
          <HotelsCard
            link={"https://www.myresidhome.com/"}
            image={"/destinations/FerneyVoltaireHotel1.webp"}
            title={"Residhome Prévessin Moens Le Carré d'Or"}
            typeHotel={"Résidence de tourisme 3 étoiles"}
            descripthion={`131 Impasse du Mandement, 01280 Prévessin-Moëns `}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel Residhome Prévessin Moens{" "}
              <br />
              le Carré d&apos;Or jusqu&apos;à l&apos;aéroport de Genève ={" "}
              <span className="font-bold">35€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={
              "https://all.accor.com/ssr/app/novotel/hotels/ferney-voltaire-france/index.fr.shtml?compositions=1&stayplus=false&utm_term=mar&gclid=CjwKCAjwhMmEBhBwEiwAXwFoEUfaPXrqK1O0ija9OlLRxGIwN8KjI-sGlsbJI_tEtO9VD9w6WCBCGBoCDDUQAvD_BwE&utm_campaign=ppc-nov-mar-goo-fr-fr-fr-exa-sear-bp&utm_medium=cpc&utm_source=google&utm_content=fr-fr-CH-V1313"
            }
            image={"/destinations/FerneyVoltaireHotel2.webp"}
            title={"Hôtel Novotel"}
            typeHotel={"Hôtel de tourisme 4 étoiles"}
            descripthion={`Chemin des Trois Noyers, 01210 Ferney-Voltaire`}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel Novotel jusqu&apos;à
              l&apos;aéroport <br /> de Genève ={" "}
              <span className="font-bold">30€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={
              "https://www.appartcity.com/fr/destinations/rhone-alpes/ferney-voltaire/geneve-aeroport.html"
            }
            image={"/destinations/FerneyVoltaireHotel3.webp"}
            title={"Appart'City Confort Genève Aéroport - Ferney Voltaire"}
            typeHotel={"Résidence de tourisme 4 étoiles"}
            descripthion={`11 Avenue des Sablonnières, 01210 Ferney-Voltaire`}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel Appart&apos;City Confort
              Genève <br /> Aéroport - Ferney Voltaire jusqu&apos;à
              l&apos;aéroport de Genève ={" "}
              <span className="font-bold">25€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={"https://www.campanile.com/sejour/hotel-ferney-voltaire.html"}
            image={"/destinations/FerneyVoltaireHotel4.webp"}
            title={"Hôtel Restaurant Campanile Genève Aéroport Palexpo"}
            typeHotel={"Résidence de tourisme 3 étoiles"}
            descripthion={`20 Chemin de la Planche Brûlée, 01210 Ferney-Voltaire`}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel Campanile Ferney-voltaire
              jusqu&apos;à l&apos;aéroport de Genève =
              <span className="font-bold">30€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={"https://www.campanile.com/sejour/hotel-ferney-voltaire.html"}
            image={"/destinations/FerneyVoltaireHotel5.webp"}
            title={"Hôtel de France - Restaurant"}
            typeHotel={"1 Rue de Genève, 01210 Ferney-Voltaire"}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel de France Ferney
              jusqu&apos;à l&apos;aéroport de Genève =
              <span className="font-bold">25€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={
              "https://all.accor.com/ssr/app/accor/rates/2257/index.fr.shtml?dateIn=2021-05-06&nights=1&compositions=2&stayplus=false&gclid=Cj0KCQjwp86EBhD7ARIsAFkgakjfgD6T_3b3SBVwWD5AiSI63XkGH1wElckDwzKejxhoaRUg9xtDVDsaAnThEALw_wcB&utm_campaign=2257-FR-cpc-desktop-default-0--localuniversal-10315734617-0-0-1&utm_medium=partenariats&utm_source=Google%20Hotel%20Ads"
            }
            image={"/destinations/FerneyVoltaireHotel6.webp"}
            title={"Hôtel F1"}
            typeHotel={
              "Route De Meyrin Gps:, Chemin des Trois Noyers, 01210 Ferney-Voltaire"
            }
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel F1 Ferney jusqu&apos;à
              l&apos;aéroport <br /> de Genève ={" "}
              <span className="font-bold">30€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={"https://www.m-3hotelferney.com"}
            image={"/destinations/FerneyVoltaireHotel7.webp"}
            title={"m3 Hotel Ferney Geneva Airport"}
            typeHotel={"Hôtel de tourisme 4 étoiles"}
            descripthion={"34 Rue de Genève, 01210 Ferney-Voltaire"}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel F1 Ferney jusqu&apos;à
              l&apos;aéroport <br /> de Genève ={" "}
              <span className="font-bold">25€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>

          <HotelsCard
            link={
              "https://www.odalys-vacances.com/location-campagne/bourgogne-et-ain/ferney-voltaire/apparthotel-et-spa-ferney-geneve.html"
            }
            image={"/destinations/FerneyVoltaireHotel8.webp"}
            title={"Appart'hôtel et Spa Odalys Ferney Genève"}
            typeHotel={"Hôtel de tourisme 4 étoiles"}
            descripthion={"13 Chemin du Levant, 01210 Ferney-Voltaire"}
          >
            <span className="font-semibold">
              Prix transfert Vtc taxi de l&apos;hôtel F1 Ferney jusqu&apos;à
              l&apos;aéroport <br /> de Genève ={" "}
              <span className="font-bold">25€ (Tarif du jour et de nuit)</span>
            </span>
          </HotelsCard>
        </div>
      </Container>

      {/* Resturant */}
      <Container className="flex flex-col gap-y-8 items-center my-8">
        <h2 className="text-4xl text-center pb-2 font-bold relative w-fit after:absolute after:bottom-0 after:left-1/2 after:w-[80%] after:h-[2px] after:bg-main after:-translate-x-1/2">
          Restaurants et Bars à Divonne-Les-Bains
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 gap-x-3 gap-y-4 justify-center">
          <HotelsCard
            link={"https://www.delarte.fr/restaurants/1388-ferney-voltaire"}
            image={"/destinations/FerneyVoltaireResturant1.webp"}
            title={"Del Arte"}
            descripthion={
              "Antipasti, pâtes et pizzas servis dans le cadre convivial et chaleureux d'une chaîne de restaurants italiens."
            }
            address={
              "Route de Meyrin Zone commerciale Leclerc, 01210 Ferney-Voltaire"
            }
            linkMenu={"https://www.delarte.fr/carte/categorie/Pizzas/pizzas"}
            menuWord={"delarte.fr"}
            telephone={"04 50 42 74 45"}
          />

          <HotelsCard
            link={"https://restaurant-rajpoute.fr/fr/lerest.htm"}
            image={"/destinations/FerneyVoltaireResturant2.webp"}
            title={"Rajpoute"}
            address={"1553 Rue de Genève, 01210 Ornex"}
            telephone={"04 50 40 82 90"}
          />

          <HotelsCard
            link={
              "https://www.facebook.com/pages/LAzzura-Restaurant-Pizzeria/260102974068510"
            }
            image={"/destinations/FerneyVoltaireResturant3.webp"}
            title={"L'azzura"}
            descripthion={
              "Dans un cadre moderne sobre ou à emporter, pizzas, pâtes et autres spécialités italiennes traditionnelles."
            }
            address={"15 Grand' Rue, 01210 Ferney-Voltaire"}
            menuWord={"pizzeria-azzurra.fr"}
            linkMenu={"https://pizzeria-azzurra.fr/"}
            linkCommander={"http://lecomptoir.app/lazzurra"}
            commanderWord={"lecomptoir.app"}
            telephone={"04 50 42 96 46"}
          />

          <HotelsCard
            link={"https://www.restaurant-shalimar-ferneyvoltaire.fr"}
            image={"/destinations/FerneyVoltaireResturant4.webp"}
            title={"Shalimar"}
            descripthion={
              "Un restaurant  de spécialités indiennes et pakistanaises."
            }
            address={"34 Chemin des Mûriers, 01210 Ferney-Voltaire"}
            linkCommander={
              "https://www.ubereats.com/fr/lyon/food-delivery/restaurant-shalimar/2jvG4sYJTa2jFbTeP1XAog/?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
            }
            commanderWord={"ubereats.com"}
            telephone={"04 50 40 48 03"}
          />

          <HotelsCard
            link={"https://restaurant-bee-mai.fr/"}
            image={"/destinations/FerneyVoltaireResturant5.webp"}
            title={"Bee Mai"}
            descripthion={
              "Recettes thaïes et viétnamiennes dans un restaurant décontracté avec terrasse ombragée et service à emporter."
            }
            address={"41 Rue de Meyrin, 01210 Ferney-Voltaire"}
            menuWord={"restaurant-bee-mai.fr"}
            linkMenu={"https://restaurant-bee-mai.fr/#carte"}
            linkCommander={"https://restaurant-bee-mai.fr/#reservez"}
            commanderWord={"restaurant-bee-mai.fr"}
            telephone={"04 50 40 88 16"}
          />

          <HotelsCard
            link={"https://www.karma-lounge.fr/"}
            image={"/destinations/FerneyVoltaireResturant6.webp"}
            title={"Karma Lounge"}
            descripthion={
              "Ce restaurant aux tons violets et à l'éclairage tamisé propose des spécialités indiennes et pakistanaises."
            }
            address={"4 Rue de Versoix, 01210 Ferney-Voltaire"}
            menuWord={"karma-lounge.fr"}
            linkMenu={
              "http://www.karma-lounge.fr/cartes-et-menus-restaurant-indien-et-pakistanais-ferney-voltaire.php"
            }
            linkCommander={
              "https://www.just-eat.fr/menu/karma-lounge?utm_campaign=foodorder&utm_medium=organic&utm_source=google"
            }
            commanderWord={"just-eat.fr"}
            telephone={"04 50 28 01 72"}
          />

          <HotelsCard
            link={"https://www.chinathai.fr/"}
            image={"/destinations/FerneyVoltaireResturant7.webp"}
            title={"China Thai"}
            descripthion={
              "Chaises rouges, gong géant et lumières néon pour ce restaurant chaleureux à la cuisine chinoise et thaïe."
            }
            address={"3 Grand' Rue, 01210 Ferney-Voltaire"}
            telephone={"04 56 82 02 10"}
          />

          <HotelsCard
            link={"https://www.karma-lounge.fr/"}
            image={"/destinations/FerneyVoltaireResturant8.webp"}
            title={"PITAYA Thaï Street Food"}
            descripthion={
              "Restaurant Thaï, des plats traditionnels de la Street Food Made in Bangkok."
            }
            address={"Espace Candide, Route de Meyrin, 01210 Ferney-Voltaire"}
            menuWord={"pitayaresto.fr"}
            linkMenu={
              "https://www.pitaya-thaistreetfood.com/menu-pitaya-taste-the-thai-spirit/"
            }
            linkCommander={
              "https://www.pitayaresto.fr/carte/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness-menu"
            }
            commanderWord={"pitayaresto.fr"}
            telephone={"04 22 67 12 68"}
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
            alt="saint genis polliy Uber pays de gex Uber airport Geneva airport Uber Taxi villa du lac Hotel villa du lac Taxi casino divonne"
            src={'/destinations/FerneyVoltaireCity2.webp'}
            width={100}
            height={100}
            className="object-cover w-full "
          />
        </div>
      </Container>
    </>
  );
}

export default FerneyVoltaire;
