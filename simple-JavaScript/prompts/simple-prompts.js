console.log("testing");
// before anything esle to make sure it's linked properly

// # WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
// #######                                                                           #
// #######                                                                           #
// #######                         SIMPLE GAME   vz 1.1                              #
// #######                                                                           #
// #######                                                                           #
// #######                 By: B _-_ Love -- (C) Nov 2019                            #
// #######                                                                           #
// #######                                                                           #
// # <><<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>

// js prompts version
//no imports required

// make a player class

class Player {
  constructor(name) {
    this.name = "";
    this.health = 10;
    this.attack = 10;
    this.solve = 0;
  }
}
// initialize player with name figure out input name syntax later
let myPlayer = new Player("name");

// make bad guy class

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 50;
    this.attack = 50;
    this.solve = 0;
  }
}

// initialize bad guy
let bad = new Enemy("Bad guy");

/// lets do puzzle prompts
function puzzle_prompt() {
  alert("it's puzzle time");
  if (myPlayer.solve == 0) {
    solve_puzzle1();
  } else if (myPlayer.solve == 1) {
    solve_puzzle2();
  } else if (myPlayer.solve == 2) {
    solve_puzzle3();
  } else if (myPlayer.solve == 3) {
    alert("there are no more puzzles only the fight remains");
    game_loop();
  }
}

// now for each of the 3 puzzles

function solve_puzzle1() {
  let puzzle1 = prompt(
    "Puzzle 1 here... \n Let's start easy, \nwhat does 1 + 1 = ___?"
  );
  if (puzzle1 === null) {
    alert(
      "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
    );
    solve_puzzle1();
  } else if (puzzle1.toLowerCase() === "2" || puzzle1.toLowerCase() === "two") {
    myPlayer.solve += 1;
    myPlayer.health += 10;
    myPlayer.attack += 10;
    alert("correct answer ...\n Good job ... \n now back to the game ...");
    game_loop();
  } else {
    alert("I'm sorry, that was not correct \n... try 2 next time ....");
    game_loop();
  }
} // end q1

function solve_puzzle2() {
  let puzzle2 = prompt(
    "Puzzle 2 here... how about another easy one ? yes or no is learning fun ?"
  );
  if (puzzle2 === null) {
    alert(
      "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
    );
    solve_puzzle2();
  } else if (
    puzzle2.toLowerCase() === "yes" ||
    puzzle2.toLowerCase() === "y" ||
    puzzle2.toLowerCase() === "yep" ||
    puzzle2.toLowerCase() === "true" ||
    puzzle2.toLowerCase() === "correct"
  ) {
    myPlayer.solve += 1;
    myPlayer.health += 20;
    myPlayer.attack += 20;
    alert("correct answer ...\n Good job ... \n now back to the game ...");
    game_loop();
  } else {
    alert("I'm sorry, that was not correct \n... try yes next time ....");
    game_loop();
  }
} // end q2

function solve_puzzle3() {
  let puzzle3 = prompt(
    "Puzzle 3 here... last one ? true or false ... Is simple better than complex ?"
  );
  if (puzzle3 === null) {
    alert(
      "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
    );
    solve_puzzle2();
  } else if (
    puzzle3.toLowerCase() === "true" ||
    puzzle3.toLowerCase() === "t" ||
    puzzle3.toLowerCase() === "tru" ||
    puzzle3.toLowerCase() === "tre" ||
    puzzle3.toLowerCase() === "treu" ||
    puzzle3.toLowerCase() === "tro" ||
    puzzle3.toLowerCase() === "tr"
  ) {
    myPlayer.solve += 1;
    myPlayer.health += 160;
    myPlayer.attack += 11;
    bad.health += 49;
    alert("correct answer ...\n Good job ... \n now back to the game ...");
    game_loop();
  } else {
    alert("I'm sorry, that was not correct \n... try true next time ....");
    game_loop();
  }
} // end q3

