import React, { Component, Fragment } from 'react';
import EraView from '../../Components/EraView/EraView';
import './EraSelect.css'
import { Parallax } from 'react-spring/addons';

class EraSelectContainer extends Component {
  state = {
    eras: [
      {
       name: "At the dawn of a new culture", 
       section_subtitle: "The begenning of rap and hip-hop. (70s)",
       section_bgcolor: "#F8C918",
       section_color: ""
      },
      {
        name: "The rise of golden Era",
        section_subtitle: "The birth of Gangsta rap",
        section_bgcolor: "#B21131",
        section_color: ""
      },
      {
        name: "The Mumble Rap",
        section_subtitle: "",
        section_bgcolor: "#561222",
        section_color: ""
      }
    ],
  }

  scroll = (to) => this.refs.parallax.scrollTo(to)

  render() {
    const {eras} = this.state;
    return (
      <Parallax className='EraSelectContainer' style={{backgroundColor: "teal"}} pages={eras.length} horizontal scrolling={false}>
        {eras.map((era, i) => (
          <EraView 
            {...era}
            key={i} 
            onClick={() => this.scroll(i+1)}
            length={eras.length} 
            current={i+1}/>
        ))}
      </Parallax>
    )
  }
}

export default EraSelectContainer;