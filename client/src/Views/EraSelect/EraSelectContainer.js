import React, { Component, Fragment } from 'react';
import EraView from '../../Components/EraView/EraView';
import './EraSelect.css'
import { Parallax } from 'react-spring/addons';
import { throttle } from '../../helpers/utils'

class EraSelectContainer extends Component {
  state = {
    eras: [
      {
       name: "At the dawn <br/>of a new <br/>culture", 
       section_subtitle: "The begenning of rap and hip-hop. (70s)",
       section_bgcolor: "#F8C918",
       section_color: ""
      },
      {
        name: "The rise of <br/>golden Era",
        section_subtitle: "The birth of Gangsta rap",
        section_bgcolor: "#B21131",
        section_color: ""
      },
      {
        name: "The Mumble <br/>Rap",
        section_subtitle: "",
        section_bgcolor: "#561222",
        section_color: ""
      }
    ],
    current: 0
  }

  scroll = (e, current) => {
    e.preventDefault()
    console.log(current)
    // this.setState({ current: (current + 1 <= this.state.eras.length ? current : 0) })
    if((e.deltaY >= 20) || (e.deltaY <= -20) ) {
      if(e.deltaY > 0) {
        console.log('scroll up')
        throttle(this.parallax.scrollTo(current-1), 400)
      } else {
        console.log('scroll down')
        if(current === this.state.eras.length) return
        throttle(this.parallax.scrollTo(current+1), 400)
      }
    }
  }

  render() {
    const {eras} = this.state;
    return (
      <Parallax className='EraSelectContainer' ref={ref => this.parallax = ref} style={{backgroundColor: "teal"}} pages={eras.length} horizontal scrolling={false}>
        {eras.map((era, i) => (
          <EraView 
            {...era}
            key={i} 
            swipe={this.scroll}
            length={eras.length} 
            current={i+1}
          />
        ))}
      </Parallax>
    )
  }
}

export default EraSelectContainer;