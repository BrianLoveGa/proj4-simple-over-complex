import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JsPrompts.css";
import start_game from "../simple-JavaScript/prompts/simple-prompts"

class JsPrompts extends Component {
  render() {
    return (
      <div className="JsPromptsContainer">
        <h3 className="JsPrompts3">JsPrompts page here</h3>
        <h3>
          On this page access the original code to modify for your own game and
          you can play the prompts version below
        </h3>
        <Link className="code" to="/proj4-simple-over-complex/jsprompts/code">
          Click here for the prompts code
        </Link>
        <button
          id="clickMe"
          className="game"
          type="button"
          onClick={start_game}
        >
          Click Me to start The Prompts Game Version
        </button>
        <div className="spacely"></div>
      </div>
    );
  }
}

export default JsPrompts;
