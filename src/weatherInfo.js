import React from "react";
import ShowIcons from "./icons";
import "./weather.css";
import Moment from "./moment";
import Temperature from "./temperature";
export default function WeatherInfo(props) {
  return (
    <div className="ps-2">
      <div>
        <h3 className="pt-3 text-dark">{props.all.name}</h3>
        <h5>
          <Moment />
        </h5>
        <p>{props.all.description}</p>
      </div>
      <div className="row align-items-center">
        <ShowIcons all={props.all.icon} />
        <div className="col-5">
          <Temperature temp={props.all.temp} />
        </div>
        <div className="col-4">
          <p>Humidity: {props.all.humidity}% </p>
          <p>Wind: {props.all.wind}km/h</p>
        </div>
      </div>
    </div>
  );
}
