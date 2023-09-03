import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { loadGoogleMapsScript } from "../globalComponents/LoadScripting";

let autocompletes = null;

function AutoCompletee({placeholder , register}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadGoogleMapsScript('AIzaSyBqB6CgEEbTrE5b2LV_xC4DLOtag9wBPaQ', ['places'])
      .then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const onLoad = (autocomplete) => {
    autocompletes = autocomplete;
  };

  const handelPlaces = () => {
    if (autocompletes !== null) {
      let city = autocompletes.getPlace();
    }
  };
  return (
    <>
      {isLoaded && (
        <Autocomplete
          onLoad={(e) => onLoad(e)}
          onPlaceChanged={handelPlaces}
          className="w-full"
        >
          <div className="flex justify-between items-center relative ">
            <input
              className="w-full py-1 text-[14px] bg-transparent focus:ring-0 outline-none focus:outline-none"
              type="text"
              placeholder={placeholder}
              required
              {...register}
            />
          </div>
        </Autocomplete>
      )}
    </>
  );
}

export default AutoCompletee;
