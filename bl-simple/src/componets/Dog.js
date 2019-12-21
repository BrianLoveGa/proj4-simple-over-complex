import React, { Component } from "react";
import "./Dog.css";

// this is how the api told me to do it
// function to perform a get request
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request ... is deprecated but just one pic not too bad for U/X
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage() {
  // get the json from the server
  var json = httpGet("https://dog.ceo/api/breeds/image/random");
  // decode the json into an array
  var array = JSON.parse(json);
  // get the image url from the array
  var url = array.message;
  // get the image object
  var image = document.getElementById("dogImage");
  // set the src of the image object
  image.src = url;
}

class Dog extends Component {
  render() {
    return (
      <div className="DogContainer">
        <h1 className="Dog">Dog Pics</h1>
        <button className="woof" onClick={getRandomImage}>Click for a random dog image from the dog.ceo API</button>
        <br></br>

        <img id="dogImage"  src="https://dog.ceo/img/dog-api-logo.svg" alt="random dog"></img>
      </div>
    );
  }
}

export default Dog;
