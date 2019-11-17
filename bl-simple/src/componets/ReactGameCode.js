import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import ReactCode from "../images/ReactCode.md";
import "./PromptCode.css";

class ReactGameCode extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(ReactCode)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="PromptCodeContainer">
        <h3 className="PromptCode3">React Code Version Mark Down here</h3>
        <div className="mdcode">
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    );
  }
}

export default ReactGameCode;
