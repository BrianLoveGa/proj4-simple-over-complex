import React, { Component } from "react";
import "./Dog.css";

// function to perform a get request
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

// function to get a random image
function getRandomImage() {
  // get the json from the server
  var json = httpGet("https://dog.ceo/api/breeds/image/random");
  //console.log(json);

  // decode the json into an array
  var array = JSON.parse(json);
  //console.log(array);

  // get the image url from the array
  var url = array.message;
  //console.log(url);

  // get the image object
  var image = document.getElementById("dogImage");

  // set the src of the image object
  image.src = url;
}

class Dog extends Component {
  render() {
    return (
      <div className="DogContainer">
        <h3 className="Dog">Dog Pics</h3>
        <button onClick={getRandomImage}>Click for a random image</button>
        <br></br>

        <img id="dogImage" src="https://dog.ceo/img/dog-api-logo.svg"></img>
      </div>
    );
  }
}

export default Dog;
