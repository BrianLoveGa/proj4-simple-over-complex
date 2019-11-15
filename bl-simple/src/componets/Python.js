import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Python.css";

class Python extends Component {
  render() {
    return (
      <div className="PythonContainer">
        <h3 className="Python3">Python page here</h3>
        <h1>
          After following the how to videos and installing Python on your
          computer...
        </h1>
        <h1>Or if you are experienced with coding already</h1>
        <h1>
          One must simply choose a copy of the code below to clone down to be
          able to play the game in Python on your own computer!
        </h1>
        <h1>
          Then you can change the files and grom this simple game into anything
          you want.
        </h1>
        <h2>
          The same game you played in Prompts and Console Log, but encoded in
          Python3
        </h2>

        <Link className="link" to="/python/basic">
          Basic Code Version
        </Link>
        <Link className="link" to="/python/along">
          Version for Code along Video Tutorial
        </Link>
      </div>
    );
  }
}

export default Python;
