import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Moment from "./moment";

import Forecast from "./forecast";
export default function Weather() {
  let [city, setCity] = useState();
  let [all, setAll] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2610fc391e59a1d4c413f050d38f672d`;
    axios.get(url).then(showInfo);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  function showInfo(response) {
    setAll({
      name: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div>
      <div className="p-2 mt-5 mx-5 border">
        <div className="row ">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <input
                className="search col-9"
                placeholder="Enter a city"
                type="search"
                onChange={handleChange}
                autoFocus="on"
              />
              <input
                type="submit"
                className="btn btn-primary col-2 ms-4"
                value="Search"
              />
            </form>
            <h3 className="pt-3 text-dark">{all.name}</h3>
            <h5>
              <Moment />
            </h5>
            <p>{all.description}</p>
          </div>
          <div className="row align-items-center">
            <div className="col-2">
              <img src={all.icon} alt="iconOfWeather" />{" "}
            </div>
            <div className="col-5">
              <h2 className="temp">
                <span className="gradus">{Math.round(all.temp)}</span>
                <span className="celsius">°C</span>
              </h2>
            </div>
            <div className="col-4">
              <p>Humidity: {all.humidity}% </p>
              <p>Wind: {all.wind}km/h</p>
            </div>
          </div>
          <Forecast />
        </div>
      </div>
      <p className="ms-5">
        <a href="https://github.com/Mashawabupr/weather-react">
          Open-source code,
        </a>
        by <a href="https://github.com/Mashawabupr">Mariam Kvirkviia</a>
      </p>
    </div>
  );
}
