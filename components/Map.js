import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
     const [viewport, setViewport] = useState({
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8,
            width:"100%",
            height:"100%"
        });

    return <ReactMapGL 
    mapStyle="mapbox://styles/felixivance/ckt2jw2qc22g218s0qm5shc1l"
    mapboxApiAccessToken={process.env.mapbox_key}
         {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
      >

    </ReactMapGL>;
}

export default Map