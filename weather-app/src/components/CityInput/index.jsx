import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function CityInput(props) {
  const {onCityChange, fetchData} = props;
  return(
    <div className="cityInputBlock" >
      <div className="cityName">City name:</div>
      <input autoFocus onChange={onCityChange} placeholder="Enter city name..."/>
      <button onClick = {fetchData}>Show weather</button>
    </div>
  )
}

CityInput.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};
