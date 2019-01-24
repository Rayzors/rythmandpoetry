import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  routes from '../../helpers/routes';
import { Consumer } from '../../Contexts/RootProvider';
class Global extends Component {
  render() {
    const { match } = this.props;

    const global = routes.find(({ path }) => path === match.path);

    return (
      <Fragment>
        <Consumer>
          {
            context => {
              console.log(context)
              return(
                <button 
                  onClick={
                    () => context.toggleMenu()
                  }
                  style={{position :"absolute"}}>Menu</button>
              )
            }
          }
        </Consumer>
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
