import React, { Component } from 'react';
import CityInput from './components/CityInput';
import WeatherData from './components/WeatherData/index';

import axios from 'axios';

const WEATHER_URL = 'https://proxy-qurgawuxei.now.sh/data/2.5/weather?';
const KEY = '658721d6e405c4c2214c53df32583a7a';
const WEATHER_ICON_URL = 'http://openweathermap.org/img/w';
const GEO_API = 'http://ip-api.com/json';

export default class App extends Component {
  
  state = {
    currentLocation: '',
    cityName: '',
    weatherData: [],
    error: ''
  }

  componentDidMount(){
    axios.get(`${GEO_API}`).then(response => {
      this.setState({
        currentLocation: response.data.city
      })
      return response.data;
    }).then(data => {
      console.log('///////data: ', data.city)
    }).catch(error => alert(error));
  }

  onCityChange = (event) => {
    this.setState({
      cityName: event.target.value
    })
  }

  setData = ({weather, main}) => {
    const weatherData = [];
    // {
    //   weather: [ {
    //     description: "few clouds",
    //     icon: "02d"
    //   } ],
    //   main: {
    //     temp: 283.81,
    //     humidity: 71,
    //   }

    // const weatherCardData = [temp, humidity, icon, description];

    weatherData.push({
      name,
      img: `${WEATHER_ICON_URL}/${weather[0].icon}.png`,
      data: (main.temp-273.15).toFixed()
    });

    this.setState({
      weatherData
    });
  }

  fetchData = (event) => {
    axios.get(`${WEATHER_URL}appid=${KEY}&q=${this.state.cityName}`).then(response => {
      this.setData(response.data);
    }).catch(error => console.log('Error: ', error.message));
  }

  render() {
    const {cityName, weatherData, currentLocation} = this.state;
    console.log('this.state: ', this.state);
    
    return (
      <div className="App">
        <CityInput fetchData = {this.fetchData} onCityChange = {this.onCityChange} city = {cityName}  currentLocation = {currentLocation}/>
        {weatherData.map((item, idx) => <WeatherData key={idx} name = {item.name} img = {item.img} data = {item.data}/>)}
      </div>
    );
  }
}