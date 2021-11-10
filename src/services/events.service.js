import axios from "axios";

let config = {
    baseURL: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events'
}

const instance = axios.create(config);

const loadEvents = () => {
    return instance.get('');
}

export {loadEvents};

