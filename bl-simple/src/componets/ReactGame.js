import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ReactGame.css";

class ReactGame extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      health: 50,
      solve: 0,
      attack: 10,
      potions: 2,
      badAttack: 49,
      badHealth: 50
    };
  }

    healthPotion = () => {
      if (this.state.potions > 0) {
        this.setState({
          health: this.state.health + 25,
          potions: this.state.potions - 1
        });
      } else {
        alert("no more potions left");
      }
    };

    increaseNumber = () => {
      if (this.state.number <= 20) {
        this.setState({ number: this.state.number + 1 });
      } else {
        alert(
          " YOU WIN ! \n yep it goes up to 21, \n ok thats far enough go back down now"
        );
      }
    };

    decreaseNumber = () => {
      if (this.state.number >= -10) {
        this.setState({ number: this.state.number - 1 });
      } else {
        alert(
          " You lost ... kinda ... \n minus eleven is far enough  \n go back up now"
        );
      }
    };

    solve1 = () => {
      this.setState({ solve: this.state.solve + 1 });
    };

    // lets say we want to add 10 attack for first  question solved and 20 for 2nd question
    // and maybe just for fun 27
    attackUp = () => {
      if (this.state.solve === 0) {
        this.setState({ attack: this.state.attack + 10 });
      } else if (this.state.solve === 1) {
        this.setState({ attack: this.state.attack + 20 });
      } else {
        this.setState({ attack: this.state.attack + 27 });
      }
    };
    // lets add 10 health for each correct puzzle solve
    healthUp = () => {
      if (this.state.solve === 0) {
        this.setState({ health: this.state.health + 15 });
      } else if (this.state.solve === 1) {
        this.setState({ health: this.state.health + 25 });
      } else {
        this.setState({ health: this.state.health + 50 });
      }
    };

    badUp = () => {
      this.setState({ badHealth: this.state.badHealth + 25 });
    };

    puzzle = () => {
      if (this.state.health < 1) {
        alert("sorry you are dead. \n allow me to reset the game for you");
        this.reset();
      } else if (this.state.badHealth < 1) {
        alert(
          "CONGRATS YOU DEFEATED THE ENEMY ! \n allow me to reset the game \n so you can play again"
        );
        this.reset();
      } else {
        if (this.state.solve === 0) {
          this.puzzle1();
        } else if (this.state.solve === 1) {
          this.puzzle2();
        } else if (this.state.solve === 2) {
          this.puzzle3();
        } else {
          alert("sorry, only 3 puzzles here \n keeping it simple");
        }
      }
    };

    puzzle1 = () => {
      let puz = prompt("What does 1 + 1 = ____?");
      if (puz === null) {
      } else {
        if (puz === "2" || puz.toLowerCase() === "two") {
          alert("correct answer good job");
          this.solve1();
          this.attackUp();
          this.healthUp();
        } else {
          alert("sorry that was not correct");
        }
      }
    };

    puzzle2 = () => {
      let puz = prompt("Simple is better than complex? \n True or False?");
      if (puz === null) {
      } else {
        if (puz.toLowerCase() === "true" || puz.toLowerCase() === "tru") {
          alert("correct answer good job");
          this.solve1();
          this.attackUp();
          this.healthUp();
        } else {
          alert("sorry that was not correct");
        }
      }
    };

    puzzle3 = () => {
      let puz = prompt("Can learning be fun? \n Yes or No ?");
      if (puz === null) {
      } else {
        if (
          puz.toLowerCase() === "yes" ||
          puz.toLowerCase() === "certianly" ||
          puz.toLowerCase() === "indeed"
        ) {
          alert("correct answer good job");
          this.solve1();
          this.attackUp();
          this.healthUp();
          this.badUp();
        } else {
          alert("sorry that was not correct");
        }
      }
    };

    fight = () => {
      alert("fight time \n Let the battle begin");
      if (this.state.health < 0) {
        alert("you can't fight you're dead \n reset the game to play again");
      } else if (this.state.badHealth < 0) {
        alert(
          "CONGRATS YOU WIN THE ENEMY IS DEFEATED! \n reset then game to play again "
        );
      } else {
        this.setState({
          health: this.state.health - this.state.badAttack,
          badHealth: this.state.badHealth - this.state.attack
        });
        alert(
          "what a quick fight \n so fast I almost didn't even see you move"
        );
        if (this.state.health <= 1) {
          alert("! SORRY ... game over ... \n you lost the fight");
          alert("allow me to reset the game for you");
          this.reset();
        } else if (this.state.badHealth <= 1) {
          alert("!!!!! congrats !!!!!! \n YOU WON THANKS FOR PLAYING !");
          alert("allow me to reset the game for you");
          this.reset();
        }
      }
    };

    reset = () => {
      alert("Resetting the game to start data.");

      /// this is not best practices but ok enough
      ///  please ingnore the warnings for this simple game demo concept
      this.setState({
        number: (this.state.number = 0),
        health: (this.state.health = 50),
        solve: (this.state.solve = 0),
        attack: (this.state.attack = 10),
        potions: (this.state.potions = 2),
        badAttack: (this.state.badAttack = 49),
        badHealth: (this.state.badHealth = 50)
      });
    };
  
// Compiled with warnings.

// ./src/componets/ReactGame.js
//   Line 186:18:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   Line 187:18:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   Line 188:17:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   Line 189:18:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   Line 190:19:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   Line 191:21:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
//   Line 192:21:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state




  render() {
    return (
      <div className="ReactGameContainer">
        <h2 className="top">How to do a simple game within React</h2>
        <div className="linkholder">
          <Link className="code" to="/proj4-simple-over-complex/reactgame/code">
            Click here for the code on this page
          </Link>
        </div>

        <h4>number: {this.state.number}</h4>
        <button className="down" onClick={this.decreaseNumber}>
          - Decrease number -
        </button>
        <button className="up" onClick={this.increaseNumber}>
          + Increase number +
        </button>
        <h3>
          Above you can click the buttons to make the number go up or down
        </h3>
        <hr></hr>
        <div className="play">
          <h3>Play below with buttons and prompts simple game version</h3>
          <h4> I have added a health potion option</h4>
          <h2>
            Your Health: {this.state.health} ... Your Attack Power:{" "}
            {this.state.attack}
          </h2>
          <h2>
            Your Potions: {this.state.potions} ... Your Solves:{" "}
            {this.state.solve}{" "}
          </h2>

          <h2>
            Enemy Health: {this.state.badHealth} _-_ Enemy Attack:{" "}
            {this.state.badAttack}
          </h2>
          <div className="responsive">
            <button className="reset" onClick={this.reset}>
              Reset the game
            </button>
            <button className="puzzle" onClick={this.puzzle}>
              Try a Puzzle
            </button>
            <button className="potion" onClick={this.healthPotion}>
              Take A Health potion
            </button>
            <button className="fight" onClick={this.fight}>
              Fight the Enemy
            </button>
            <br></br>
          </div>
        </div>
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default ReactGame;
