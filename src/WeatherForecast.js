import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load(){
    const apiKey = "43e5f0554c92ed76972a39cf70fe0115";
    let lon = props.data.lon
    let lat = props.data.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    
    axios.get(apiUrl).then(handleResponse) 
  }

  if (loaded === true) {
  return (
    <div className = "Weather-Forecast">
      <div className = "row">
        {forecast.map(function (dailyforecast, index) {
          if (index < 5) {
          return (
             <div className = "col" key={index}>
                <WeatherForecastDay data={dailyforecast}/>
             </div>
            );
          } else { 
            return null;
          }
        })}  
      </div>
    </div>
  );
  } else {
    load();
    return null;
  }
}