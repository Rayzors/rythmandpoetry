import React, { Component, Fragment } from 'react';
import routes from './helpers/routes';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            {routes.map( (route, i) => (
              route.redirect ? <Redirect key={i} to={route.to} /> : <Route key={i} {...route}/>
            ))}
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;