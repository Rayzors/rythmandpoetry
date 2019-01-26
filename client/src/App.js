import React, { Component, Fragment } from 'react';
import routes from './helpers/routes';
import 'typeface-montserrat';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './assets/scss/styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {routes.map((route, i) =>
              route.redirect ? (
                <Redirect key={i} to={route.to} />
              ) : (
                <Route key={i} {...route} />
              )
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
