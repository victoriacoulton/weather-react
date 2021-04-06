import React from "react";
import "./CurrentData.css";

let weatherData = {
  temperature: 19,
  conditions: "Clear Sky",
  wind: "10",
  humidity: "20"
};

export default function CurrentData() {
  return (
    <div className="currentData">
      <div className="row justify-content-md-center">
        <div className="col-3 tempBox">
          <span> {weatherData.temperature} </span>
          <span className="swtich-units">
            <button className="unit-C active">℃</button>|
            <button className="unit-F">℉</button>
          </span>
        </div>

        <div className="col-3">
          <img src="/" alt="condition-icon" className="current-icon" />
          <p className="description">{weatherData.conditions}</p>
        </div>

        <div className="col-3">
          <ul className="current-conditions">
            <li>
              <strong>Humidity: </strong>
              {weatherData.humidity}%
            </li>
            <li>
              <strong>Wind Speed: </strong>
              {weatherData.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
