import React, { useState } from "react";
import axios from "axios";


export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let apiKey = "f896fd4c5067a8dda6aeb8f9d2ddd111";
  let units = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);
  
  if (temperature) {
    return (
      <h1>
        The temperature in {props.city} is {temperature} degrees
      </h1>
    );
  } else {
    return "Loading...";
  }
}

