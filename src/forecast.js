import React from "react";
import "./weather.css";
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Forecast() {
  return (
    <div className="listFix col-11">
      <ul>
        {days.map(function(el, index) {
          return <li key={index}>{el}</li>;
        })}
      </ul>

      <ul>
        {days.map(function(index) {
          return <li key={index}>23 °C</li>;
        })}
      </ul>
    </div>
  );
}
