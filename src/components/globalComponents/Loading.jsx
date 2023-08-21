import React from "react";

function Loading({width , height}) {
  return (
    <span className="loader !border-b-mobileMain sm:!border-b-main"
      style={{width,height}}
    ></span>
  );
}

export default Loading;
