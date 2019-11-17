import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="Home3">Home page here</h3>
        <div className="HomeContainer">
          <div className="star-wars-intro">
            <p className="intro-text">
              A few days ago, during the process of building this site ...
            </p>
            <h2 className="main-logo">
              <img
                src={require("../images/title.png")}
                alt="simple > complex or simple greater than complex"
              />
            </h2>
            <div className="main-content">
              <div className="title-content">
                <p className="content-header">
                  S I M P L E <br /> > <br />C O M P L E X
                </p>
                <br />

                <p className="content-body">
                  It came to my attention that I wanted just a little more fun
                  stuff to show off the skills I had acquired thus far in my
                  coding journey. Having a simple site with a basic game in
                  Python3, and the same game essentially also playable in the
                  browser through vanilla JavaScript prompts and also a React
                  version playable with a combination of buttons and prompts was
                  not enough for me.
                </p>
                <br></br>
                <p className="content-body">
                  I spoke with those close to me and my Mom asked: "Well can you
                  like check the weather on it or something?" So I included a
                  component to be able to check the weather based on a city and
                  country input.
                </p>
                <br></br>
                <p className="content-body">
                  My girlfriend asked, "why can't you just make a site where I
                  can look at dog pictures?" So I included an API fetch to a dog
                  pictures site and now you can also look at random dog pictures
                  on this site.
                </p>
                <br></br>
                <p className="content-body">
                  But it still needed something more. Something to catch the eye
                  of any passerby. So I decided to add this nifty little 'Star
                  Wars' credits style text scroll. After having some degrees of
                  success with different styles and versions out there I
                  happened upon this great version created by Polar Notion to
                  use.
                </p>
                <br></br>
                <p className="content-body">
                  So please kick back, relax, and enjoy this site which was
                  originally intended to be a place of learning. A place where
                  comparing a simple game in Python3 and in JavaScript might
                  inspire someone to make great things one day. I certainly
                  intend to do just that....
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <h2>If you don't want to wait for the scroll here's what it says</h2>
      </div>
    );
  }
}

export default Home;
