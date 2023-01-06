import { StrictMode } from "react";
import ReactDOM from "react-dom"
import {Route, Switch, Link,BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <div>
     <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
      </ul> 
       
      <br />
  <StrictMode>
    <div>
    <Switch>
    <Route exact path="/"><App/></Route>
    <Route  path="/home"><Home/></Route>
    <Route  path="/about"><About/></Route>
      </Switch>
      </div>
</StrictMode>
</div>
</Router>

,
  rootElement
);



