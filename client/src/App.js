import React, { Component, Fragment } from 'react';
import routes from './helpers/routes';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          {routes.map( (route, i) => (
            route.redirect ? <Redirect key={i} to={route.to} /> : <Route key={i} {...route}/>
          ))}
        </Fragment>
      </Router>
    );
  }
}

export default App;