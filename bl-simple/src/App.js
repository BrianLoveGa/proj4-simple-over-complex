import React from "react"; /// well its a react app
import { Route, Switch, Link, Redirect } from "react-router-dom"; /// to have all the pages happy clicky
import "./App.css"; /// b/c style points count
import Home from './componets/Home';
import Weather from './componets/Weather';
import Python from './componets/Python';
import HowTo from './componets/HowTo';
import JsConsole from './componets/JsConsole';
import JsPrompts from './componets/JsPrompts';

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
        <Link className="link" to="/weather">
          Weather
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
        <Link className="link" to="/jsconsole">
          Js Console
        </Link>

      </nav>
      <hr></hr>
      <main>
        <Switch>
          <div>
            <div className="appMain">
              <Route path="/" exact={true} component={Home} />{" "}
            </div>{" "}
            <Route path="/weather" exact={true} component={Weather} />{" "}
            <Route path="/python" exact={true} component={Python} />{" "}
            <Route path="/howto" exact={true} component={HowTo} />{" "}
            <Route path="/jsconsole" exact={true} component={JsConsole} />{" "}
            <Route path="/jsprompts" exact={true} component={JsPrompts} />{" "}
            <Redirect to="/" />
          </div>{" "}
        </Switch>{" "}
      </main>{" "}
    </div>
  );
}

export default App;
