import GoogleMapReact from 'google-map-react';
import "./Map.css";

const Map = ({ center, zoom }) => {
  return (
   <div className="map">
       <GoogleMapReact
           bootstrapURLKeys={{key: "AIzaSyBrtu5mR9LIbSgeNSxTLbVcPupwTrKwTz8"}}
           defaultCenter={center}
           defaultZoom={zoom}
       >
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