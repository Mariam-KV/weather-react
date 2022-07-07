import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Moment from "./moment";
export default function Weather() {
  let [city, setCity] = useState("");
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
    console.log(response.data);
    let r = response.data;
    setAll({
      name: r.name,
      temp: r.main.temp,
      description: r.weather[0].main,
      humidity: r.main.humidity,
      wind: r.wind.speed,
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
        <div className="row">
          <div className="col-3">
            <img />
            <h2>56</h2>
          </div>
          <div className="col-4">
            <p>Humidity: {all.humidity}% </p>
            <p>Wind: {all.wind}km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
