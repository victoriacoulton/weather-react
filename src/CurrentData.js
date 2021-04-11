import React, { useState } from "react";
import "./CurrentData.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function CurrentData(props) {
  const [weatherData, setWeatherData] = useState({ready: false})  
  const [city, setCity] = useState(props.city)
  function updateDetails(response) {
    setWeatherData({
    ready: true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),

    temperature: response.data.main.temp,
    conditions: response.data.weather[0].description,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity,
    icon: `${response.data.weather[0].icon}`
  })
  }

  function search(){
    const apiKey = "43e5f0554c92ed76972a39cf70fe0115";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(updateDetails);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event){
    setCity(event.target.value)
  }


  if (weatherData.ready === true) {
    return (
      <div className = "Weather">
        <div className="row justify-content-md-center">
        <form className="SearchBar" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="search" placeholder="Search for a new city"
              autoComplete="off" autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
            <button type="submit" className="btn btn-outline-primary">
              Current Location
            </button>
          </div>
        </form>
      </div>
    <WeatherInfo data={weatherData}/>
    </div>
  )
     } else { 
      search()
      return ("Loading...")
  }
}
