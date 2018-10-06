import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './styles.css';


export default function CityInput(props) {
  const {cityName, onCityChange, fetchData} = props;
  return(
    <form className="cityInputBlock" onSubmit = {fetchData}>
      <input value={cityName} className="cityInput" onChange={onCityChange} autoFocus placeholder="Enter City..."/>
      <Button type="submit" color="primary">
        Show weather
      </Button>
    </form>
  )
}

CityInput.propTypes = {
  cityName: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};
