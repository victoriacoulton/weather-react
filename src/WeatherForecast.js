import React, { useState } from "react";
import "./WeatherForecast.css"
import WeatherForecastDay from "./WeatherForecastDay"
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded === true) {
  return (
    <WeatherForecastDay data={forecast[0]}/>
  );
  } else {
    const apiKey = "43e5f0554c92ed76972a39cf70fe0115";
    let lon = props.data.lon
    let lat = props.data.lat
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    
    axios.get(apiUrl).then(handleResponse)
    return null 
  }
}