import React, {Component, Fragment} from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import {Link} from 'react-router-dom';
import rapApi from '../../helpers/api'
class EraContent extends Component {
  state = {}
  async componentDidMount() {
    // ca viendra de l'api et ca changera en fonction de l'id de l'aire
    const tracklist = await rapApi.getMusicsByEra(1) // 1 is the era id
    this.props.context.setTrackList( tracklist )
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