// now the fight prompts
function player_fight() {
  alert("!!! FIGHT NIGHT ... FIGHT TIME ... the fight is on !!!");
  if (myPlayer.solve < 3) {
    alert(
      "You should solve the puzzles first...\n... or this fight is going to  be tough for you"
    );
    let lastChance = prompt(
      "... type run to leave ...\n or fight to proceed ...\n you've been warned ! ..."
    );
    if (lastChance === null) {
      alert(
        "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
      );
      player_fight();
    } else if (lastChance.toLowerCase() === "run") {
      alert("Those who turn and run away\n live to fight another day.");
      game_loop();
    } else if (lastChance.toLowerCase() === "fight") {
      alert("let the battle begin");
      player_attack();
    } else {
      alert("unknown command ... returning to main game loop");
      game_loop();
    }
  } else if (myPlayer.solve >= 3) {
    player_attack();
  }
}

// the battle prompts
function player_attack() {
  bad.health -= myPlayer.attack; // you hit the bad guy
  alert(
    " feel the wrath of " +
      myPlayer.name +
      "'s power ...  bad guy !!!\n ... Bang ... Pow ... Whoomp .... "
  );
  alert(
    " what a hit you landed the bad guy's health is down to " +
      bad.health +
      " points..."
  );
  if (bad.health < 0) {
    fight_win();
  } else {
    alert(" #!# OHH noooo the Bad Guy is taking a big swing at you !#!#!# ");
    myPlayer.health -= bad.attack; // bad guy hits back
    alert(
      " what a devastating shot " +
        myPlayer.name +
        " just took \n Your health is down to " +
        myPlayer.health +
        " points now"
    );
    if (myPlayer.health < 0) {
      fight_lose();
    } else {
      alert(
        "Do you want to continue the fight or walk away? \n enter your choice on the next prompt"
      );
      let decide = prompt(" ... fight or run ... ?");
      if (decide === null) {
        alert(
          "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
        );
        game_loop();
      } else if (decide.toLowerCase() === "fight") {
        player_attack();
      } else {
        game_loop();
      }
    }
  }
}

// win fight goes to win game
function fight_win() {
  alert("You won the fight good job");
  game_win();
}

// lose the fight === lose the game
function fight_lose() {
  alert(
    " ... you lost the fight and that means you lost the game \n .... try answering all the questions first next time"
  );
  game_lose();
}
// winner winner chicken dinner
function game_win() {
  alert(
    "CONGRATULATIONS " +
      myPlayer.name +
      " YOU WON \n Thanks for playing to the end of the Game!"
  );
  alert(
    " .... Remember .... \n ... S I M P L E > C O M P L E X ... \n Would you like to play again ? \n Enter yes or no in next prompt"
  );
  let play_again = prompt(
    "  play again ? \n all stats are reset if you keep your name or not\n enter yes to keep same name \n restart to start new game \n or exit to stop"
  );
  if (play_again === null) {
    alert(
      "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
    );
    myPlayer.solve = 0;
    myPlayer.health = 10;
    myPlayer.attack = 10;
    bad.health = 50;
    start_game();
  } else if (play_again.toLowerCase() === "yes") {
    myPlayer.solve = 0;
    myPlayer.health = 10;
    myPlayer.attack = 10;
    bad.health = 50;
    game_loop();
  } else if (play_again.toLowerCase() === " restart") {
    myPlayer.solve = 0;
    myPlayer.health = 10;
    myPlayer.attack = 10;
    bad.health = 50;
    start_game();
  } else if (play_again === null) {
    alert("Sorry you feel that way. Thanks for playing .... BYE BYE NOW");
  } else {
    alert("Thanks for playing .. The game will exit now .. BYE BYE THEN");
  }
}

