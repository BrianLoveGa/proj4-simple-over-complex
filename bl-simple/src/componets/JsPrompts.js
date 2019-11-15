import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JsPrompts.css";

class JsPrompts extends Component {
  render() {
    return (
      <div className="JsPromptsContainer">
        <h3 className="JsPrompts3">JsPrompts page here</h3>
        <Link className="link" to="/jsprompts/code">
          Click here for the prompts code 
        </Link>
        
      </div>
    );
  }
}

export default JsPrompts;
