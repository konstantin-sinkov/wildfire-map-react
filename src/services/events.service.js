import axios from "axios";

const instance = axios.create({
    baseURL: 'https://eonet.sci.gsfc.nasa.gov/api/v3/events',
    headers: {}
});


const loadEvents = async () => await instance('');

export {loadEvents};

