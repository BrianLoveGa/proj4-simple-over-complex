import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  render() {
    return (
      <div className="weatherContainer">
        <img
          className="weatherPic"
          src={require("../images/weather1.jpg")}
          alt="weather icons"
        ></img>
        <h3 className="weather3">Weather app here</h3>
      </div>
    );
  }
}

export default Weather;
