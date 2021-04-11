import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import CurrentData from "./CurrentData"

export default function App() {
  return (
    <div className ="container">
      <div className="App">
            <CurrentData city="London"/>
      </div>
        <footer>
           <a href="https://github.com/victoriacoulton/weather-react">Open Source Code</a> by Victoria Coulton
        </footer>
    </div>
  );
}


