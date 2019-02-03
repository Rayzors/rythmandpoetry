import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import  routes from '../../helpers/routes';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Menu from '../../Components/Menu/Menu';
import AudioPlayerContainer from '../../Components/Player/AudioPlayerContainer';
import FullScreenButton from '../../Components/FullScreenButton/FullScreenButton';
import './global.css';

class Global extends Component {
  render() {
    const { match, context } = this.props;

     /**
     * après avoir récupéré la route courante ( props.match.path ) dans /helpers/routes.js, 
     * on récupère les sous-routes correspondantes et on les affiche
     */
    const global = routes.find(({ path }) => path === match.path);

    return (
      <Fragment>
        <button style={{position: "fixed", zIndex: "999"}} onClick={() => context.toggleMenu()}>Menu</button>
        {
          context.menuIsActive ?
          <Menu {...match}/>
          : null
        }
        <Switch>
        {
          global.routes.map( (sub, i) => (
              sub.redirect ? 
                <Redirect to={ match.path + sub.to} key={i}/> 
                : 
                <Route key={i} path={match.path + sub.path} component={sub.component} />
            )
          )
        }
        </Switch>
        
        <AudioPlayerContainer style={{position: "fixed", zIndex: "999"}}/>
           

        <FullScreenButton onClick={() => context.toggleFullscreen()}>
            FS
        </FullScreenButton>

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