import React from "react";

import "./weather.css";
import Moment from "./moment";
export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <h3 className="pt-3 text-dark">{props.all.name}</h3>
        <h5>
          <Moment />
        </h5>
        <p>{props.all.description}</p>
      </div>
      <div className="row align-items-center">
        <div className="col-2">
          <img src={props.all.icon} alt="iconOfWeather" />{" "}
        </div>
        <div className="col-5">
          <h2 className="temp">
            <span className="gradus">{Math.round(props.all.temp)}</span>
            <span className="celsius">°C</span>
          </h2>
        </div>
        <div className="col-4">
          <p>Humidity: {props.all.humidity}% </p>
          <p>Wind: {props.all.wind}km/h</p>
        </div>
      </div>
    </div>
  );
}
