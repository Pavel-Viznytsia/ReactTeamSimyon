import React from "react";
import PropTypes from 'prop-types';

import './styles.css';

export default function WeatherData(props){
  const {currentLocation} = props;
  const {cityName, weather, description, humidity, img, pressure, temp} = props.weatherData;
  return(
    <div className='weatherCard'>
      {cityName ? <h3 className="cityName">{cityName}</h3> : <h3 className="cityName">{currentLocation}</h3>}
      <p className="temp">{temp}<span className="deg">C</span></p>
      <figure className="weatherIcon">
        <p className="weather">{weather}</p>
        <img src={img} alt={description}/>
        <figcaption>{description}</figcaption>
      </figure>
      <p className="weatherVal">Pressure <span>{pressure}</span></p>
      <p className="weatherVal">Humidity <span>{humidity}</span></p>
    </div>
  )
}


WeatherData.propTypes = {
  cityName: PropTypes.string,
  weather: PropTypes.string,
  description: PropTypes.string,
  humidity: PropTypes.number,
  img: PropTypes.string,
  pressure: PropTypes.number,
  temp: PropTypes.number,
};

WeatherData.defaultProps = {
  cityName: '',
  weather: '',
  description: '',
  humidity: null,
  img: '',
  pressure:null,
  temp: null,
}
