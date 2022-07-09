import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./weatherInfo";

import Forecast from "./forecast";
export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [city, setCity] = useState(props.defaultCity);
  let [all, setAll] = useState({});
  function showInfo(response) {
    setAll({
      name: response.data.name,
      temp: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=125f8237195e09a35e85a1f3b2772e52`;
    axios.get(url).then(showInfo);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  if (ready) {
    return (
      <div>
        <div className="p-2 mt-5 mx-5 border">
          <div className="row ">
            <div className="col">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  className="search col-9"
                  placeholder="Enter a city"
                  type="search"
                  autoFocus="on"
                />
                <input
                  type="submit"
                  className="btn btn-primary col-2 ms-4"
                  value="Search"
                />
              </form>
              <WeatherInfo all={all} />
              <Forecast />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="ms-5">
            <a href="https://github.com/Mashawabupr/weather-react">
              Open-source code,
            </a>
            by <a href="https://github.com/Mashawabupr">Mariam Kvirkviia</a>
          </p>
        </div>
      </div>
    );
  } else {
    search(city);
    return "LOADING...";
  }
}
