import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  routes from '../../helpers/routes';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Menu from '../../Components/Menu/Menu';
import AudioPlayerContainer from '../../Components/Player/AudioPlayerContainer';

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
        <AudioPlayerContainer />
      </Fragment>
    )
  }
}

/*
 cette fonction retourne le composant "Global" 
 dans le Consumer du rootProvider, on peut l'utiliser
 pour exporter n'importe quel composant que l'on souhaite utiliser
 avec le context
*/
export default withConsumer(Global);