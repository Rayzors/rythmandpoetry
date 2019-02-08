import React from 'react';
import { Transition, animated } from 'react-spring';

class EraIntroduction extends React.Component {
  state = {
    count: 1,
    showAt: null,
    show: false
  }

  componentDidMount(){
    let showAt = setInterval(this.timer, 500);

    this.setState({showAt: showAt});
  }

  componentWillUnmount(){
    clearInterval(this.state.showAt);
  }

  timer = () => {

    this.setState({count: this.state.count - 1})

    if(this.state.count === 0){

      this.setState({show: true})

      clearInterval(this.state.showAt);

    }

  }

  render(){

    const {show} = this.state;

    return(
      <div data-aos="fade-up">
        {this.props.children}
      </div>
    )
    
  }
}

export default EraIntroduction;