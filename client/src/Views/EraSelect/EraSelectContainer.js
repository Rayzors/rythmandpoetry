import React, { Component, Fragment } from 'react';
import EraView from '../../Components/EraView/EraView';
import './EraSelect.css'
import { Parallax } from 'react-spring/addons';
import { Spring } from 'react-spring'
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
    current: 0,
    from: 0, 
    to: 0
  }
  constructor() {
    super()
    this.isScrolling = false
  }

  scroll = (e, current) => {
    e.preventDefault()
    e.persist()
    const scrollDirection = e.deltaY > 0 ? -1 : 1
    if(scrollDirection === -1 && current === 1) return
    if( ((e.deltaY >= 20) || (e.deltaY <= -20)) && !this.isScrolling ) {
      this.isScrolling = !this.isScrolling
      const from = current - 1
      const to =  (current + scrollDirection) - 1 
      if(to < 0) return
      console.log({from, to})
      this.setState(() => ({
        from, 
        to
      }), () => {
        console.log('callback')
        if(e.deltaY > 0) {
          // scroll up
          this.setBgColorByAniamtion(current, -1)
          throttle(this.parallax.scrollTo(current - 2), 400)
          setTimeout(() => this.isScrolling = !this.isScrolling, 1000)
        } else if(e.deltaY < 0){
          this.setBgColorByAniamtion(current, 1)
          // scroll down
          throttle(this.parallax.scrollTo(current), 400)
          setTimeout(() => this.isScrolling = !this.isScrolling, 1000)
        }
      })
    }
  }

  setBgColorByAniamtion(currentItem, scrollDirection) {
    // console.log(currentItem, scrollDirection)
  }

  render() {
    const {eras, from, to} = this.state;
    return (
      <Fragment>
        <Spring
        from={{ bgcolor: this.state.eras[from].section_bgcolor }}
        to={{ bgcolor: this.state.eras[to].section_bgcolor }}
       >
       {springProps => (
          <Parallax className='EraSelectContainer' ref={ref => this.parallax = ref} style={{backgroundColor: springProps.bgcolor}} pages={eras.length} horizontal scrolling={false}>
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

       )}
        </Spring>
      </Fragment>
    )
  }
}

export default EraSelectContainer;