import React from "react"; 
import FormatDate from "./FormatDate"
import FormatTime from "./FormatTime"



export default function WeatherInfo(props) {
  return (
      <div className="currentData">
        <section className="DateTime">
          <i className="fas fa-map-marker-alt"></i>
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
            <span> {Math.round(props.data.temperature)} </span>
            <span className="swtich-units">
              <button className="unit-C active">℃</button>|
              <button className="unit-F">℉</button>
            </span>
          </div>

          <div className="col-3">
            <img src={props.data.iconUrl} alt={props.data.description} className="current-icon" />
            <p className="description">{props.data.conditions}</p>
          </div>

          <div className="col-3">
            <ul className="current-conditions">
              <li>
                <strong>Humidity: </strong>
                {Math.round(props.data.humidity)}%
              </li>
              <li>
                <strong>Wind Speed: </strong>
                {Math.round(props.data.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
    </div>
    ) 
}