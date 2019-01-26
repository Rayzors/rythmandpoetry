import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  routes from '../../helpers/routes';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Menu from '../../Components/Menu/Menu';

class Global extends Component {
  render() {
    const { match, context } = this.props;

    const global = routes.find(({ path }) => path === match.path);

    return (
      <Fragment>
        <button onClick={() => context.toggleMenu()}>Menu</button>
        {
          context.menuIsActive ?
          <Menu />
          : null
        }
        <Switch>
        {
          global.routes.map( (sub, i) => (
            sub.redirect ? <Redirect to={ match.path + sub.to} key={i}/> : <Route exact key={i} path={match.path + sub.path} {...sub} />
          ))
        }
        </Switch>
      </Fragment>
    )
  }
}
//
export default withConsumer(Global);