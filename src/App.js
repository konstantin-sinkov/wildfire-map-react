import {useEffect, useState} from "react";
import {loadEvents} from "./services/events.service";
import './App.css';
import Map from "./components/map/Map";
import Loader from "./components/loader/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
      const {events} = await response.json();

      setEventData(events);
      setLoading(false);

      console.log(eventData);
    }

    fetchEvents();

    // console.log(eventData);
  }, [])

  return (
    <div className="App">
      {!loading ? <Map eventData={eventData}/> : <Loader />}
    </div>
  );
}

export default App;
