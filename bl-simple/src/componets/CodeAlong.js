import React, { Component } from "react";
import { Link } from "react-router-dom";
import './CodeAlong.css';



export default class CodeAlong extends Component{
    render () {
        return (
          <div className="codealongContainer">
            <h1 className="cah1">Code Along Component here:</h1>
            <h2 className="cah2">
              My intentons are to provide this simple game as a start template
              to grow it into something more elaborate .{" "}
            </h2>

            <h3 className="cah1">map example :</h3>
            <img
              className="map1example"
              src={require("../images/map.png")}
              alt="game map"
            ></img>
            <h3 className="cah1">enemies example :</h3>
            <img
              className="enemies"
              src={require("../images/enemies.png")}
              alt="list of 2 enemy characters"
            ></img>

            <h2 className="cah2">First video expected late Nov 2019</h2>
            <h3 className="cah1">Above examples are what this basic code can grow to include</h3>
            <h4 className="cah2">Starter code avaliable here</h4>
            <Link className="code" to="/python/along">
              Version for code along video tutorial
            </Link>
          </div>
        );
    }
}