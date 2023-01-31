import React from "react";

import Weather from "./Weather";


import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="New York"/>
      </div>
      <footer className="text-center">
        Coded by Olga Dietiuk Kahraman and it is 
        <a href="https://github.com/olgakahraman/weather-react"> open-sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
