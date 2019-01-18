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
       name: "At the dawn <br/>of a new culture", 
       section_subtitle: "The begenning of rap and hip-hop. (70s)",
       section_bgcolor: "#F8C918",
       section_color: "",
       section_bgimage: "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2690&q=80"
      },
      {
        name: "The rise of <br/>golden Era",
        section_subtitle: "The birth of Gangsta rap",
        section_bgcolor: "#B21131",
        section_color: "",
        section_bgimage: "https://images.unsplash.com/photo-1529666759085-741eefcd3371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2125&q=80"
      },
      {
        name: "The Mumble <br/>Rap",
        section_subtitle: "",
        section_bgcolor: "#561222",
        section_color: "",
        section_bgimage: "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80"
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

  handleWheel = (e, current) => {
    e.preventDefault()
    e.persist()
    const scrollDirection = e.deltaY > 0 ? -1 : 1
    if((scrollDirection === -1 && current === 1) || (current === this.state.eras.length && scrollDirection === 1) ) {
      // scrolling to the previous in the first page or scrolling to the next in the last page
      return false
    }
    if( ((e.deltaY >= 20) || (e.deltaY <= -20)) && !this.isScrolling ) {
      this.isScrolling = !this.isScrolling
      const from = current - 1
      const to =  (current + scrollDirection) - 1 
      console.log({from, to})
      this.setState(() => ({
        from, 
        to
      }), () => {
        // callback
        if(e.deltaY > 0) {
          // scroll up
          this.parallax.scrollTo(current - 2)
          setTimeout(() => this.isScrolling = !this.isScrolling, 1000)
        } else if(e.deltaY < 0){
          // scroll down
          this.parallax.scrollTo(current)
          setTimeout(() => this.isScrolling = !this.isScrolling, 1000)
        }
      })
    }
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
              handleWheel={this.handleWheel}
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