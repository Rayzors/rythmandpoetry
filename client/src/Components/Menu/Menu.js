import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div>
      <Link to={"/g/at-the-dawn-of-a-new-culture"}>At the dawn of a new Culture</Link>
      <Link to={"/the-rise-of-gangsta-rap"}>The rise of gangsta rap</Link>
      <Link to={"/new-generations"}>New generations</Link>
      <Link to={"/hall-of-fame"}>the Hall of Fame</Link>
    </div>
  )
}

export default Menu;
