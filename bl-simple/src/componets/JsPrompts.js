import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JsPrompts.css";
import "../../../simple-JavaScript/prompts/simple-prompts"

class JsPrompts extends Component {
  render() {
    return (
      <div className="JsPromptsContainer">
        <h3 className="JsPrompts3">JsPrompts page here</h3>
        <h3>On this page you can play the prompts version and access the original code to modify for your own game</h3>
        <Link className="code" to="/jsprompts/code">
          Click here for the prompts code 
        </Link>
        <button
      </div>
    );
  }
}

export default JsPrompts;
