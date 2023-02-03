import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city ">{props.data.city}</h1>

      <p>{props.data.country}</p>

      <div className="row dateIcon">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-5 bigIcon text-end">
          <WeatherIcon code={props.data.icon} />
        </div>
      </div>
      <div className="row">
        <div className=" col-6">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6 pt-4">
          <ul>
            <li>Details</li>
            <li>Feels Like: {Math.round(props.data.feels_like)}℃</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
