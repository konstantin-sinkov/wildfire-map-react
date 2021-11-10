import React from 'react';
import './Loader.css';
import spinnerLoader from '../../assets/spinner_loader.gif';

const Loader = () => {
  return (
   <div className="loader">
       <img src={spinnerLoader} alt="Loading data"/>
       <h1>Fetching data</h1>
   </div>
  );
 }

export default Loader;