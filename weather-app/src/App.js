import React, { Component } from 'react';
import CityInput from './components/CityInput';
import WeatherData from './components/WeatherData/index';

import './styles.css';

import axios from 'axios';

const WEATHER_URL = 'https://proxy-qurgawuxei.now.sh/data/2.5/weather?';
const KEY = '658721d6e405c4c2214c53df32583a7a';
const WEATHER_ICON_URL = 'http://openweathermap.org/img/w';
const GEO_API = 'http://ip-api.com/json';

export default class App extends Component {

    state = {
      currentLocation: '',
      cityName: '',
      weatherData: {}
    };

  componentDidMount() {
    this.getCurrentLocation();
  }

  getCurrentLocation = () => {
    axios
      .get( `${GEO_API}` )
      .then( response => {
        this.setState( {
          cityName: response.data.city,
        } );
        return response.data.city
      } ).then( city => {
        axios
          .get( `${WEATHER_URL}appid=${KEY}&q=${city}` )
          .then( response => {
            this.setData( response.data );
          } )
      } ).catch( error => alert( error ) );
  }

  onCityChange = event => {
    this.setState({
      cityName: event.target.value,
    });
  };

  fetchData = event => {
    axios
      .get(`${WEATHER_URL}appid=${KEY}&q=${this.state.cityName}`)
      .then(response => {
        this.setData(response.data);
      })
      .catch(error => console.log('Error: ', error.message));
  };

  setData = ( { name, main, weather } ) => {
    this.setState( {
      weatherData: {
        cityName: name,
        weather: weather[0].main,
        description: `(${weather[ 0 ].description})`,
        img: `${WEATHER_ICON_URL}/${weather[0].icon}.png`,
        temp: ( main.temp - 273.15 ).toFixed() + ' °C',
        pressure: `${main.pressure} mm Hg`,
        humidity: `${main.humidity} %`,
      }
    } );
  };


  render() {
    const { weatherData } = this.state;
    return (
      <div className="App">
        <CityInput
          fetchData={this.fetchData}
          onCityChange={this.onCityChange}
        />
        <WeatherData weatherData = {weatherData} />
      </div>
    );
  }
}
