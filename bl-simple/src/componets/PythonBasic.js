import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PythonBasicCode from "../images/PythonBasicCode.md";
import "./Python.css";


class PythonBasic extends Component {
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
        <h3 className="Python3">Python basic code here</h3>
        <p className="mdcode" ><ReactMarkdown source={markdown} /></p>
      </div>
    );
  }
}

export default PythonBasic;
