import React, {Component, Fragment} from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import {Link} from 'react-router-dom';

class EraContent extends Component {
  state = {}
  render(){
    return(
      <div>
        <br/>
        <Link to={'/g'}>Back</Link>
        <p>{this.props.match.params.eraName}</p>
      </div>
    )
  }
}

export default withConsumer(EraContent);