import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function CityInput(props) {
  const {city, onCityChange, fetchData} = props;
  return(
    <div className="cityInputBlock">
      <div className="cityName">City name:</div>
      <input autoFocus value={city} onChange={onCityChange} type="text" placeholder="Enter city name..."/>
      <button onClick = {fetchData}>Show weather</button>
    </div>
  )
}

CityInput.propTypes = {
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};