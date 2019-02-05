import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../helpers/routes';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Menu from '../../Components/Menu/Menu';
import AudioPlayerContainer from '../../Components/Player/AudioPlayerContainer';
import FullScreenButton from '../../Components/FullScreenButton/FullScreenButton';
import Burger from '../../Components/StyledComponents /Burger';
import HomePlayer from '../../Components/Player/Player'

import './global.css';
import {Link} from 'react-router-dom';

class Global extends Component {
  render() {
    const { match, context } = this.props;

     /*
      après avoir récupéré la route courante ( props.match.path ) dans /helpers/routes.js, 
      on récupère les sous-routes correspondantes et on les affiche
     */
    const global = routes.find(({ path }) => path === match.path);

    return (

      <Fragment>
        <Burger 
          isActive={ context.menuIsActive }
          onClick={ context.toggleMenu }>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
        <Link 
        style={{position: "fixed", zIndex: "999", left: 20 }}
        to="/g">Back</Link>
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

        {/* audio logic */}
        <AudioPlayerContainer style={{position: "fixed", zIndex: "999"}}/>
        {/* audio view  */}
        <HomePlayer /> 

        <FullScreenButton onClick={() => context.toggleFullscreen()} />
          
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
