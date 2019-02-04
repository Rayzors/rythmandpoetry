import React, { Component, Fragment } from 'react';
import withConsumer from '../../Higher-Order-Components/withConsumer';
import { Link } from 'react-router-dom';
import rapApi from '../../helpers/api';
class EraContent extends Component {
  state = {
    era: null
  };
  async componentDidMount() {
    // ca viendra de l'api et ca changera en fonction de l'id de l'aire
    const tracklist = await rapApi.getMusicsByEra(1); // 1 is the era id
    this.props.context.setTrackList(tracklist);

    const eraContent = await rapApi.getContentByEra(this.props.match.params.id);
    this.setState({ era: eraContent });
  }
  render() {
    console.log(this.props.match.params.eraName);

    return (
      this.state.era && (
        <div>
          <br />
          <Link to={'/g'}>Back</Link>
          <p>
            {this.props.match.params.eraName}/{this.props.match.params.id}
          </p>
        </div>
      )
    );
  }
}

export default withConsumer(EraContent);
