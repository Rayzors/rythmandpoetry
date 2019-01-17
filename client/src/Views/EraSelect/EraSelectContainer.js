import React, { Component, Fragment } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import EraView from '../../Components/EraView/EraView';
import Wrapper from '../../Components/Wrapper/Wrapper';

class EraSelectContainer extends Component {
  state = {
    eras: [
      {
       name: "At the dawn of a new culture", 
       section_bgcolor: "#F8C918",
       section_color: ""
      },
      {
        name: "The rise of golden Era", 
        section_bgcolor: "#B21131",
        section_color: ""
      },
      {
        name: "The Mumble Rap",
        section_bgcolor: "#561222",
        section_color: ""
      }
    ],
  }
  render() {
    const {eras} = this.state;
    return (
      <Fragment>
        <Parallax>
          {eras.map((era, i) => (
            <EraView key={i} {...era}/>
          ))}
        </Parallax>
      </Fragment>
    )
  }
}

export default EraSelectContainer;