import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import RPScode from "../images/Rpsls.md";
import "./rpsls.css";

export default class Rock extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(RPScode)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="rock">
        <h1>ROCK PAPER SCISSORS</h1>
        <h2>In Python</h2>
        <h3>With Lizard and Spock</h3>
        <h2>It doesn't get more simple than this</h2>
        <div className="mdcode">
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    );
  }
}
