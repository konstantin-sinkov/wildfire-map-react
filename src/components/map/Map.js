import GoogleMapReact from 'google-map-react';
import "./Map.css";
import LocationMarker from "../location-marker/LocationMarker";
import EventInfoBox from "../event-info-box/EventInfoBox";
import config from "../../config";
import {useState} from "react";

const Map = ({ eventData, center, zoom }) => {
    const [eventInfo, setEventInfo] = useState(null);

    //checking events id
    const wildfires = eventData.map(elem => {
        if (elem.categories[0].id === "wildfires") {
            return <LocationMarker
                        lat={elem.geometry[0].coordinates[1]}
                        lng={elem.geometry[0].coordinates[0]}
                        onClick={() => setEventInfo({id: elem.id, title: elem.title})}
            />
        }
        return null;
    })

  return (
   <div className="map">
       <GoogleMapReact
           bootstrapURLKeys={{key: config.API_ACCESS_KEY}}
           defaultCenter={center}
           defaultZoom={zoom}
       >
           {
               wildfires
           }
       </GoogleMapReact>
       {
           // if eventInfo != null
           eventInfo && <EventInfoBox info={eventInfo} />
       }
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