import React from "react";

const WthrForm = (props) => {
  return (
    <form onSubmit={props.loadWeather}>
      <input
        type="text"
        name="city"
        placeholder="Type City Here ... Atlanta "
      />
      <input
        type="text"
        name="country"
        placeholder="Type Country Here ... United States"
      />
      <button> Show Me the Weather</button>
    </form>
  );
};

export default WthrForm;
