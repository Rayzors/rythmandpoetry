import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  routes from '../../helpers/routes';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Menu from '../../Components/Menu/Menu';

class Global extends Component {
  render() {
    const { match } = this.props;

    const global = routes.find(({ path }) => path === match.path);
    console.log(this.props)
    return (
      <Fragment>
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

export default withConsumer(Global);

//? a garder si le hoc marche pas
/*


        <Consumer>
          {
            context => {
              console.log(context.menuIsActives)
              return(
                <Fragment>
                  <Menu isActive={context.state.menuIsActive}/>
                  <button 
                    onClick={
                      () => context.toggleMenu()
                    }
                    style={{position :"absolute"}}>Menu</button>
                </Fragment>
              )
            }
          }
        </Consumer>

*/