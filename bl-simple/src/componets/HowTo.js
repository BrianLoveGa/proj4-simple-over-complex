import React, { Component } from "react";
import "./HowTo.css";

class HowTo extends Component {
  render() {
    return (
      <div className="HowToContainer">
        <h3 className="HowTo3">How To page here</h3>
        
        
        <h1>First video</h1>
        <h2> How to copy down the python game and get started playing and coding</h2>
        <h3>If you already have VS code and Python installed on your computer start here</h3>
        <iframe
          title="Brian Code Basics Video"
          width="650"
          height="400"
          src="https://www.youtube.com/embed/n8Ent2PFo9Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default HowTo;


