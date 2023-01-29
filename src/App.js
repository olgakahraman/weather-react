import WeatherSearch from "./WeatherSearch";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
      </div>
      <p>
        Coded by Olga Dietiuk Kahraman and it is
        <a href="https://github.com/olgakahraman/weather-react">open-sourced</a>
      </p>
    </div>
  );
}

export default App;
