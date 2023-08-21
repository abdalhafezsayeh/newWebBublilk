/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import PageHead from "@/components/globalComponents/PageHead";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

function DetailsBlog() {
  const router = useRouter()
  const {blog} = router.query
  const [ data , setData ] = useState()
  
  function checkJsonIsValid(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  useEffect(()=>{
    setData(typeof window != "undefined" && checkJsonIsValid(blog) ? JSON.parse(blog) : blog)
  },[blog])

  return (
    <>
      <PageHead
        title={data?.title}
        description="blog kirotravel - reserver un taxi dans le pays de gex ou à geneve - informations transport - meilleur plateforme vtc taxi qualité prix taxi ferney voltaire"
        keyWords="taxi / cab, Ferney-Voltaire, France driver, taxi, cab, limo, limousine, bus, coach, coaches, rickshaw, mototaxi, moto taxi, wheelchair taxis, best rate, low cost, cheapest Réserver taxi à Saint-Genis-Pouilly, kirolimo taxi vtc saint genis pouilly, kiro limo saint genis pouilly, taxi aéroport de geneve saint genis pouilly, taxi aeroport gare de genève,  taxi gare saint genis pouilly, Réserver taxi à Péron, commander un taxi à Sergy, Réserver taxi Saint-Jean-de-Gonville, Réserver taxi à Challex, taxi le plus proche, transport saint genis pouilly, taxi enfant saint genis pouilly, périscolaire, transport taxi eglise saint pierre de pouilly, réservation taxi technoparc saint genis pouilly, taxi hotel Séjours & Affaires,taxi ibis budget Saint-Genis-Pouilly Genève, taxi Hôtel initial by balladins Genève, taxi Hôtel Kyriad Genève Pouilly, taxi Hôtel Première Classe Genève Saint genis pouilly, taxi Best Western Park Hotel, taxi ibis, taxi Aparthotel Adagio Genève Saint-Genis-Pouilly, taxi pays de gex, taxi airbnb saint genis pouilly, taxi 01630, louer un appartement saint genis pouilly, kiro limo uber saint genis pouilly, service de taxi saint genis pouilly, taxi Hôtel Kyriad Genève Pouilly, taxi Hôtel Première Classe Genève Saint Genis Pouilly, Réserver taxi à Thoiry, taxi aeroport Thoiry, taxi gare Thoiry, Réserver taxi à Thoiry, commander un taxi à Thoiry, taxi enfant thoiry, transport entreprise thoiry, taxi valthoiry, kirolimo taxi vtc thoiry, kiro limo thoiry, louer un appartement à thoiry, kiro limo uber thoiry, taxi 01710, uber thoiry, Réserver taxi à Ségny, kirolimo taxi vtc saint genis pouilly Gex, taxi aéroport à Gex, taxi gare cornavin Gex, tax col de la faucille, taxi mainaz, Réserver taxi Vesancy, Réserver taxi Échenevex, Réserver taxi Crozet, taxi jiva hill, service de taxi jivahill, transfert de taxi de jivahill, commander un taxi jivahill, réserver un taxi jivahill, réservation uber jivahill, Réservation taxi Chevry, Réserver taxi Cessy, kiro limo taxi vtc Collonges, réserver taxi collonges, taxi gare bellegarde collonge, taxi technoparc collonge, uber collonge, réserver un taxi à Farges, commande un taxi à Pougny, Réserver taxi à Ferney-Voltaire, service de taxi Ferney-Voltaire, réservation d’un taxi Ferney-Voltaire, kiro limo ferney voltaire, taxi aeroport Ferney-Voltaire, taxi gare ferney voltaire, taxi uber Ferney-Voltaire, transport Ferney-Voltaire, kiro limo location Ferney-Voltaire, Réservation d'un taxi Versonnex, Réservation d'un taxi Ornex, taxi hotel m3, taxi hotel la reserve Ferney-Voltaire, réservation d’un taxi appart city Ferney-Voltaire, commander un taxi appart city odalys Ferney-Voltaire, taxi hotel de france Ferney-Voltaire, taxi hotel novotel Ferney-Voltaire, taxi, taxi Hôtel Première Classe Genève - Aéroport - Prévessin, taxi Hôtel Restaurant Campanile Genève Aéroport Palexpo, taxi Hôtel F1, taxi leclerc ferney voltaire, réservation taxi Divonne-les-Bains, taxi domaine de divonne, taxi casino divonne, réserver un taxi à Sauverny, réservation d’un taxi Grilly, taxi pour des vols de Cointrin Genève Aéroport GVA, taxi de Lyon Saint-Exupéry LYS, taxi pour des trains SNCF pour la gare d’Annecy, taxi la gare d'Annemasse, taxi gare de Saint-Julien-en-Genevois, taxi pour trains CFF, taxi Gare de Genève-Cornavin, réserver VTC en ligne, réserver taxi en ligne,  location voiture, taxi gare de bellegarde, taxi pays de gex, service de taxi pays de gex, taxi gare aeroport de geneve, taxi gare de bellegarde, taxi hôpital saint julien en genevois, service de taxi hôpital d’annemasse, kiro limo taxi pays de gex, kiro limo circuit genève, kiro limo circuit haute savoie, kiro limo location , kiro limo taxi station, kiro limo taxi jura, taxi covid, taxi attestation de déplacement, vtc covid, taxi attestation covid, taxi pas cher , cab, uber cab, reserve a taxi, taxi visiter genève, kiro limo taxi voyage genève, kiro limo taxi assistance, taxi voiture en panne, taxi anima-vet, taxi office de tourisme pays de gex, taxi fête, taxi restaurant pays de gex, taxi easyjet, taxi jet privé, taxi tag aviation, taxi globalia, taxi balexert, taxi ikea geneve, taxi casino geneva, taxi palexpo geneva, taxi onu, taxi migros suisse, taxi organisation internationale, taxi geneva, taxi lac de genève, cab geneva lake"
      />
      <div className="relative h-fit">
        <img src="/blog/blog-bg.png" width={100} height={100} className="object-cover object-bottom w-full h-[65%] absolute top-0 left-0 -z-10" alt="taxi ferney voltaire"  />
      
        <div className="flex justify-center items-center w-full h-full">

          <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] h-fit mt-[200px] mb-[100px] detailBlogs object-cover lg:object-contain">
            <div className="w-full relative">
            <div onClick={() => router.push('/blogs')} className="cursor-pointer absolute -top-24 -left-7 text-white flex gap-2 items-center">
              <AiOutlineArrowLeft />
              back to list
            </div>
              <img
                width={400}
                src="/blog/card.png"
                className="w-[400px] h-full float-left mr-3"
              />
              <div>
                <h4 className="text-2xl font-bold mb-3">{data?.title}</h4>
                <h6 className="mb-2 font-bold">Description:</h6>
                <p className="text-[#444]">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default DetailsBlog;
