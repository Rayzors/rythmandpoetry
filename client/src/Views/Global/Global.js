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
import * as PIXI from 'pixi.js';
import * as filters from 'pixi-filters';

class Global extends Component {
  canvasConfig() {
    const app = new PIXI.Application({
      height: window.innerHeight,
      width: window.innerWidth,
      transparent: true,
      backgroundColor: 0x00ff00,
      autoResize: true
    });
    document.querySelector('.App').appendChild(app.view);

    const rect = new PIXI.Graphics()
      .beginFill(0x000000, 1)
      .drawRect(0, 0, window.innerWidth, window.innerHeight);

    rect.blendMode = PIXI.BLEND_MODES.OVERLAY;

    rect.filters = [
      new filters.OldFilmFilter({
        noise: 0.5,
        sepia: 0,
        scratch: 0,
        vignetting: 0
      })
    ];
    app.stage.addChild(rect);

    this.animate(app, rect);
  }

  animate(el, test) {
    requestAnimationFrame(() => this.animate(el, test));

    el.renderer.resize(window.innerWidth, window.innerHeight);

    test.filters[0].seed = Math.random();

    el.render(el.stage);
  }

  componentDidMount() {
    this.canvasConfig();
  }

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

        {window.location.pathname !== '/g/select-your-era' ? (
          <Link
            style={{
              position: 'fixed',
              zIndex: '100',
              left: 20,
              color: '#ffffff',
              fontSize: '15px',
              top: 40,
              textDecoration: 'none',
              fontFamily: 'Roboto'
            }}
            to="/g"
          >
            <Arrow />
            Back to the episodes
          </Link>
        ) : null}

        <LogoMin />

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
