import { Consumer } from '../Contexts/RootProvider';
import React from 'react';

const withConsumer = Component => props => {
  return(
    <Consumer>
    {
      context =>  <Component context={context} {...props}/>
    }
    </Consumer>
  )
}
  

export default withConsumer;