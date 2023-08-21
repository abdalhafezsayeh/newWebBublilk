/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function HeroSection({ image, title, description }) {
  return (
    <div className="relative h-[80vh] w-full flex justify-center items-center">
      <img
        src={image}
        alt="Saint-Genis-Pouilly"
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />

      <div className="flex flex-col items-center gap-y-4 z-10">
        <h1 className="text-center text-white font-bold text-2xl md:text-3xl lg:text-5xl">
          {title}
        </h1>
        <h3 className="text-secondary-light text-xl lg:text-2xl text-center">
          {description}
        </h3>
        <Link
          href="/"
          className="bg-main py-2 px-4 text-center duration-300 font-semibod uppercase text-white border border-transparent hover:bg-transparent hover:border-main "
        >
          RÉSERVER VOTRE VTC
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
