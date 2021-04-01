import React from "react";
import "./SearchBar.css";

export default function Search() {
  return (
    <div className="row justify-content-md-center">
      <form className="SearchBar">
        <div className="input-group mb-3" id="search-bar">
          <input
            type="search"
            id="search-for-city"
            placeholder="Search for a new city"
            autocomplete="off"
          />
          <button type="submit" id="search-button" className="btn btn-primary">
            Search
          </button>
          <button
            type="submit"
            id="current-location-button"
            className="btn btn-outline-primary"
          >
            Current Location
          </button>
        </div>
      </form>
    </div>
  );
}
