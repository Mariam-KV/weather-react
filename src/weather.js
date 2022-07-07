import React from "react";
import axios from "axios";
export default function Weather(props) {
  function showWeather(response) {
    alert(
      ` Current temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )} C`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=2610fc391e59a1d4c413f050d38f672d`;

  axios.get(url).then(showWeather);
  return <h1>hello</h1>;
}
