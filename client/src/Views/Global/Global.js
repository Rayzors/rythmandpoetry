import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  routes from '../../helpers/routes';

class Global extends Component {
  render() {
    const { match } = this.props;

    const global = routes.find(({ path }) => path === match.path);

    return (
      <Fragment>
        <button style={{position :"absolute"}}>Menu</button>

        <Switch>
          {
            global.routes.map( (sub, i) => (
              sub.redirect ? <Redirect to={ match.path + sub.to} key={i}/> : <Route key={i} {...sub} />
            ))
          }
        </Switch>
      </Fragment>
    )
  }
}

export default Global;
