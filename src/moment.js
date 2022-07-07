import React from "react";

export default function Moment() {
  let data = new Date();
  let day = data.getDay();
  let hour = data.getHours();
  let minute = data.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuday",
  ];

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let all = `${days[day]} ${hour}:${minute}`;
  return all;
}
