import {useEffect, useState} from "react";
import {loadEvents} from "./services/events.service";
import './App.css';
import Map from "./components/map/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  })

  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
