import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Moment from "./moment";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let [city, setCity] = useState();
  let [all, setAll] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a6c5c5bc66fcc2c9a1f394f061243f10`;
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
    <div className="col-6 p-5 m-5 border">
      <div className="row ">
        <div className="col">
          <h1 className="text-center">Weather app</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              placeholder="Enter a city"
              type="search"
              onChange={handleChange}
            />
            <input type="submit" className="btn btn-primary" value="Search" />
            <input type="submit" className="btn btn-success" value="Current" />
          </form>
          <h3>{all.name}</h3>
          <h5>
            <Moment />
          </h5>
          <p>{all.description}</p>
        </div>
        <div className="row align-items-center">
          <div className="col-2">
            <img src={all.icon} />{" "}
          </div>
          <div className="col-5">
            <h2 className="temp">{Math.round(all.temp)}°C</h2>
          </div>
          <div className="col-4">
            <p>Humidity: {all.humidity}% </p>
            <p>Wind: {all.wind}km/h</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2">ff</div>
          <div className="col-2">ff</div>
          <div className="col-2">ff</div>
          <div className="col-2">ff</div>
          <div className="col-2">ff</div>
          <div className="col-2">ff</div>
        </div>
      </div>
    </div>
  );
}
