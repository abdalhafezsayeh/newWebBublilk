/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "../globalComponents/Container";

function CityDescription({
  title,
  image,
  content = [],
  children
}) {
  return (
    <Container className="flex flex-col gap-y-6 items-center my-5">
      <h2 className="text-4xl text-center pb-2 font-bold relative w-fit after:absolute after:bottom-0 after:left-1/2 after:w-[80%] after:h-[2px] after:bg-main after:-translate-x-1/2">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-min h-max overflow-hidden mb-5 w-full">
        <div className="w-full h-full overflow-hidden">
          <img
            src={image}
            alt="Saint Genis Pouilly City"
            width={100}
            height={100}
            className="w-full object-contain"
          />
        </div>
        <div className="w-full flex flex-col gap-y-5">
          {children ? children : content.map((item, index) => (
            <p key={index} className="font-normal">
              {item}
            </p>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default CityDescription;
