import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  console.log(props)
  if(props.isActive){
    return (
      <div>
        le menu est laaa
      </div>
    )
  }
  return null
}

export default Menu;
