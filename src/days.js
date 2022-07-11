import React from "react";
import ShowIcons from "./icons";

export default function Days(props) {
  let date = new Date(props.data.dt * 1000);
  let currentDay = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function max() {
    return Math.round(props.data.temp.max);
  }
  function min() {
    return Math.round(props.data.temp.min);
  }
  return (
    <div>
      <p>{days[currentDay]}</p>

      <ShowIcons all={props.data.weather[0].icon} size={44} />
      <p>
        <strong>{max()}°</strong>
        {min()}°
      </p>
    </div>
  );
}
