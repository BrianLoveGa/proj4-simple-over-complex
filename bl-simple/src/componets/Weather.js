import React, { Component } from "react";
import "./Weather.css";
import WthrForm from "./WthrForm";
import WthrForecast from "./WthrForecast";

const apiKey = "2416761b1a4e0e266b8e6bb58c037760";

class Weather extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    wind: "",
    icon: "",
    description: "",
    error: ""
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`
    );
      console.log(city)
    const response = await apiCall.json();
    console.log("check");
    console.log(response);
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        wind: response.wind.speed,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please fill out both fields with a major City and Country ..."
      });
    }
  };

  render() {
    return (
      <div className="weatherContainer">
        <img
          className="weatherPic"
          src={require("../images/weather1.jpg")}
          alt="weather icons"
        ></img>
        <h1> What's the current weather today?</h1>
        <h3>Find out weather conditions for your city.</h3>
        <WthrForm loadWeather={this.getWeather} />
        <div className="weatherData">
          <WthrForecast
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            wind={this.state.wind}
            icon={this.state.icon}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default Weather;
