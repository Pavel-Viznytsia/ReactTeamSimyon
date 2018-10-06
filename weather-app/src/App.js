import React, { Component } from 'react';
import axios from 'axios';
import CityInput from './components/CityInput';
import WeatherData from './components/WeatherData/index';
import './styles.css';

const WEATHER_URL = 'https://proxy-qurgawuxei.now.sh/data/2.5/weather?';
const KEY = '658721d6e405c4c2214c53df32583a7a';
const WEATHER_ICON_URL = 'http://openweathermap.org/img/w';
const GEO_API = 'https://ipinfo.io/json';

export default class App extends Component {
  state = {
    cityName: '',
    weatherData: {},
    isCityFound: false,
    errorMsg: '',
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  /**
   * Set city name to the state
   *
   * @param  {Event} event - on input value changes
   */

  onCityChange = event => {
    this.setState({
      cityName: event.target.value,
    });
  };

  /**
   * Get current location when first loading the app
   * @return {Promise}
   */
  getCurrentLocation = () => {
    axios
      .get(`${GEO_API}`)
      .then(response => response.data.city)
      .then(city => {
        axios
          .get(`${WEATHER_URL}q=${city}&appid=${KEY}`)
          .then(response => {
            this.setState(prevState => ({
              isCityFound: !prevState.isCityFound,
            }));
            this.setData(response.data);
          })
          .catch(error => {
            this.setState({
              isCityFound: false,
              errorMsg: `Error ${error.response.data.cod}. ${
                error.response.data.message
              }`,
            });
          });
      });
  };

  /**
   * Set the state when data was fetched
   *
   * @param {Object} data - Weather Data
   */
  setData = data => {
    const { name, main, weather } = data;
    this.setState({
      weatherData: {
        cityName: name,
        weather: weather[0].main,
        description: `(${weather[0].description})`,
        img: `${WEATHER_ICON_URL}/${weather[0].icon}.png`,
        temp: (main.temp - 273.15).toFixed(),
        pressure: `${main.pressure} mm Hg`,
        humidity: `${main.humidity} %`,
      },
    });
    this.resetInput();
  };

  /**
   * Fetching weatherData from weather API
   *
   * @param  {Event} event - on input change
   * @return  {Promise} event - on input change
   */
  fetchData = event => {
    event.preventDefault();
    const { cityName } = this.state;

    axios
      .get(`${WEATHER_URL}q=${cityName}&appid=${KEY}`)
      .then(response => {
        this.setData(response.data);
        this.setState({
          isCityFound: true,
        });
      })
      .catch(error => {
        this.setState({
          isCityFound: false,
          errorMsg: `Error ${error.response.data.cod}. ${
            error.response.data.message
          }`,
        });
      });
  };

  /**
   * Reset input value
   */
  resetInput = () => {
    this.setState({
      cityName: '',
    });
  };

  render() {
    const { cityName, weatherData, isCityFound, errorMsg } = this.state;
    return (
      <div className="App">
        <h1>Сheck the weather</h1>
        <CityInput
          cityName={cityName}
          fetchData={this.fetchData}
          onCityChange={this.onCityChange}
        />
        {isCityFound ? (
          <WeatherData weatherData={weatherData} />
        ) : (
          <p>{errorMsg.toUpperCase()}</p>
        )}
      </div>
    );
  }
}
