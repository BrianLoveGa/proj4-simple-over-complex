import React from "react"; /// well its a react app
import { Route, Switch, Link, Redirect } from "react-router-dom"; /// to have all the pages happy clicky
import "./App.css"; /// b/c style points count

/// lets have some components since ... thats what it's all about !

import CodeAlong from "./componets/CodeAlong";
import Dog from "./componets/Dog";
import Home from "./componets/Home";
import HowTo from "./componets/HowTo";
import JsPrompts from "./componets/JsPrompts";
import PromptCode from "./componets/PromptCode";
import Python from "./componets/Python";
import PythonBasic from "./componets/PythonBasic";
import PythonCodeAlong from "./componets/PythonCodeAlong";
import ReactGame from "./componets/ReactGame";
import ReactGameCode from "./componets/ReactGameCode";
import Weather from "./componets/Weather";
import Zen from "./componets/zen";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Simple > Complex</h1>
      </header>
      <nav>
        <Link className="link" to="/">
          Home
        </Link>

        <Link className="link" to="/python">
          Python
        </Link>
        <Link className="link" to="/howto">
          How To
        </Link>
        <Link className="link" to="/jsprompts">
          Js Prompts
        </Link>
        <Link className="link" to="/reactgame">
          React Game
        </Link>
        <Link className="link" to="/weather">
          Weather
        </Link>
        <Link className="link" to="/dog">
          Dogs
        </Link>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact={true} component={Home} />{" "}
          <Route path="/weather" exact={true} component={Weather} />{" "}
          <Route path="/python" exact={true} component={Python} />{" "}
          <Route path="/howto" exact={true} component={HowTo} />{" "}
          <Route path="/reactgame" exact={true} component={ReactGame} />{" "}
          <Route path="/jsprompts" exact={true} component={JsPrompts} />{" "}
          <Route path="/dog" exact={true} component={Dog} />{" "}
          <Route path="/zen" exact={true} component={Zen} />{" "}
          <Route path="/python/codealong" exact={true} component={CodeAlong} />{" "}
          <Route path="/python/basic" exact={true} component={PythonBasic} />{" "}
          <Route
            path="/python/along"
            exact={true}
            component={PythonCodeAlong}
          />{" "}
          <Route
            path="/reactgame/code"
            exact={true}
            component={ReactGameCode}
          />{" "}
          <Route path="/jsprompts/code" exact={true} component={PromptCode} />{" "}
          <Redirect to="/" />
        </Switch>{" "}
      </main>{" "}
      <hr></hr>
      <footer>
        <div className="responsive">
        <h4>
          Made with love by{" "}
          
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="foot"
              href="https://www.brianloveless.com"
            >
              {" "}
              Brian Loveless{" "}
            </a>
          
        </h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
