import {useEffect, useState} from "react";
import {loadEvents} from "./services/events.service";
import './App.css';
import Map from "./components/map/Map";
import Loader from "./components/loader/Loader";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect( async () => {
    //start loading -> showing loader gif
    await setLoading(true);

    await loadEvents().then(({data}) => {
      const {events} = data;
      // console.log(events);

      setEventData(events);
      // console.log(eventData);
    });

    //loading finished  -> showing Map
    await setLoading(false);

    // const fetchEvents = async () => {
    //   setLoading(true);
    //   const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
    //   const {events} = await response.json();
    //
    //   setEventData(events);
    //   setLoading(false);
    //
    //   console.log(eventData);
    // }

    // fetchEvents();
  }, []);

  return (
    <div className="App">
      {!loading ? <Map eventData={eventData}/> : <Loader />}
    </div>
  );
}

export default App;
