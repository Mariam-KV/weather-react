import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
let icons = {
  "01d": "CLEAR_DAY",
  "01n": "CLEAR_NIGHT",
  "03d": "PARTLY_CLOUDY_DAY",
  "03n": "PARTLY_CLOUDY_NIGHT",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "04n": "PARTLY_CLOUDY_NIGHT",
  O4d: "PARTLY_CLOUDY_DAY",
  O2d: "PARTLY_CLOUDY_DAY",
  "09d": "RAIN",
  "09n": "RAIN",
  "10d": "RAIN",
  "10n": "RAIN",
  "11d": "RAIN",
  "11n": "RAIN",
  "13d": "SNOW",
  "13n": "SNOW",
  "50d": "MIST",
  "50n": "MIST",
};

export default function ShowIcons(props) {
  return (
    <div className="col-2">
      <ReactAnimatedWeather
        icon={icons[props.all]}
        color="grey"
        size={65}
        animate={true}
      />{" "}
    </div>
  );
}
