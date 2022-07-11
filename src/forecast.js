import React, { useState } from "react";
import "./weather.css";
import Days from "./days";

import "./forecast.css";
import axios from "axios";
export default function Forecast(props) {
  let [allInfo, setAllInfo] = useState(null);
  let [ready, setReady] = useState(false);
  function showDaily(response) {
    setAllInfo(response.data.daily[0]);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="listFix m-2 col">
        <div className="row">
          <div className="col-2">
            <Days data={allInfo} />
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.all.lat}&lon=${props.all.lon}&units=metric&appid=2610fc391e59a1d4c413f050d38f672d`;
    axios.get(url).then(showDaily);

    return null;
  }
}
