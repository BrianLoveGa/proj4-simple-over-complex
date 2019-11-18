import React, { Component } from "react";
import "./HowTo.css";

class HowTo extends Component {
  render() {
    return (
      <div className="HowToContainer">
        <h3 className="HowTo3">How To page here</h3>
        {/* placeholder until i make how to videos */}
        <h5>old project video</h5>
        <h3>testing update to live site</h3>
        <iframe
          title="Brian Code Basics Video"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/xcy05iZEBzI"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default HowTo;
