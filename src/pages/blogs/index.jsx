/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import PageHead from "@/components/globalComponents/PageHead";
import AxiosInstance from "@/helper/AxiosInstance";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";

const Blogs = () => {
  const router = useRouter()
  const [showBlogs, setShowBlogs] = useState(4);
  const [blog, setBlog] = useState([])


  useEffect(() => {

    AxiosInstance.get('blog')
    .then((res) => {
      setBlog(res.data)
    })
    .catch(((err) => {
      console.log(err)
    }))

  }, [])

  const handelGoToDetails = (data)=>{
    router.push({pathname:"/blogs/details-blog" , query:{blog:JSON.stringify(data)}})
  }
  return (
    <>
      <PageHead
        title="BLOG – KiroTravel VTC TAXI Pays De Gex"
        description="blog kirotravel - reserver un taxi dans le pays de gex ou à geneve - informations transport - meilleur plateforme vtc taxi qualité prix taxi ferney voltaire"
        keyWords="taxi / cab, Ferney-Voltaire, France driver, taxi, cab, limo, limousine, bus, coach, coaches, rickshaw, mototaxi, moto taxi, wheelchair taxis, best rate, low cost, cheapest Réserver taxi à Saint-Genis-Pouilly, kirolimo taxi vtc saint genis pouilly, kiro limo saint genis pouilly, taxi aéroport de geneve saint genis pouilly, taxi aeroport gare de genève,  taxi gare saint genis pouilly, Réserver taxi à Péron, commander un taxi à Sergy, Réserver taxi Saint-Jean-de-Gonville, Réserver taxi à Challex, taxi le plus proche, transport saint genis pouilly, taxi enfant saint genis pouilly, périscolaire, transport taxi eglise saint pierre de pouilly, réservation taxi technoparc saint genis pouilly, taxi hotel Séjours & Affaires,taxi ibis budget Saint-Genis-Pouilly Genève, taxi Hôtel initial by balladins Genève, taxi Hôtel Kyriad Genève Pouilly, taxi Hôtel Première Classe Genève Saint genis pouilly, taxi Best Western Park Hotel, taxi ibis, taxi Aparthotel Adagio Genève Saint-Genis-Pouilly, taxi pays de gex, taxi airbnb saint genis pouilly, taxi 01630, louer un appartement saint genis pouilly, kiro limo uber saint genis pouilly, service de taxi saint genis pouilly, taxi Hôtel Kyriad Genève Pouilly, taxi Hôtel Première Classe Genève Saint Genis Pouilly, Réserver taxi à Thoiry, taxi aeroport Thoiry, taxi gare Thoiry, Réserver taxi à Thoiry, commander un taxi à Thoiry, taxi enfant thoiry, transport entreprise thoiry, taxi valthoiry, kirolimo taxi vtc thoiry, kiro limo thoiry, louer un appartement à thoiry, kiro limo uber thoiry, taxi 01710, uber thoiry, Réserver taxi à Ségny, kirolimo taxi vtc saint genis pouilly Gex, taxi aéroport à Gex, taxi gare cornavin Gex, tax col de la faucille, taxi mainaz, Réserver taxi Vesancy, Réserver taxi Échenevex, Réserver taxi Crozet, taxi jiva hill, service de taxi jivahill, transfert de taxi de jivahill, commander un taxi jivahill, réserver un taxi jivahill, réservation uber jivahill, Réservation taxi Chevry, Réserver taxi Cessy, kiro limo taxi vtc Collonges, réserver taxi collonges, taxi gare bellegarde collonge, taxi technoparc collonge, uber collonge, réserver un taxi à Farges, commande un taxi à Pougny, Réserver taxi à Ferney-Voltaire, service de taxi Ferney-Voltaire, réservation d’un taxi Ferney-Voltaire, kiro limo ferney voltaire, taxi aeroport Ferney-Voltaire, taxi gare ferney voltaire, taxi uber Ferney-Voltaire, transport Ferney-Voltaire, kiro limo location Ferney-Voltaire, Réservation d'un taxi Versonnex, Réservation d'un taxi Ornex, taxi hotel m3, taxi hotel la reserve Ferney-Voltaire, réservation d’un taxi appart city Ferney-Voltaire, commander un taxi appart city odalys Ferney-Voltaire, taxi hotel de france Ferney-Voltaire, taxi hotel novotel Ferney-Voltaire, taxi, taxi Hôtel Première Classe Genève - Aéroport - Prévessin, taxi Hôtel Restaurant Campanile Genève Aéroport Palexpo, taxi Hôtel F1, taxi leclerc ferney voltaire, réservation taxi Divonne-les-Bains, taxi domaine de divonne, taxi casino divonne, réserver un taxi à Sauverny, réservation d’un taxi Grilly, taxi pour des vols de Cointrin Genève Aéroport GVA, taxi de Lyon Saint-Exupéry LYS, taxi pour des trains SNCF pour la gare d’Annecy, taxi la gare d'Annemasse, taxi gare de Saint-Julien-en-Genevois, taxi pour trains CFF, taxi Gare de Genève-Cornavin, réserver VTC en ligne, réserver taxi en ligne,  location voiture, taxi gare de bellegarde, taxi pays de gex, service de taxi pays de gex, taxi gare aeroport de geneve, taxi gare de bellegarde, taxi hôpital saint julien en genevois, service de taxi hôpital d’annemasse, kiro limo taxi pays de gex, kiro limo circuit genève, kiro limo circuit haute savoie, kiro limo location , kiro limo taxi station, kiro limo taxi jura, taxi covid, taxi attestation de déplacement, vtc covid, taxi attestation covid, taxi pas cher , cab, uber cab, reserve a taxi, taxi visiter genève, kiro limo taxi voyage genève, kiro limo taxi assistance, taxi voiture en panne, taxi anima-vet, taxi office de tourisme pays de gex, taxi fête, taxi restaurant pays de gex, taxi easyjet, taxi jet privé, taxi tag aviation, taxi globalia, taxi balexert, taxi ikea geneve, taxi casino geneva, taxi palexpo geneva, taxi onu, taxi migros suisse, taxi organisation internationale, taxi geneva, taxi lac de genève, cab geneva lake"
      />
      <div className="">
        {/* Header Title  */}
        <div
          className="relative h-[120vh] min-h-screen flex justify-center items-center w-full"
        >
          <img src="/blog/blog-bg.png" width={100} height={100} className="object-cover w-full h-full absolute top-0 left-0 -z-10" alt="taxi ferney voltaire"  />
          
          <Container className="grid grid-cols-2 items-center gap-4 overflow-hidden">
            <div
              className="w-[90%] flex flex-col items-center gap-y-4 text-white animate__animated animate__bounceInLeft"
            >
              <small className="flex items-center gap-x-1">Blog <span><BsStars /> </span></small>

              <h1 className="text-3xl font-bold">Our news</h1>
              <h3 className="text-xl">Get The Latest Updates</h3>
              <p className="text-center text-lg text-[#8794BA]">Welcome to Ferny-Voltaire, a picturesque town nestled in the heart of France, boasting a captivating blend of history, culture, and natural beauty. In this blog, we&apos;ll take you on a...</p>
            </div>

            <div className="w-full animate__animated animate__bounceInRight">
              <img src="/blog/blog.png" className="" alt="taxi ferney voltaire"  />
            </div>
          </Container>
        </div>

      <div className="w-full flex flex-col items-center gap-y-5">
        <h2 className="text-[#2F327D] text-xl font-bold tracking-wider">Lastest News and Resources</h2>
        <h6 className="text-[#696984] text-base">See the developments that have occurred to Skillines in the world</h6>

        <Container className="grid grid-cols-2 gap-4 items-stretch">
          {blog.slice(0, showBlogs).map((item, i) => (
            <div
              key={i}
              className="w-full flex justify-between gap-x-2 animate__animated animate__fadeInLeft"
              style={{animationDelay:i * 200+'ms'}}
            >
              <div
                className="w-[45%] relative"
              >
                <img src="/blog/card.png" className="object-fill w-full h-full" alt="taxi ferney voltaire"  />
                <button onClick={()=>handelGoToDetails(item)}  className="py-2 px-4 text-sm rounded-3xl bg-[#F4C467] text-[#252641] absolute bottom-2 right-2">
                  Read More
                </button>
              </div>

              <div className="w-full flex flex-col gap-y-3">
                <h4 className="text-lg text-[#252641] line-clamp-1">{item?.title}</h4>
                <p className="text-[#696984] line-clamp-4">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </div>

      <div className="w-full flex justify-center items-center my-6">
        {blog.length > showBlogs && <button
          onClick={() => setShowBlogs(showBlogs + 2)}
          className="py-3 tracking-widest rounded-lg font-bold border-none bg-black text-white px-8"
        >
          Load More
        </button>}
      </div>
      </div>
    </>
  );
};

export default Blogs;

// export async function getServerSideProps(res) {
//   try{

//     const {data} = await AxiosInstance.get("blog/")

//     return{
//       props:{blog:data}
//     }

//   }
//   catch (err){
//     return{
//       props:{blog:[]}
//     }
//   }
// }