# important steps for react routing 
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

# redirect to other , 

  https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

  1. useNavigare hook
  2. useHistory

1.  react-router > V6 useNavigate hook:
If you have React >= 16.8 and functional components you can use the useNavigate hook from react-router.

import React from 'react';
import { useNavigate } from "react-router-dom";

const YourComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/path/to/push");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}

export default YourComponent;
2. react-router > V5 useHistory hook:
If you have react-router v5 and functional components you can use the useHistory hook from react-router.

import React from 'react';
import { useHistory } from 'react-router-dom';

const YourComponent = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/path/to/push");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}

export default YourComponent;
3. react-router > V4 withRouter HOC:
As @ambar mentioned in the comments, React-router has changed its codebase since its V4. Here is the documentation for withRouter

import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class YourComponent extends Component {
    handleClick = () => {
        this.props.history.push("path/to/push");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} type="button">
            </div>
        );
    };
}

export default withRouter(YourComponent);
4. React-router < V4 with browserHistory
You can achieve this functionality using react-router BrowserHistory. Code below:

import React, { Component } from 'react';
import { browserHistory } from 'react-router-dom';

export default class YourComponent extends Component {
    handleClick = () => {
        browserHistory.push('/login');
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick} type="button">
            </div>
        );
    };
}
5) Redu

