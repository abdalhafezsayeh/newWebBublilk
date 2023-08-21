/* eslint-disable @next/next/no-img-element */
import Container from "@/components/globalComponents/Container";
import Loading from "@/components/globalComponents/Loading";
import PageHead from "@/components/globalComponents/PageHead";
import AxiosInstance from "@/helper/AxiosInstance";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-number-input";

function ContactUs() {
  const [loading , setLoading] = useState(false)
  const { handleSubmit, register, setValue , reset , getValues} = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    if(!values.phone){
      return toast.error("The Phone Input Is Requird")
    }
    setLoading(true)
    AxiosInstance.post('contact-us/',values)
      .then((res)=>{
        if(res.statusText == "Created")
          setValue("phone",null)
          reset()
          toast("Done Send Your Message",{
            icon:"👏",
            style:{
              backgroundColor:"#b080bc",
              color:"#FFF",
              padding:"10px 8px"
            }
          })
      })
      .catch((err)=> 
        toast.error("Somthing Happened Try Again Later")
      )
      .finally(()=> setLoading(false))
  };
  return (
    <>
      <PageHead
        title="Contact – KiroTravel VTC TAXI Pays De Gex"
        description="Saint Genis Pouilly, France Facebook-f Twitter Google Instagram Whatsapp Envoyer un message Web Site Nom Numéro de téléphone Email * Objet Message En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande d'une estimation et de la relation commerciale qui peut en découler. J'accepte la politique de confidentialité."
      />
      <div className="animate__animated animate__fadeIn relative min-h-screen h-max">
        <img
          alt="kiro travel car"
          src="/contactCover.webp"
          className="absolute w-full h-full top-0 left-0 object-left-bottom object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-30" />

        <Container className="flex justify-center lg:justify-end items-center z-10 relative h-full pb-12 pt-24">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`animate__animated animate__fadeInRight w-full md:w-[70%] lg:w-[50%] py-6 px-4 rounded-xl bg-[#fffff51a] md:backdrop-blur-md shadow-md flex flex-col justify-center gap-y-4 items-center`}
          >
            <h2 className="font-bold text-white text-xl  md:text-3xl">
              Envoyer un message
            </h2>
            {/* Name */}
            <div className="w-full flex flex-col gap-y-2">
              <label className="text-white">Nom</label>
              <input
                type="text"
                required
                {...register("name")}
                className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
              />
            </div>
            {/* Phone */}
            <div className="w-full flex flex-col gap-y-2">
              <label className="text-white">Numéro de téléphone</label>
              <PhoneInput
                defaultCountry="FR"
                onChange={(e) => setValue("phone", e)}
                value={getValues("phone")}
                className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none focus:!border-none"
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col gap-y-2">
              <label className="text-white">Email</label>
              <input
                type="email"
                required
                {...register("email")}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                className="w-full text-[14px] bg-white border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="w-full flex flex-col gap-y-2">
              <label className="text-white">Message</label>
              <textarea
                rows={3}
                required
                {...register("message")}
                className="w-full text-[14px] bg-white max-h-[100px] border border-slate-200 focus:ring-0 outline-none rounded-lg shadow p-3 focus:outline-none"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                disabled={loading}
                type="submit"
                className="py-2 px-4 bg-main text-white rounded-lg border border-transparent duration-300 
                    hover:bg-transparent hover:border-main hover:text-main flex items-center justify-center min-w-[122px] min-h-[45px]"
              >
                {loading ? <Loading width="27px" height="27px" /> :"ENVOYER"}
                
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
