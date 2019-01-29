import React, {Component, Fragment} from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import {Link} from 'react-router-dom';

class EraContent extends Component {
  state = {}
  componentDidMount() {
    // ca viendra de l'api et ca changera en fonction de l'id de l'aire
    this.props.context.setState({ currentMusic: 'https://artlistmusic.azureedge.net/artlist-mp3/13285_05_-_They_Are_Comming_-_Master_(16-44.1).mp3' })
  }
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