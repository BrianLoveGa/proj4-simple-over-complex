import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./JsConsole.css";

class JsConsole extends Component {
  constructor() {
    super();
    this.state = { health: 50, solve: 0, attack: 10, potions: 3 };
  }

  healthPotion = () => {
    if (this.state.potions > 0) {
      this.setState({
        health: this.state.health + 22,
        potions: this.state.potions - 1
      });
    } else {
      alert("no more potions left");
    }
  };

  increaseHealth = () => {
    this.setState({ health: this.state.health + 1 });
  };

  decreaseHealth = () => {
    this.setState({ health: this.state.health - 1 });
  };

  solve1 = () => {
    this.setState({ solve: this.state.solve + 1 });
  };

  // lets say we want to add 20 attack for first  question solved and 57 for 2nd question
  attackUp = () => {
    if (this.state.solve === 0) {
      this.setState({ attack: this.state.attack + 20 });
    } else {
      this.setState({ attack: this.state.attack + 57 });
    }
  };

  puzzle = () => {
    if (this.state.solve === 0) {
      this.puzzle1();
    } else if (this.state.solve === 1) {
      this.puzzle2();
    } else {
      this.puzzle3();
    }
  };

  puzzle1 = () => {
    let puz = prompt("What does 1 + 1 = ____?");
    if (puz === "2" || puz.toLowerCase === "two") {
      alert("correct answer good job");
      this.solve1();
      this.attackUp();
      //this.setState({ sovle: this.state.solve + 1 });
    } else {
      alert("sorry that was not correct");
    }
  };

  puzzle2 = () => {
    let puz = prompt("Simple is better than complex? \n True or false?");
    if (puz === "true") {
      alert("correct answer good job");
      this.solve1();
      this.attackUp();
      //this.setState({ sovle: this.state.solve + 1 });
    } else {
      alert("sorry that was not correct");
    }
  };
  puzzle3 = () => {
    alert("only 2 puzzles here \n sorry more to come later");
  };

  render() {
    return (
      <div className="JsConsoleContainer">
        <h2>How to do a simple game within React</h2>
        <h3>play below with buttons and prompts</h3>
        <h4>health: {this.state.health}</h4>
        <h4>potions: {this.state.potions}</h4>
        <button className="di" onClick={this.decreaseHealth}>
          Decrease Health
        </button>
        <button className="pu" onClick={this.increaseHealth}>
          Increase Health
        </button>
        <button className="pu" onClick={this.healthPotion}>
          take Health potion
        </button>
        <h4>solves: {this.state.solve} </h4>
        <h4>attack power: {this.state.attack} </h4>
        <button className="puzzle" onClick={this.puzzle}>
          Try a puzzle here
        </button>
        <hr></hr>
        <br></br>
        <Link className="code" to="/jsconsole/code">
          Click here for the code on this page
        </Link>
        <br></br>
      </div>
    );
  }
}

export default JsConsole;

// deadHorse = () => {
//   if (this.state.health <= -10){
//     alert("ok, minus 10 health or worse,\n no sense in beating a dead horse")
//   }
// }
