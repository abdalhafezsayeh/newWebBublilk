
import React, { useEffect , useState } from 'react';
import { GoogleMap, Marker , DirectionsRenderer } from '@react-google-maps/api';

const center = {lat: 46.227638, lng: 2.213749} 

const SelectMapMobile = ({ originRef , destiationRef}) => {
    
    const [map, setMap] = useState(/** @type google.maps.Map */ (null));
    
    const [directionResponse, setDirectionResponse] = useState(null);

    useEffect(()=>{
        if(originRef == '' || destiationRef == '') {
            return
        }
        const dirctionServices = new google.maps.DirectionsService();
        const result = dirctionServices.route({
            origin: originRef,
            destination: destiationRef,
            travelMode: google.maps.TravelMode.DRIVING,
        }).then((res)=>{
            setDirectionResponse(res)
        }).catch((error) => {
            console.error(error);
        });
    },[destiationRef, originRef])

  return (
    <>
        {<div className='w-full h-full'>
            <GoogleMap 
                center={center}
                zoom={10} 
                mapContainerStyle={{width: '100%', height: '100%'}}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
                onLoad={(map) => setMap(map)}
            >
                <Marker position={center} />
                {directionResponse && (<DirectionsRenderer directions={directionResponse} />)}
            </GoogleMap>
        </div>}
    </>
  )
}

export default React.memo(SelectMapMobile)

