import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JsConsole.css";

class JsConsole extends Component {
  render() {
    return (
      <div className="JsConsoleContainer">
        <h3 className="JsConsole3">JsConsole page here</h3>
        <Link className="code" to="/jsconsole/code">
          Click here for the console log style code
        </Link>
      </div>
    );
  }
}

export default JsConsole;
