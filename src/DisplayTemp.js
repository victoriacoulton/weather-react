import React, { useState } from "react"; 
import "./DisplayTemp.css";

export default function DisplayTemp(props) { 
  const [unit, setUnit] = useState("celsius")
  
  function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit")
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius")
  }

  function convertFahrenheit(){
    return ((props.celsius) * 9) / 5 + 32
  }

  if (unit === "celsius") {
  return(
    <div>
      <span> {Math.round(props.celsius)} </span>
      <span className="units"> ℃ | <a href = "/" onClick={showFahrenheit}>℉ </a>
      </span>
    </div>
  )
  } else {

    return (
   <div>
      <span> {Math.round(convertFahrenheit())} </span>
      <span className="units">
        <a href = "/" onClick={showCelcius}> ℃ </a>| ℉ </span>
    </div>
  )
  }
}