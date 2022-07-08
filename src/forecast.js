import React from "react";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday",
];

export default function Forecast() {
  return (
    <div>
      <ul>
        {days.map(function (el, index) {
          return <li key={index}>{el}</li>;
        })}
      </ul>
      <ul>
        {days.map(function (index) {
          return <li key={index}>23 C</li>;
        })}
      </ul>
    </div>
  );
}
