import React from 'react';
import { Transition, animated } from 'react-spring';

const withFadeInOut = Component => props => {
  return(
    <Transition
    items={show}
    from={{opacity: 0}}
    enter={{opacity: 1}}
    leave={{opacity: 0}}>
      {show =>
        show && (props => 
        <animated.div style={props}>

          <Component {...props}/>

        </animated.div>
        )
      }
    </Transition>
  )
}

export default withFadeInOut;

