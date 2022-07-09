import React, { useState } from "react";

export default function Temperature(props) {
  let [unit, setUnit] = useState("celsius");
  function toCelsius(event) {
    event.preventDefault();
    setUnit("faren");
  }
  function toFaren(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <h2>
        <span className="gradus">{Math.round(props.temp)}</span>
        <span className="celsius" onClick={toFaren}>
          <a href="/">°C</a>|
        </span>

        <span className="faren" onClick={toCelsius}>
          <a href="/">°F</a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        <span className="gradus">{Math.round((props.temp * 9) / 5 + 32)}</span>
        <span className="celsius" onClick={toFaren}>
          <a href="/">°C</a>|
        </span>

        <span className="faren" onClick={toCelsius}>
          <a href="/">°F</a>
        </span>
      </h2>
    );
  }
}
