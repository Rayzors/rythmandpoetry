import React from 'react';
import { Link } from 'react-router-dom';
import withContext from '../../Higher-Order-Components/withConsumer'

const styles = {
  position: "fixed",
  zIndex: "900",
  backgroundColor: "#000000",
  height: window.innerHeight,
  width: window.innerWidth,
  display: "flex",
  flexDirection: "column",
  color: "#fff",
}

const Menu = ({path}) => {
  return (
    <div style={{...styles}}>
      <Link onClick={ () => this.props.context.toggleMenu() } to={`${path}/episodes/at-the-dawn-of-a-new-culture`}>At the dawn of a new Culture</Link>
      <Link onClick={ () => this.props.context.toggleMenu() } to={`${path}/episodes/the-rise-of-gangsta-rap`}>The rise of gangsta rap</Link>
      <Link onClick={ () => this.props.context.toggleMenu() } to={`${path}/episodes/new-generations`}>New generations</Link>
      <Link onClick={ () => this.props.context.toggleMenu() } to={`${path}/hall-of-fame`}>the Hall of Fame</Link>
    </div>
  )
}

export default withContext(Menu);