// can lose the game
function game_lose() {
  alert("Oh NOOO YOU ARE DEAD " + myPlayer.name + "... Sorry you lost ");
  alert(
    " well there " +
      myPlayer.name +
      " you solved " +
      myPlayer.solve +
      " puzzles out of 3"
  );
  let play_again = prompt(
    "  play again ? \n all stats are reset if you keep your name or not\n enter yes to keep same name \n restart to start new game \n or exit to stop"
  );
  if (play_again === null) {
    alert(
      "you clicked cancel \n please enter an answer \n you can exit from the main game loop"
    );
    myPlayer.solve = 0;
    myPlayer.health = 10;
    myPlayer.attack = 10;
    bad.health = 50;
    start_game();
  } else if (play_again.toLowerCase() === "yes") {
    myPlayer.solve = 0;
    myPlayer.health = 10;
    myPlayer.attack = 10;
    bad.health = 50;
    game_loop();
  } else if (play_again.toLowerCase() === " restart") {
    myPlayer.solve = 0;
    myPlayer.health = 10;
    myPlayer.attack = 10;
    bad.health = 50;
    start_game();
  } else if (play_again === null) {
    alert("Sorry you feel that way. Thanks for playing .... BYE BYE NOW");
  } else {
    alert("Thanks for playing .. The game will exit now .. BYE BYE THEN");
  }
}

function player_info() {
  alert(
    " I " +
      myPlayer.name +
      " have " +
      myPlayer.health +
      " health points and I deal out " +
      myPlayer.attack +
      " hit points"
  );
  alert(
    " the bad guy has " +
      bad.health +
      " health points and \n if he hits you it will hurt  " +
      bad.attack +
      " hit points"
  );
  game_loop();
}

// the main game loop - puzzle, info fight or exit
function game_loop() {
  alert(
    "This is the main game loop here for player  ... " +
      myPlayer.name +
      " ...\n who is going to save the DAY!"
  );
  let action = prompt(
    " !!_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_!!\n What would you like to do ? \n options include: \n 1) info  2) puzzle  3) fight  4) quit\n info or 1 will tell you how many puzzles are complete\n and your stats and the bad guys stats currently\n 2 or puzzle will open the puzzles menu\n 3 or fight will open the fight menu\n 4 or quit will exit\n ... remember fight works best after answering all the questions to rank up ..."
  );
  if (action === null) {
    alert("you clicked cancel ... was it an accident?");
    game_loop();
  } else if (action.toLowerCase() === "1" || action.toLowerCase() === "info") {
    player_info();
  } else if (
    action.toLowerCase() === "2" ||
    action.toLowerCase() === "puzzle"
  ) {
    puzzle_prompt();
  } else if (action.toLowerCase() === "3" || action.toLowerCase() === "fight") {
    player_fight();
  } else if (
    action.toLowerCase() === "4" ||
    action.toLowerCase() === "quit" ||
    action.toLowerCase() === "exit" ||
    action.toLowerCase() === "stop" ||
    action === null
  ) {
    alert(myPlayer.name + " Thanks for playing. Hope you play again soon");
    alert("Thanks for playing .... BYE BYE NOW");
  } else {
    alert(
      "unknown command entered \n please choose one of the following\n 1 or info \n 2 or puzzle\n 3 or fight\n 4 or exit"
    );
    game_loop();
  }
}

function start_game() {
  alert(
    "Greetings and welcome to SIMPLE > COMPLEX \n a simple and basic game originally encoded in python \n adapted to Javascript prompts"
  );
  alert("I'm Brian the narrator for the game... What's you name stranger ?");
  let name = prompt("Enter your name below please ");
  if (name === null || name === "") {
    alert("Come on now don't be shy I know you have a name please enter it");
    start_game();
  } else {
    myPlayer.name = name;
    game_loop();
  }
}

function click() {
  console.log("object check");
}

document.getElementById("clickMe").onclick = start_game;

// {/* <input id='clickMe' type='button' value='clickme' onclick='start_game();' />; */} //
