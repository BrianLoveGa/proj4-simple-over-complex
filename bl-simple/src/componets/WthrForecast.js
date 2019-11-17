import React from "react";


const WthrForecast = props => {
  return (
    <div>
      {props.country && props.city && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p> Current Temp: {props.temperature}</p>}
      {props.humidity && <p> Humidity: {props.humidity} </p>}
      {props.pressure && <p>Pressure: {props.pressure}</p>}
      {props.wind && <p>Wind Speed: {props.wind}</p>}
      {props.icon && (
        <img
          className="wthrIcon"
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="weather icon"
        />
      )}
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default WthrForecast;