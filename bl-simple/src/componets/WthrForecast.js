import React from "react";


const WthrForecast = (props) => {
  return (
    <div>
      {props.country && props.city && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p> Current Temp: {props.temperature}(f)</p>}
      {props.humidity && props.wind && (
        <p>
          {" "}
          Humidity: {props.humidity} % _||_ Wind Speed: {props.wind}{" "}mph
        </p>
      )}
      <div className="picframe">
        {props.icon && (
          <img
            className="wthrIcon"
            src={`http://openweathermap.org/img/wn/${props.icon}.png`}
            alt="weather icon"
          />
        )}
      </div>
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default WthrForecast;