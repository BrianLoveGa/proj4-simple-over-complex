import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PythonBasicCode from "../images/PythonBasicCode.md";
import "./Python.css";

class PythonCodeAlong extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(PythonBasicCode)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="PythonContainer">
        <h2 className="Python3">Python video tutorial code here</h2>
        <h3>This is the code-along version for my upcoming video tutorial series</h3>
        <p className="mdcode">
          <ReactMarkdown source={markdown} />
        </p>
      </div>
    );
  }
}

export default PythonCodeAlong;