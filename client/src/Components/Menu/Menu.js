import React from 'react';
import { Link } from 'react-router-dom';
import withConsumer from '../../Higher-Order-Components/withConsumer'
import { Transition, Trail } from 'react-spring';

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

const Menu = ({path, context}) => {
  return (
    <Transition>
      <div style={{...styles}}>
        <Link onClick={ context.toggleMenu } to={`${path}/episodes/1`}>At the dawn of a new Culture</Link>
        <Link onClick={ context.toggleMenu } to={`${path}/episodes/2`}>The rise of gangsta rap</Link>
        <Link onClick={ context.toggleMenu } to={`${path}/episodes/3`}>New generations</Link>
        <Link onClick={ context.toggleMenu } to={`${path}/hall-of-fame`}>the Hall of Fame</Link>
      </div>
    </Transition>
  )
}

export default withConsumer(Menu);
