import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Python.css";

class Python extends Component {
  render() {
    return (
      <div className="PythonContainer">
        <h3 className="Python3">Python page here</h3>
        <h1>
          After following the{" "}
          <Link  to="/howto">
            How To
          </Link>{" "}
          videos and installing Python on your computer...
        </h1>
        <h1>Or if you are experienced with coding already</h1>
        <h1>
          One must simply choose a copy of the code below to clone down to be
          able to play the game in Python on your own computer!
        </h1>
        <h1>
          Then you can change the files and grow this simple game into anything
          you want.
        </h1>
        <h2>
          The same game you can also play in JS Prompts and React style with buttons and 
          prompts, but encoded in Python3
        </h2>

        <Link className="code" to="/python/basic">
          Basic code version
        </Link>
        <Link className="code" to="/python/along">
          Version for code along video tutorial
        </Link>
      </div>
    );
  }
}

export default Python;
