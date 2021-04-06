import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import SearchBar from "./SearchBar";
import DateTime from "./DateTime"
import CurrentData from "./CurrentData"

export default function App() {
  return (
    <div className="App">
          <SearchBar />
          <DateTime />
          <CurrentData />
    </div>
  );
}


