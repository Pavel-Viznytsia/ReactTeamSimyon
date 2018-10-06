import React from "react";
import PropTypes from 'prop-types';

import './styles.css';

export default function WeatherData(props){
  const {cityName, weather, description, humidity, img, pressure, temp} = props.weatherData;
  return (
    <div className='weatherCard'>
      <h3 className="cityName">{cityName}</h3>
      <p className="temp">{temp}</p>
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
  weatherData: PropTypes.shape({
    cityName: PropTypes.string,
    weather: PropTypes.string,
    description: PropTypes.string,
    humidity: PropTypes.string,
    img: PropTypes.string,
    pressure: PropTypes.string,
    temp: PropTypes.string
  }),
};

WeatherData.defaultProps = {
  weatherData: {
    cityName: '',
    weather: '',
    description: '',
    humidity: '',
    img: '',
    pressure:null,
    temp: null
  }
}
