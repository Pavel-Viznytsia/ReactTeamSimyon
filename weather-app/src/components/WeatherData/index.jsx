import React from "react";
import PropTypes from 'prop-types';

import './styles.css';

export default function WeatherData({name, img, data}){
  return(
    <div className='weatherCard'>
      <h3>City name: {name}</h3>
      <p className="weather">Weather: <img src={img} alt={img}/></p>
      <p>Temperature: {data} C<sup>o</sup></p>
    </div>
  )
}

WeatherData.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
};