import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleReasponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      feels_like: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      country: response.data.country,
      description: response.data.condition.description,
      iconUrl:
        `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherData.icon}.png`,
      icon: response.data.condition.icon,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather shadow  ps-4 pe-4 bg-body-tertiary rounded">
        <form className=" mt-4 mb-4">
          <div className="row">
            <div className="col-9">
              <input
                Type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>
        <h1 className="city ">
          {weatherData.city} 
        </h1>
<p>{weatherData.country}</p>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Wednesday 07:00</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-4 text-center">
            <img src="{weatherData.iconUrl}" />
          </div>
        </div>
        <div className="row">
          <div className="temperature col-6">
            {Math.round(weatherData.temperature)}℃
          </div>

          <div className="col-6 pt-4">
            <ul>
              <li>Details</li>
              <li>Feels Like: {Math.round(weatherData.feels_like)}℃</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "30tacoed7baaf2f850e321e0334cf4ed";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleReasponse);

    return "Loading...";
  }
}
