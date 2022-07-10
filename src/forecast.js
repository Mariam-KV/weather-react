import React from "react";
import "./weather.css";
import ShowIcons from "./icons";
import "./forecast.css";

export default function Forecast(props) {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.all.lat}&lon=${props.all.lon}&units=metric&appid=125f8237195e09a35e85a1f3b2772e52`;

  return (
    <div className="listFix m-2 col">
      <div className="row">
        <div className="col-2">
          <p>Mon</p>
          <ShowIcons all="01d" />
          <p>
            <strong>28°</strong> 21°
          </p>
        </div>
        <div className="col-2">
          <p>Mon</p>
          <ShowIcons all="01d" />
          <p>
            <strong>28</strong> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" />
          <p>
            <strong>28</strong> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" />
          <p>
            <span>28</span> 21
          </p>
        </div>
        <div className="col-2">
          <p>Monday</p>
          <ShowIcons all="01d" />
          <p>
            <span>28</span> 21
          </p>
        </div>
      </div>
    </div>
  );
}
