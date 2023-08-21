/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function HotelsCard({
  link,
  title,
  typeHotel,
  address,
  image,
  telephone,
  descripthion,
  linkCommander,
  commanderWord,
  linkMenu,
  menuWord,
  children,
}) {

  const handelNavigate = ()=>{
    window.open(link, '_blank').focus();
  }
  return (
    <div
      onClick={handelNavigate}
      className="bg-white cursor-pointer shadow-lg rounded-lg border h-fit min-h-full pb-2 flex flex-col w-full hover:scale-105 hover:shadow-2xl duration-300"
    >
      <span className="h-[200px] w-full">
        <img alt="hotel" src={image} className="w-full h-full rounded-t-lg" />
      </span>
      <div className="py-2 px-3 w-full h-[50%]">
        <h3 className="font-bold text-lg">{title}</h3>
        {typeHotel && <p className="ml-3">{typeHotel}</p>}
        {descripthion && <p className="ml-3">{descripthion}</p>}
        {address && (
          <p className="">
            <span className="font-semibold">Adresse : </span>
            {address}
          </p>
        )}
        {linkMenu && (
          <Link href={linkMenu} target="_blank" className="">
            <p className="font-semibold">Menu : </p>
            {menuWord}
          </Link>
        )}
        {linkCommander && (
          <Link href={linkCommander} target="_blank" className=" inline-block">
            <p className="font-semibold">Commander : </p>
            {commanderWord}
          </Link>
        )}
        {telephone && (
          <p className="">
            <span className="font-semibold">Téléphone : </span>
            {telephone}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export default HotelsCard;
