import GoogleMapReact from 'google-map-react';
import "./Map.css";
import LocationMarker from "../location-marker/LocationMarker";
import config from "../../config";

const Map = ({ center, zoom }) => {
  return (
   <div className="map">
       <GoogleMapReact
           bootstrapURLKeys={{key: config.API_ACCESS_KEY}}
           defaultCenter={center}
           defaultZoom={zoom}
       >
           <LocationMarker lat={center.lat} lng={center.lng} />
       </GoogleMapReact>
   </div>
  );
 }

 Map.defaultProps = {
    center: {
        lat: 51.50551,
        lng: 31.28487
    },
     zoom: 4
 }

export default Map;