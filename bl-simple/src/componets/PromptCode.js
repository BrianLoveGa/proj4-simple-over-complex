import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PromptsCode from "../images/PromptsCode.md"
import "./PromptCode.css";

class PromptCode extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(PromptsCode)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
      const { markdown } = this.state;
    return (
      <div className="PromptCodeContainer">
        <h3 className="PromptCode3">Prompt Code Mark Down here</h3>
        <p className="mdcode">
          <ReactMarkdown source={markdown} />
        </p>
      </div>
    );
  }
}

export default PromptCode;
