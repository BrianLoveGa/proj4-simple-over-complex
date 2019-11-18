import React from "react";

const WthrForm = (props) => {
  return (
    <form onSubmit={props.loadWeather}>
      <input
        type="text"
        name="city"
        placeholder="Type City Here ...   Atlanta, Paris, Tokoyo ..."
      />
      <div></div>
      <input
        type="text"
        name="country"
        placeholder="Type Country Here ...   US, France, Japan ..."
      />
      <div></div>
      <button className="showme"> Show Me the Weather</button>
    </form>
  );
};

export default WthrForm;
