import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../helpers/routes';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import Menu from '../../Components/Menu/Menu';
import AudioPlayerContainer from '../../Components/Player/AudioPlayerContainer';
import FullScreenButton from '../../Components/FullScreenButton/FullScreenButton';
import Burger from '../../Components/StyledComponents/Burger';
import BurgerSVG from '../../Components/BurgerSVG/BurgerSVG';
import HomePlayer from '../../Components/Player/Player';
import LogoMin from '../../Components/Logo/LogoMin';
import './global.css';
import { Link } from 'react-router-dom';
import Arrow from '../../Components/Arrow/Arrow';

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
        <Burger isActive={context.menuIsActive} onClick={context.toggleMenu}>
          <BurgerSVG />
        </Burger>

        {
          window.location.pathname !== "/g/select-your-era" ? 
            <Link style={{ 
              position: 'fixed',
              zIndex: '100', 
              left: 20,
              color: "#ffffff",
              fontSize: "15px",
              top: 40,
              textDecoration: "none",
              fontFamily: "Roboto"}} to="/g">


              <Arrow /> 
              Back to the episodes
              
            </Link>
          :
          null
        }
        
        <LogoMin/>

        <Menu {...match} />

        <Switch>
          {global.routes.map((sub, i) =>
            sub.redirect ? (
              <Redirect to={match.path + sub.to} key={i} />
            ) : (
              <Route
                key={i}
                path={match.path + sub.path}
                component={sub.component}
              />
            )
          )}
        </Switch>

        {/* audio logic */}
        <AudioPlayerContainer style={{ position: 'fixed', zIndex: '999' }} />
        {/* audio view  */}
        <HomePlayer />

        <FullScreenButton onClick={() => context.toggleFullscreen()} />
      </Fragment>
    );
  }
}

/*
 cette fonction retourne le composant "Global" 
 dans le Consumer du rootProvider, on peut l'utiliser
 pour exporter n'importe quel composant que l'on souhaite utiliser
 avec le context
*/
export default withConsumer(Global);
