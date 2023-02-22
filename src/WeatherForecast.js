import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios  from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response){
        console.log(response.data);
    }
    let apiKey = "30tacoed7baaf2f850e321e0334cf4ed";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecst-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={52} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19</span>°
            <span className="WeatherForecast-temperature-min">10</span>°
          </div>
        </div>
       
        </div>
      </div>
    
  );
}
