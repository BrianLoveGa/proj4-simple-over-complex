import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h3 >Home page here</h3>
          <h2>
            I wanted to build an open source game that anyone could play ...
            <br>
            </br>
            like{" "}
            <a
              href="https://www.twilio.com/quest"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twillo Quest
            </a>{" "}
            or the Google{" "}
            <a
              href="https://beinternetawesome.withgoogle.com/en_us/interland"
              rel="noopener noreferrer"
              target="_blank"
            >
              InterLand Game
            </a>{" "}
          </h2>

          <h2>
            However my time frame of 4 days, budget of 0 dollars and team size of 1
            forced me to scale back my grand designs to this simple version which
            will grow over time. We can start with rock paper scissors and grow from there. 
          </h2>
        </div>
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
                  My girlfriend asked, "Why can't you just make a site where I
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
        <hr />
        <div className="underscroll">
          <h3>
            If you don't want to wait for the scroll here's essentialy what it
            says
          </h3>
          <h1>S I M P L E > C O M P L E X</h1>
          <p>
            It came to my attention that I wanted just a little more fun stuff
            to show off the skills I had acquired thus far in my coding journey.
            Having a simple site with a basic game in Python3, and the same game
            essentially also playable in the browser through vanilla JavaScript
            prompts and also a React version playable with a combination of
            buttons and prompts was not enough for me.
          </p>
          <p>
            I spoke with those close to me and my Mom asked: "Well can you like
            check the weather on it or something?" So I included a component to
            be able to check the weather based on a city and country input.
          </p>
          <p>
            My girlfriend asked: "Why can't you just make a site where I can
            look at dog pictures?" So I included an API fetch to a dog pictures
            site and now you can also look at random dog pictures on this site.
          </p>
          <p>
            But it still needed something more. Something to catch the eye of
            any passerby. So I decided to add this nifty little 'Star Wars'
            credits style text scroll. After having some degrees of success with
            different styles and versions out there I happened upon this great
            version created by Polar Notion to use.
          </p>
          <p>
            So please kick back, relax, and enjoy this site which was originally
            intended to be a place of learning. A place where comparing a simple
            game in Python3 and in JavaScript might inspire someone to make
            great things one day. I certainly intend to do just that....
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
