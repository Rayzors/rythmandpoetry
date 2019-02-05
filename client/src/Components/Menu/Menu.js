import React from 'react';
import { Link } from 'react-router-dom';
import withConsumer from '../../Higher-Order-Components/withConsumer'

const styles = {
  position: 'fixed',
  zIndex: '900',
  backgroundColor: '#000000',
  height: window.innerHeight,
  width: window.innerWidth,
  display: 'flex',
  flexDirection: 'column',
  color: '#fff'
};

const Menu = ({ path, context }) => {
  return (
    <div style={{ ...styles }}>
      {context.state.eras.map((era, index) => (
        <Link
          key={index}
          onClick={context.toggleMenu}
          to={`${path}/episodes/${era.section_slug}/${era.section_id}`}
        >
          {era.section_title}
        </Link>
      ))}
    </div>
  );
};

export default withConsumer(Menu);
