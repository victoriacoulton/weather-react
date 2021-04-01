import React from "react";
import "./DateTime.css";

let NowData = {
  city: "London",
  date: "10/03/2021",
  time: "10:48"
};

export default function DateTime() {
  return (
    <section className="DateTime">
      <i className="fas fa-map-marker-alt"></i>
      <h1>{NowData.city}</h1>
      <p>
        <span>{NowData.date}</span>
        <br />
        <span>{NowData.time}</span>
      </p>
    </section>
  );
}