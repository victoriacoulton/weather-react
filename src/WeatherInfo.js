import React from "react"; 
import "./WeatherInfo.css"
import FormatDate from "./FormatDate"
import FormatTime from "./FormatTime"
import WeatherIcon from "./WeatherIcon"
import DisplayTemp from "./DisplayTemp"
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function WeatherInfo(props) {
  return (
      <div className="currentData">
        <section className="DateTime">
          <FaMapMarkerAlt  size = "40"/>
          <h1>{props.data.city}</h1>
          <p>
            <span>
              <FormatDate date={props.data.date}/>
            </span>
            <br />
            <span>
              <FormatTime date={props.data.date}/>
            </span>
          </p>
        </section>
        <div className="row justify-content-md-center">
          <div className="col-3 tempBox">
            <DisplayTemp celsius = {(props.data.temperature)}/>
          </div>

          <div className="col-3">
            <div className="weather-icon">
              <WeatherIcon code={props.data.icon} size={60}/>
            </div>
            <p className="description">{props.data.conditions}</p>
          </div>

          <div className="col-3">
            <ul className="current-conditions">
              <li>
                <strong>Feels like: </strong>
                {Math.round(props.data.feels)}<span className="feels-like-units">℃</span>
              </li>              
              <li>
                <strong>Humidity: </strong>
                {Math.round(props.data.humidity)}%
              </li>
              <li>
                <strong>Wind Speed: </strong>
                {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
    ) 
}