import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './styles.css';


export default function CityInput(props) {
  const {onCityChange, fetchData} = props;
  return(
    <form className="cityInputBlock" onSubmit = {fetchData}>
      <input className="cityInput" autoFocus onChange={onCityChange} placeholder="Enter City..."/>
      <Button color="primary">
        Show weather
      </Button>
    </form>
  )
}

CityInput.propTypes = {
  onCityChange: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};
