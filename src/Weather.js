import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1 className="city ">New York</h1>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
          </ul>
        </div>
        <div className="col-4 text-center">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
      </div>
      <div className="row">
        <div className="temperature col-6">26℃</div>

        <div className="col-6 pt-4">
          <ul>
            <li>Details</li>
            <li>Feels Like: 28℃</li>
            <li>Humidity: 75%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
