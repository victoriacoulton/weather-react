import React from "react";      // import useState if using the farenheit conversion code
import "./DisplayTemp.css";

export default function DisplayTemp(props) { 
  return (
    <div>
      <span > {Math.round(props.celsius)} </span>
      <span className="units"> ℃ </span>
    </div>  
  );
}




//Fahrenheit conversion code - delete above and use below if using Fah conversion

  // const [unit, setUnit] = useState("celsius")
  
  // function showFahrenheit(event){
  //   event.preventDefault();
  //   setUnit("fahrenheit")
  // }

  // function showCelcius(event) {
  //   event.preventDefault();
  //   setUnit("celsius")
  // }

  // function convertFahrenheit(){
  //   return ((props.celsius) * 9) / 5 + 32
  // }

  // if (unit === "celsius") {
  //  return(
  //   <div>
  //     <span> {Math.round(props.celsius)} </span>
  //     <span className="units"> ℃ | <a href = "/" onClick={showFahrenheit}>℉ </a>
  //     </span>
  //   </div>
  // )
  // } else {

//     return (
//    <div>
//       <span> {Math.round(convertFahrenheit())} </span>
//       <span className="units">
//         <a href = "/" onClick={showCelcius}> ℃ </a>| ℉ </span>
//     </div>
//   )
//   }
// }