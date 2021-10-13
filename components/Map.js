import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
    const [selectedLocation, setselectedLocation] = useState({});

    console.log(selectedLocation)

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const centre = getCenter(coordinates);
    const [viewport, setViewport] = useState({
        latitude: centre.latitude,
        longitude: centre.longitude,
        zoom: 11,
        width: "100%",
        height: "100%"
    });


    return <ReactMapGL
        mapStyle="mapbox://styles/wanjema/ckuo58hh3c0cq18rzuby9q3th"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}>
        {searchResults.map(item => (
            <div key={item.img}>
                <Marker longitude={item.long} latitude={item.lat}
                    offsetLeft={-20}
                    offsetTop={-10}>
                    <p onClick={() => setselectedLocation(item)} className='cursor-pointer text-2xl animate-bounce' aria-label='push-pin' role='img'>
                        📌
                    </p>
                </Marker>
                {selectedLocation.long === item.long ? (
                <Popup
                    closeOnClick={true}
                    onClose={()=> setselectedLocation({})}
                    latitude ={item.lat}
                    longitude ={item.long}
                > {item.title}</Popup>

                ):(
                    false
                )}
            </div>
        ))}
    </ReactMapGL>;
}

export default Map