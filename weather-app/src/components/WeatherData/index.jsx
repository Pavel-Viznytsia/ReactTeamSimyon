import React from "react";
// import PropTypes from 'prop-types';

import './styles.css';

export default function WeatherData({weatherData}){
 const {cityName, weather, description, humidity, img, pressure, temp} = weatherData;
  return(
    <div className='weatherCard'>
      <h3>City: {cityName}</h3>
      <p>Weather: {weather}</p>
      <figure className="sign">
        <img src={img} alt={description}/>
        <figcaption>{description}</figcaption>
      </figure>
      <p>Temperature: {temp}</p>
      <p>Pressure: {pressure}</p>
      <p>Humidity: {humidity}</p>
    </div>
  )
}

WeatherData.propTypes = {

};
