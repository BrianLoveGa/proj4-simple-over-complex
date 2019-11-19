import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Python.css";

class Python extends Component {
  render() {
    return (
      <div className="PythonContainer">
        <Link className="poem" to="/zen">
          ZEN
        </Link>
        <h1>
          After following the <Link to="/howto">How To</Link> videos and
          installing Python on your computer ...
        </h1>
        <h1>Or if you are experienced with coding already ...</h1>
        <h1>
          a link to the code is avaliable below ... feel free to grab it to be
          able to play the game in Python on your own computer!
        </h1>
        <h1>
          Then you can change the files and grow this simple game into anything
          you want.
        </h1>
        <h2>
          The same game you can also play in JS Prompts and React styles on this
          site, but encoded in Python3.
        </h2>
        <h3>
          The link for code along version will be what we start with in the
          upcoming Video series I'll be making soon.
        </h3>
        <div className="responsive">
          <Link className="code" to="/python/basic">
            Basic code version
          </Link>
          <Link className="tutorials" to="/python/codealong">
            Code along video tutorials here
          </Link>
        </div>
        <h3>Video series for code along to make this game coming soon </h3>
      </div>
    );
  }
}

export default Python;
