import React, { useState } from "react";
import "./CurrentData.css";
import axios from "axios";


export default function CurrentData() {
  function updateDetails(response) {
    console.log(response.data)

    setCity(response.data.name)
    setReady(true)

    setWeatherData({
    temperature: (response.data.main.temp),
    conditions: (response.data.weather[0].description),
    wind: (response.data.wind.speed),
    humidity: (response.data.main.humidity),
    icon: (response.data.weather[0].icon)
  })
  }
 
  const [city, setCity] = useState(null)  
  const [weatherData, setWeatherData] = useState({ready: false})  

  

  if (weatherData.ready) {
    return (
      <div className="currentData">
        <section className="DateTime">
          <i className="fas fa-map-marker-alt"></i>
          <h1>{city}</h1>
          <p>
            <span>date</span>
            <br />
            <span>time</span>
          </p>
        </section>
        <div className="row justify-content-md-center">
          <div className="col-3 tempBox">
            <span> {Math.round(weatherData.temperature)} </span>
            <span className="swtich-units">
              <button className="unit-C active">℃</button>|
              <button className="unit-F">℉</button>
            </span>
          </div>

          <div className="col-3">
            <img src={weatherData.icon} alt={weatherData.description} className="current-icon" />
            <p className="description">{weatherData.conditions}</p>
          </div>

          <div className="col-3">
            <ul className="current-conditions">
              <li>
                <strong>Humidity: </strong>
                {Math.round(weatherData.humidity)}%
              </li>
              <li>
                <strong>Wind Speed: </strong>
                {Math.round(weatherData.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
     )
     } else { 
      const apiKey = "f896fd4c5067a8dda6aeb8f9d2ddd111";
      let city = "Sydney";
      let units = "metric";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(updateDetails);
      return ("Loading...")
  }
}
