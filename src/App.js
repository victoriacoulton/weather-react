import "./App.css";
import React from "react";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import DateTime from "./DateTime"
import CurrentData from "./CurrentData"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Weather Application
          <Weather city="Paris"/>
          <SearchBar />
          <DateTime />
          <CurrentData />

      </header>
      
      
    </div>
  );
}

export default App;
